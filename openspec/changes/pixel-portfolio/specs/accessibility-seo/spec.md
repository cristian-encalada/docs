## ADDED Requirements

### Requirement: Real, keyboard-operable markup throughout
The system SHALL implement the hub circles, the diagram center, area pins, and panel controls as real links/buttons with accessible names, never as click-only `<div>`/SVG-shape handlers with no keyboard/assistive-tech path.

#### Scenario: Full keyboard traversal
- **WHEN** a visitor navigates the hub, an area detail view, and its panels using only the keyboard
- **THEN** every circle, the center, every pin, and every panel close control can be reached and activated without a mouse

### Requirement: Independently indexable routes
The system SHALL expose the hub, each area detail view, and the journey page as real, separately-linkable URLs (`/`, `/areas/<area>`, `/journey`), each indexable on its own.

#### Scenario: SEO audit passes per route
- **WHEN** a Lighthouse/SEO audit runs against `/`, an area route, and `/journey`
- **THEN** each route's core content (labels, project titles/descriptions, journey narrative) is reported as indexable

### Requirement: No JS-only content
The system SHALL ensure project panel content and journey narrative text exist in the served HTML independent of JavaScript execution.

#### Scenario: Crawler access without JS
- **WHEN** a crawler fetches any route without executing JavaScript
- **THEN** the page's core text content (area labels, project details, journey narrative) is present in the HTML
