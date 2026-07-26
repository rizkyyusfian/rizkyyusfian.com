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

/** Every (baseSlug, lang) pair — used for generating static post routes. */
export async function getAllPostParams() {
  const all = await getCollection('blog', isPublished);
  return all.map((entry) => ({
    params: { slug: baseSlug(entry) },
    props: { entry },
    lang: entry.data.lang,
  }));
}

/** Which languages a given base slug exists in. */
export async function availableLangs(slug: string): Promise<Lang[]> {
  const all = await getCollection('blog', isPublished);
  return all.filter((e) => baseSlug(e) === slug).map((e) => e.data.lang);
}

/**
 * Static routes for a locale's [slug].astro. Generates a route for EVERY base slug
 * (across all languages) so a direct hit on a not-yet-translated URL renders a
 * graceful "not available in this language" notice instead of a 404.
 */
export async function getRoutesForLang(lang: Lang) {
  const all = await getCollection('blog', isPublished);
  const slugs = [...new Set(all.map(baseSlug))];
  return slugs.map((slug) => {
    const entry = all.find((e) => baseSlug(e) === slug && e.data.lang === lang) ?? null;
    return { params: { slug }, props: { entry, slug } };
  });
}
