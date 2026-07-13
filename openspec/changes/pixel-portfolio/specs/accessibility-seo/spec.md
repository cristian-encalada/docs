## ADDED Requirements

### Requirement: DOM content independent of canvas
The system SHALL render all project titles, descriptions, and contact links as real DOM markup that exists independently of canvas/game state, so the content remains available to screen readers and crawlers even without canvas rendering or JS-driven gameplay.

#### Scenario: Screen reader access
- **WHEN** a screen reader parses the page
- **THEN** all project titles/descriptions and the contact links are readable, regardless of canvas/game state

#### Scenario: Crawler access without canvas
- **WHEN** a crawler fetches the page without executing canvas/game logic
- **THEN** project titles/descriptions and contact links are still present in the served/rendered HTML

### Requirement: Indexable project content
The system SHALL keep project titles and descriptions indexable (e.g. verified via a Lighthouse/SEO pass) even though the gameplay itself is not crawlable.

#### Scenario: SEO audit passes
- **WHEN** a Lighthouse/SEO audit runs against the deployed site
- **THEN** project titles and descriptions are reported as indexable content
