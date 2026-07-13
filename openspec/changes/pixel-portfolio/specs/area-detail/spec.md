## ADDED Requirements

### Requirement: Labeled-illustration detail view per area
The system SHALL provide one detail route per hub circle (`/areas/electronics`, `/areas/software`, `/areas/ai-ml`, `/areas/gamedev`), each rendering a themed SVG illustration with numbered callout pins in a "labeled worksheet" style, one pin per project in that area.

#### Scenario: Area route renders its illustration and pins
- **WHEN** a visitor loads `/areas/electronics`
- **THEN** an Electronics-themed illustration renders with one numbered pin per placeholder project in that area

### Requirement: v1 placeholder project content
The system SHALL populate each area's pins with generic placeholder projects (e.g. "Project A", "Project B") in v1, not real ported data.

#### Scenario: Placeholder content is present
- **WHEN** a visitor views any area detail route
- **THEN** the projects shown are clearly placeholder entries, not real project data from `docs`'s `data/*ProjectsData.ts`

### Requirement: Pins are keyboard-focusable
The system SHALL render each callout pin as a real link/button, not a click-only element with no keyboard/assistive-tech affordance.

#### Scenario: Pin is reachable by keyboard
- **WHEN** a visitor tabs through an area detail page
- **THEN** every pin receives focus in sequence and can be activated with Enter/Space
