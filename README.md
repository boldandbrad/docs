# docs

[![Docs](https://img.shields.io/website?down_message=down&label=status&up_message=online&url=https%3A%2F%2Fboldandbrad.github.io%2Fdocs%2F)](https://boldandbrad.github.io/docs/)

> _Opinionated_ personal technical guides and docs.

My name is **boldandbrad** and <u>this</u> is my personal technical documentation
site. I have made it open source to serve as an example for others. I do not claim
to be an expert on any of the covered topics, nor do I always follow industry
best practices. **Use this knowledge base at your own risk**.

My goal is that at the very least you'll find the knowledge contained here to
be compatible with the following principles:

- Be **consistent**.
- Be **inclusive**.
- Be **simple**.
- Embrace **open source**.

With that said, I regularly update the site as I discover better tools and
techniques. Since I _am_ always trying to learn, please feel free to [create
issues](https://github.com/boldandbrad/docs/issues) or submit PRs if you have
something cool to share with me. However, please understand that I may choose
to reject them. If so, please fork and make adjustments for your own purposes
if you wish.

## Commands

All commands are run from the root of the project, from a terminal:

> If you prefer:
>
> - [`justfile`](justfile) is provided for easy command usage with
>   [just](https://github.com/casey/just).
> - [`.envrc`](.envrc) is provided to automatically source `./node_modules/.bin/`
>   via [direnv](https://direnv.net/). This makes the `astro` command directly available.

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
