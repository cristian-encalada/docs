# Tasks: circuit-portfolio

- [x] 0.1 Commit pending `docs` changes (`.gitignore` `.agents/` entry, `skills-lock.json`)
- [x] 0.2 Install Playwright MCP (`@playwright/mcp`) for visual verification during development

- [x] 1.1 Scaffold Astro project at `~/personal/projects/pixel-portfolio` (TypeScript strict, Tailwind v4 via `@tailwindcss/vite`, pnpm as package manager)
- [x] 1.2 Install the `astro` skill (astrolicious/agent-skills) into the project, targeting Claude Code
- [x] 1.3 Init git, initial commit of the scaffold
- [x] 1.4 Design and validate the full site map as an interactive HTML/SVG mockup (`design-mockup.html`), iterated live with the user before committing to code
- [ ] 1.5 New GitHub repo, connect Vercel, confirm preview deploy pipeline works end-to-end

- [x] 2.1 Build the shared visual system (CSS custom properties for both themes, copper-trace/chip/title-block styles, monospace-label conventions) as reusable Astro/CSS, matching `design-mockup.html`
- [x] 2.2 Build `/`: flow-diagram hub — Start block, four section blocks in priority order (Experience, Projects, Skills, Blog), Contact terminal, all as real links (hub-diagram capability)

- [ ] 3.1 Build `/experience`: horizontal milestone trace with the three career milestones, content rendered directly (no click-to-reveal) (experience-timeline capability)

- [ ] 4.1 Build `/projects`: circuit board with center identity chip (→ `/journey`) and four category chips
- [ ] 4.2 Build the in-page panel component (open/close, DOM content present regardless of visibility, focus return) and wire it to the category chips with placeholder project data (project-board capability)

- [ ] 5.1 Build `/skills`: five-station pipeline (Electronics, Frontend, Backend, Infrastructure, AI) with bidirectional trace arrows and distinct per-station icons
- [ ] 5.2 Reuse the panel component from 4.2, wired to stations with placeholder tool data (skills-pipeline capability)

- [ ] 6.1 Build `/journey`: Bolivia → Uruguay → Europe-goal narrative as static/scroll-animated content (journey-story capability)

- [ ] 7.1 Build `/contact`: real contact channels (email, LinkedIn, schedule-a-call — confirm final channel list before launch) (contact capability)

- [ ] 8.1 Build `/blog`: inert stub page ("not yet populated")

- [ ] 9.1 Full keyboard-only pass across every route and panel
- [ ] 9.2 Lighthouse/SEO check per route (`/`, `/experience`, `/projects`, `/skills`, `/blog`, `/contact`, `/journey`)
- [ ] 9.3 Playwright MCP pass: drive the site in a real browser, screenshot every route for visual review
- [ ] 9.4 Deploy to Vercel production

## Superseded (kept for history)

- [x] ~~Add kaplay dependency~~ — removed; no game engine in the current design
- [x] ~~Player entity, camera, parallax, touch d-pad~~ — not applicable; no side-scrolling movement
- [x] ~~4-circle Venn-diagram hub~~ — replaced by the flow-diagram hub; Venn overlap didn't fit a traditional portfolio's section structure
- [x] ~~Numbered-callout-pin "Parts of a Computer" area-detail views~~ — replaced by the circuit-board (`/projects`) and system-pipeline (`/skills`) pages, which serve the same "browse a category" job more clearly
- [x] ~~Education section~~ — replaced by Experience; the user prioritized career history over academic credentials
