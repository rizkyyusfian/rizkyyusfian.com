/** Central, hand-edited site data. Live data (Spotify, analytics) arrives in Phase 2. */

export const site = {
  name: 'Muhammad Rizky Yusfian Yusuf',
  handle: 'rizkyyusfian',
  shortName: 'Rizky',
  initials: 'MRYY',
  url: 'https://www.rizkyyusfian.tech',
  /** Default social-share image (1200×630), served from /public. */
  ogImage: '/og.png',
  location: 'Sorong, Indonesia',
  timezone: 'Asia/Jayapura', // WIT (UTC+9)
  timezoneLabel: 'Sorong · WIT',
  email: 'rizky.yusfian16@gmail.com',
  githubUser: 'rizkyyusfian',
} as const;

// Primary socials, in display order. Fill the TODO hrefs with your real handles.
export const socials = [
  { label: 'GitHub', handle: '@rizkyyusfian', href: 'https://github.com/rizkyyusfian', icon: 'simple-icons:github' },
  { label: 'LinkedIn', handle: 'Muhammad Rizky Yusfian', href: 'https://www.linkedin.com/in/rizkyyusfian', icon: 'simple-icons:linkedin' },
  { label: 'X', handle: '@rizkyyusfian', href: 'https://x.com/xxmryyx', icon: 'simple-icons:x' },
  { label: 'Instagram', handle: '@rizkyyusfian', href: 'https://instagram.com/xxmryyx', icon: 'simple-icons:instagram' },
  { label: 'Email', handle: 'rizky.yusfian16@gmail.com', href: 'mailto:rizky.yusfian16@gmail.com', icon: 'lucide:mail' },
] as const;

// Gaming / chat — shown separately from the primary socials.
export const gaming = [
  { label: 'Steam', handle: 'rizkyyusfian', href: 'https://steamcommunity.com/id/rizkyyusfian', icon: 'simple-icons:steam' },
  { label: 'Discord', handle: 'xxmryyx', href: '#', icon: 'simple-icons:discord' },
] as const;

/** The GitHub repo (used for the footer commit link + version dropdown). */
export const repo = {
  url: 'https://github.com/rizkyyusfian/rizkyyusfian.com',
  branch: 'main',
} as const;

/**
 * Older versions of the site, for the footer version switcher.
 * `href` is a live-deploy URL when available; null renders the entry as
 * non-navigable (visual only) until a URL exists.
 */
export const versions = [
  { label: 'v2 · astro', current: true, href: null as string | null },
  { label: 'v1 · next.js', current: false, href: 'https://www.v1.rizkyyusfian.tech/' as string | null },
] as const;

/**
 * The single hand-edited "now" widget — merged status + media.
 * Update whenever life changes.
 */
export const now = {
  building: 'Refactoring this site in Astro',
  reading: 'The Poppy War by R. F. Kuang',
  watching: 'Lord of the Rings: The Rings of Power',
  playing: 'Personal 5 Royal',
} as const;
