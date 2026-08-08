## 1. Color Contrast — CSS Token Values

- [x] 1.1 In `src/styles.scss` `:root` block, update `--color-text-muted` from `#888888` to `#767676`
- [x] 1.2 In `src/styles.scss` `:root` block, update `--color-text-subtle` from `#999999` to `#767676`
- [x] 1.3 In `src/styles.scss` `:root` block, update `--color-text-faint` from `#bbbbbb` to `#767676`
- [x] 1.4 In `src/styles.scss` `[data-theme="dark"]` block, update `--color-text-subtle` from `#606060` to `#767676`
- [x] 1.5 In `src/styles.scss` `[data-theme="dark"]` block, update `--color-text-faint` from `#404040` to `#767676`

## 2. Focus Visibility

- [x] 2.1 In `src/styles.scss`, add a global `:focus-visible` rule covering `button`, `a`, `input`, `textarea` with `outline: 2px solid currentColor; outline-offset: 2px`
- [x] 2.2 In `src/app/pages/home/home.component.scss`, change `.form-input:focus` and `.form-textarea:focus` from `outline: none` to use the inherited global focus style (remove the `outline: none` override entirely)

## 3. Landmark Structure

- [x] 3.1 In `src/app/pages/home/home.component.html`, change `<div class="scroller" ...>` to `<main class="scroller" ...>` and close with `</main>`

## 4. Tech Items — Keyboard Accessibility

- [x] 4.1 In `src/app/pages/home/home.component.html`, replace `<div class="tech-item" [attr.data-tooltip]="..." (click)="open(item?.url)">` with `<a class="tech-item" [href]="item?.url" target="_blank" rel="noopener noreferrer" [attr.data-tooltip]="..." [attr.aria-label]="item?.name">` for items that have a URL; for items without a URL, keep as `<div class="tech-item">` with no click handler

## 5. ARIA Expanded State

- [x] 5.1 In `src/app/components/timeline-item/timeline-item.component.html`, add `[attr.aria-expanded]="isExpanded(experience.title)"` to the experience expand/collapse `<button class="responsibilities-toggle">`
- [x] 5.2 In `src/app/components/timeline-item/timeline-item.component.html`, add `[attr.aria-expanded]="isExpanded(project.name)"` to the project expand/collapse `<button class="responsibilities-toggle">` inside the `#multiProjects` template
- [x] 5.3 In `src/app/components/architecture-overlay/architecture-overlay.component.html`, add `[attr.aria-expanded]="isActive$ | async"` to the `<button class="arch-toggle-btn">`

## 6. Accessible Names for Icon-Only Elements

- [x] 6.1 In `src/app/components/architecture-overlay/architecture-overlay.component.html`, add `aria-label="Close"` to `<button class="arch-panel-close">`
- [x] 6.2 In `src/app/components/project-item/project-item.component.html`, add `[attr.aria-label]="technology?.name"` to `<a [href]="technology?.url" class="tech-link">`

## 7. External Link Safety

- [x] 7.1 In `src/app/pages/home/home.component.html`, add `rel="noopener noreferrer"` to all `target="_blank"` social links in the header (LinkedIn, GitHub, GitLab)
- [x] 7.2 In `src/app/pages/home/home.component.html`, add `rel="noopener noreferrer"` to all `target="_blank"` social links in the footer
- [x] 7.3 In `src/app/components/project-item/project-item.component.html`, add `rel="noopener noreferrer"` to the project name `<a>` link
- [x] 7.4 In `src/app/components/project-item/project-item.component.html`, add `rel="noopener noreferrer"` to the technology `<a class="tech-link">` links

## 8. Verify

- [x] 8.1 Run `ng build` to confirm no compilation errors
- [ ] 8.2 Visually inspect light and dark modes — confirm section titles and body text are clearly legible, no unintended layout changes in the technologies section
- [ ] 8.3 Keyboard-navigate the full page (Tab through all sections) — confirm all elements receive visible focus and tech items in the Technologies section are reachable and can be activated with Enter
- [ ] 8.4 Check expand/collapse in experience section: Tab to toggle button, press Enter, confirm `aria-expanded` attribute updates (inspect with DevTools → Accessibility panel)
- [ ] 8.5 Confirm architecture overlay toggle button and close button have correct `aria-label` values in DevTools
