import type { UIKey } from '@i18n/ui';

export type NavFile = {
  type: 'file';
  name: string;
  ext: 'astro' | 'md' | 'tsx';
  /** Route to navigate to. */
  path: string;
};

export type NavFolder = {
  type: 'folder';
  name: string;
  open?: boolean;
  children: NavNode[];
};

export type NavNode = NavFile | NavFolder;

/**
 * The file-explorer menu. Curated for clarity (not a literal 1:1 of src/pages):
 * writing lives under blog/, everything about-me under about/, media under
 * collections/. Only navigable entries are shown — no dynamic-route placeholders.
 */
export const navTree: NavNode[] = [
  { type: 'file', name: 'index', ext: 'astro', path: '/' },
  {
    type: 'folder',
    name: 'blog/notes',
    open: true,
    children: [
      { type: 'file', name: 'blog', ext: 'astro', path: '/blog' },
      { type: 'file', name: 'notes', ext: 'astro', path: '/notes' },
      { type: 'file', name: 'tags', ext: 'astro', path: '/tags' },
    ],
  },
  {
    type: 'folder',
    name: 'about',
    open: true,
    children: [
      { type: 'file', name: 'index', ext: 'astro', path: '/about' },
      { type: 'file', name: 'projects', ext: 'astro', path: '/projects' },
      { type: 'file', name: 'peripherals', ext: 'astro', path: '/about/peripherals' },
      { type: 'file', name: 'gist', ext: 'astro', path: '/gist' },
    ],
  },
  {
    type: 'folder',
    name: 'collections',
    open: false,
    children: [
      { type: 'file', name: 'index', ext: 'astro', path: '/collections' },
      { type: 'file', name: 'books', ext: 'md', path: '/collections/books' },
      { type: 'file', name: 'movie', ext: 'md', path: '/collections/movie' },
      { type: 'file', name: 'games', ext: 'md', path: '/collections/games' },
    ],
  },
  { type: 'file', name: 'README', ext: 'md', path: '/readme' },
  { type: 'file', name: 'contact', ext: 'astro', path: '/contact' },
];
