# edisonesc.github.io

Personal site and CV for Justin Escabarte. Built with [Astro](https://astro.build) and Tailwind CSS, and deployed to GitHub Pages.

The site ships as static HTML. The only client-side JavaScript is the theme toggle, the contact form's inline submit, and a one-line timeline scroll.

## Design

The site follows the Minimal Serif design system. See [`DESIGN.md`](DESIGN.md) for the chosen options and site rules, and `src/styles/tokens.css` for the tokens every page shares.

## Editing content

All content lives in `src/data/`. The build validates it against the schemas in `src/content.config.ts`, so a typo in a date or a technology id fails the build instead of shipping.

| File                | What it holds                                                                            |
| ------------------- | ---------------------------------------------------------------------------------------- |
| `profile.ts`        | Name, headline, email, social links, Formspree endpoint                                  |
| `intro.md`          | The About section                                                                        |
| `experience.yaml`   | Jobs, education and courses. Outsourcing roles nest client work under `engagements`.     |
| `projects.yaml`     | Projects. `technologies` lists ids from `technologies.yaml`.                             |
| `technologies.yaml` | Tech names, links and groups. `featured: <rank>` pins day-job tech to the top of Skills. |

Dates are `Mon YYYY` (for example `Jun 2023`) or `Present`. Add `cvExclude: true` to keep an entry on the site but off the CV.

## CV

`/cv` renders the CV from the same data. After `astro build`, `scripts/build-cv.mjs` prints it to `dist/cv.pdf` with Playwright, producing a real-text PDF that ATS parsers can read, and saves the social preview image to `dist/og.png`.

The phone number on the CV comes from `phone` in `profile.ts`. It is public on `/cv` and in the PDF.

## Commands

```sh
npm install
npx playwright install chromium   # once, for the CV/OG step
npm run dev                       # http://localhost:4321
npm run build                     # type-check, build, then cv.pdf + og.png
npm run preview                   # serve dist/
npm run lint                      # Biome
```

On a bare Linux or WSL machine, Chromium may also need system libraries: `sudo npx playwright install-deps chromium`.

## Deploying

`.github/workflows/deploy.yml` builds and deploys on every push to `main`, on manual dispatch, and on the 1st of each month (which keeps "Present" durations current). In the repo settings, set **Pages, then Source** to **GitHub Actions**.
