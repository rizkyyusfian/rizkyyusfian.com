# rizkyyusfian.com

My personal site and digital garden — a clean-sheet rebuild in **Astro + TypeScript**.
Bilingual (English / Bahasa Indonesia), "Full CLI" visual identity, warm palette,
light + dark.

## Stack

- **[Astro](https://astro.build)** (hybrid: static pages + on-demand endpoints for live widgets)
- **TypeScript** (strict)
- **Tailwind CSS v4** + a token-based design system (`src/styles/global.css`)
- **MDX** content via Astro Content Collections
- **astro-icon** + Lucide for all UI icons
- Deployed on **Vercel**

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static build → dist/ (+ .vercel/output)
npm run preview
```

## Structure

```
src/
  pages/            # routes (EN at /, ID under /id/)
  layouts/          # BaseLayout — shell, titlebar, 3-column grid
  components/
    Explorer.astro      # IDE file-explorer nav (collapsible)
    LiveSidebar.astro   # homepage live widgets
    PostRow.astro       # a file-row in listings
    views/              # one View per page, shared across locales
  content/blog/     # posts as <slug>.<lang>.mdx  (e.g. my-post.en.mdx / my-post.id.mdx)
  i18n/             # ui.ts dictionaries + utils.ts helpers
  lib/blog.ts       # slug pairing, reading time, routes, fallback
  siteConfig.ts     # hand-edited author data, socials, "now", "currently"
  nav.ts            # the explorer tree (mirrors src/pages)
```

## Writing a post

Create `src/content/blog/<slug>.<lang>.mdx` with frontmatter:

```yaml
---
title: ...
description: ...
pubDate: 2026-07-18
kind: blog        # or "note"
lang: en          # or "id"
tags: ['astro']
---
```

Author the same `<slug>` in both languages to make it bilingual. If only one
language exists, the other renders a graceful "not available yet" notice.

## Roadmap

- **Phase 1 ✅** — foundation, i18n, home + blog + reading pages, about, contact, nav, GitHub/Now widgets (scaffolded)
- **Phase 2** — live Spotify / analytics / weather endpoints, `/dashboard`, Pagefind search, RSS, tag pages
- **Phase 3** — collections (film/game/music/books), gist, peripherals/setup
- **Phase 4** — comments/reactions, polish
