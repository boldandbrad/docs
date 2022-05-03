# Git Config

## .gitconfig setup

1. Pull starter .gitconfig

    Pull `.gitconfig` starter from gist and save it to `~/`

    ```zsh
    wget -O ~/.gitconfig https://gist.githubusercontent.com/boldandbrad/538236e794f544f8fe9df0e8bde4c3f2/raw
    ```

    The starter config sets reasonable default behavior, creates aliases for
    common git commands, as well as sets Vscode as the default editor, difftool,
    and mergetool. For more info, checkout [Git Usage](usage.md).

2. Set user info

    ```zsh
    git config --global user.name "first last"
    git config --global user.email example@email.com
    ```

3. Verify configs

    ```zsh
    git config --list --show-origin
    ```
