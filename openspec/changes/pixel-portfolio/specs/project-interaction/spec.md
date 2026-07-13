## ADDED Requirements

### Requirement: Interactable project nodes
The system SHALL place each portfolio project as an interactable node in the world; when the player is in proximity and presses the interact key, a DOM panel SHALL open showing that project's title, description, tech stack, and available links (GitHub/preview/demo/documentation), sourced from data shaped like this repo's `data/projectTypes.ts` union.

#### Scenario: Opening a project panel
- **WHEN** the player is near a project node and presses the interact key
- **THEN** a DOM panel opens showing that project's title, description, tech stack, and available links

#### Scenario: Closing a project panel
- **WHEN** the player closes an open project panel
- **THEN** the panel is removed from the DOM and the player regains movement control

### Requirement: Full node coverage
The system SHALL include an interactable node for each of: the 3 electronics projects (Act 1), and TagNCount, Alquivago, 3D Web App, and LucidNav (Act 2).

#### Scenario: All v1 projects reachable
- **WHEN** the player traverses the full level
- **THEN** they can interact with all 3 electronics project nodes in Act 1 and all 4 software/web/gamedev project nodes in Act 2
