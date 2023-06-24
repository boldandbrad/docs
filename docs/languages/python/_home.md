# Python

Python is a multi-purpose, human readable, dynamically typed programming language.

## Tools

Python development tools covered in this guide.

### Environment

* [`pyenv`](https://github.com/pyenv/pyenv) - manage multiple global python
  installs.
* [`venv`](https://github.com/python/cpython/tree/master/Lib/venv) - create
    project specific virtual environments.
  * Included with python
* [`direnv`](https://direnv.net) (optional) - automatically activate virtual
  environment on change directory.
* [`pip`](https://github.com/pypa/pip) - install python packages/dependencies to
  the active environment.
  * Included with python2 >= 2.7.9 and python3 >= 3.4

### Lint and Format

* [`pre-commit`](https://pre-commit.com) - automatically run code linters and
  formatters.
* [`black`](https://black.readthedocs.io) - python code formatter.
* [`flake8`](https://flake8.pycqa.org) - python code formatter and
  checker.
* [`isort`](https://pycqa.github.io/isort) - python import sorter.
* [`ruff`](https://ruff.rs) - python code linter.
* [`semgrep`](https://semgrep.dev/docs/category/semgrep-cli) - code bug and
  security issue detector.
* [refurb](https://github.com/dosisod/refurb) - python code modernizer.

### Test

* [`pytest`](https://pytest.org) - write and run unit tests.
* [`pytest-cov`](https://pytest-cov.readthedocs.io) - pytest code coverage
  plugin.
* [`pytest-mock`](https://pytest-mock.readthedocs.io) - pytest mocker plugin.

### Build and Distribute

* [`flit`](https://flit.pypa.io) - build packages.
* [`GitHub Actions`](https://github.com/actions) - automatically test and
  publish packages.
* [`homebrew-pypi-poet`](https://github.com/tdsmith/homebrew-pypi-poet) -
  generate [`homebrew`](https://brew.sh) formulae for easier distribution on
  macOS and Linux.

### Editor

* [`VScode`](https://code.visualstudio.com)/[`VScodium`](https://vscodium.com) -
  code editor.

<!-- TODO: add relevant python vscode extensions -->
