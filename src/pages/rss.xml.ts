import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts, baseSlug } from '../lib/blog';
import { site } from '../siteConfig';

export async function GET(context: APIContext) {
  const posts = await getPosts('en');
  return rss({
    title: `${site.handle} — blog`,
    description: 'Writing by Muhammad Rizky Yusfian Yusuf — a digital garden.',
    site: context.site ?? site.url,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.pubDate,
      link: `/blog/${baseSlug(p)}/`,
      categories: p.data.tags,
    })),
    customData: `<language>en</language>`,
  });
}
