## Why

The portfolio site has several WCAG 2.1 Level AA violations that make it inaccessible to keyboard-only users and screen reader users, and fail color contrast requirements for users with low vision. Fixing these gaps is the right baseline for a public-facing site, and the issues are targeted and low-risk to resolve.

## What Changes

- **Color contrast**: Raise muted/subtle/faint text token values in both light and dark themes so all body and label text meets the 4.5:1 minimum ratio (3:1 for large text)
- **Tech items keyboard access**: Replace non-interactive `<div (click)>` elements in the technologies section with proper `<a>` or `<button>` elements so they are reachable and activatable by keyboard
- **Focus visibility**: Replace `outline: none` on form inputs and add explicit `:focus-visible` styles on all interactive elements (buttons, links, inputs, textarea)
- **ARIA expanded state**: Add `[attr.aria-expanded]` bindings to the experience expand/collapse toggles and the architecture overlay toggle button
- **Page landmark**: Wrap the main content in a `<main>` element so screen reader users can skip to content
- **Technology link accessible names**: Add `aria-label` to icon-only `<a>` links in the project technology list
- **Architecture overlay close button**: Replace bare `&times;` with an `aria-label="Close"` on the close button
- **External link safety**: Add `rel="noopener noreferrer"` to all `target="_blank"` links

## Capabilities

### New Capabilities

- `accessibility/wcag2`: Defines the accessibility requirements the portfolio must meet — landmark structure, color contrast ratios, keyboard operability, focus visibility, and ARIA state communication

### Modified Capabilities

_None — no existing specs exist yet._

## Impact

- **`src/styles.scss`**: CSS custom property values for `--color-text-muted`, `--color-text-subtle`, `--color-text-faint` in both `:root` and `[data-theme="dark"]` blocks
- **`src/app/pages/home/home.component.html`**: Add `<main>` landmark, fix external link `rel` attributes
- **`src/app/pages/home/home.component.scss`**: Add `:focus-visible` styles; fix `outline: none` on form inputs
- **`src/app/components/timeline-item/timeline-item.component.html`**: Add `[attr.aria-expanded]` to expand/collapse buttons
- **`src/app/components/architecture-overlay/architecture-overlay.component.html`**: Add `aria-label="Close"` to close button, `aria-expanded` to toggle button
- **`src/app/pages/home/home.component.html` (tech section)**: Convert `<div (click)>` tech items to accessible `<a>` elements; add `aria-label` to icon-only technology links in project cards
- No dependency changes, no API surface changes, no breaking changes
