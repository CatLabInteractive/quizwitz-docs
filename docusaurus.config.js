// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'QuizWitz',
  tagline: 'Advanced documentation',
  url: 'https://docs.quizwitz.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'catlabinteractive', // Usually your GitHub org/user name.
  projectName: 'quizwitz-docs', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/catlabinteractive/quizwitz-docs/edit/main/',
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
            to: 'docs/advanced/round-modes/round-modes',
            position: 'left',
            label: 'Round modes',
            activeBaseRegex: `docs/advanced/round-modes/.*`,
          },
          {
            to: 'docs/advanced/question-modes/question-modes',
            position: 'left',
            label: 'Question modes',
            activeBaseRegex: `docs/advanced/question-modes/.*`,
          },
          {
            to: 'docs/faq',
            position: 'left',
            label: 'FAQ',
          }
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
        copyright: `Copyright © ${new Date().getFullYear()} CatLab Interactive bv. Built with Docusaurus.`,
      },
    })
};

module.exports = config;
