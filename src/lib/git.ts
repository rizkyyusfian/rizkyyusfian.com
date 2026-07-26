import { execSync } from 'node:child_process';
import { repo } from '../siteConfig';

/** Resolved once at build time. Prefers Vercel's env vars, falls back to local git. */
function tryGit(cmd: string): string | null {
  try {
    return execSync(cmd, { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
  } catch {
    return null;
  }
}

const sha = process.env.VERCEL_GIT_COMMIT_SHA || tryGit('git rev-parse HEAD') || '';
const message =
  process.env.VERCEL_GIT_COMMIT_MESSAGE || tryGit('git log -1 --pretty=%s') || '';
const branch =
  process.env.VERCEL_GIT_COMMIT_REF || tryGit('git rev-parse --abbrev-ref HEAD') || repo.branch;

// Human relative date, e.g. "4 days ago". Git gives it directly via %cr.
function relativeFromIso(iso: string): string {
  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return '';
  const s = Math.max(0, Math.floor((Date.now() - then) / 1000));
  const units: [number, string][] = [
    [60, 'second'], [60, 'minute'], [24, 'hour'], [7, 'day'], [4.345, 'week'], [12, 'month'], [Infinity, 'year'],
  ];
  let val = s;
  let unit = 'second';
  for (const [size, name] of units) {
    if (val < size) { unit = name; break; }
    val = Math.floor(val / size);
    unit = name;
  }
  return `${val} ${unit}${val === 1 ? '' : 's'} ago`;
}
const relative =
  tryGit('git log -1 --pretty=%cr') ||
  (process.env.VERCEL_GIT_COMMIT_AUTHOR_DATE ? relativeFromIso(process.env.VERCEL_GIT_COMMIT_AUTHOR_DATE) : '');

export const gitInfo = {
  sha,
  short: sha ? sha.slice(0, 7) : 'dev',
  message,
  relative,
  branch,
  url: sha ? `${repo.url}/commit/${sha}` : repo.url,
};
