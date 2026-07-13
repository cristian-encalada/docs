## ADDED Requirements

### Requirement: Career milestone trace
The system SHALL provide an `/experience` route presenting a horizontal milestone trace with three career milestones: Electronics Engineer (Bolivia), Professional Transition (Electronics → Software/AI, Uruguay), and AI/ML Engineer (Uruguay, current).

#### Scenario: Experience page renders all milestones
- **WHEN** a visitor navigates to `/experience`
- **THEN** all three milestones render along the trace with role, place, and dates visible

### Requirement: Milestone content visible without interaction
The system SHALL render each milestone's role, place, dates, and one-line description directly on the page, not behind a click-to-reveal panel.

#### Scenario: No interaction required to read career history
- **WHEN** a visitor loads `/experience` with JavaScript disabled
- **THEN** all milestone details are still fully readable

### Requirement: v1 placeholder content
The system SHALL populate all milestone dates as `20XX`-style placeholders (or `20XX–Present` for the current role) and mark employer/institution names as placeholders in v1, not real dates or names.

#### Scenario: Placeholder dates are present
- **WHEN** a visitor views `/experience`
- **THEN** milestone dates are clearly placeholder values, not fabricated specific dates
