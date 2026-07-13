## ADDED Requirements

### Requirement: Circuit board with four project categories
The system SHALL provide a `/projects` route rendering a circuit board with four category chips — Electronics, Software, AI/ML, Gamedev — connected by copper traces to a center identity chip.

#### Scenario: Projects page renders all categories
- **WHEN** a visitor navigates to `/projects`
- **THEN** four category chips render, each connected to the center chip by a trace

### Requirement: Category chips open project panels
The system SHALL open an in-page panel when a visitor clicks or keyboard-activates a category chip, listing that category's projects (title, one-line description, links) as placeholder entries in v1.

#### Scenario: Opening a category panel
- **WHEN** a visitor clicks or keyboard-activates the Electronics chip
- **THEN** a panel opens listing the Electronics category's placeholder projects

#### Scenario: Closing a category panel
- **WHEN** a visitor closes an open category panel
- **THEN** the panel closes and focus returns to the chip that opened it

### Requirement: Panel content present without JS
The system SHALL include each category panel's project list in the page's DOM regardless of open/closed state, so it is crawlable and readable without executing JS.

#### Scenario: Content present with JS disabled
- **WHEN** a visitor loads `/projects` with JavaScript disabled
- **THEN** all category panel content (project titles, descriptions, links) is still present in the served HTML

### Requirement: Center chip leads to the journey story
The system SHALL render the board's center identity chip as a real link to `/journey`, matching the hub's Start block.

#### Scenario: Clicking the center chip navigates
- **WHEN** a visitor clicks (or keyboard-activates) the center chip
- **THEN** the browser navigates to `/journey`
