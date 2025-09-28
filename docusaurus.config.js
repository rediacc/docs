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
  tagline: 'Infrastructure Automation Platform Designed for AI-Driven Operations',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://rediacc.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // Now serving at root since docs is the main site
  baseUrl: '/',
  // Custom configuration for integration with React app
  customFields: {
    isIntegratedWithReactApp: true,
    appVersion: process.env.TAG || process.env.APP_VERSION || 'dev',
  },

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rediacc', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'warn',

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
          routeBasePath: '/docs', // Serve docs at /docs path
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/rediacc/rediacc/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
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
  
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en"],
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        removeDefaultStopWordFilter: false,
        removeDefaultStemmer: false,
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
        searchResultContextMaxLength: 50,
        searchBarShortcut: true,
        searchBarShortcutHint: true,
        docsRouteBasePath: '/',
        explicitSearchResultPath: true,
      },
    ],
  ],
  
  // Add client-side scripts
  scripts: [
    {
      src: '/emojiHeaderFix.js',
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
        style: 'primary',
        hideOnScroll: false,
        logo: {
          alt: 'Rediacc Logo',
          src: '/img/logo_black.png',
          srcDark: '/img/logo_white.png',
          href: '/',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Solutions',
            position: 'left',
            items: [
              {
                to: '/solutions/backup-recovery',
                label: 'Backup & Recovery',
                className: 'navbar-item-with-icon',
                'data-icon': 'archive',
              },
              {
                to: '/solutions/infrastructure-protection',
                label: 'Infrastructure Protection',
                className: 'navbar-item-with-icon',
                'data-icon': 'shield',
              },
              {
                to: '/solutions/enterprise-scaling',
                label: 'Enterprise Scaling',
                className: 'navbar-item-with-icon',
                'data-icon': 'trending-up',
              },
              {
                to: '/solutions/ai-safety',
                label: 'AI Safety',
                className: 'navbar-item-with-icon',
                'data-icon': 'shield',
              },
              {
                to: '/solutions/devops',
                label: 'DevOps',
                className: 'navbar-item-with-icon',
                'data-icon': 'workflow',
              },
              {
                to: '/solutions/cloud-migration',
                label: 'Cloud Migration',
                className: 'navbar-item-with-icon',
                'data-icon': 'cloud-upload',
              },
            ],
          },
          {
            to: '/docs/intro',
            label: 'Documentation',
            position: 'left',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left',
          },
          {
            to: '/pricing',
            label: 'Pricing',
            position: 'left',
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
        style: 'light',
        links: [
          {
            title: 'Product',
            items: [
              {
                label: 'Features',
                to: '/features/zero-cost-backup',
              },
              {
                label: 'Pricing',
                to: '/pricing',
              },
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
              {
                label: 'API Reference',
                to: '/docs/cli/api-reference',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
              {
                label: 'API Reference',
                to: '/docs/cli/api-reference',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Status Page',
                href: 'http://status.rediacc.com',
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
                label: 'Transparency',
                to: '/transparency',
              },
              {
                label: 'Careers',
                to: '/careers',
              },
              {
                label: 'Contact',
                to: '/contact',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Connect',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/rediacc',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/rediacc',
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/company/rediacc',
              },
              {
                label: 'YouTube',
                href: 'https://youtube.com/@rediacc',
              },
            ],
          },
        ],
        copyright: `
          <div style="margin-top: 2rem; padding-top: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
              <div>© ${new Date().getFullYear()} Rediacc, Inc. All rights reserved.</div>
              <div style="display: flex; gap: 2rem;">
                <a href="/transparency" style="color: var(--ifm-footer-link-color);">Transparency</a>
                <a href="/privacy" style="color: var(--ifm-footer-link-color);">Privacy Policy</a>
                <a href="/terms" style="color: var(--ifm-footer-link-color);">Terms of Service</a>
              </div>
            </div>
          </div>
        `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
