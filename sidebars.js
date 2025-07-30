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
      label: 'CLI & API',
      collapsed: false,
      items: [
        'cli/introduction',
        'cli/installation',
        'cli/quick-start',
        {
          type: 'category',
          label: 'Tutorials',
          collapsed: false,
          items: [
            'cli/tutorials/authentication-workflows',
            'cli/tutorials/team-management-workflow',
            'cli/tutorials/infrastructure-setup',
            'cli/tutorials/job-orchestration',
            'cli/tutorials/permission-management',
          ],
        },
        'cli/configuration',
        'cli/tutorial',
        {
          type: 'category',
          label: 'API Reference',
          collapsed: true,
          items: [
            'cli/api-reference/index',
            'cli/api-reference/queue-functions',
            'cli/api-reference/authentication',
            'cli/api-reference/create-commands',
            'cli/api-reference/list-commands',
            'cli/api-reference/update-commands',
            'cli/api-reference/rm-commands',
            'cli/api-reference/inspect-commands',
            'cli/api-reference/user-commands',
            'cli/api-reference/team-member-commands',
            'cli/api-reference/permission-commands',
            'cli/api-reference/company-commands',
            'cli/api-reference/audit-commands',
            'cli/api-reference/auth-commands',
            'cli/api-reference/bridge-commands',
            'cli/api-reference/queue-commands',
            'cli/api-reference/vault-commands',
            'cli/api-reference/distributed-storage-commands',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
