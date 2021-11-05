# Vue.js Install

Install `nodenv` to manage multiple installs of Nodejs.

## Prerequisites

- brew (macOS)
- chocolately (Windows)

## Install nodenv

### macOS

1. Install

    ```zsh
    brew install nodenv
    ```

2. Add to `~/.zshrc`

    ```zsh
    echo -e 'if command -v nodenv 1>/dev/null 2>&1; then\n  eval "$(nodenv init -)"\nfi' >> ~/.zshrc
    ```

3. Restart shell or run `nodenv init -` for changes to take effect

### linux

<!-- TODO: add linux installation steps -->

> Coming soon.

### Windows

<!-- TODO: add Windows installation steps -->

> Coming soon.

## Install Nodejs

1. Check what versions of Nodejs are available

    macOS:

    ```zsh
    nodenv install -l | grep '^[.0-9]*$'
    ```

2. Install a nodejs version

    ```zsh
    nodenv install <VERSION>
    ```

3. Set and verify global nodejs version

    ```zsh
    nodenv global <VERSION>
    ```

    ```zsh
    nodenv versions
    ```

    ```zsh
    node --version
    ```

    > Note: `npm` comes pre-packaged with nodejs

## Upgrade npm

```zsh
npm install -g npm
```

## Install Vue CLI

```zsh
npm install -g @vue/cli
```
