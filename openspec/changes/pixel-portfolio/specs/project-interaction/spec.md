## ADDED Requirements

### Requirement: Pin-triggered project panels
The system SHALL open a DOM panel when a visitor clicks (or keyboard-activates) a project pin on an area detail view, showing that project's title, description, tech stack, and available links (GitHub/preview/demo/documentation).

#### Scenario: Opening a project panel
- **WHEN** a visitor clicks or keyboard-activates a project pin
- **THEN** a DOM panel opens showing that project's title, description, tech stack, and available links

#### Scenario: Closing a project panel
- **WHEN** a visitor closes an open project panel
- **THEN** the panel closes and focus returns to the pin that opened it

### Requirement: Panel content present without JS
The system SHALL include each project panel's content in the page's DOM regardless of open/closed state (toggled via `hidden`/`display`, not injected only on click), so it is crawlable and readable without executing JS.

#### Scenario: Content present with JS disabled
- **WHEN** a visitor loads an area detail page with JavaScript disabled
- **THEN** all project panel content (title, description, tech stack, links) is still present in the served HTML, even if visually collapsed
