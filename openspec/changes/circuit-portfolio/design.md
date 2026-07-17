# Design: circuit-portfolio

See `design-mockup.html` in this folder for the interactive, built-and-iterated reference this document describes — when in doubt about exact layout/copy, defer to the mockup, this document explains the *why* and the production considerations the mockup doesn't need to handle (real routing, SEO, accessibility fallbacks).

## Stack

- **Astro** — routing, SEO/meta, all rendering. No client-side framework (React/Vue/etc.) needed; interactivity is plain `<script>` (click handlers, panel toggling) processed by Astro/Vite.
- **Tailwind v4** — via `@tailwindcss/vite`, already wired in the scaffold.
- **SVG** — every diagram (hub flow, circuit board, system pipeline, milestone trace) is hand-authored SVG, not raster art or canvas. This keeps everything inherently accessible (real DOM nodes, `<title>`/`<desc>`/`aria-label` on shapes) and crawlable.
- **pnpm** — package manager (not npm — the maintainer's explicit preference for supply-chain safety; pnpm additionally verifies lockfile supply-chain policy on install).

## Visual system

One drawing language reused across every page, established in `design-mockup.html`:
- **Copper traces** (`--copper` / `--copper-bright`) — right-angle "manhattan-routed" lines with `via` dots at bends, used for both navigation arrows (hub, skills pipeline) and the experience timeline.
- **Chips** — rounded rectangles with a dark body, used for every clickable destination (hub blocks, board categories, pipeline stations, timeline milestones).
- **Monospace silkscreen labels** — uppercase, wide letter-spacing, for all structural text (eyebrows, sheet titles, node labels), paired with a system sans for longer body copy.
- **Two themes, not a naive invert**: dark theme reads as a physical PCB under lab light; light theme shifts the metaphor to a blueprint/schematic sheet (paper ground, ink-blue traces) rather than just inverting the dark palette.
- **Title block** — every page's diagram stage carries a small bottom bar (`Sheet NN`, page name, revision) styled like a real engineering drawing's title block.

## Routing

Real Astro pages per section — better for SEO/sharing and simpler than a client-side view-state machine:
- `/` — the hub (flow diagram).
- `/experience` — milestone trace.
- `/projects` — circuit board; category panels addressable via `/projects#<category>` fragments (`electronics`, `software`, `ai-ml`, `gamedev`).
- `/skills` — system pipeline; domain panels addressable via `/skills#<domain>` fragments (`electronics`, `frontend`, `backend`, `infrastructure`, `ai`).
- `/blog` — stub.
- `/contact` — contact channels.
- `/journey` — personal narrative.

In-page panel content (project lists on `/projects`, tool lists on `/skills`) is real DOM markup present regardless of open/closed state (toggled via `hidden`/`display`, never injected only on click), so it's crawlable and readable without JS — same principle as every earlier direction of this project.

## Hub (`/`)

- A "Start" block (Cristian's identity) on the left is a real link to `/journey`.
- Four section blocks — **Experience, Projects, Skills, Blog**, in that order top-to-bottom — are real links to their routes. Order encodes priority: Experience is the most important section per the user, Blog is the least (still a stub).
- All four converge via traces on a **Contact** block on the right, a real link to `/contact`. This bookends the diagram (identity on the left, call-to-action on the right) instead of trailing off with empty space.
- Unlike the mockup's drawer-preview convenience (built so the comparison artifact didn't require real navigation), the production hub's blocks are plain links — clicking one navigates, it does not open an in-page preview.

## Experience (`/experience`)

- A horizontal trace with three milestones, each a chip above/below the line connected by a short vertical stub: **Electronics Engineer** (Bolivia), **Professional Transition** (Electronics → Software/AI, Uruguay), **AI/ML Engineer** (Uruguay, current).
- v1 content is placeholder (`20XX`–`20XX` style dates) — real employer names/dates are a fast-follow.
- Milestone details (role, place, dates, one-line description) render directly on the page, not behind a click-to-reveal panel — there's little enough content per milestone that hiding it behind an interaction would only add friction, and it keeps career history readable with zero JS.

## Projects (`/projects`)

- A circuit board: a center "CE" chip (identity, links to `/journey` — the same identity link appears here as on the hub, since visitors may land deep on this page first) with copper traces routed to four category chips: **Electronics, Software, AI/ML, Gamedev**.
- Clicking/activating a category chip opens an in-page panel listing that category's projects as placeholder entries (title + one-line description + links), sourced from data shaped like `docs`'s `data/*ProjectsData.ts` (`ElectronicsProject | SoftwareProject | WebProject | GameDevProject` from `data/projectTypes.ts`) — v1 uses generic placeholders (`Project A`, `Project B`), real data is a fast-follow. No firm mapping of real projects to categories is decided yet.
- Each chip is a real, keyboard-focusable button (not a bare SVG shape with a JS-only handler); panel close returns focus to the chip that opened it.

## Skills (`/skills`)

- A left-to-right pipeline of five stations connected by bidirectional signal-line arrows (paired parallel lines, opposite arrowheads — echoing a "frontend vs. backend" system-architecture diagram): **Electronics → Frontend → Backend → Infrastructure → AI**.
- Each station has a distinct small line-art icon in the site's copper/chip palette (a chip-with-zigzag for Electronics, a monitor for Frontend, a server tower for Backend, a cloud for Infrastructure, a chip-with-node-graph for AI) rather than generic identical chips, so the pipeline is scannable at a glance.
- Clicking/activating a station opens an in-page panel listing that domain's specific tools/technologies as placeholder tags (e.g. Electronics: Arduino, ESP32, KiCad, C++) — real tags are a fast-follow, but the taxonomy (these 5 domains) is fixed.
- Deliberately drawn differently from the Projects board (pipeline vs. board) even though both use 4-or-5-part breakdowns of similar underlying material — they serve different jobs: Projects is "browse my work," Skills is "scan my toolset."

## Journey (`/journey`)

- The Bolivia (Sucre → Cochabamba) → Uruguay → Europe-goal narrative, presented as static timeline/story content. Not a playable sequence — may use scroll-triggered CSS animation/transitions for polish, but no game logic, no required interaction beyond scrolling/reading.

## Contact (`/contact`)

- Real, working contact channels: email, LinkedIn, schedule-a-call (exact channel list to be confirmed before launch — v1 may ship with a subset).
- Reached from the hub's Contact terminal; this is the site's actual conversion point, so every channel must be a real, working link, not flavor text.

## Accessibility / SEO

- Every hub block, board chip, pipeline station, timeline milestone, and panel control is a real focusable link/button with an accessible name — never a click-only `<div>`/bare-SVG-shape handler.
- Panel content (project lists, tool lists) exists in the DOM regardless of open/closed state, so crawlers index it without executing JS.
- Every route (`/`, `/experience`, `/projects`, `/skills`, `/blog`, `/contact`, `/journey`) is real and independently linkable/shareable, each indexable on its own.

## Repo / deploy

- New GitHub repo `schematic`, local at `~/personal/projects/schematic`, sibling to `docs`. `docs` untouched as a live fallback.
- Deployed to Vercel (static Astro output — no SSR adapter needed for v1 since there's no dynamic/server data).
- Playwright MCP (`@playwright/mcp`, installed at user scope) available for visually driving/screenshotting each page during development.
