import type { APIRoute } from 'astro';
import { site } from '../../siteConfig';

// On-demand endpoint (not prerendered) so the graph reflects recent activity.
export const prerender = false;

const WEEKS = 18; // columns shown in the sidebar grid

const level = (c: number) => (c <= 0 ? 0 : c <= 2 ? 1 : c <= 5 ? 2 : c <= 9 ? 3 : 4);

export const GET: APIRoute = async () => {
  const token = import.meta.env.GITHUB_TOKEN || process.env.GITHUB_TOKEN;
  const headers = { 'content-type': 'application/json', 'cache-control': 'public, max-age=3600' };

  if (!token) {
    return new Response(JSON.stringify({ ok: false, reason: 'no-token' }), { status: 200, headers });
  }

  const query = `query($login:String!){
    user(login:$login){ contributionsCollection{ contributionCalendar{
      totalContributions
      weeks{ contributionDays{ contributionCount weekday } }
    }}}
  }`;

  try {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'content-type': 'application/json' },
      body: JSON.stringify({ query, variables: { login: site.githubUser } }),
    });
    if (!res.ok) throw new Error(`GitHub ${res.status}`);
    const json = await res.json();
    const cal = json?.data?.user?.contributionsCollection?.contributionCalendar;
    if (!cal) throw new Error('no calendar');

    const weeks: { contributionCount: number; weekday: number }[][] = cal.weeks;
    const lastWeeks = weeks.slice(-WEEKS);

    // Row-major 7×WEEKS grid: index = weekday * WEEKS + weekColumn
    const grid: number[] = new Array(7 * WEEKS).fill(0);
    lastWeeks.forEach((week, col) => {
      week.contributionDays.forEach((day) => {
        grid[day.weekday * WEEKS + col] = level(day.contributionCount);
      });
    });

    return new Response(
      JSON.stringify({ ok: true, total: cal.totalContributions, grid, weeks: WEEKS }),
      { status: 200, headers }
    );
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, reason: String(e) }), { status: 200, headers });
  }
};
