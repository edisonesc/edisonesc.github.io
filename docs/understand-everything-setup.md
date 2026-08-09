# Understand-Anything Setup & Usage Guide

This project uses the [Understand-Anything](https://github.com/Egonex-AI/Understand-Anything) plugin for Claude Code to generate an interactive knowledge graph of the codebase. The graph maps files, classes, functions, and their relationships into a browsable dashboard.

---

## What It Does

Understand-Anything analyzes your codebase and produces a `knowledge-graph.json` file that powers an interactive web dashboard. The dashboard lets you:

- **Browse architecture layers** — see how files are grouped (App Shell, Pages, Services, etc.)
- **Explore node relationships** — follow import/inheritance/dependency edges between files and classes
- **Take a guided tour** — a curated walkthrough of the codebase from entry point to deployment
- **Search and filter** — find specific files, functions, or concepts quickly

---

## Installation

### 1. Install the plugin via Claude Code

In the Claude Code CLI, run:

```
/plugin marketplace add Egonex-AI/Understand-Anything
/plugin install understand-anything
/reload-plugins
```

The plugin installs to:
```
~/.claude/plugins/cache/understand-anything/understand-anything/<version>/
```

### 2. Build the core package (first-time only)

The plugin ships TypeScript source that must be compiled before use:

```bash
cd ~/.claude/plugins/cache/understand-anything/understand-anything/2.9.4
pnpm install
pnpm --filter @understand-anything/core build
```

> **Requires:** Node.js ≥ 22 and pnpm ≥ 10.

---

## Generating the Knowledge Graph

### First run

In Claude Code, simply invoke:

```
/understand-anything:understand
```

This triggers a 7-phase analysis pipeline:

| Phase | What happens |
|---|---|
| 0 — Pre-flight | Resolves project root, checks for existing graph, collects README/manifest context |
| 0.5 — Ignore config | Generates `.ua/.understandignore` (similar to `.gitignore`) — review and confirm before proceeding |
| 1 — Scan | Discovers all project files, detects languages/frameworks, builds an import map |
| 1.5 — Batch | Groups files into semantically related batches for parallel analysis |
| 2 — Analyze | Runs up to 5 concurrent subagents to extract nodes and edges per batch |
| 3 — Assemble review | Merges all batch outputs, normalizes node IDs, fixes edge direction issues |
| 4 — Architecture | Identifies architectural layers from the file structure and import graph |
| 5 — Tour | Builds an 11-step guided tour from entry point to infrastructure |
| 6 — Validate | Runs deterministic validation — checks for missing fields, dangling edges, orphan nodes |
| 7 — Save | Writes `knowledge-graph.json`, generates structural fingerprints for incremental updates |

**Output location:** `.ua/knowledge-graph.json`

### What gets excluded

The `.ua/.understandignore` file controls which files are excluded. For this project, the following were activated on first run:

```
/.angular   # Angular build cache (542 JSON blobs — not source)
/.claude    # Claude Code internal files
```

Everything in `.gitignore` defaults is also excluded (node_modules, dist, etc.).

### Subsequent runs (incremental update)

Re-run `/understand-anything:understand` after committing changes. The tool compares the current commit hash against `meta.json` and only re-analyzes changed files, making updates fast.

To force a full rebuild:

```
/understand-anything:understand --full
```

---

## Starting the Dashboard

```
/understand-anything:understand-dashboard
```

This starts a local Vite dev server and prints a tokenized URL:

```
Dashboard URL: http://127.0.0.1:5173/?token=<TOKEN>
```

Open that URL in your browser. The `?token=` parameter is required — without it the dashboard shows an access gate.

> The dashboard runs in the background. It keeps running until you stop the process (Ctrl+C in the terminal that launched it).

---

## Output Files

All artifacts live in `.ua/` (created at the project root):

```
.ua/
├── knowledge-graph.json     # The main graph — nodes, edges, layers, tour
├── meta.json                # Last analyzed commit hash and timestamp
├── fingerprints.json        # Structural fingerprints for incremental update detection
├── config.json              # Output language preference
├── .understandignore        # File exclusion rules (edit to customize)
└── intermediate/
    └── scan-result.json     # Preserved file inventory (speeds up incremental runs)
```

The `.ua/` directory should be added to `.gitignore` — the knowledge graph is a generated artifact and can be regenerated at any time.

---

## This Project's Graph Results

Analysis was run on **2026-08-09** against commit `687d15d`.

| Metric | Count |
|---|---|
| Files analyzed | 92 |
| Files excluded | 541 (Angular build cache) |
| Nodes | 112 |
| Edges | 147 |
| Architectural layers | 12 |
| Tour steps | 11 |

### Layers identified

| Layer | Description |
|---|---|
| Application Shell | `main.ts`, `AppModule`, root component, environments |
| Pages | `HomeComponent`, `CvComponent`, pages routing |
| UI Components | Architecture overlay, project cards, timeline items |
| Services | `PageService`, `FileService`, `ArchitectureOverlayService`, `AnalyticsService` |
| Domain Models | `Experience`, `Project`, `Technology`, `User`, enums, constants |
| Data Providers & CV Generation | Static data arrays + `cv.provider.ts` HTML/PDF renderers |
| Global Styles | `styles.scss`, `timeline.scss` |
| Infrastructure & Deployment | Dockerfile, nginx.conf, GitHub Actions workflows |
| Build Configuration | `angular.json`, tsconfig files, `package.json`, `karma.conf.js` |
| Tests | E2E protractor tests, Karma bootstrap |
| Documentation & Planning | README, OpenSpec change artifacts |
| Tooling & Generated | `.ua/` config and generated analysis files |

---

## Additional Commands

| Command | Purpose |
|---|---|
| `/understand-anything:understand --full` | Force a complete rebuild of the graph |
| `/understand-anything:understand --review` | Run the full LLM graph reviewer instead of inline validation |
| `/understand-anything:understand-chat` | Ask questions about the codebase using the knowledge graph |
| `/understand-anything:understand-explain` | Get a deep-dive explanation of a specific file or module |
| `/understand-anything:understand-diff` | Analyze a git diff or PR for affected components and risk |
| `/understand-anything:understand-onboard` | Generate an onboarding guide for new team members |

---

## Troubleshooting

**"No knowledge graph found"** — Run `/understand-anything:understand` first.

**Dashboard shows "Access Token Required"** — Make sure you include `?token=<TOKEN>` in the URL. Copy the full URL from the terminal output.

**Too many files scanned** — Edit `.ua/.understandignore` to exclude directories that are not part of your source (build outputs, caches, vendor assets). After editing, re-run with `--full`.

**Subagents can't write files** — The file-analyzer subagents require Write and Bash permissions in Claude Code. Ensure these are allowed in your permission settings (`.claude/settings.local.json`).

**Build cache picked up** — If `.angular/` or similar cache directories appear in the scan, uncomment them in `.ua/.understandignore` and re-run with `--full`.
