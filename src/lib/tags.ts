import type { Lang } from '@i18n/ui';
import { getPosts, type Post } from './blog';

export type TagCount = { tag: string; count: number };

/** All tags for a language with post counts, most frequent first. */
export async function getAllTags(lang: Lang): Promise<TagCount[]> {
  const posts = await getPosts(lang);
  const counts = new Map<string, number>();
  for (const p of posts) for (const tag of p.data.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

/** Posts in a language carrying a given tag, newest first. */
export async function getPostsByTag(lang: Lang, tag: string): Promise<Post[]> {
  const posts = await getPosts(lang);
  return posts.filter((p) => p.data.tags.includes(tag));
}

/** Static params for [tag].astro in a locale. */
export async function getTagParams(lang: Lang) {
  const tags = await getAllTags(lang);
  return tags.map(({ tag }) => ({ params: { tag }, props: { tag } }));
}
