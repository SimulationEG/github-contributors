# SimulationEG Contributors

Public gallery of student contribution websites for **SimulationEG**.

Each student forks this repository, adds a personal page under `students/{github-username}/`, adds one card on the home page, and opens a Pull Request.

**Live site (after GitHub Pages or local preview):** open `index.html` in a browser.

## Purpose

- Practice **fork → SSH clone → feature branch → Pull Request**.
- Keep one official repo (`SimulationEG/github-contributors`) as the source of truth.
- Show every accepted contributor on a simple static website.

## Preview locally

No build step. From the project root:

```bash
# Option A — just open the file
start index.html
```

Or serve the folder (optional):

```bash
npx --yes serve .
```

Then open the URL printed in the terminal (usually `http://localhost:3000`).

## Folder structure

```text
.github/pull_request_template.md
students/
  sample-student/
  john-doe/
  {your-github-username}/   ← you add this
index.html
style.css
script.js
README.md
CONTRIBUTING.md
.gitignore
```

## How students contribute

1. Fork `SimulationEG/github-contributors`.
2. Clone your fork with **SSH**.
3. Branch: `feature/add-{github-username}`.
4. Add `students/{github-username}/` with your site.
5. Add one card to `index.html`.
6. Commit with a conventional message and open a PR to `main`.

Full rules: **[CONTRIBUTING.md](CONTRIBUTING.md)**.

## Sample contributors

| Folder | Role |
|--------|------|
| `students/sample-student/` | First sample card |
| `students/john-doe/` | Second sample card |
| `students/Saeid-Elkhouly/` | file:///C:/Users/mosae/OneDrive/Desktop/Simulation/Assignments/Assignment2/github-contributors/students/Saeid-Elkhouly/index.html |

Replace the Calculator URLs in samples with real assignment repos when you add your own card.
