## Purpose

Defines the WCAG 2.1 Level AA accessibility requirements the portfolio site must satisfy, covering color contrast, keyboard operability, focus visibility, ARIA state communication, landmark structure, and accessible naming.

## ADDED Requirements

### Requirement: Text color contrast meets 4.5:1 minimum

All normal-size text (below 18pt / 14pt bold) rendered on the page SHALL have a contrast ratio of at least 4.5:1 against its background in both light and dark themes. Large text (18pt+ or 14pt+ bold) SHALL meet 3:1 minimum.

#### Scenario: Section titles are readable in light mode
- **WHEN** the page is rendered in light mode
- **THEN** section title text (`h2.section-title`) contrast against its background SHALL be ≥ 4.5:1

#### Scenario: Section titles are readable in dark mode
- **WHEN** the page is rendered in dark mode
- **THEN** section title text contrast against its background SHALL be ≥ 4.5:1

#### Scenario: Muted and subtle text meets contrast in light mode
- **WHEN** the page is rendered in light mode
- **THEN** all text styled with muted, subtle, or faint color tokens SHALL have contrast ≥ 4.5:1 for normal-size text and ≥ 3:1 for large text

#### Scenario: Muted and subtle text meets contrast in dark mode
- **WHEN** the page is rendered in dark mode
- **THEN** all text styled with muted, subtle, or faint color tokens SHALL have contrast ≥ 4.5:1 for normal-size text and ≥ 3:1 for large text

---

### Requirement: All interactive elements are keyboard operable

Every interactive element on the page SHALL be reachable and activatable using keyboard alone (Tab, Shift+Tab, Enter, Space). No interactive behavior SHALL be locked behind mouse-only events.

#### Scenario: Technology items are keyboard reachable
- **WHEN** a user navigates the page using Tab
- **THEN** each technology item in the Technologies section SHALL receive focus

#### Scenario: Technology items are keyboard activatable
- **WHEN** a technology item has keyboard focus and the user presses Enter
- **THEN** the technology's URL SHALL open (if one exists)

#### Scenario: Expand/collapse toggles are keyboard operable
- **WHEN** a user focuses an experience expand/collapse button and presses Enter or Space
- **THEN** the responsibility list SHALL toggle its expanded/collapsed state

---

### Requirement: Focus is visually indicated on all interactive elements

Every interactive element (button, link, input, textarea) SHALL display a visible focus indicator when it receives keyboard focus. `outline: none` or `outline: 0` MUST NOT be applied without a replacement focus style that meets 3:1 non-text contrast.

#### Scenario: Form inputs show focus indicator
- **WHEN** a user tabs into the email or message input field
- **THEN** a visible focus ring or equivalent indicator SHALL be visible around the input

#### Scenario: Buttons show focus indicator
- **WHEN** a user tabs to any button (theme toggle, CV button, toggle buttons)
- **THEN** a visible focus ring SHALL be displayed

#### Scenario: Links show focus indicator
- **WHEN** a user tabs to any link (social links, technology links, project name links)
- **THEN** a visible focus ring SHALL be displayed

---

### Requirement: Toggle buttons communicate expanded state to assistive technology

Expand/collapse buttons that control collapsible regions SHALL expose their current expanded/collapsed state via `aria-expanded`. The value SHALL update synchronously when the region toggles.

#### Scenario: Collapsed experience reads as collapsed to screen reader
- **WHEN** an experience responsibility list is collapsed
- **THEN** the toggle button SHALL have `aria-expanded="false"`

#### Scenario: Expanded experience reads as expanded to screen reader
- **WHEN** an experience responsibility list is expanded
- **THEN** the toggle button SHALL have `aria-expanded="true"`

#### Scenario: Architecture overlay button communicates state
- **WHEN** the architecture overlay panel is closed
- **THEN** the architecture toggle button SHALL have `aria-expanded="false"`

#### Scenario: Architecture overlay open state is announced
- **WHEN** the architecture overlay panel is open
- **THEN** the architecture toggle button SHALL have `aria-expanded="true"`

---

### Requirement: Page main content is wrapped in a landmark element

The primary page content SHALL be enclosed in a `<main>` landmark element so screen reader users can navigate directly to content using landmark shortcuts.

#### Scenario: Main landmark exists
- **WHEN** a screen reader user requests a list of landmarks on the page
- **THEN** a `main` landmark SHALL be present

---

### Requirement: Icon-only interactive elements have accessible names

Interactive elements that contain only an icon (image, SVG, or single character) and no visible text SHALL have an accessible name provided via `aria-label` or equivalent mechanism.

#### Scenario: Technology links in project cards are named
- **WHEN** a screen reader user focuses a technology icon link in a project card
- **THEN** the accessible name SHALL describe the technology (e.g., "Angular")

#### Scenario: Architecture overlay close button is named
- **WHEN** a screen reader user focuses the close button on the architecture overlay
- **THEN** the accessible name SHALL be "Close" or equivalent

---

### Requirement: External links use safe opener attributes

All links that open in a new tab or window (`target="_blank"`) SHALL include `rel="noopener noreferrer"` to prevent the linked page from accessing the opener context.

#### Scenario: Social links include rel attribute
- **WHEN** a user activates a social link (LinkedIn, GitHub, GitLab)
- **THEN** the link SHALL include `rel="noopener noreferrer"`

#### Scenario: Project and technology links include rel attribute
- **WHEN** a user activates a project name link or technology icon link
- **THEN** the link SHALL include `rel="noopener noreferrer"`
