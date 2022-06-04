# docs

[![Docs](https://img.shields.io/website?down_message=down&label=status&up_message=online&url=https%3A%2F%2Fboldandbrad.github.io%2Fdocs%2F)](https://boldandbrad.github.io/docs/)

> *Opinionated* personal development guides and docs.

This is my personal software and dev process documentation. I have made it open
source to serve as an example to others. I do not claim to be an expert
on any of the covered topics, nor do I always follow industry best practices.
That is to say, **use this knowledge base at your own risk**.

With that said, I regularly update this repo as I discover better tools and
techniques. Since I *am* constantly trying to learn, feel free to create
issues or submit PRs **only** if you have something cool to share me, knowing
that I may choose to reject them. Otherwise, please fork and make adjustments
for your own purposes.

## Contents

- Machine Setup
  - [Debian](docs/machine-setup/deb.md)
  - [Mac](docs/machine-setup/mac.md)
  - [Pi](docs/machine-setup/pi.md)
- Tool Setup
  - [Vscodium](docs/tool-setup/vscodium/_home.md)
- Guides
  - [Git](docs/guides/git/_home.md)
  - [Nodejs](docs/guides/nodejs/_home.md)
  - [Python](docs/guides/python/_home.md)

## Run Locally

1. Install docsify-cli

    ```zsh
    npm install -g docsify-cli
    ```

2. Serve docs on `localhost:3000`

    ```zsh
    docsify serve docs
    ```

## License

[MIT](LICENSE)
