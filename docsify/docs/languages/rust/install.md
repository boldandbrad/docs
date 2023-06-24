# Rust Install

Install [`rustup`](https://rustup.rs) to install and manage rust.

## Prerequisites

- brew (macOS)

## Install Rustup

### macOS

1. Install rustup installer

    ```zsh
    brew install rustup-init
    ```

2. Initialize rustup

    ```zsh
    rustup-init
    ```

3. Ensure `~/.zshrc` contains `. "$HOME/.cargo/env"`

4. Restart shell for changes to take effect
