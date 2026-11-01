# Design: edisonesc.github.io

This site uses the **Minimal Serif** design system: typography-led, editorial, flat, with hairline rules and generous whitespace.

The full, reusable system lives in the `minimal-serif-design` skill at `~/.claude/skills/minimal-serif-design/` (`SKILL.md` and `DESIGN.md`). This file records the options chosen for this site and the site-specific rules. Where the two disagree, this file wins.

## Chosen options

| Decision       | Choice                                                                                                                            |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Palette        | **Ivory** (`#faf8f4` bg, `#1a1a18` ink), with **Ink** as opt-in dark mode (light by default)                                      |
| Display font   | **Cormorant Garamond**: 300 italic for display, 400 for headings, 500 italic for h3                                               |
| Body / UI font | **Inter** 400 and 500                                                                                                             |
| Accent         | **Forest** `#2d5a3d` (lifted to `#7fae8c` on Ink so it stays visible in dark mode), with **Gold** `#c99a2e` as a secondary marker |
| Animation      | **Refined**: section fade-up, hairline rule extend, link underline slide, button arrow pull                                       |

Fonts load through Astro's fonts API (`astro.config.mjs`), not a Google Fonts `@import`.

## Tokens

All values live in **`src/styles/tokens.css`**, and every page (site, `/cv`, `/og`) reads from it. Don't hardcode colors, sizes or durations anywhere else. `src/styles/global.css` maps the tokens to Tailwind utilities (`bg-bg`, `text-ink-soft`, `border-rule`, …) and defines the shared classes. Timeline and hero additions: `--accent-soft` / `--accent-tint` (past-role fills), `--gold` / `--on-gold` ("Now", lede rule), `--surface` / `--shadow-card` (the timeline card), `--radius-sm` (the only radius, 2px) and `--ink-display` (the hero name).

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

1. **Accent use:** Forest fills the "Download CV" button (the page's single accent CTA), the timeline's marks and active filter. The current role is the timeline's one deep-forest bar; past roles use `--accent-soft`. **Gold** (`--gold`) marks only the timeline's "Now" line and the hero lede's left rule. Use both only as fills or rules, never as text on `--bg`.
2. **Deliberate contrast deviations from the system palette:** `--ink-soft` is `#6e6b67` (Ivory) and `#8a837d` (Ink), so small labels pass WCAG AA.
3. **Icons are thin-stroke only** (`src/components/Icon.astro`, Lucide paths, 1.5 stroke; add new ones there). The hero's social links (GitHub, LinkedIn, GitLab, email) are the only place brand marks appear, as stroke icons beside an underlined label. Technologies stay text. **The timeline has no icons.**
4. **The hero is the name**, set as `.t-display` (in `--ink-display`) across two lines with the surname indented. Below it, left-aligned: the lede on a 2px gold left rule, the two buttons, then the social links. The hero sits on the plain background: no art, fill, border or shadow.
5. **Sections follow one pattern:** `.rule.rule-extend`, then a `.grid-editorial` with the `h2` (and an optional `.label`) in the left column, sticky on desktop, and content on the right.
6. **Lists are open rows:** a `border-top: 1px solid var(--rule)` row with whitespace. The timeline is the one framed card (`--surface`, `--shadow-card`). Corners are sharp or semi-sharp: `--radius-sm` (2px) at most, and buttons stay square.
7. **The timeline** (`CareerTimeline.astro`):
   - **Frame:** a card with the title (slotted from the page) and an All / Work / Projects / Education filter above it. The filter only appears with JS; without it every lane shows.
   - **Lanes:** a pinned left column with the lane name and a subtitle (years since the first non-intern role, project count, degree).
   - **Marks:** work and education bars show their name and year range inside the bar; a bar stretches to fit its text and row packing reserves that width, so text never collides. Work bars are a pale-forest gradient with a small forest dot, the current role is solid forest, education is an outlined bar. Projects are forest chips keeping their true length: named (truncated with an ellipsis) when at least ~70px long at the minimum chart width, otherwise a slim tick.
   - **Axis:** starts at college or the first job/project (earlier schooling stays in Education). Dashed year gridlines with the year centred in its column, and a gold dashed "Now" line under a gold "Now" badge.
   - **Focus:** hovering or focusing a mark dims the rest to 25% and shows an inverse ink tooltip (title in Cormorant italic, dates as a label). Tooltips flip to right-anchored past 62% of the width.
   - **Motion:** the bar draw-in (fill first, then its text) is the page's one orchestrated moment.
8. **The CV** (`/cv`, printed to `cv.pdf`) uses the same tokens, forced to the light palette. It prints Cormorant headings, Inter text and tracked labels, and shows the accent rule only on screen.

## Checklist for changes

- Use a token or shared class; if neither fits, add a token to `tokens.css` first.
- Check light, dark (toggle in the header) and 390px mobile widths, with no horizontal page scroll. The timeline scrolls inside its own frame.
- Run `npm run build`. It type-checks, validates content and regenerates `cv.pdf` and `og.png`.
