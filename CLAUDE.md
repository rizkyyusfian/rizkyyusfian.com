# CLAUDE.md — project notes

Personal site rebuilt clean-sheet in **Astro + TypeScript** (was Next.js). Design
direction: "Full CLI" — an IDE/terminal aesthetic with a warm palette, chosen and
approved via mockups. Bilingual EN/ID.

## Conventions

- **Icons:** always Lucide via `astro-icon` (`<Icon name="lucide:..." />`). No emoji as
  UI chrome — emoji are allowed only inside written copy (e.g. the homepage tagline 🚀).
- **Styling:** token-based. Colors/spacing come from CSS custom properties in
  `src/styles/global.css` (`:root`, `@media (prefers-color-scheme)`, `[data-theme]`).
  Never hardcode palette hex in components; use `var(--...)`.
- **i18n:** UI strings live in `src/i18n/ui.ts` (en + id). Pages exist per-locale
  (EN at `/`, ID under `/id/`) as thin wrappers around a shared `views/*View.astro`.
  Use `useTranslations(lang)` and `localizePath(path, lang)`.
- **Components default to `.astro`** (zero JS). Use `.tsx` React islands only when
  real client interactivity is needed (add `@astrojs/react` first).
- **Posts:** `src/content/blog/<slug>.<lang>.mdx`. Paired by base slug; missing
  translation shows a fallback notice (see `src/lib/blog.ts`).

## Rendering

Hybrid on Vercel: static by default. Live widgets (Phase 2: Spotify, analytics,
weather) will be `src/pages/api/*.ts` endpoints with `export const prerender = false`.

## Phased roadmap

P1 ✅ foundation · P2 live data + search + RSS · P3 collections + gist · P4 comments.
See README for detail. The full design blueprint is in the user's memory
(`refactor-2026-direction`).
