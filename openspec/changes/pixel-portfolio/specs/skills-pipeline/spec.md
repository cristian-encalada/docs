## ADDED Requirements

### Requirement: Five-station system pipeline
The system SHALL provide a `/skills` route rendering a left-to-right pipeline of five stations — Electronics, Frontend, Backend, Infrastructure, AI — connected by bidirectional signal-line arrows, each station with a distinct icon.

#### Scenario: Skills page renders all stations in order
- **WHEN** a visitor navigates to `/skills`
- **THEN** five stations render left to right in the order Electronics, Frontend, Backend, Infrastructure, AI, each with a distinct icon

### Requirement: Stations open tool panels
The system SHALL open an in-page panel when a visitor clicks or keyboard-activates a station, listing that domain's tools/technologies as placeholder tags in v1.

#### Scenario: Opening a station panel
- **WHEN** a visitor clicks or keyboard-activates the Backend station
- **THEN** a panel opens listing the Backend domain's placeholder tools

#### Scenario: Closing a station panel
- **WHEN** a visitor closes an open station panel
- **THEN** the panel closes and focus returns to the station that opened it

### Requirement: Panel content present without JS
The system SHALL include each station panel's tool list in the page's DOM regardless of open/closed state, so it is crawlable and readable without executing JS.

#### Scenario: Content present with JS disabled
- **WHEN** a visitor loads `/skills` with JavaScript disabled
- **THEN** all station panel content (tool names) is still present in the served HTML
