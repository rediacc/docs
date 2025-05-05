// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // Custom organized sidebar
  tutorialSidebar: [
    'intro',
    'ui-documentation',
    {
      type: 'category',
      label: 'Case Examples',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Backup Solutions',
          items: [
            'case-examples/backup/zero-cost',
            'case-examples/backup/time-travel',
            'case-examples/backup/cross-backup',
          ],
        },
        {
          type: 'category',
          label: 'Scaling Solutions',
          items: [
            'case-examples/scaling/dynamic-resource-scaling',
            'case-examples/scaling/legacy-database-scaling',
          ],
        },
        {
          type: 'category',
          label: 'Security Solutions',
          items: [
            'case-examples/security/real-time-defense',
          ],
        },
        {
          type: 'category',
          label: 'Administration',
          items: [
            'case-examples/administration/risk-free-upgrades',
            'case-examples/administration/blackout',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'REST API',
      items: [
        'rest-api/introduction',
        'rest-api/authentication',
        'rest-api/security-model',
        'rest-api/best-practices',
        'rest-api/error-handling',
        {
          type: 'category',
          label: 'API Resources',
          items: [
            'rest-api/user-management',
            'rest-api/team-management',
            'rest-api/company-management',
            'rest-api/permissions-management',
            'rest-api/repository-management',
            'rest-api/machine-management',
            'rest-api/region-management',
            'rest-api/bridge-management',
            'rest-api/storage-management',
            'rest-api/schedule-management',
            'rest-api/queue-management',
          ],
        },
      ],
    }
  ],
};

export default sidebars;
