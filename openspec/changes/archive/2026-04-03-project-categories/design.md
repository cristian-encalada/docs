# Design: Project categories

## Data

- `data/projectTypes.ts` — `ProjectCategory`, `BaseProject`, `WebProject`, `ElectronicsProject`, `SoftwareProject`, `Project`, `ProjectsData`.
- Per-category JSON-like modules keyed by `en` / `es`.

## UI

- `ProjectsOverviewCard` — links to `/{locale}/projects/{category}`.
- `ProjectsLayout` — client component; tag filter + sort; maps to `Card`.
- `Card` — optional `video` / `image`; footer links for code, preview, documentation, demo, paper (i18n labels).

## Routing

Next.js App Router under `app/[locale]/projects/`.

## Icons

Extend `techStackIcons` with Arduino, Python, PyTorch, ESP32 for new stacks.
