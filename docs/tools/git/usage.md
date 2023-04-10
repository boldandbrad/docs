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

## Rename Tag

> Note: This can have consequences when collaborating on a repo. Use caution.

Create the new tag name from the old one and push it:

```zsh
git tag new_tag old_tag
git push --tags
```

If the old tag was associated with a GitHub release, update the release to point
to the new tag name.

Delete the old tag from both the remote and local:

```zsh
git push origin :refs/tags/old_tag
git tag -d old_tag
```
