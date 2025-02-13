---
title: Git - Usage
description: Common git commands.
---

## Remotes

Add a remote repository to the current repo. The `remote-path` can be a url to a
GitHub repo, or a path to another local repository.

Typically the name `origin` is used for the authoritative copy, and sometimes
`upstream` is used for the gold source in a forking model.

```sh
git remote add <remote-name> <remote-path>
```

List all remotes.

```sh
git remote -v
```

Fetch the latest changes from all remotes repos.

```sh
git fetch
```

Fetch the latest changes from a specific remote repo.

```sh
git fetch <remote_name>
```

Set the default upstream remote branch for a local branch.

```sh
git branch --set-upstream-to=<remote>/<remote-branch> <branch>
```

## Branches

Create a new branch from the main branch for each independent feature or fix.

### Naming Conventions

- Main - `main`
- Feature - `feat/<issue>/<desc>` / `f/<issue>/<desc>`
- Bugfix - `bug/<issue>/<desc>` / `b/<issue>/<desc>`

### Branch Operations

Create a new branch.

```sh
git checkout -b <branch-name>
```

List all branches.

```sh
git branch -a
```

Switch to another branch.

```sh
git checkout <branch-name>
```

## Staging

Add untracked and/or changed tracked files to the staging area (index):

```sh
git add <path-to-file | pattern>
```

Add all untracked and changed files to the staging area (index):

```sh
git add --all
```

Add all untracked and changed files in the current directory to the staging area
(index):

```sh
git add .
```

## Status

Check the state of untracked and staged files.

```sh
git status
```

## Commits

Commit early and often. Squash commits into atomic operations. Commits do not
store diffs, they store the entirety of the repo at a given point using pointers
to git objects.

### Create a Commit

Create a new commit of staged changes (index):

```sh
git commit -m "commit message"
```

> NOTE: If you intend to later squash your commits, consider starting the commit
> message with "squash:" to make it easy to find the changes to be squashed.
> Otherwise, follow conventional commits.

### Amend Commit Message

Amend last commit message:

```sh
git commit --amend -m "new message"
```

Safely force push new commit message to remote:

```sh
git push --force-with-lease origin HEAD
```

### Reset Commits

Undo the last commit and add changes back to the staging area:

```sh
git reset --soft HEAD~1
```

## Tags

### Rename Tag

> Note: This can have consequences when collaborating on a repo. Use caution.

Create the new tag name from the old one and push it:

```sh
git tag new_tag old_tag
git push --tags
```

If the old tag was associated with a GitHub release, update the release to point
to the new tag name.

Delete the old tag from both the remote and local:

```sh
git push origin :refs/tags/old_tag
git tag -d old_tag
```

## Squash Commits

### With rebase

Squash last 4 commits:

```sh
git rebase -i HEAD~4
```

Then in the interactive editor, change "pick" to "squash" for each commit except
the first one. Save and close the file.

If prompted to edit the commit message, do so and save and exit.

### Without rebase

Squash last 4 commits:

```sh
git reset --soft HEAD~4
git commit -m <NEW_COMMIT_MESSAGE>
```

## Patches

> Coming soon.

## Stashing

Stash current changes:

```sh
git stash
```

Stash current changes with a message:

```sh
git stash -m "<message>"
```

View list of stashes:

```sh
git stash list
```

View the diff of the latest stash:

```sh
git stash show
```

View the diff of a specific stash by index in the stash list:

```sh
git stash show --index <index>
```

Copy changes in stash to working tree (optionally supply a specific stash name):

```sh
git stash apply
```

Move changes in latest stash to working tree (optionally supply a specific stash
name):

```sh
git stash pop
```

Pop a specific stash by index in the stash list:

```sh
git stash pop --index <index>
```

## Rebasing & Merging

Add commits from another branch or SHA to the current one. Merging can lead to a
merge commit being created if the branches have diverged.

```sh
git merge <branch | SHA>
```

Move the commits of the current branch on top of the commits of another branch
(bring the current branch up-to-date with reality). Git does this by checking
out the source branch and replaying your commits on top of it.

```sh
git rebase <branch | SHA>
```

If the local branch already exists in any remote, a force push may be necessary
to enforce the history change. This is a dangerous operation if you don't know
what you're doing. Always consider rebasing locally beforing pushing changes to
a remote.

```sh
git push --force
```

## Conflict Resolution

In the event of a conflict, use `git status` to see which files have been
modified in both places and need to be resolved.

### Resolve with Merge

Usually a result of `git pull`

Open the conflicting files in a text editor and resolve the issue by choosing
the correct state to proceed with.

Once all conflicting files have been resolved, stage and commit the changes to
complete the merge.

Or, avoid the conflict by aborting the merge:

```sh
git merge --abort
```

### Resolve with Rebase

Usually a result of `git pull --rebase`

Open the conflicting files in a text editor and resolve the issue by choosing
the correct state to proceed with.

Use `git rebase --continue`

## Pulling

Fetch changes from the current branch in remote and merge them into the current
branch.

```sh
git pull
```

Fetch and merge a different branch into the current local branch.

```sh
git pull <remote?> <branch>
```

Fetch changes from the current branch in remote and rebase the current local
branch on top of them.

```sh
git pull --rebase
```

Set git to automatically perform a rebase of the fetched changes on `git pull`
instead of merging.

```sh
git config --add --global pull.rebase true
```

## Pushing

Push the latest changes to the current local branch to the paired remote branch.
This works similar to `git pull` but in reverse. The changes from our local repo
will be fetched into the remote one and merged with the matching branch.

```sh
git push
```

## Log

Print out the git log of the current node including a graph. `--decorate` is
only needed when outputing to a file.

```sh
git log --graph --decorate
```

Search the git log:

```sh
git log -S "<search term>"
```

Search the git log and show diffs in the results:

```sh
git log -S "<search term>" -p
```

## Reflog

See where you've been.

```sh
git reflog
```

See the last 3 places you've been.

```sh
git reflog -3
```

## Objects

All changes in git are tracked in objects. Each object has a unique 40 character
SHA. They can be found in the `.git/objects` directory.

Inspect the contents or properties of a git object by its SHA.

```sh
git cat-file -p <SHA>
```

## Cherry Pick

> Coming soon.

## Worktrees

> Coming soon.
