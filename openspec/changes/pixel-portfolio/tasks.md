# Tasks: pixel-portfolio

- [x] 0.1 Commit pending `docs` changes (`.gitignore` `.agents/` entry, `skills-lock.json`)
- [x] 0.2 Install Playwright MCP (`@playwright/mcp`) for visual verification during development

- [x] 1.1 Scaffold Astro project at `~/personal/projects/pixel-portfolio` (TypeScript strict, Tailwind v4 via `@tailwindcss/vite`, pnpm as package manager)
- [x] 1.2 Install the `astro` skill (astrolicious/agent-skills) into the project, targeting Claude Code
- [x] 1.3 Init git, initial commit of the scaffold
- [ ] 1.4 New GitHub repo, connect Vercel, confirm preview deploy pipeline works end-to-end

- [ ] 2.1 Design the SVG Venn diagram (4 circles: Electronics, Software, AI/ML, Gamedev, overlapping, center identity zone) and build `/` (hub-diagram capability)
- [ ] 2.2 Wire circle/center click-throughs to `/areas/<area>` and `/journey` routes

- [ ] 3.1 Design one themed labeled illustration (SVG, "Parts of a Computer" worksheet style) per area
- [ ] 3.2 Build the numbered-callout-pin system (positioning, keyboard focus order) reused across all 4 area routes
- [ ] 3.3 Populate each area with generic placeholder projects (area-detail capability)

- [ ] 4.1 Build the project panel component (open/close, DOM content present regardless of visibility) reused by all pins (project-interaction capability)

- [ ] 5.1 Build `/journey`: Bolivia → Uruguay → Europe-goal narrative as static/scroll-animated content (journey-story capability)

- [ ] 6.1 Full keyboard-only pass across hub, all 4 areas, panels, and journey page
- [ ] 6.2 Lighthouse/SEO check per route (`/`, each `/areas/<area>`, `/journey`)
- [ ] 6.3 Playwright MCP pass: drive the site in a real browser, screenshot the hub and each area for visual review
- [ ] 6.4 Deploy to Vercel production

## Superseded (from the earlier KAPLAY-based direction, kept for history)

- [x] ~~Add kaplay dependency~~ — removed, no game engine in the current design
- [x] ~~Player entity, camera, parallax, touch d-pad~~ — not applicable, no side-scrolling movement
- [x] ~~Act transition (sprite swap), Act 3 closing scene~~ — replaced by the journey page and hub center
