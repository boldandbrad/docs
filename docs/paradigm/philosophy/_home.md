# Philosophy

Just a list of things I care about for now...

- Readme Driven Development (RDD)
- Semantic Versioning (SemVer)
- Keep a Changelog
- Agile Framework
- Open Source

## Patterns

### Project-Local Dev Tooling

Reduce developer friction by not relying on globally installed dev tooling.

#### Nodejs

Install binaries locally with `pnpm install -D TOOL` (ie: `@vue/cli`,
`docsify-cli`, `just-install`, etc) and then provide a script or `.envrc` file
to source `./node_modules/.bin/`.

This ensures that all developers can just `pnpm install` and `source .envrc` to
to have the same tooling and versions available. Developers can still have
global tools installed without worrying about versioning conflicts or tool
management.