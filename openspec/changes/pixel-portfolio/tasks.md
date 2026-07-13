# Tasks: pixel-portfolio

- [ ] 0.1 Commit pending `docs` changes (`.gitignore` `.agents/` entry, `skills-lock.json`)
- [ ] 0.2 Install Playwright MCP (`@playwright/mcp`) for visual verification during development

- [ ] 1.1 Scaffold Astro project at `~/personal/projects/pixel-portfolio` (TypeScript strict, Tailwind integration)
- [ ] 1.2 Add `kaplay` dependency; single client-side canvas island (`client:only`) booting one `kaplay()` instance
- [ ] 1.3 `src/game/` (KAPLAY logic) separated from `src/components/` + `src/pages/` (Astro DOM layer)
- [ ] 1.4 Init git, new GitHub repo, connect Vercel, confirm preview deploy pipeline works end-to-end

- [ ] 2.1 Player entity: idle/walk/jump animation states, gravity + ground collision, horizontal-only movement
- [ ] 2.2 Camera follow with level-bounds clamping
- [ ] 2.3 Parallax background layers (2-3 depth layers, swappable per act)
- [ ] 2.4 On-screen touch d-pad + interact button overlay (DOM, shown only on touch-capable viewports)

- [ ] 3.1 Act 1 (Bolivia) zone geometry/tileset dressing, young sprite
- [ ] 3.2 Generic interactable-node system (proximity trigger + prompt + `project:open` event → DOM panel)
- [ ] 3.3 Port `data/electronicsProjectsData.ts` shape into `src/data/projects.ts`; place 3 electronics nodes

- [ ] 4.1 Act transition sequence (young → adult sprite swap, "boarding transport" beat)
- [ ] 4.2 Act 2 (Uruguay) zone geometry/tileset dressing, adult sprite
- [ ] 4.3 Port software/web/gamedev project data; place TagNCount, Alquivago, 3D Web App, LucidNav nodes

- [ ] 5.1 Act 3 (The Horizon) closing scene: cliff/dock + European skyline backdrop, no combat/puzzle logic
- [ ] 5.2 Contact CTA node/panel with real email/LinkedIn/resume links

- [ ] 6.1 Full playthrough: keyboard (desktop) + touch d-pad (mobile viewport)
- [ ] 6.2 Screen-reader pass over DOM panels/CTA (canvas is inherently inaccessible; DOM must carry all essential info)
- [ ] 6.3 Lighthouse/SEO check — project titles/descriptions indexable
- [ ] 6.4 Playwright MCP pass: drive the game in a real browser, screenshot each act for visual review
- [ ] 6.5 Deploy to Vercel production
