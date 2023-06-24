# docs

[![Docs](https://img.shields.io/website?down_message=down&label=status&up_message=online&url=https%3A%2F%2Fboldandbrad.github.io%2Fdocs%2F)](https://boldandbrad.github.io/docs/)

> *Opinionated* personal technical guides and docs.

This repo hosts my personal technical documentation. I have made it open source
to serve as an example for others. I do not claim to be an expert on any of the
covered topics, nor do I always follow industry best practices.
**Use this knowledge base at your own risk**.

With that said, I regularly update this repo as I discover better tools and
techniques. Since I *am* constantly trying to learn, feel free to create
issues or submit PRs **only** if you have something cool to share with me,
knowing that I may choose to reject them. Otherwise, please fork and make
adjustments for your own purposes.

## Commands

All commands are run from the root of the project, from a terminal:

> For your convenience:
>
> - A [`justfile`](.justfile) is provided for easy command usage with
>   [just](https://github.com/casey/just).
> - An `.envrc` is provided to automatically source `./node_modules/.bin/` via
>   `direnv`. This makes the `astro` command directly available.

| Command                    | Action                                            |
| :------------------------- | :------------------------------------------------ |
| `pnpm install`             | Installs dependencies                             |
| `pnpm run dev`             | Starts local dev server at `localhost:3000/docs/` |
| `pnpm run build`           | Build your production site to `./dist/`           |
| `pnpm run preview`         | Preview your build locally, before deploying      |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check`  |
| `pnpm run astro -- --help` | Get help using the Astro CLI                      |

## License

[MIT](LICENSE)
