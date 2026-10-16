# CLAUDE.md

Guidance for Claude Code when working in this repository.

## AI rules live in the strategy repo

The rules for working on QuizWitz are kept in the sibling repo `../quizwitz-strategy` (checked out at `~/Workbench/quizwitz-strategy`). Read them before changing anything here:

- `../quizwitz-strategy/CLAUDE.md` - how the repos fit together, git workflow, analysis rules.
- `../quizwitz-strategy/strategy/context.md` - business context and the role of this repo (docs.quizwitz.com).
- `../quizwitz-strategy/strategy/i18n/style-guide.md` and `glossary.md` - casing, banned words (for example "media" → attachment, "big screen" → game screen), protected terms and per-language rules. Every user-facing string in `docs/` follows them.

## This repo

Docusaurus 3 site for docs.quizwitz.com. English source in `docs/`; translations in `i18n/<lang>/` are maintained in this repo (they left Crowdin on 2026-10-16 to stay under its plan limit). Screenshots live in `assets/images/` and are referenced as `/images/...`.

Git workflow: feature branch + pull request to `main`; never push directly to `main`.

Names of other services are never translated (Discord, see the glossary). `scripts/protect-terms.mjs` runs before every build and after `write-translations`, and puts any translated copy of a label listed in its `PROTECTED` array back to English, so an old machine translation cannot bring "Onenigheid" back. Add a name there when you add a link label for another service.

## Translations

All 20 locales are edited here directly. A pull request that changes an English page under `docs/` (or a label in `i18n/en/`) also updates that file in every `i18n/<lang>/`, following the glossary and style guide; a translation-only follow-up PR is fine when it is large. Keep each translation's structure line for line with the English (same headings, lists, admonitions, anchors and links), and keep front-matter `id` untranslated. Run `node scripts/stale-translations.mjs` to see what is missing or out of date, and `npm run build` to check every locale builds.
