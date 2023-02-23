# Git Usage

Topics to cover:

- concepts/practices
- gitignores
- new feature
- git flow
- rebasing
- merging
- conflicts
- prs/code reviews
- creating and applying patches
- stashing/unstashing

## Amend Commit Message

Amend last commit message:

```zsh
git commit --amend -m "new message"
```

Safely force push new commit message to remote:

```zsh
git push --force-with-lease origin HEAD
```
