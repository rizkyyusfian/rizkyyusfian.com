import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts, baseSlug } from '../../lib/blog';
import { site } from '../../siteConfig';

export async function GET(context: APIContext) {
  const posts = await getPosts('id');
  return rss({
    title: `${site.handle} — blog`,
    description: 'Tulisan oleh Muhammad Rizky Yusfian Yusuf — sebuah taman digital.',
    site: context.site ?? site.url,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.pubDate,
      link: `/id/blog/${baseSlug(p)}/`,
      categories: p.data.tags,
    })),
    customData: `<language>id</language>`,
  });
}
