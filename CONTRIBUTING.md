
# Contributing

This repository is for **SimulationEG** students. You add your own mini website and one card on the home page. Work only in your own files.

## Rules

- Fork this repository.
- Clone **your fork** using **SSH**.
- Create a branch named `feature/add-{github-username}`.
- Create your folder at `students/{github-username}`.
- Add your website files there (`index.html`, `style.css`, and `script.js` only if you need it).
- Add **one** contributor card to `index.html`.
- Do **not** modify other students' folders or the sample folders.
- Use meaningful **conventional commits** (for example `feat: add @your-username contributor page`).
- Open a Pull Request to the **original** repository (`SimulationEG/github-contributors`, branch `main`).

## Step by step

### 1. Fork

On GitHub, open [SimulationEG/github-contributors](https://github.com/SimulationEG/github-contributors) and click **Fork**. Fork it to your account.

### 2. Clone with SSH

```bash
git clone git@github.com:YOUR-USERNAME/github-contributors.git
cd github-contributors
```

If SSH is not set up yet: GitHub → **Settings → SSH and GPG keys** → add your public key, then test with `ssh -T git@github.com`.

### 3. Branch

```bash
git switch -c feature/add-YOUR-USERNAME
```

Use your real GitHub username. Example: `feature/add-ahmed-ali`.

### 4. Your website folder

Create:

```text
students/YOUR-USERNAME/
  index.html
  style.css
```

Use the sample pages as a guide:

- `students/sample-student/`
- `students/john-doe/`

Your page should include at least:

- Full name
- GitHub username
- Learning track
- Short About Me
- GitHub profile link
- Calculator repository link
- LinkedIn link (placeholder is fine if you do not have one yet)
- Link back to the main contributors page (`../../index.html`)

### 5. Add your card on the home page

Open `index.html`. In the contributors grid, **copy one existing card** and change only your data:

- Photo (or keep the placeholder)
- Full name
- GitHub username
- Learning track
- Link to `students/YOUR-USERNAME/index.html`
- GitHub profile URL
- Calculator repository URL

Do not delete sample cards or other students' cards.

### 6. Commit and push

```bash
git add students/YOUR-USERNAME index.html
git commit -m "feat: add YOUR-USERNAME contributor page"
git push -u origin feature/add-YOUR-USERNAME
```

### 7. Pull Request

Open a PR from **your fork and branch** into `SimulationEG/github-contributors` → `main`. Fill in the PR template.

## What not to do

- Do not edit another student's folder.
- Do not rewrite `style.css` or `script.js` for the whole site unless a mentor asked you to.
- Do not force-push to `main`.
- Do not put secrets, passwords, or private tokens in the repo.

## Review

Mentors merge only through Pull Requests. After merge, your card and site appear on the public contributors page.
