# PW23 — Personal Homepage

Source of [tilmanbertram.com](https://www.tilmanbertram.com). TypeScript + React, bundled
with Vite, served as static files behind nginx.

## Features

- **Lifeline** — a timeline view of education and work instead of a plain CV list.
- **GithubCrawler** — pulls repository data for several GitHub accounts and renders the
  most recently pushed ones.
- **Year switch** — the About and Focus texts exist per year (2024–2026); the page can be
  read as it stood back then.
- **Language switch** — German and English.
- **Light/dark theme** — follows `prefers-color-scheme` until an explicit choice is made;
  that choice is kept in `localStorage` for one day.

## What lives in this repository — and what doesn't

This is the part worth understanding before running anything.

The repository contains **code only**. Content and assets are deliberately excluded and
are supplied at runtime:

|                        | Source                        | Served from                  |
| ---------------------- | ----------------------------- | ---------------------------- |
| HTML, JS, CSS          | this repository               | the build output (`dist/`)   |
| Page texts             | `texts.json`                  | `/texts.json`                |
| Images, favicon        | `public/images`, `public/res` | `/images/`, `/res/`          |
| GitHub repository data | `pw23-BE` backend             | `/api/github/:account/repos` |

Two consequences:

- **A clean checkout builds successfully.** Nothing has to be added by hand first. Without
  the runtime data the page renders with placeholder text and missing images, but the build
  itself does not fail — which is what makes CI and reproducible deployments possible.
- `imageMap.ts` builds plain runtime paths (`/images/<name>`) rather than importing image
  files. Images therefore never enter the bundle.

## Getting started

Node 26 — either via nix or nvm:

```bash
nix-shell          # or: direnv allow
# or
nvm install 26 && nvm use 26
```

```bash
npm ci
npm run dev        # http://localhost:5173
```

The dev server proxies `/api` to `http://localhost:8000` and strips the prefix, mirroring
what nginx does in production (see `vite.config.mts`). The same paths therefore work in
both environments. Without a local backend the GitHub crawler falls back to calling
`api.github.com` directly.

To see the real texts locally, generate `public/texts.json` once:

```bash
node scripts/export-texts.mjs
```

The script reads `src/__resources__/text/TextsWritten.ts` — that file is gitignored, so
this step only works with a local copy of the texts.

## Scripts

|                     |                                    |
| ------------------- | ---------------------------------- |
| `npm run dev`       | dev server with HMR                |
| `npm run build`     | production build into `dist/`      |
| `npm run typecheck` | `tsc --noEmit`                     |
| `npm run lint`      | ESLint, warnings treated as errors |
| `npm run format`    | Prettier over `src/`               |
| `npm run preview`   | serve the built `dist/` locally    |

## Docker

```bash
docker compose up --build
```

Multi-stage: Node builds, `nginx-unprivileged` serves on port 8080 as a non-root user.
`docker/nginx.conf` handles the SPA fallback for client-side routes and sets cache headers
— one year for the content-hashed files under `/assets/`, `no-cache` for `index.html`,
which carries no hash and points at them.

Compose publishes to `127.0.0.1:8080` only; TLS and the public entry point belong to the
host's nginx.

## CI

- **`ci.yml`** — `npm ci`, lint, typecheck, build, on every branch. Uploads `dist/` as an
  artifact.
- **`audit.yml`** — `npm audit` weekly and whenever the dependency files change. The
  threshold matches `NPM_CONFIG_AUDIT_LEVEL` in `shell.nix`.

The Node version comes from `.nvmrc` in both, so there is a single place to change it.

## Deployment

The server is described declaratively in a separate NixOS configuration. This repository
is consumed there as a flake input and built with `buildNpmPackage`; nginx's document root
points at the resulting store path.

A deployment is therefore:

```bash
nix flake update pw23
nixos-rebuild switch --flake .#versa --target-host root@versa
```

`flake.lock` records which commit is live, so `git log flake.lock` is the deployment
history and a rollback is an older generation.

Texts and images are server state and are copied separately — into
`/var/lib/pw23-texts` and `/var/lib/pw23-assets`, outside the document root so no
deployment can remove them.

## Notes and TODO

This is one of the first websites I built; parts of it predate what I would write today.

- inline styling should move into SCSS
- fix the text bump when switching between About and Focus
- use quarters (q1, q2 …) instead of years for versioning
