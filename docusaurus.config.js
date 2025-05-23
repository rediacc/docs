// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rediacc',
  tagline: 'Be Ready to Accelerate',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://rediacc.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // When integrated with the React app, all content is served under /docs/
  baseUrl: '/docs/',
  // Custom configuration for integration with React app
  customFields: {
    isIntegratedWithReactApp: true,
  },

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rediacc', // Usually your GitHub org/user name.
  projectName: 'rediacc', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/rediacc/rediacc/tree/main/packages/create-docusaurus/templates/shared/',
          routeBasePath: '/', // Serve docs at the site root
        },
        theme: {
          customCss: [
            './src/css/custom.css',
            './src/css/docs-custom.css'
          ],
        },
      }),
    ],
  ],
  
  // Add client-side scripts
  scripts: [
    {
      src: '/docs/emojiHeaderFix.js',
      async: true,
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      // Hide navbar completely through CSS
      navbar: {
        style: 'dark',
        hideOnScroll: true,
        logo: {
          alt: 'Rediacc Logo',
          src: 'img/logo_white.png',
        },
        items: [
          {
            href: '/',
            label: 'Back to Home',
            position: 'right',
            target: '_self',
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      footer: {
        style: 'light',
        links: [],
        copyright: ' ',
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
