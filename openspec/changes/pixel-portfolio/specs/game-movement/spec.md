## ADDED Requirements

### Requirement: Desktop keyboard movement
The system SHALL let a player move left/right along a single horizontal axis using arrow keys or WASD, and jump (gravity-affected arc) with a dedicated jump key.

#### Scenario: Horizontal movement
- **WHEN** the player presses the left or right arrow key (or A/D)
- **THEN** the player entity moves in that direction along the horizontal axis

#### Scenario: Jump
- **WHEN** the player presses the jump key while grounded
- **THEN** the player entity performs a gravity-affected jump arc and lands back on the ground

### Requirement: Camera follow with bounds
The system SHALL keep the camera following the player horizontally, clamped so it never scrolls past the level's start or end.

#### Scenario: Camera tracks player
- **WHEN** the player moves horizontally within the level
- **THEN** the camera pans to keep the player in view, without scrolling beyond the level's start/end bounds

### Requirement: Touch control fallback
The system SHALL show an on-screen d-pad and interact button on touch-capable viewports, providing equivalent control to keyboard input.

#### Scenario: Touch viewport shows on-screen controls
- **WHEN** the site loads on a touch-capable viewport
- **THEN** an on-screen d-pad and interact button appear and produce the same movement/interaction as keyboard input

#### Scenario: Desktop viewport hides on-screen controls
- **WHEN** the site loads on a non-touch desktop viewport
- **THEN** the on-screen d-pad and interact button are not shown
