# Proposal: Project categories (Web, Electronics/IoT, Software)

## Why

The portfolio listed all projects in one flat view on `/projects` and the home page. Grouping by category improves scanability and scales as more hardware and ML work is added.

## What changes

- `/projects` becomes a category overview with three cards (counts, descriptions).
- New routes: `/projects/web`, `/projects/electronics`, `/projects/software`.
- Data split: `webProjectsData`, `electronicsProjectsData`, `softwareProjectsData` with shared types in `projectTypes.ts`.
- Tag filter + sort (date / title) on each category page.
- Existing projects: **TagNCount** → software; **Alquivago** and **3D Web App** → web.
- Home `#projects` shows web projects only plus a link to the full projects overview.

## Out of scope (future)

Global search, multi-tag filters, per-project detail pages.
