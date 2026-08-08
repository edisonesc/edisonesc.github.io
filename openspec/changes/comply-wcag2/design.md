## Context

See proposal.md — Why for motivation. This design covers the concrete technical approach for each issue category identified in the WCAG 2.1 AA audit.

The site uses Angular 19 (non-standalone modules), Bootstrap 5, and SCSS with CSS custom properties for theming (`data-theme` attribute on `documentElement`). All color tokens are defined in `src/styles.scss` under `:root` (light) and `[data-theme="dark"]` blocks. Templates are NgModule-based, not standalone.

## Goals / Non-Goals

**Goals:**
- Bring the site to WCAG 2.1 Level AA conformance for the issues identified
- All fixes must work correctly in both light and dark themes
- Changes must be non-breaking visually — no layout shifts, no design regressions

**Non-Goals:**
- WCAG 2.1 Level AAA compliance (e.g., skip navigation, enhanced contrast 7:1)
- Adding ARIA live regions for dynamic content beyond what's scoped
- Automated CI accessibility testing (out of scope for this change)
- Fixing hover-only tooltips (CSS `::after` approach) — deferred; they are non-interactive and informational only

## Decisions

### Decision 1: Fix color contrast by adjusting CSS custom property values only

**Chosen**: Raise the values of `--color-text-muted`, `--color-text-subtle`, and `--color-text-faint` in `styles.scss` to meet 4.5:1 against their respective backgrounds. Do not change the token names or how they are used.

**Rationale**: The token system is already well-structured. Changing the values is a one-location fix that propagates everywhere the tokens are used. Renaming or introducing new tokens would require touching every component that references the current names.

**Target values (light, background #ffffff):**
- `--color-text-muted`: `#767676` (exactly 4.5:1 on white — was #888888 at 3.5:1)
- `--color-text-subtle`: `#767676` (was #999999 at 2.8:1)
- `--color-text-faint`: `#767676` (was #bbbbbb at 1.9:1 — footer copyright)

**Note**: `--color-text-muted` and `--color-text-subtle` converge to the same accessible value in light mode. Their semantic distinction is preserved; the visual difference was too subtle to be meaningful anyway.

**Target values (dark, background #000000):**
- `--color-text-muted`: `#949494` (4.5:1 on black — was #808080 at 5.3:1, already passing but confirm)
- `--color-text-subtle`: `#767676` (4.5:1 on black — was #606060 at 3.1:1)
- `--color-text-faint`: `#767676` (4.5:1 on black — was #404040 at 1.6:1)

**Alternatives considered**: Per-component overrides — rejected as fragile and harder to maintain.

---

### Decision 2: Convert tech items from `<div (click)>` to `<a>` elements

**Chosen**: Replace `<div class="tech-item" (click)="open(item?.url)">` with `<a [href]="item?.url" target="_blank" rel="noopener noreferrer">` and keep the existing CSS class and styles. For items with no URL, use `<div>` without a click handler (or `<span>` — they are non-interactive and shouldn't be in tab order).

**Rationale**: Native `<a>` is natively keyboard-focusable and activatable with Enter. It also conveys semantics (link) that a button would not (a button implies an action, not navigation to a resource). Using a native element requires zero ARIA additions.

**Alternatives considered**: `<div role="button" tabindex="0" (keydown)>` — rejected; more code for the same result, and the semantic is still wrong (it's a link, not a button).

---

### Decision 3: Add `:focus-visible` styles globally for buttons and links; restore form input focus

**Chosen**: Add a global `:focus-visible` rule in `styles.scss` covering `button`, `a`, `input`, and `textarea`. Replace `outline: none` in `.form-input:focus` and `.form-textarea:focus` with a compliant focus style.

**Focus style**: `outline: 2px solid currentColor; outline-offset: 2px` — inherits the element's text color, works in both themes, respects high-contrast modes, and meets the 3:1 non-text contrast requirement.

**Rationale**: A single global rule avoids duplicating focus styles across all components. `:focus-visible` means the outline only appears for keyboard navigation (not mouse click), preserving the clean mouse UX.

**Alternatives considered**: Per-component `:focus-visible` — rejected as fragile and incomplete given the number of interactive elements.

---

### Decision 4: `aria-expanded` via Angular attribute binding

**Chosen**: Add `[attr.aria-expanded]="isExpanded(experience.title)"` to expand/collapse buttons in `timeline-item.component.html`. Add `[attr.aria-expanded]="isActive$ | async"` to the architecture toggle button.

**Rationale**: `[attr.aria-expanded]` binds to a boolean directly. Angular removes the attribute when the value is `null` or `undefined`, but `true`/`false` are valid string values for `aria-expanded`, so the binding works as-is.

---

### Decision 5: Wrap scrollable content in `<main>`

**Chosen**: Wrap `<div class="scroller">` in a `<main>` element (or change the scroller div to `<main class="scroller">`). The latter avoids adding a DOM wrapper and is preferred.

**Rationale**: Changing the tag from `div` to `main` is semantically correct and has no visual effect. Angular's change detection is unaffected by landmark tag choices.

---

### Decision 6: `aria-label` on icon-only links

**Chosen**: Add `[attr.aria-label]="technology?.name"` to the `<a>` technology links in `project-item.component.html`. Add `aria-label="Close"` to the architecture overlay close button.

**Rationale**: The technology name is already available as a data property. This is a one-liner per link with no structural change needed.

## Risks / Trade-offs

- **Visual change from contrast fixes**: Raising `--color-text-subtle` from #999 to #767676 darkens section titles slightly in light mode. The change is minor but intentional — this is the whole point.
- **Tech item layout**: Replacing `<div>` with `<a>` changes the default display from `block` to `inline`. The existing CSS targets `.tech-item` which is display-overridden to flex — should be unaffected, but verify visually.
- **`prefers-reduced-motion` coverage**: Currently only covers `.hidden` transition. Expand to cover theme-transition and other animations — low risk, correct behavior.

## Migration Plan

No data migration or deploy coordination needed. All changes are CSS and template-level. Deploy as a standard push to `gh-pages`.
