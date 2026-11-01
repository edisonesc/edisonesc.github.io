# Design: edisonesc.github.io

This site uses the **Minimal Serif** design system: typography-led, editorial, flat, with hairline rules and generous whitespace.

The full, reusable system lives in the `minimal-serif-design` skill at `~/.claude/skills/minimal-serif-design/` (`SKILL.md` and `DESIGN.md`). This file records the options chosen for this site and the site-specific rules. Where the two disagree, this file wins.

## Chosen options

| Decision       | Choice                                                                                      |
| -------------- | ------------------------------------------------------------------------------------------- |
| Palette        | **Stone** (`#f3f1ec` bg, `#18171a` ink), with **Ink** as dark mode                          |
| Display font   | **Cormorant Garamond**: 300 italic for display, 400 for headings, 500 italic for h3         |
| Body / UI font | **Inter** 400 and 500                                                                       |
| Accent         | **Deep Ochre** `#c4862a`                                                                    |
| Animation      | **Refined**: section fade-up, hairline rule extend, link underline slide, button arrow pull |

Fonts load through Astro's fonts API (`astro.config.mjs`), not a Google Fonts `@import`.

## Tokens

All values live in **`src/styles/tokens.css`**, and every page (site, `/cv`, `/og`) reads from it. Don't hardcode colors, sizes or durations anywhere else. `src/styles/global.css` maps the tokens to Tailwind utilities (`bg-bg`, `text-ink-soft`, `border-rule`, …) and defines the shared classes:

| Class                                            | Use                                                                                         |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| `.wrap`, `.section`, `.prose`, `.grid-editorial` | Container (1180px), section padding, 680px text column, 1fr/2fr heading-beside-content grid |
| `.t-display`, `.t-lede`, `.label`, `.t-small`    | Hero name, serif lede paragraphs, tracked uppercase metadata, small UI text                 |
| `.btn`, `.btn-accent`, `.btn-ghost`              | Square tracked-uppercase buttons. Put `<Icon class="arrow">` inside for the arrow pull.     |
| `.link-text`, `.link-slide`                      | Underlined inline links, and nav links with a sliding underline                             |
| `.toggle`                                        | "Show more" `<details>` summaries (plus icon rotates when open)                             |
| `.rule`, `.rule-extend`, `.reveal`               | Hairline divider, the rule that extends on scroll, and the fade-up on scroll                |

`.reveal` and `.rule-extend` only hide content once `html.js` is set, so the page is complete without JavaScript, and they are static under `prefers-reduced-motion`.

## Site-specific rules

1. **The accent appears exactly twice:** the "Download CV" button (the page's single accent CTA) and the current role's bar on the timeline (its single highlight). Never use ochre as text: it fails contrast on Stone.
2. **Deliberate contrast deviations from the system palette:** `--ink-soft` is `#6e6b67` (Stone) and `#8a837d` (Ink), so small labels pass WCAG AA.
3. **No brand logos.** The system allows thin-stroke icons only, so social profiles and technologies are text. UI icons come from `src/components/Icon.astro` (Lucide paths, 1.5 stroke). Add new ones there.
4. **The hero is the name**, set as `.t-display` across two lines with the surname indented. Keep it left-aligned on the plain background.
5. **Sections follow one pattern:** `.rule.rule-extend`, then a `.grid-editorial` with the `h2` (and an optional `.label`) in the left column, sticky on desktop, and content on the right.
6. **Lists are open rows:** a `border-top: 1px solid var(--rule)` row with whitespace. Never cards, shadows or rounded corners.
7. **The timeline** (`CareerTimeline.astro`):
   - **Marks:** ink rules for work, `--ink-mid` ticks for projects, outlined bars for education, labels above bars. Row packing reserves label width so labels never collide.
   - **Axis:** starts at college or the first job/project (earlier schooling stays in Education), with a dashed "Now" line.
   - **Focus:** hovering or focusing a mark dims the rest to 25% and shows an inverse ink tooltip (title in Cormorant italic, dates as a label). Tooltips flip to right-anchored past 62% of the width.
   - **Motion:** the bar draw-in is the page's one orchestrated moment.
8. **The CV** (`/cv`, printed to `cv.pdf`) uses the same tokens, forced to the light palette. It prints Cormorant headings, Inter text and tracked labels, and shows the ochre rule only on screen.

## Checklist for changes

- Use a token or shared class; if neither fits, add a token to `tokens.css` first.
- Check light, dark (toggle in the header) and 390px mobile widths, with no horizontal page scroll. The timeline scrolls inside its own frame.
- Run `npm run build`. It type-checks, validates content and regenerates `cv.pdf` and `og.png`.
