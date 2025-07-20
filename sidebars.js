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
    {
      type: 'category',
      label: 'Product',
      collapsed: false,
      items: [
        'product/overview',
        'product/features',
        'product/pricing/plans',
        'product/pricing/comparison',
        'product/partnerships',
      ],
    },
    {
      type: 'category',
      label: 'Console',
      collapsed: false,
      items: [
        'console/introduction',
        'console/quick-start',
        'console/authentication',
        'console/dashboard',
        'console/resources/index',
        'console/queue',
        'console/system',
        'console/api-integration',
        'console/troubleshooting-guide',
      ],
    },
    {
      type: 'category',
      label: 'Backup Solutions',
      collapsed: false,
      items: [
        'backup/zero-cost',
        'backup/time-travel',
        'backup/cross-backup',
      ],
    },
    {
      type: 'category',
      label: 'Scaling Solutions',
      collapsed: false,
      items: [
        'scaling/dynamic-resource-scaling',
        'scaling/legacy-database-scaling',
      ],
    },
    {
      type: 'category',
      label: 'Security Solutions',
      collapsed: false,
      items: [
        'security/real-time-defense',
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      collapsed: false,
      items: [
        'administration/risk-free-upgrades',
        'administration/blackout',
      ],
    },
    {
      type: 'category',
      label: 'REST API',
      collapsed: false,
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
    },
    {
      type: 'category',
      label: 'Command Line Interface',
      collapsed: false,
      items: [
        'cli/introduction',
        'cli/installation',
        'cli/authentication',
        'cli/company',
        'cli/teams',
        'cli/infrastructure',
        'cli/jobs',
        'cli/queue',
        'cli/permissions',
        'cli/configuration',
        'cli/tutorial',
      ],
    },
    {
      type: 'category',
      label: 'Company',
      collapsed: false,
      items: [
        'company/about',
        'company/team',
        'company/founders',
      ],
    },
    {
      type: 'category',
      label: 'Legal',
      collapsed: false,
      items: [
        'legal/privacy',
        'legal/terms',
      ],
    },
  ],
};

export default sidebars;
