# Proposal: pixel-portfolio — an interactive Venn-diagram portfolio

## Why

`docs` (this repo) is a generic Next.js starter-template blog/portfolio and doesn't stand out. Build a new, separate project centered on a single, distinctive visual idea: a **Venn diagram of Cristian's areas of expertise** (in the style of classic "Mechatronics" explainer diagrams), where the overlap of hardware and software *is the point*, and where the diagram's center also carries the personal story — electronics engineer in Bolivia → AI/software engineer in Uruguay → aiming for a role in Europe.

This supersedes an earlier direction (a playable 2D side-scroller using KAPLAY/Kaboom.js) that was speced and partially scaffolded, then abandoned in favor of this diagram-based approach after reviewing two reference images: a 4-circle "Mechatronics" Venn diagram (Electrical/Electronics/Mechanics/Computer Science, overlaps labeled Process Control/Motor Controls/Robotics/PLCs, "MECHATRONICS" at the center), and a "Parts of a Computer" labeled worksheet (numbered callout pins from an illustration to a legend). The Astro + Tailwind + pnpm scaffold and the accessibility-first "real DOM panel for project info" principle carry over unchanged; the game engine and canvas-based interaction do not.

## What changes

- New repo `pixel-portfolio` at `~/personal/projects/pixel-portfolio` (sibling to `docs`), deployed to Vercel. `docs` stays live untouched as a fallback during development.
- Stack: **Astro** + **Tailwind v4** + **SVG** for the diagram/illustrations, plain HTML/CSS/vanilla JS for interactivity (click handlers, panel open/close). **No game engine** — the earlier KAPLAY dependency has been removed.
- Landing hub: an SVG Venn diagram with 4 circles — **Electronics**, **Software**, **AI/ML**, **Gamedev** — visually overlapping. The center, where they all meet, carries Cristian's name/identity and is itself clickable.
- Clicking a circle navigates to that area's **detail view**: a labeled illustration with numbered callout pins (worksheet-style), one pin per project in that area.
- Clicking a pin opens a **real DOM/HTML panel** (not canvas-drawn) with that project's title, description, tech stack, and links — same accessibility/SEO rationale as before: content must be crawlable and screen-reader-visible independent of any illustration/SVG state.
- Clicking the diagram's center opens the personal journey narrative (Bolivia → Uruguay → aiming for Europe) as a timeline/story view — this is where the "tell a story" thread from the original concept now lives.
- v1 content is **generic placeholder projects** per area (e.g. "Project A", "Project B"), not the real ported data — real content is a fast-follow once the interaction design is validated.
- Scope otherwise unchanged from the original proposal: portfolio only (no blog), English-only, desktop-first (this matters less now — a click-based diagram is inherently more mobile-friendly than platformer controls, but touch is still not the primary design target for v1).

## Capabilities

- `hub-diagram` — the landing Venn diagram: 4 clickable area circles, clickable center leading to the journey story.
- `area-detail` — the labeled-illustration/numbered-pin view per area.
- `project-interaction` — pins open DOM project panels (open/close, content shape).
- `journey-story` — the Bolivia → Uruguay → Europe narrative reachable from the diagram's center.
- `accessibility-seo` — real, crawlable/screen-reader-visible markup for the diagram, pins, panels, and story content.

## Out of scope (v1)

Blog migration, Spanish (i18n), real project content (placeholders only), mobile-first design, any game engine/canvas-based interaction.
