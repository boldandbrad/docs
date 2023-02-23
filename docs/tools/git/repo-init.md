# Repo Setup

Setup a new git repository.

## Initialize Repo

```bash
echo "# {title}" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/{user}/{repo-name}.git
git push -u origin main
```
