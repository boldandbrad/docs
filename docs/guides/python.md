# Python

## Toolset Overview

* [`pyenv`](https://github.com/pyenv/pyenv) - manage multiple installs of python
  * Install with `brew`/`chocolatey`
* [`venv`](https://github.com/python/cpython/tree/master/Lib/venv) - create project specific environments
  * Included with python
* [`pip`](https://github.com/pypa/pip) - install python packages
  * Included with python2 >= 2.7.9 and python3 >= 3.4
* [`pip-tools`](https://github.com/jazzband/pip-tools) - environment reproducibility
  * Install with `pip`
* `setuptools`, `twine`, `wheel` - packaging and distribution
  * Install with `pip`

## Local Env Setup

Setup local python environment.

### Install pyenv (macOS)

```zsh
brew install pyenv
```

Add to `~/.zshrc`:

```zsh
echo -e 'if command -v pyenv 1>/dev/null 2>&1; then\n  eval "$(pyenv init -)"\nfi' >> ~/.zshrc
```

Takes effect after shell restart or by running `pyenv init -`

### Install pyenv (linux)

<!-- TODO: add linux installation steps -->

Coming soon.

### Install pyenv-win (windows)

```cmd
choco install pyenv-win
```

Add pyenv user and system environment variable:

`PYENV` = `%USERPROFILE%\.pyenv\pyenv-win`

Add the following to the system environment PATH:

* `%PYENV%\bin`
* `%PYENV%\shims`

> Make sure they appear both *above* `%USERPROFILE%\AppData\Local\Microsoft\WindowsApps`

From user home directory run:

```cmd
pyenv rehash
```

### Install python

```zsh
pyenv install <VERSION>
```

<!-- TODO: add note for manually installing old versions into correct dir on windows -->

Set and verify global python version:

```zsh
pyenv global <VERSION>
```

```zsh
python --version
```

> Note: `pip` and `venv` come pre-packaged with python

## Repo Setup

Set and verify local python version:

```zsh
pyenv local <VERSION>
```

```zsh
python --version
```

Create venv:

```zsh
python -m venv .venv
```

> Optional: `--system-site-packages` to include packages from parent python install

Activate venv (macOS/linux):

```zsh
source .venv/bin/activate
# or
. .venv/bin/activate
```

Activate venv (windows):

```cmd
.venv\Scripts\activate.bat
```

Update pip:

```zsh
pip install --upgrade pip
```

Install pip-tools:

```zsh
pip install pip-tools
```

Create a `setup.py`:

> Coming soon.

<!-- TODO: add guide for creating setup.py -->

Run pip-compile:

```zsh
pip-compile
```

## Testing

<!-- TODO: add unit testing guide -->

## Travis CI Setup

<!-- TODO: add travis ci test setup -->

## Packaging and Distribution

* [Reference](https://packaging.python.org/tutorials/packaging-projects/)

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

## Chocolatey Package

<!-- TODO: add steps for creating and submitting chocolatey package -->
