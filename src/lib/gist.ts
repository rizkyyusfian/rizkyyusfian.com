import { getCollection, type CollectionEntry } from 'astro:content';

export type Gist = CollectionEntry<'gist'>;

const isPublished = (e: Gist) => import.meta.env.DEV || !e.data.draft;

export async function getGists(): Promise<Gist[]> {
  const all = await getCollection('gist', isPublished);
  return all.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export async function getGistParams() {
  const all = await getCollection('gist', isPublished);
  return all.map((entry) => ({ params: { slug: entry.id }, props: { entry } }));
}
