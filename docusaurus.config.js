// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'QuizWitz',
  tagline: 'Advanced documentation',
  url: 'https://docs.quizwitz.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'catlabinteractive', // Usually your GitHub org/user name.
  projectName: 'quizwitz-docs', // Usually your repo name.

  staticDirectories: [ 'assets', 'static' ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl', 'fr', 'de', 'es' ],
    path: 'i18n',
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: ({locale, versionDocsDirPath, docPath}) => {
            // Link to Crowdin for French docs
            if (locale !== 'en') {
              return `https://crowdin.com/project/quizwitz-documentation/${locale}`;
            }
            // Link to GitHub for English docs
            return `https://github.com/catlabinteractive/quizwitz-docs/edit/main/website/${versionDocsDirPath}/${docPath}`;
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'QuizWitz',
        logo: {
          alt: 'QuizWitz Logo',
          src: 'img/quizwitz-logo.png',
        },
        items: [
          {
            to: 'docs/intro',
            position: 'left',
            label: 'About QuizWitz',
          },
          {
            to: 'docs/round-types/round-types',
            position: 'left',
            label: 'Round types',
            activeBaseRegex: `docs/round-types/.*`,
          },
          {
            to: 'docs/question-types/question-types',
            position: 'left',
            label: 'Question types',
            activeBaseRegex: `docs/question-types/.*`,
          },
          {
            to: 'docs/faq',
            position: 'left',
            label: 'FAQ',
          },

          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting started',
                to: '/docs/intro',
              },
              {
                label: 'Frequently Asked Questions',
                to: '/docs/faq',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/9HREQjG',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/quizwitz',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Website',
                to: 'https://www.quizwitz.com/',
              },
              {
                label: 'Blog',
                to: 'https://www.quizwitz.com/blog',
              },
            ],
          },
        ],
        copyright: `QuizWitz Documentation © 2021, ${new Date().getFullYear()} by CatLab Interactive is licensed under CC BY-NC-SA 4.0`,
      },
    })

};

module.exports = config;
