# Contributor Guide

Although this repo contains personalized documentation and guides, I have made
it open source for a reason. If you find these docs helpful, but have found an
issue or have ideas for improvement, feel free to submit an issue or pull
request.

However, as this is largely a personal knowledge base, please understand that I
may choose to reject contributions. If so, feel free to fork and make
adjustments for your own purposes!

## Ways to contribute

Pleae feel free to...

- [Open an issue](https://github.com/boldandbrad/docs/issues) to let me know
  about typos, unclear documentation, or suggested technologies and practices.
- Submit a pull request to address an open issue or to fix obvious problems
  with the site or its contents.

## About this repo

This repo contains a Starlight themed Astro docs site. Site contents can be
found in `src/content/`.

### Dev setup

#### Prerequisites

Make sure you have these installed before following the setup steps.

- [Bun](https://bun.sh) (v1+) - Required for local development.
- [Node.js](https://nodejs.org) (v18+) - Required to run production builds _with_
  _site search enabled_.
- [just](https://github.com/casey/just) (optional) - Simple command runner.
- [direnv](https://direnv.net/) (optional) - Automatically source [`.envrc`](.envrc).

#### Repo setup

1. Fork this repo to your personal GitHub account.
2. Clone your fork of this repo to your computer.
3. Change directory to the cloned repo.
4. Install dependencies with `bun install`.
5. Run the dev server with `bun run dev`.

#### Useful commands

| Command                          | Action                                           |
| :------------------------------- | :----------------------------------------------- |
| `bun install`/`just install`     | Install dependencies                             |
| `bun run dev`/`just dev`         | Start local dev server at `localhost:4321/docs/` |
| `bun run build`/`just build`     | Build production site to `./dist/` via node      |
| `bun run preview`/`just preview` | Preview build locally, before deploying          |
| `just update`                    | Update dependencies                              |
