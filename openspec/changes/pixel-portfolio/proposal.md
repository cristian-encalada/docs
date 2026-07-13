# Proposal: pixel-portfolio — a circuit-board-themed portfolio

## Why

`docs` (this repo) is a generic Next.js starter-template blog/portfolio and doesn't stand out. Build a new, separate project around one consistent visual idea — schematic/circuit-board drawing language — where every section of the site is a different kind of technical diagram, tied together by the same copper-trace, silkscreen-label vocabulary. The goal is a portfolio that visually *is* an electronics-engineer-turned-software/AI-engineer's identity, not just a page describing it.

The final site map was validated iteratively with the user via a self-contained HTML/SVG mockup (`design-mockup.html` in this change folder, also published as a Claude artifact) before being committed to code. Two earlier directions were explored and superseded along the way:
1. A playable 2D side-scroller using KAPLAY/Kaboom.js — speced and partially scaffolded, then dropped in favor of a diagram-based approach after reviewing a "Mechatronics" Venn diagram and a "Parts of a Computer" labeled worksheet as references.
2. A Venn-diagram-only hub (4 overlapping circles: Electronics/Software/AI-ML/Gamedev) — replaced after the user found it didn't match how a real portfolio needs to be structured (sections like Experience, Projects, Skills need their own dedicated treatment, not one diagram trying to do everything).

The Astro + Tailwind v4 + pnpm scaffold, and the accessibility-first "real DOM content regardless of diagram/panel state" principle, carry over unchanged from both earlier directions.

## What changes

- New repo `pixel-portfolio` at `~/personal/projects/pixel-portfolio` (sibling to `docs`), deployed to Vercel. `docs` stays live untouched as a fallback during development.
- Stack: **Astro** + **Tailwind v4** + hand-authored **SVG** for every diagram, plain HTML/CSS/vanilla JS for interactivity. **No game engine, no canvas.**
- **Hub (`/`)**: a schematic flow diagram. A "Start" block (Cristian's identity, clickable → `/journey`) branches to four sections **ranked by importance**: **Experience**, **Projects**, **Skills**, **Blog** — all four converge on a **Contact** terminal (→ `/contact`).
- **Experience (`/experience`)**: a horizontal milestone trace (same copper-line vocabulary as the rest of the site) showing career history — Electronics Engineer (Bolivia) → professional transition → AI/ML Engineer (Uruguay, current). Explicitly prioritized over a separate Education section, per the user: experience matters more than credentials here.
- **Projects (`/projects`)**: a circuit board. Four chips are project categories — Electronics, Software, AI/ML, Gamedev — each opens an in-page panel listing that category's projects.
- **Skills (`/skills`)**: a left-to-right system pipeline — Electronics → Frontend → Backend → Infrastructure → AI — connected by bidirectional signal-line arrows (echoing a typical "frontend vs. backend" architecture diagram). Each station opens an in-page panel listing that domain's tools.
- **Blog (`/blog`)**: an intentionally inert stub — "not yet populated," real writing is a fast-follow after v1.
- **Contact (`/contact`)**: real contact channels (email, LinkedIn, schedule-a-call).
- **Journey (`/journey`)**: the Bolivia → Uruguay → Europe-goal personal narrative, reached from the hub's Start/identity node — unchanged in spirit from the earlier Venn-diagram direction, just reached differently.
- v1 content is **generic placeholders** throughout (projects, tools, experience dates all marked `20XX`/"Project A" style) — real content is a fast-follow once the structure is validated in production.
- Scope otherwise unchanged: no blog content yet, English-only (i18n deferred), desktop-first with basic touch support (a click-based diagram is inherently more mobile-friendly than platformer controls ever would have been).

## Capabilities

- `hub-diagram` — the flow-diagram hub: Start block, four ranked section branches, Contact terminal, Start → Journey link.
- `experience-timeline` — the `/experience` milestone trace.
- `project-board` — the `/projects` circuit board and its per-category panels.
- `skills-pipeline` — the `/skills` system pipeline and its per-domain panels.
- `journey-story` — the `/journey` personal narrative.
- `contact` — the `/contact` page and its channels.
- `accessibility-seo` — real, crawlable/screen-reader-visible markup across every route and panel.

## Out of scope (v1)

Blog content (route exists as a stub only), Spanish (i18n), real project/experience/tool data (placeholders only), mobile-first design, any game engine or canvas-based interaction, custom/commissioned art (everything is hand-authored SVG line art in the site's own visual language).
