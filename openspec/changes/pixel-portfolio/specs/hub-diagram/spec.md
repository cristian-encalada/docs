## ADDED Requirements

### Requirement: Four-circle Venn diagram hub
The system SHALL present the site's landing page (`/`) as an SVG Venn diagram with four overlapping circles labeled Electronics, Software, AI/ML, and Gamedev.

#### Scenario: Hub renders all four areas
- **WHEN** a visitor loads `/`
- **THEN** four labeled, visually overlapping circles are rendered: Electronics, Software, AI/ML, Gamedev

### Requirement: Circles navigate to area detail views
The system SHALL make each circle a real, keyboard-focusable link that navigates to that area's detail route.

#### Scenario: Clicking a circle navigates
- **WHEN** a visitor clicks (or activates via keyboard) the Electronics circle
- **THEN** the browser navigates to `/areas/electronics` (and equivalently for software, ai-ml, gamedev)

### Requirement: Center overlap leads to the journey story
The system SHALL render the zone where all four circles overlap as a clickable element carrying Cristian's name/identity, navigating to `/journey`.

#### Scenario: Clicking the center navigates to the journey page
- **WHEN** a visitor clicks (or activates via keyboard) the center overlap zone
- **THEN** the browser navigates to `/journey`
