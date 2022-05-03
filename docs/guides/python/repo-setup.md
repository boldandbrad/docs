# Python Repo Setup

Setup a local python dev env.

1. Navigate to the repo directory, then set and verify local python version

    ```zsh
    pyenv local <VERSION>
    ```

    ```zsh
    python --version
    ```

2. Create virtual environment from the local python version

    ```zsh
    python -m venv .venv
    ```

    > Optional: `--system-site-packages` to include packages from parent python install

3. Activate and verify venv

    macOS/linux

    ```zsh
    source .venv/bin/activate
    # or
    . .venv/bin/activate
    ```

    ```zsh
    which python
    ```

    <!--TODO: add link to vscode python env settings.json -->

    Windows

    ```cmd
    .venv\Scripts\activate.bat
    ```

    ```cmd
    where python
    ```

4. Update local pip

    ```zsh
    pip install --upgrade pip
    ```

5. Install pip-tools

    ```zsh
    pip install pip-tools
    ```

6. Create a `setup.py`

    [setup.py gist](https://gist.github.com/boldandbrad/538236e794f544f8fe9df0e8bde4c3f2)

7. Run pip-compile:

    ```zsh
    pip-compile
    ```
