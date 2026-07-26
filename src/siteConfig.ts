/** Central, hand-edited site data. Live data (Spotify, analytics) arrives in Phase 2. */

export const site = {
  name: 'Muhammad Rizky Yusfian Yusuf',
  handle: 'rizkyyusfian',
  shortName: 'Rizky',
  initials: 'MRYY',
  url: 'https://rizkyyusfian.com',
  location: 'Sorong, Indonesia',
  timezone: 'Asia/Jayapura', // WIT (UTC+9)
  timezoneLabel: 'Sorong · WIT',
  email: 'rizky.yusfian16@gmail.com',
  githubUser: 'rizkyyusfian',
} as const;

export const socials = [
  { label: 'GitHub', href: 'https://github.com/rizkyyusfian', icon: 'lucide:github' },
  { label: 'Email', href: 'mailto:rizky.yusfian16@gmail.com', icon: 'lucide:mail' },
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
  { label: 'v1 · next.js', current: false, href: null as string | null }, // TODO: live v1 deploy URL
] as const;

/**
 * The single hand-edited "now" widget — merged status + media.
 * Update whenever life changes.
 */
export const now = {
  building: 'Refactoring this site in Astro',
  reading: 'The Pragmatic Programmer',
  watching: 'Dune: Part Two',
  playing: 'Hades II',
} as const;
