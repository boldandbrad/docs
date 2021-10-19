# Python Distribution

## PyPi Package

* [Reference](https://packaging.python.org/tutorials/packaging-projects/)

### Setup

Install setuptools, wheel, and twine:

```zsh
pip install setuptools wheel twine
```

Build source archive and wheel:

```zsh
python setup.py sdist bdist_wheel
```

### Upload to Test PyPi

```zsh
python -m twine upload --repository testpypi dist/*
```

Install and test package:

> Create and activate new venv

```zsh
pip install --index-url https://test.pypi.org/simple/ --no-deps <PACKAGE_NAME>
```

### Upload to Prod PyPi

```zsh
python -m twine upload dist/*
```

Install and test package:

> Create and activate new venv

```zsh
pip install <PACKAGE_NAME>
```

## Homebrew Formulae

<!-- TODO: add steps for creating a submitting homebrew formulae -->

> Coming soon.

## Chocolatey Package

<!-- TODO: add steps for creating and submitting chocolatey package -->

> Coming soon.
