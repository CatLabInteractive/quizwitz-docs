# QuizWitz Documentation

Welcome to the official documentation repository for **QuizWitz** - the social quiz platform for players, quizmakers, and quizmasters.

This documentation covers everything from playing your first quiz, to building professional live quiz events, to customizing your own question rounds and game modes.

---

## Getting Started

This documentation site is powered by [Docusaurus](https://docusaurus.io/).

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

Clone the repository:

```bash
git clone https://github.com/CatLabInteractive/quizwitz-docs.git
cd quizwitz-docs
```

Install dependencies:

```bash
npm install
``` 

Start the local development server:

```bash
npm start
```

Open http://localhost:3000 in your browser to view the documentation.

## Project Structure
Documentation pages are in the docs/ folder.

Sidebar navigation is configured in sidebars.js.

Images and static files are located in /assets/.

## Translations
Translations live in this repository, in `i18n/<lang>/` (pages under `docusaurus-plugin-content-docs/current/`, site labels in the JSON files). They are no longer managed in Crowdin. To fix or improve a translation, edit the file and open a pull request.

When you change an English page under `docs/`, update its translations in the same pull request. `node scripts/stale-translations.mjs [lang ...]` lists translated files that are missing or older than their English source.

### Terminology and style

Product terminology (host vs. quizmaster, game screen, Team codes / Single game code, Round-About, Party Game, PRO / Premium, round-mode names, …) and the English source-writing rules are maintained centrally in the [quizwitz-strategy](https://github.com/CatLabInteractive/quizwitz-strategy) repository:

- [`strategy/i18n/glossary.md`](https://github.com/CatLabInteractive/quizwitz-strategy/blob/master/strategy/i18n/glossary.md) - canonical English terms, protected (never-translated) terms, and the reviewed nl / proposed other-language renderings.
- [`strategy/i18n/style-guide.md`](https://github.com/CatLabInteractive/quizwitz-strategy/blob/master/strategy/i18n/style-guide.md) - casing table, role words, banned words, and label rules.

Writers of English source pages under `docs/` and translators should follow both.

## Contributing
Contributions are welcome!
To suggest edits or add new documentation, edit or create Markdown files in the docs/ folder and submit a pull request.

Please follow the existing formatting and use clear, concise language.

## License

- Code: MIT License (see LICENSE file)
- Content (text/images): CC BY-NC-SA 4.0 (see CONTENT_LICENSE file)

Please note that commercial use of the content is not permitted without written permission.

## Building for Production
To build the static documentation site for production:

```bash
npm run build
```

The built site will be output to the build/ folder.

## Questions & Support
For questions about QuizWitz itself, visit quizwitz.com.

For documentation issues or suggestions, please open a GitHub Issue.

© CatLab Interactive - All rights reserved.