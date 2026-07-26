import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Writing collection — holds both blog posts and notes (Tania-style split via `kind`).
 * Each post is authored per-language as `<slug>.<lang>.mdx`, e.g.
 *   astro-server-islands.en.mdx
 *   astro-server-islands.id.mdx
 * The two are paired by their shared base slug; a missing pair is handled
 * gracefully at render time (a "not available in this language yet" notice).
 */
const blog = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/blog',
    // Preserve the "<slug>.<lang>" id (default slugify would drop the dot).
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updated: z.coerce.date().optional(),
    kind: z.enum(['blog', 'note']).default('blog'),
    lang: z.enum(['en', 'id']),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    /** Optional cover image path under /public. */
    cover: z.string().optional(),
  }),
});

/**
 * Gist collection — code snippets and things worth saving. Language-neutral
 * (a snippet is the same in EN and ID), so no per-language pairing here.
 */
const gist = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/gist' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    lang: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, gist };
