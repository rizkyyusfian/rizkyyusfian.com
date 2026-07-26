import type { UIKey } from '@i18n/ui';

export type NavFile = {
  type: 'file';
  name: string;
  ext: 'astro' | 'md' | 'tsx';
  /** Route to navigate to, or null for non-navigable placeholder files like [slug]. */
  path: string | null;
};

export type NavFolder = {
  type: 'folder';
  name: string;
  /** Whether the folder is expanded by default. */
  open?: boolean;
  children: NavNode[];
};

export type NavNode = NavFile | NavFolder;

/** The file-explorer tree. Mirrors src/pages so the IDE metaphor stays honest. */
export const navTree: NavNode[] = [
  { type: 'file', name: 'index', ext: 'astro', path: '/' },
  { type: 'file', name: 'dashboard', ext: 'astro', path: '/dashboard' },
  {
    type: 'folder',
    name: 'blog',
    open: true,
    children: [
      { type: 'file', name: 'index', ext: 'astro', path: '/blog' },
      { type: 'file', name: '[slug]', ext: 'astro', path: null },
    ],
  },
  {
    type: 'folder',
    name: 'tags',
    open: false,
    children: [
      { type: 'file', name: 'index', ext: 'astro', path: '/tags' },
      { type: 'file', name: '[tag]', ext: 'astro', path: null },
    ],
  },
  { type: 'file', name: 'projects', ext: 'astro', path: '/projects' },
  { type: 'file', name: 'gist', ext: 'astro', path: '/gist' },
  {
    type: 'folder',
    name: 'about',
    open: true,
    children: [
      { type: 'file', name: 'index', ext: 'astro', path: '/about' },
      { type: 'file', name: 'peripherals', ext: 'astro', path: '/about/peripherals' },
    ],
  },
  {
    type: 'folder',
    name: 'collections',
    open: false,
    children: [
      { type: 'file', name: 'books', ext: 'md', path: '/collections/books' },
      { type: 'file', name: 'film', ext: 'md', path: '/collections/film' },
      { type: 'file', name: 'games', ext: 'md', path: '/collections/games' },
    ],
  },
  { type: 'file', name: 'search', ext: 'astro', path: '/search' },
  { type: 'file', name: 'contact', ext: 'astro', path: '/contact' },
];

/** Top-level pages used for simple nav / labels. */
export const primaryNav: { key: UIKey; path: string }[] = [
  { key: 'nav.home', path: '/' },
  { key: 'nav.blog', path: '/blog' },
  { key: 'nav.projects', path: '/projects' },
  { key: 'nav.gist', path: '/gist' },
  { key: 'nav.about', path: '/about' },
  { key: 'nav.contact', path: '/contact' },
];
