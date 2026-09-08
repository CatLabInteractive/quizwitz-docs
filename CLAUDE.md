# CLAUDE.md

Guidance for Claude Code when working in this repository.

## AI rules live in the strategy repo

The rules for working on QuizWitz are kept in the sibling repo `../quizwitz-strategy` (checked out at `~/Workbench/quizwitz-strategy`). Read them before changing anything here:

- `../quizwitz-strategy/CLAUDE.md` — how the repos fit together, git workflow, analysis rules.
- `../quizwitz-strategy/strategy/context.md` — business context and the role of this repo (docs.quizwitz.com).
- `../quizwitz-strategy/strategy/i18n/style-guide.md` and `glossary.md` — casing, banned words (for example "media" → attachment, "big screen" → game screen), protected terms and per-language rules. Every user-facing string in `docs/` follows them.

## This repo

Docusaurus 3 site for docs.quizwitz.com. English source in `docs/`; translations in `i18n/<lang>/` come from Crowdin (project 798140) and are not edited by hand. Screenshots live in `assets/images/` and are referenced as `/images/...`.

Git workflow: feature branch + pull request to `main`; never push directly to `main`.
