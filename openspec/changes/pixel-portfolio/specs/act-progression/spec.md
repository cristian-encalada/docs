## ADDED Requirements

### Requirement: Single-level three-act order
The system SHALL present the story as one continuous horizontal level, traversed in the fixed order Bolivia (Act 1) → transition → Uruguay (Act 2) → The Horizon (Act 3), with no alternate paths or level select.

#### Scenario: Full traversal order
- **WHEN** the player walks from the start of the level to the end
- **THEN** they pass through the Bolivia zone, then the transition sequence, then the Uruguay zone, then The Horizon zone, in that order

### Requirement: Young-to-adult sprite transition
The system SHALL swap the player sprite from the young character to the adult character exactly once, during the Act 1 → Act 2 transition sequence.

#### Scenario: Sprite swap on transition
- **WHEN** the player completes the Act 1 → Act 2 transition sequence
- **THEN** the player entity's sprite changes from the young character to the adult character, and remains the adult character for the rest of the level

### Requirement: English-only, no blog (v1)
The system SHALL present all UI text in English only and SHALL NOT include a blog section or language switcher in v1.

#### Scenario: No language switcher present
- **WHEN** a visitor loads the site
- **THEN** no language switcher or non-English UI text is present, and no blog route/link exists
