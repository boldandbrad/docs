# Python Repo Setup

Setup a local python dev env.

## Setup Virtual Environment

1. Navigate to the repo directory, then set and verify desired local python version

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

## Create Project Structure

1. Create `pyproject.toml`

    > Coming soon.

2. Create src directories

    ```txt
    .venv/
    docs/ (optional)
    src/
      pkg-name/
    tests/
    .envrc
    .flake8 (doesn't yet support pyproject.toml)
    .gitignore
    .pre-commit-config.yaml
    .python-version (created by pyenv)
    pyproject.toml
    justfile (optional)
    LICENSE
    README.md
    codecov.yml
    ```
