## ADDED Requirements

### Requirement: Journey narrative page
The system SHALL provide a `/journey` route presenting the Bolivia (Sucre → Cochabamba) → Uruguay → Europe-goal personal narrative as a timeline/story page, reachable by clicking the hub diagram's center overlap.

#### Scenario: Journey page renders the narrative
- **WHEN** a visitor navigates to `/journey`
- **THEN** the page presents the three-part narrative (Bolivia origin, Uruguay transition to software/AI, Europe goal) as static readable content

### Requirement: No game mechanic
The system SHALL present the journey narrative as static content (optionally with scroll-triggered CSS animation/transitions), not as a playable or interactive game sequence.

#### Scenario: No interactive gameplay required
- **WHEN** a visitor reads the journey page
- **THEN** no input beyond normal scrolling/reading is required to view the full narrative
