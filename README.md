# QuizWitz Documentation

Welcome to the official documentation repository for **QuizWitz** — the social quiz platform for players, quizmakers, and quizmasters.

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
git clone https://github.com/YOUR_ORG/quizwitz-docs.git
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
Translations are managed using Crowdin. To contribute translations:
1. Visit the [QuizWitz Crowdin project](https://crowdin.com/project/quizwitz-documentation).
2. Select a language to translate.
3. Use the Crowdin editor to suggest translations for existing documentation.
4. Your contributions will be reviewed and merged into the main documentation.

## Contributing
Contributions are welcome!
To suggest edits or add new documentation, edit or create Markdown files in the docs/ folder and submit a pull request.

Please follow the existing formatting and use clear, concise language.

## Building for Production
To build the static documentation site for production:

```bash
npm run build
```

The built site will be output to the build/ folder.

## Questions & Support
For questions about QuizWitz itself, visit quizwitz.com.

For documentation issues or suggestions, please open a GitHub Issue.

© CatLab Interactive — All rights reserved.