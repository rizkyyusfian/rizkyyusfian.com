import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '@i18n/ui';

export type Post = CollectionEntry<'blog'>;

/** The base slug shared across languages, e.g. "astro-server-islands.en" -> "astro-server-islands". */
export function baseSlug(entry: Post): string {
  return entry.id.replace(/\.(en|id)$/, '');
}

/** Estimated reading time in minutes from the raw body (~200 wpm). */
export function readingTime(entry: Post): number {
  const words = (entry.body ?? '').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

const isPublished = (e: Post) => import.meta.env.DEV || !e.data.draft;

/** All posts for a language, newest first, optionally filtered by kind. */
export async function getPosts(lang: Lang, kind?: 'blog' | 'note'): Promise<Post[]> {
  const all = await getCollection('blog', (e) => e.data.lang === lang && isPublished(e));
  return all
    .filter((e) => (kind ? e.data.kind === kind : true))
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export type Kind = 'blog' | 'note';

/** Which languages a given base slug exists in. */
export async function availableLangs(slug: string): Promise<Lang[]> {
  const all = await getCollection('blog', isPublished);
  return all.filter((e) => baseSlug(e) === slug).map((e) => e.data.lang);
}

/**
 * Static routes for a section's [slug].astro (blog OR notes). Generates a route
 * for every base slug of that kind, with the current-language entry or null
 * (null → graceful "not translated yet" notice instead of a 404).
 */
export async function getRoutesForSection(lang: Lang, kind: Kind) {
  const all = await getCollection('blog', isPublished);
  const slugs = [...new Set(all.map(baseSlug))];
  return slugs
    .map((slug) => {
      const entries = all.filter((e) => baseSlug(e) === slug);
      const entryKind = entries[0]?.data.kind ?? 'blog';
      const entry = entries.find((e) => e.data.lang === lang) ?? null;
      return { slug, entryKind, entry };
    })
    .filter((r) => r.entryKind === kind)
    .map((r) => ({ params: { slug: r.slug }, props: { entry: r.entry, slug: r.slug, section: kind } }));
}

/** Previous (newer) and next (older) post within the same section + language. */
export async function getAdjacent(lang: Lang, kind: Kind, slug: string) {
  const list = await getPosts(lang, kind);
  const idx = list.findIndex((p) => baseSlug(p) === slug);
  return {
    prev: idx > 0 ? list[idx - 1] : null,
    next: idx >= 0 && idx < list.length - 1 ? list[idx + 1] : null,
  };
}
