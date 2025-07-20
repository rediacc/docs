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

  onBrokenLinks: 'warn',
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
      navbar: {
        hideOnScroll: false,
        logo: {
          alt: 'Rediacc Logo',
          src: 'img/logo_black.png',
          srcDark: 'img/logo_white.png',
          href: '/',
        },
        items: [
          {
            to: '/',
            label: 'Home',
            position: 'left',
          },
          {
            href: '/#features',
            label: 'Features',
            position: 'left',
          },
          {
            to: '/pricing',
            label: 'Pricing',
            position: 'left',
          },
          {
            to: '/about',
            label: 'About',
            position: 'left',
          },
          {
            to: '/docs/intro',
            label: 'Docs',
            position: 'left',
          },
          {
            href: '/console/login',
            label: 'Login',
            position: 'right',
            className: 'navbar-login-link',
            target: '_blank',
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
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Product',
            items: [
              {
                label: 'Features',
                href: '/#features',
              },
              {
                label: 'Pricing',
                to: '/pricing',
              },
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'About',
                to: '/about',
              },
              {
                label: 'Team',
                to: '/about',
              },
              {
                label: 'Contact',
                href: 'mailto:info@rediacc.com',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Console',
                href: '/console/login',
                target: '_blank',
              },
              {
                label: 'API Reference',
                to: '/docs/rest-api/introduction',
              },
              {
                label: 'CLI Guide',
                to: '/docs/cli/introduction',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Privacy Policy',
                to: '/docs/legal/privacy',
              },
              {
                label: 'Terms of Service',
                to: '/docs/legal/terms',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Rediacc. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
