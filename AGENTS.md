# AGENTS.md

## Stack
- Astro 5 (static output) + Tailwind CSS 4 via `@tailwindcss/vite` plugin in `astro.config.mjs`.
- TypeScript extends `astro/tsconfigs/strict` (`tsconfig.json`).
- No test or lint scripts configured; verification is `npm run build` and `npm run astro -- check`.

## Commands
- `npm install` — install deps
- `npm run dev` — dev server at `localhost:4321`
- `npm run build` — production build to `./dist/`
- `npm run preview` — preview build
- `npm run astro -- check` — type/content check
- `npm run astro -- ...` — Astro CLI

## Conventions
- Tailwind v4: global styles in `src/styles/global.css` use `@import "tailwindcss"`; plugin wired in `astro.config.mjs`. Do not use v3 directives (`@tailwind base` etc.).
- `src/layouts/Layout.astro` imports global CSS and renders `Header`.
- Generated `.astro/` and `dist/` are gitignored — do not edit by hand.

## Gotchas
- `src/components/Header.astro` links to `/about`, `/projects`, `/contact`, which have no corresponding pages yet.
- Only one route exists (`src/pages/index.astro`).
