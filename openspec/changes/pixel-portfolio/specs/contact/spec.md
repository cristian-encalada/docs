## ADDED Requirements

### Requirement: Contact page with real channels
The system SHALL provide a `/contact` route listing real, working contact channels (e.g. email, LinkedIn, schedule-a-call), reached from the hub's Contact terminal.

#### Scenario: Contact page renders working channels
- **WHEN** a visitor navigates to `/contact`
- **THEN** the page lists contact channels that are real, working links, not placeholder text

### Requirement: Reachable from every section
The system SHALL make `/contact` reachable from the hub in one click, since all four hub section branches converge on the Contact terminal.

#### Scenario: Contact reachable from the hub
- **WHEN** a visitor is on `/`
- **THEN** clicking the Contact terminal navigates to `/contact`
