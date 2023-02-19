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

## Run Locally

1. Install [docsify-cli](https://cli.docsifyjs.org/#/)

    ```zsh
    pnpm install -g docsify-cli
    ```

2. Serve docs on `localhost:3001`

    With [just](https://github.com/casey/just):

    ```zsh
    just serve
    ```

    Or

    ```zsh
    docsify serve -p 3001 docs
    ```

## License

[MIT](LICENSE)
