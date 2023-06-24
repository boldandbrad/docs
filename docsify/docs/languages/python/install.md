# Python Install

Install [`pyenv`](https://github.com/pyenv/pyenv) to manage multiple installs of
python.

## Prerequisites

- brew (macOS)
- chocolatey (Windows)

## Install pyenv

### macOS

1. Install

    ```zsh
    brew install pyenv
    ```

2. Add to `~/.zshrc`

    ```zsh
    echo -e 'if command -v pyenv 1>/dev/null 2>&1; then\n  eval "$(pyenv init -)"\nfi' >> ~/.zshrc
    ```

3. Restart shell or run `pyenv init -` for changes to take effect

### linux

<!-- TODO: add linux installation steps -->

> Coming soon.

### Windows (pyenv-win)

1. Install

    ```cmd
    choco install pyenv-win
    ```

2. Add pyenv user and system environment variable

    `PYENV` = `%USERPROFILE%\.pyenv\pyenv-win`

3. Add the following to the system environment PATH

   - `%PYENV%\bin`
   - `%PYENV%\shims`

    > Make sure they appear both *above* `%USERPROFILE%\AppData\Local\Microsoft\WindowsApps`

4. From user home directory run

    ```cmd
    pyenv rehash
    ```

## Install python

1. Check what versions of python are available

    macOS:

    ```zsh
    pyenv install -l | grep '^\s*[.0-9]*$'
    ```

    Windows:

    ```cmd
    pyenv install -l | findstr "^\s*[.0-9]*$"
    ```

2. Install a python version

    ```zsh
    pyenv install <VERSION>
    ```

    <!-- TODO: add note for manually installing old versions into correct dir
    on windows -->

3. Set and verify global python version

    ```zsh
    pyenv global <VERSION>
    ```

    ```zsh
    pyenv versions
    ```

    ```zsh
    python --version
    ```

    > Note: `pip` and `venv` come pre-packaged with python 3.4+
