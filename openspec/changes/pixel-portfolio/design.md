# Design: pixel-portfolio

## Stack

- **Astro** — project shell, routing, SEO/meta, and the DOM UI layer (panels, HUD, touch d-pad, CTA). Tailwind integration for styling this layer.
- **KAPLAY** (`kaplay` npm package, maintained Kaboom.js fork) — the game engine, mounted as a single client-side canvas island (`client:only`). Chosen over Phaser for its smaller API purpose-built for "walk, jump, collide, trigger" scope, and because it's the proven approach in the JSLegendDev/2d-portfolio-kaboom precedent.
- Code split: `src/game/` (KAPLAY scenes/entities/logic) stays separate from `src/components/` + `src/pages/` (Astro DOM layer). The two communicate via a small event bridge (canvas dispatches a custom DOM event like `project:open` with a project id; the Astro/DOM layer owns rendering the panel).

## World / level

- One continuous horizontal level, 3 acts in sequence (Bolivia → Uruguay → The Horizon). Camera follows the player horizontally, clamped to level bounds. No vertical level design beyond jump arcs/platform hops.
- Parallax background: 2-3 depth layers, swapped/recolored per act to differentiate zones using a single base tileset (Kenney.nl pack) rather than bespoke per-country art.
- Player entity: idle/walk/jump animation states via KAPLAY `sprite()`/`body()`/`area()`; horizontal input only (arrow keys/WASD + jump), plus an interact key.
- Sprite swap (young → adult) happens once, at the Act 1→2 transition, tied to a "boarding transport" story beat (a short non-interactive cutscene-like sequence, not a separate level).

## Interaction / project nodes

- One generic **interactable node** component in `src/game/` (proximity trigger + on-screen prompt + dispatches `project:open`), reused unchanged for every project across all acts — built once in Phase 3, not rebuilt per act.
- Project content model ported from this repo's `data/projectTypes.ts` (`ElectronicsProject | SoftwareProject | WebProject | GameDevProject` union) into `src/data/projects.ts` in the new repo — same shape, English-only (no locale keying needed for v1).
- Opening a node renders a real DOM/HTML panel (Astro/React-free, plain component) with title/description/tech-stack/links — never drawn on canvas, so it stays crawlable and screen-reader-visible.

## Controls

- Desktop-first: keyboard (arrow keys/WASD + interact key, e.g. `E`/`Space`).
- Touch fallback: a simple on-screen d-pad + interact button, DOM overlay shown only when a touch-capable viewport is detected — not the primary design target for v1, just enough that mobile isn't broken.

## Act 3 ending

- No fight/puzzle mechanic. Player reaches a cliff/dock scene facing a stylized European skyline backdrop. The same interactable-node system opens a "Continue the journey" panel containing real contact links (email, LinkedIn, resume) — this is the site's actual conversion point.

## Accessibility / SEO

- All project and contact information must exist in real DOM markup independent of canvas state (the panels), since canvas content is invisible to search engines and screen readers.
- Lighthouse/SEO pass in Phase 6 confirms project titles/descriptions are indexable even though gameplay itself isn't.

## Repo / deploy

- New GitHub repo `pixel-portfolio`, local at `~/personal/projects/pixel-portfolio`, sibling to `docs`. `docs` is left untouched as a live fallback during development.
- Deployed to Vercel; Phase 1 includes a preview deploy specifically to validate the pipeline before real content is built.
- Playwright MCP (`@playwright/mcp`) installed as tooling so the game can be driven and screenshotted in a real browser during development/polish (Phase 6), rather than verifying purely from code.
