// Client-side hydration for the live widgets (sidebar + dashboard share this).
// Fills any matching data-hooks present on the page; safe to call once per page.

const WX: Record<number, string> = {
  0: 'Clear', 1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast',
  45: 'Fog', 48: 'Fog', 51: 'Drizzle', 53: 'Drizzle', 55: 'Drizzle',
  61: 'Rain', 63: 'Rain', 65: 'Heavy rain', 80: 'Showers', 81: 'Showers',
  82: 'Heavy showers', 95: 'Thunderstorm', 96: 'Thunderstorm', 99: 'Thunderstorm',
};

export function initLiveWidgets(): void {
  const fmt = new Intl.NumberFormat();

  // --- Local clock: Sorong = WIT = UTC+9 ---
  const clocks = document.querySelectorAll('[data-clock]');
  if (clocks.length) {
    const tick = () => {
      const now = new Date();
      const wit = new Date(now.getTime() + now.getTimezoneOffset() * 60000 + 9 * 3600000);
      const hh = String(wit.getHours()).padStart(2, '0');
      const mm = String(wit.getMinutes()).padStart(2, '0');
      clocks.forEach((c) => (c.textContent = `${hh}:${mm}`));
    };
    tick();
    setInterval(tick, 15000);
  }

  // --- Spotify now-playing ---
  const spWidget = document.querySelector('[data-sp-nowplaying]');
  if (spWidget) {
    const paint = () =>
      fetch('/api/spotify.json')
        .then((r) => r.json())
        .then((d) => {
          if (!d || (!d.playing && !d.recent)) return;
          const card = spWidget.querySelector('[data-sp-card]') as HTMLAnchorElement | null;
          const idle = spWidget.querySelector('[data-sp-idle]') as HTMLElement | null;
          const label = spWidget.querySelector('[data-sp-label]');
          const cover = spWidget.querySelector('[data-sp-cover]') as HTMLElement | null;
          const title = spWidget.querySelector('[data-sp-title]');
          const artist = spWidget.querySelector('[data-sp-artist]');
          if (!card) return;
          if (title) title.textContent = d.title ?? '';
          if (artist) artist.textContent = d.artist ?? '';
          if (d.url) card.href = d.url;
          if (cover && d.image) {
            cover.style.backgroundImage = `url("${d.image}")`;
            cover.classList.add('has-art');
          }
          const eq = spWidget.querySelector('[data-sp-eq]') as HTMLElement | null;
          if (label)
            label.textContent = d.playing
              ? spWidget.getAttribute('data-sp-nowplaying')
              : spWidget.getAttribute('data-sp-recent');
          if (eq) eq.hidden = !d.playing;
          card.hidden = false;
          if (idle) idle.hidden = true;
        })
        .catch(() => {});
    paint();
    setInterval(paint, 45000);
  }

  // --- GitHub contributions (interactive: click a day for its count) ---
  const gridEl = document.querySelector('[data-gh-grid]');
  if (gridEl || document.querySelector('[data-gh-total]')) {
    fetch('/api/github.json')
      .then((r) => r.json())
      .then((d) => {
        if (!d || !d.ok) return;
        const total = document.querySelector('[data-gh-total]');
        if (total) total.textContent = fmt.format(d.total);
        if (!gridEl || !Array.isArray(d.grid)) return;

        const cells = gridEl.querySelectorAll('i');
        d.grid.forEach((cell: { l: number; c: number; d: string }, i: number) => {
          const el = cells[i] as HTMLElement | undefined;
          if (!el) return;
          el.setAttribute('data-l', String(cell.l));
          if (cell.d) {
            el.dataset.count = String(cell.c);
            el.dataset.date = cell.d;
            el.setAttribute('tabindex', '0');
            el.setAttribute('role', 'gridcell');
          }
        });

        const detail = document.querySelector('[data-gh-detail]') as HTMLElement | null;
        const detailText = document.querySelector('[data-gh-detail-text]');
        const word = detail?.getAttribute('data-gh-word') || 'contributions';
        const loc = document.documentElement.lang || 'en';
        const dateFmt = new Intl.DateTimeFormat(loc, { weekday: 'short', day: 'numeric', month: 'short' });

        const select = (el: HTMLElement) => {
          if (!el.dataset.date) return;
          gridEl.querySelectorAll('i.sel').forEach((x) => x.classList.remove('sel'));
          el.classList.add('sel');
          const n = Number(el.dataset.count || 0);
          if (detailText) detailText.textContent = `${dateFmt.format(new Date(el.dataset.date))} · ${fmt.format(n)} ${word}`;
          if (detail) detail.hidden = false;
        };
        const clear = () => {
          gridEl.querySelectorAll('i.sel').forEach((x) => x.classList.remove('sel'));
          if (detail) detail.hidden = true;
        };

        gridEl.addEventListener('click', (e) => {
          const el = (e.target as HTMLElement).closest('i') as HTMLElement | null;
          if (el) select(el);
        });
        gridEl.addEventListener('keydown', (e) => {
          const ke = e as KeyboardEvent;
          if (ke.key !== 'Enter' && ke.key !== ' ') return;
          const el = (ke.target as HTMLElement).closest('i') as HTMLElement | null;
          if (el) {
            ke.preventDefault();
            select(el);
          }
        });
        document.querySelector('[data-gh-overview]')?.addEventListener('click', clear);
      })
      .catch(() => {});
  }

  // --- Analytics (Umami; falls back to share link on the free plan) ---
  if (document.querySelector('[data-stat-views],[data-stat-visitors]')) {
    fetch('/api/stats.json')
      .then((r) => r.json())
      .then((d) => {
        if (d && d.ok) {
          const v = document.querySelector('[data-stat-views]');
          const u = document.querySelector('[data-stat-visitors]');
          if (v) v.textContent = fmt.format(d.views);
          if (u) u.textContent = fmt.format(d.visitors);
          return;
        }
        // No stats API → show the public share dashboard link if configured.
        const link = document.querySelector('[data-stat-link]') as HTMLElement | null;
        const nums = document.querySelector('[data-stat-nums]') as HTMLElement | null;
        if (link) {
          link.hidden = false;
          if (nums) nums.hidden = true;
        }
      })
      .catch(() => {});
  }

  // --- Weather (Open-Meteo, keyless) for Sorong ---
  if (document.querySelector('[data-wx-temp],[data-wx-cond]')) {
    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=-0.8762&longitude=131.2558&current=temperature_2m,weather_code&timezone=Asia/Jayapura'
    )
      .then((r) => r.json())
      .then((d) => {
        const c = d && d.current;
        if (!c) return;
        const temp = document.querySelector('[data-wx-temp]');
        const cond = document.querySelector('[data-wx-cond]');
        if (temp) temp.textContent = `${Math.round(c.temperature_2m)}°`;
        if (cond) cond.textContent = WX[c.weather_code] ?? '—';
      })
      .catch(() => {
        const cond = document.querySelector('[data-wx-cond]');
        if (cond) cond.textContent = '—';
      });
  }
}
