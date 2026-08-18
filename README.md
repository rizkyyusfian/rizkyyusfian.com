# rizkyyusfian.tech

My personal website and digital garden — a bilingual (EN/ID) blog, writing, and
collection of the things I build and love, wrapped in a "Full CLI" terminal/IDE
aesthetic with a warm palette and light/dark themes.

🔗 **Live:** [www.rizkyyusfian.tech](https://www.rizkyyusfian.tech)

## Overview

Built clean-sheet in **Astro + TypeScript** (a rebuild of the old Next.js site).
Mostly static and fast, with a handful of serverless endpoints powering the live
sidebar (Spotify, GitHub, weather, analytics). Everything is written by me, in
English and Indonesian.

## Features

- ✍️ **Blog + Notes** — separate long-form posts and short notes, bilingual
  (EN/ID) with a graceful "not translated yet" fallback and per-post language badges
- 📊 **Live sidebar** — Spotify now-playing, GitHub contributions, local weather
  and clock, and site analytics
- 🗂️ **Collections** — books, movies, and games I track, plus a `/uses` gear page
- 💻 **Projects** — pulled live from GitHub
- 📄 **About** — résumé-style page (experience, education, publications, certificates)
- 💬 **Comments + reactions** on posts via Giscus
- 🔎 **Client-side search** (Pagefind), **RSS feeds**, and **tag pages**
- 🌗 Light/dark themes, an app-shell layout, and a custom 404

## Tech stack

- **[Astro](https://astro.build)** — hybrid (static pages + on-demand endpoints)
- **TypeScript** (strict)
- **Tailwind CSS v4** with a token-based design system
- **MDX** via Astro Content Collections
- **Lucide** icons (astro-icon), **Pagefind** search, **Giscus** comments
- Deployed on **Vercel**

## Development

Blog, note, and gist MDX live in separate `blog`, `notes`, and `gist` folders
inside a private repository named
`rizkyyusfian.com-content`. Keep it beside this repository:

```text
repositoryproject/
  rizkyyusfian.com/
  rizkyyusfian.com-content/
```

The development and build commands synchronize that content into an ignored
local directory before Astro starts.

```bash
npm install
npm run content:sync
npm run dev      # http://localhost:4321
npm run build    # static build → .vercel/output
npm run preview
```

Live widgets read from environment variables (see `.env.example`); all of them
degrade gracefully when unset.

## Project structure

```
src/
  pages/         # routes (EN at /, ID under /id/)
  layouts/       # BaseLayout — app shell, nav, live sidebar
  components/    # explorer nav, widgets, and one View per page
  data/          # collections, résumé, uses (edit these to update content)
  i18n/          # EN/ID dictionaries + helpers
  lib/           # blog/tags/git helpers
scripts/
  content-sync.mjs  # validates and synchronizes private MDX
```

## License

[MIT](./LICENSE) © Muhammad Rizky Yusfian Yusuf
