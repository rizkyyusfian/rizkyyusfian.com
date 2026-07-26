// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import pagefind from 'astro-pagefind';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rizkyyusfian.dev';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  // Static by default; individual routes (e.g. /api/*) opt into on-demand
  // rendering with `export const prerender = false`.
  output: 'static',
  adapter: vercel(),
  i18n: {
    locales: ['en', 'id'],
    defaultLocale: 'en',
    routing: {
      // English lives at /, Indonesian at /id/*
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    mdx(),
    sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en', id: 'id' } } }),
    icon(),
    pagefind(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
