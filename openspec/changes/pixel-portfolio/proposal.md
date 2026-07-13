# Proposal: pixel-portfolio — a playable 2D autobiographical portfolio

## Why

`docs` (this repo) is a generic Next.js starter-template blog/portfolio and doesn't stand out. Rather than modernize it in place, build a new, separate project: a playable, single-axis (horizontal) 2D side-scroller portfolio that tells Cristian's actual career story — electronics engineer in Bolivia → AI/software engineer in Uruguay → aiming for a role in Europe — using three narrative acts with two distinct character sprites.

Two reference repos were researched (not to be copied, used only to validate technical approach):
- **JSLegendDev/2d-portfolio-kaboom** — a real game: Kaboom.js + Vite + Canvas, tileset-based, desktop+mobile, with a companion tutorial. Strongest technical precedent; drove the engine choice.
- **NotStark/portfolio** — turned out not to be a game at all (verified via its actual README): a conventional Next.js + Prisma + shadcn/ui site with Framer Motion animations. Not usable as a game-mechanics reference.

## What changes

- New repo `pixel-portfolio` at `~/personal/projects/pixel-portfolio` (sibling to `docs`), deployed to Vercel. `docs` stays live untouched as a fallback during development.
- Stack: **Astro** shell (SEO/meta, DOM UI layer) + **KAPLAY** (maintained Kaboom.js fork) mounted as a single client-side canvas island for the game itself.
- Scope for v1: portfolio/projects only — **no blog**, **English-only** (i18n is a fast-follow), **desktop-first** controls (arrow keys/WASD + interact key) with a basic on-screen touch d-pad fallback.
- Story: single horizontal level, 3 acts, walked left→right —
  1. **Bolivia** (Sucre → Cochabamba), young sprite — origin story, houses the electronics project nodes.
  2. **Uruguay**, adult sprite — electronics→software/AI transition, houses software/web/gamedev project nodes.
  3. **The Horizon (Europe)** — symbolic ending (no fight/puzzle mechanic), "Continue the journey → Contact me" CTA.
- Each project is an interactable world node (walk up, press interact) that opens a **real DOM/HTML panel** — not canvas-drawn — reusing the data shape of `data/*ProjectsData.ts` / `data/projectTypes.ts` from this repo (`ElectronicsProject`, `SoftwareProject`, `WebProject`, `GameDevProject`). This is also the accessibility/SEO safety net, since a canvas-only site is invisible to search engines and assistive tech.
- Art: free CC0 asset packs (Kenney.nl) as real v1 art (not placeholder boxes), swappable later. Visual differentiation between acts comes from palette recoloring / parallax swaps / prop dressing on a consistent base tileset, since no off-the-shelf pack has literal "Bolivia"/"Uruguay"/"Europe" tiles.

## Capabilities

- `game-movement` — desktop/touch player control, camera, parallax.
- `act-progression` — the single-level 3-act story order and the young→adult transition.
- `project-interaction` — interactable world nodes and the DOM project panels.
- `ending-contact` — the Act 3 closing scene and contact CTA.
- `accessibility-seo` — DOM/crawler/screen-reader guarantees independent of canvas state.

## Out of scope (v1)

Blog migration, Spanish (i18n), mobile-first control design, any combat/puzzle mechanic for the Act 3 ending, custom/commissioned art (starts on free CC0 packs).
