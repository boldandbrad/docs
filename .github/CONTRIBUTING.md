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

This repo contains a [Simple Wiki](https://lume.land/theme/simple-wiki/) themed
[Lume](https://lume.land) documentation site, powered by
[Deno](https://deno.land). Site contents can be found in `./src`.

### Dev setup

#### Prerequisites

Make sure you have [Deno](https://deno.land) installed before continuing with
setup.

#### Repo setup

1. Fork this repo to your personal GitHub account.
2. Clone your fork of this repo to your computer.
3. Change directory to the cloned repo.
4. Run the dev server with `deno task serve`.

#### Useful commands

| Command                          | Action                                           |
| :------------------------------- | :----------------------------------------------- |
| `deno task serve`                | Start local dev server at `localhost:3000`       |
| `deno task build`                | Build production site to `./_site/` via deno     |
