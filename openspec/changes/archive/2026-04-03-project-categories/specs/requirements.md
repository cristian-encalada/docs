# Requirements: Project categories

## Scenarios

1. **Overview** — Given a visitor on `/{locale}/projects`, they see three category cards with correct project counts for that locale.
2. **Category pages** — Given a visitor on `/{locale}/projects/electronics` (and web/software), they see projects for that category, optional tag chips, and sort by date or title.
3. **i18n** — Given EN or ES, all UI strings for projects (overview, filters, categories, buttons) use the active locale.
4. **Media** — Given a project with only `image` (no `video`), the card renders a still image; given `video`, the card renders video as today.
5. **Home** — Given the home page, the projects section still lists web projects and links to the full projects overview.
6. **Links** — Optional links (GitHub, preview, documentation, demo, paper) render when present in data.
