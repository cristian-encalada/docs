# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal blog & portfolio site built on the `tailwind-nextjs-starter-blog` template (Next.js 14 App Router, TypeScript, TailwindCSS, Contentlayer), with i18n (English/Spanish) added on top. Deployed on Vercel.

## Commands

This repo uses **Yarn Classic** (`yarn.lock`, `.yarn/releases/`). Do not use `npm install`/`npm ci`.

```bash
yarn && yarn dev      # install deps, run dev server
yarn build            # production build (see "Contentlayer build quirk" below)
yarn lint             # next lint --fix over pages/app/components/lib/layouts/scripts
yarn analyze          # build with bundle analyzer (ANALYZE=true)
yarn openspec --help  # OpenSpec CLI (dev dependency, no `yarn dlx` needed)
```

There is no test suite/framework configured in this repo.

Husky's pre-commit hook runs `lint-staged` (eslint --fix on JS/TS, prettier --write on JS/TS/JSON/CSS/MD/MDX).

## Architecture

### i18n routing

Every route lives under `app/[locale]/...`. `middleware.ts` rewrites bare paths (e.g. `/about`) to the default locale (`en`) internally while keeping the URL clean, and redirects explicit `/en/...` URLs to the bare path; only the second locale (`es`) keeps a visible prefix. Locale list and default/second locale come from `app/[locale]/i18n/locales.js` (`fallbackLng`/`secondLng`), consumed by both `middleware.ts` and `contentlayer.config.ts`.

Translation strings live in `app/[locale]/i18n/locales/{en,es}/*.json`, one namespace per file (`common`, `home`, `about`, `projects`, `footer`, `SEO`, `404`, `newsletter`). `app/[locale]/i18n/client.ts` and `server.ts` provide `useTranslation` for client and server components respectively — pick the right one based on component type.

### Content pipeline (Contentlayer)

`contentlayer.config.ts` defines two document types sourced from `data/`:
- `Blog` — `data/blog/{en,es}/*.mdx`, requires `language` and `localeid` fields (used to pair a post with its translation).
- `Authors` — `data/authors/{en,es}/*.mdx`.

On every content build, `onSuccess` generates three derived files used at request time — don't hand-edit them:
- `app/[locale]/localeid-map.json` — maps `localeid` → `{ locale: slug }` so the language switcher can jump to the translated version of the current post.
- `app/[locale]/tag-data.json` — per-locale tag counts for `/tags`.
- `public/<kbarConfig.searchDocumentsPath>` — local search index (only if `siteMetadata.search.provider === 'kbar'`).

**Contentlayer build quirk**: `onSuccess` also patches generated `.mjs` files under `.contentlayer/generated` and `.contentlayer/.cache`, rewriting the old `assert { type: 'json' }` import syntax to `with { type: 'json' }`. `yarn build` runs `scripts/build-with-assert-fix.js`, which does this same patch again after invoking `contentlayer build` and before `next build`, to work around a Node/esbuild version mismatch. If content builds fail with an "assert" / JSON import error, this is the mechanism to look at (also see `scripts/contentlayer-with-fix.js`, `robust-contentlayer-build.js`, `pre-contentlayer-fix.js`, `fix-contentlayer-assert.js`).

### Projects section

Non-blog project listings (`/projects/{web,electronics,software,gamedev}`) are plain TypeScript data, not MDX: `data/projectTypes.ts` defines the `Project` union (`WebProject | ElectronicsProject | SoftwareProject | GameDevProject`), and each category has its own `data/<category>ProjectsData.ts` keyed by locale. `data/projectTypes.ts` also holds the category list — adding a new category means extending the union there plus adding a new data file and route.

`GameDevProject.downloads` can be backed by a live count: `lib/curseforge.ts` fetches download counts from the CurseForge API (`CURSEFORGE_API_KEY` env var) with a 1-hour revalidate; falls back to the static `downloads` field in the data file if the key is missing or the request fails.

### Path aliases

`@/components/*`, `@/data/*`, `@/layouts/*`, `@/lib/*`, `@/css/*` map to their top-level dirs (see `tsconfig.json`). `contentlayer/generated` resolves to `.contentlayer/generated`.

### Config surface

Most site-wide behavior (nav links, analytics provider, comments provider, search provider, newsletter provider) is toggled through `data/siteMetadata.js` and `data/headerNavLinks.ts` rather than component code — check there before assuming a feature needs a code change.

## OpenSpec

This repo uses [OpenSpec](https://github.com/Fission-AI/OpenSpec) for spec-driven change proposals (`openspec/config.yaml`, `openspec/changes/`), driven via the `yarn openspec` CLI. Active changes go in `openspec/changes/<name>/` (proposal.md, design.md, tasks.md); completed ones move to `openspec/changes/archive/`.

## Security

- `.env` is gitignored and excluded from Cursor indexing (`.cursorignore`); never read or print it without explicit permission, and never log API keys.
- `next.config.js` sets a strict CSP and standard security headers (`X-Frame-Options`, `HSTS`, `Permissions-Policy`, etc.) — extend the CSP's `script-src`/`connect-src` there when adding a new external service instead of loosening it broadly.
