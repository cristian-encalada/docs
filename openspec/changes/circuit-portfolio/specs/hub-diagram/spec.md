## ADDED Requirements

### Requirement: Flow-diagram hub with four ranked sections
The system SHALL present the site's landing page (`/`) as a schematic flow diagram: a Start block branching to four section blocks — Experience, Projects, Skills, Blog, in that top-to-bottom order — where the order encodes priority (Experience most important, Blog least).

#### Scenario: Hub renders all four sections in priority order
- **WHEN** a visitor loads `/`
- **THEN** four labeled section blocks render in the order Experience, Projects, Skills, Blog

### Requirement: Section blocks navigate directly
The system SHALL make each section block a real link that navigates to its route on click or keyboard activation, with no intermediate preview step.

#### Scenario: Clicking a section block navigates
- **WHEN** a visitor clicks (or keyboard-activates) the Experience block
- **THEN** the browser navigates to `/experience` (and equivalently for Projects → `/projects`, Skills → `/skills`, Blog → `/blog`)

### Requirement: All sections converge on a Contact terminal
The system SHALL render a Contact block that all four section branches visually converge on, as a real link to `/contact`.

#### Scenario: Clicking Contact navigates
- **WHEN** a visitor clicks (or keyboard-activates) the Contact block
- **THEN** the browser navigates to `/contact`

### Requirement: Start block leads to the journey story
The system SHALL render the Start block (Cristian's identity) as a real link to `/journey`.

#### Scenario: Clicking Start navigates to the journey page
- **WHEN** a visitor clicks (or keyboard-activates) the Start block
- **THEN** the browser navigates to `/journey`
