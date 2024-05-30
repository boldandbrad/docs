---
title: Install
order: 1
---

# Rust - Install

Rust is a multi purpose _ahead-of-time compiled_, statically typed, expression
based language. This guide covers how to install [`rustup`](https://rustup.rs)
to install and manage rust tooling.

## Tooling Overview

- [`rustup`](https://rust-lang.github.io/rustup/) - Install Rust and rust tooling
- [`rustc`](https://doc.rust-lang.org/book/ch01-01-installation.html) - Rust
  language compiler
- [`rustfmt`](https://rust-lang.github.io/rustfmt/?version=v1.5.1&search=) -
  Rust formatter and linter
- [`cargo`](https://doc.rust-lang.org/stable/cargo/) - Rust build and packaging system

## Install Rustup

- macOS:

    1. Install rustup installer with [homebrew](https://brew.sh)

        ```zsh
        brew install rustup-init
        ```

    2. Initialize rustup

        ```zsh
        rustup-init
        ```

    3. Ensure `~/.zshrc` contains `. "$HOME/.cargo/env"`

    4. Restart shell for changes to take effect

- Windows:

    > Coming soon.

- Linux:

    > Coming soon.

## Repo Setup

Setup a local rust project.

```zsh
cargo new <project-name>
```

Cargo creates the project directory, initializes it as a git repository, and
adds boilerplate config and src files.
