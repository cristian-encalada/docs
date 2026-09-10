# Profile sections

### Requirement: Home page contains professional sections

The home page SHALL render Experience, Certifications, and Skills after About and before Projects.

#### Scenario: Professional sections render in English and Spanish

- **GIVEN** a visitor opens the home page in either supported locale
- **THEN** each section uses the matching translated labels and locale-specific content

### Requirement: Experience uses a responsive timeline

The Experience section SHALL render one chronological timeline item per role with dates, location, company, title, and achievement bullets.

#### Scenario: Timeline adapts to viewport

- **GIVEN** a visitor views the Experience section on desktop or mobile
- **THEN** the timeline remains readable, connected, and free of horizontal overflow

### Requirement: Resume is publicly downloadable

The profile social-link row SHALL include an accessible link to the general resume file.

#### Scenario: Resume link is available

- **GIVEN** a visitor activates the Resume link
- **THEN** the public general resume downloads or opens from the configured static path

### Requirement: Tailored resume stays private

The Entropy-specific resume SHALL NOT be placed under the public static asset directory or linked from the site.
