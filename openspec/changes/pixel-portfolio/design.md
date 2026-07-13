# Design: pixel-portfolio

> **Note:** the site map below is superseded by `design-mockup.html` (interactive, built and iterated live with the user). Current structure: hub is a flow diagram (`/`) branching to four sections ranked by importance — **Experience** (`/experience`, milestone trace), **Projects** (`/projects`, circuit board — unchanged from below), **Skills** (`/skills`, left-to-right system pipeline: Electronics → Frontend → Backend → Infrastructure → AI, not a Venn diagram), **Blog** (`/blog`, stub) — all converging on a **Contact** (`/contact`) terminal. `/journey` is still reached from the hub's Start/identity node. The rest of this document (Stack, Accessibility/SEO, Repo/deploy) still holds; the Hub/Area-detail/Journey sections below describe the earlier Venn-diagram concept and need a rewrite to match the mockup before implementation starts.

## Stack

- **Astro** — routing, SEO/meta, all rendering. No client-side framework (React/Vue/etc.) needed; interactivity is plain `<script>` (click handlers, panel toggling) processed by Astro/Vite.
- **Tailwind v4** — via `@tailwindcss/vite`, already wired in the scaffold.
- **SVG** — the Venn diagram and each area's labeled illustration are hand-authored or generated SVG, not raster art or a canvas/game engine. This keeps everything inherently accessible (real DOM nodes, `<title>`/`aria-label` on shapes) and crawlable.
- **pnpm** — package manager (not npm — the maintainer's explicit preference for supply-chain safety; pnpm additionally verifies lockfile supply-chain policy on install).

## Routing

Real Astro pages/routes per screen, not a single-page JS state machine — better for SEO/sharing and simpler than managing client-side view state:
- `/` — the hub (Venn diagram).
- `/areas/electronics`, `/areas/software`, `/areas/ai-ml`, `/areas/gamedev` — one detail view per circle.
- `/journey` — the personal story, reached by clicking the diagram's center.

Project panels are an in-page overlay/modal on the area-detail route (triggered by clicking a pin), not a separate route — but their content is real DOM markup present in the page (e.g. rendered but visually hidden until opened), not injected only on click, so it's crawlable without JS.

## Hub diagram (`/`)

- SVG with 4 overlapping circles: Electronics, Software, AI/ML, Gamedev, arranged so adjacent circles visually overlap (opacity/blend, not literal geometric boolean regions — labels are positioned by hand near each lens, not computed).
- Center overlap zone: Cristian's name/identity, clickable → `/journey`.
- Each circle is a real clickable element (`<a>` wrapping the SVG shape + label, not a bare `<circle>` with a JS-only handler) so it's keyboard-focusable and works with JS disabled.

## Area detail view (`/areas/<area>`)

- A labeled illustration (SVG) themed per area, with numbered callout pins in the "Parts of a Computer" worksheet style — each pin is a real link/button positioned over the illustration, connected to the project it represents.
- v1 project content: generic placeholders (`Project A`, `Project B`, ...) per area — swappable later for the real data currently in `docs`'s `data/*ProjectsData.ts` (`ElectronicsProject | SoftwareProject | WebProject | GameDevProject` from `data/projectTypes.ts`) once the interaction design is validated. No firm mapping of real projects to the Electronics/Software/AI-ML/Gamedev circles is decided yet — deferred.
- Clicking/activating a pin opens a project panel (title, description, tech stack, links) as an in-page overlay; closing it returns focus to the pin.

## Journey story (`/journey`)

- The Bolivia (Sucre → Cochabamba) → Uruguay → Europe-goal narrative, presented as a timeline/story page. Not a playable sequence — static content, may use scroll-triggered CSS animation/transitions for polish, but no game logic.

## Accessibility / SEO

- Every circle, pin, and the center node is a real focusable link/button with an accessible name — never a click-only `<div>`/canvas region.
- Project panel content exists in the DOM regardless of open/closed state (e.g. `hidden` attribute or `display: none` toggled by JS), so crawlers seed and index it without executing JS.
- Each area and the journey page is a real, independently linkable/shareable URL.

## Repo / deploy

- New GitHub repo `pixel-portfolio`, local at `~/personal/projects/pixel-portfolio`, sibling to `docs`. `docs` untouched as a live fallback.
- Deployed to Vercel (static Astro output — no SSR adapter needed for v1 since there's no dynamic/server data).
- Playwright MCP (`@playwright/mcp`, installed at user scope) available for visually driving/screenshotting the diagram and detail views during development.
