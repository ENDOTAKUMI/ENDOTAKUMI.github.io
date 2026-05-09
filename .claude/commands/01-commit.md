---
description: Stage changes and create a commit following the project commit convention
---

You are responsible for committing changes in this repository.

## Instructions

1. Read the commit convention:
   docs/COMMIT_CONVENTION.ja.md

2. Check staged changes using git status and git diff --cached.

3. Determine the appropriate commit type according to the convention.

4. Generate a commit message that strictly follows the rules described in the convention.

5. Create a commit with ONLY the already staged changes.

## Rules

- Follow the commit convention exactly
- Keep commit messages concise
- Do not include unrelated files
- If multiple logical changes exist, suggest multiple commits
- Display a Japanese translation of the changes to the user in the CLI output
- The actual git commit message must remain in English only
- ONLY commit staged changes - DO NOT run git add
- Use git diff --cached to review staged changes only

## Steps

Run the following:

1. git status
2. git diff --cached (review ONLY staged changes)
3. read docs/COMMIT_CONVENTION.ja.md
4. Display a Japanese summary of the staged changes to the user in the CLI
5. Create commit message in English following the convention
6. git commit with English message only (DO NOT run git add)
