## ADDED Requirements

### Requirement: Real, keyboard-operable markup throughout
The system SHALL implement every hub block, board chip, pipeline station, timeline milestone, and panel control as a real link/button with an accessible name, never as a click-only `<div>`/bare-SVG-shape handler with no keyboard/assistive-tech path.

#### Scenario: Full keyboard traversal
- **WHEN** a visitor navigates the hub, `/projects`, `/skills`, and their panels using only the keyboard
- **THEN** every block, chip, station, and panel close control can be reached and activated without a mouse

### Requirement: Independently indexable routes
The system SHALL expose every route — `/`, `/experience`, `/projects`, `/skills`, `/blog`, `/contact`, `/journey` — as a real, separately-linkable URL, each indexable on its own.

#### Scenario: SEO audit passes per route
- **WHEN** a Lighthouse/SEO audit runs against each route
- **THEN** each route's core content (labels, project/tool listings, experience milestones, journey narrative, contact channels) is reported as indexable

### Requirement: No JS-only content
The system SHALL ensure panel content (project lists, tool lists), experience milestones, journey narrative text, and contact channels exist in the served HTML independent of JavaScript execution.

#### Scenario: Crawler access without JS
- **WHEN** a crawler fetches any route without executing JavaScript
- **THEN** the page's core text content is present in the HTML
