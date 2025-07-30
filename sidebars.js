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
      collapsed: true,
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
      label: 'Developer Tools',
      collapsed: true,
      items: [
        // Getting Started
        {
          type: 'category',
          label: 'Getting Started',
          collapsed: true,
          items: [
            'cli/introduction',
            'cli/installation',
            'cli/quick-start',
            'cli/getting-started-tutorial',
          ],
        },
        // Configuration
        'cli/configuration',
        // Core Concepts
        {
          type: 'category',
          label: 'Core Concepts',
          collapsed: true,
          items: [
            'cli/concepts/rest-api-concepts',
            'cli/concepts/rest-api-best-practices',
            'cli/concepts/rest-api-error-handling',
          ],
        },
        // Tutorials
        {
          type: 'category',
          label: 'Tutorials',
          collapsed: true,
          items: [
            'cli/tutorials/authentication-workflows',
            'cli/tutorials/team-management-workflow',
            'cli/tutorials/infrastructure-setup',
            'cli/tutorials/job-orchestration',
            'cli/tutorials/permission-management',
          ],
        },
        // API Reference
        {
          type: 'category',
          label: 'API Reference',
          collapsed: true,
          items: [
            'cli/api-reference/index',
            {
              type: 'category',
              label: 'Authentication & Access',
              collapsed: true,
              items: [
                'cli/api-reference/authentication',
                { type: 'doc', id: 'cli/api-reference/auth-commands', label: 'Auth' },
                { type: 'doc', id: 'cli/api-reference/user-commands', label: 'User' },
                { type: 'doc', id: 'cli/api-reference/permission-commands', label: 'Permission' },
              ],
            },
            {
              type: 'category',
              label: 'Resource Management',
              collapsed: true,
              items: [
                { type: 'doc', id: 'cli/api-reference/create-commands', label: 'Create' },
                { type: 'doc', id: 'cli/api-reference/list-commands', label: 'List' },
                { type: 'doc', id: 'cli/api-reference/inspect-commands', label: 'Inspect' },
                { type: 'doc', id: 'cli/api-reference/update-commands', label: 'Update' },
                { type: 'doc', id: 'cli/api-reference/rm-commands', label: 'Remove' },
              ],
            },
            {
              type: 'category',
              label: 'Organization',
              collapsed: true,
              items: [
                { type: 'doc', id: 'cli/api-reference/company-commands', label: 'Company' },
                { type: 'doc', id: 'cli/api-reference/team-member-commands', label: 'Team Member' },
              ],
            },
            {
              type: 'category',
              label: 'Infrastructure',
              collapsed: true,
              items: [
                { type: 'doc', id: 'cli/api-reference/bridge-commands', label: 'Bridge' },
                { type: 'doc', id: 'cli/api-reference/distributed-storage-commands', label: 'Distributed Storage' },
              ],
            },
            {
              type: 'category',
              label: 'System Management',
              collapsed: true,
              items: [
                { type: 'doc', id: 'cli/api-reference/queue-commands', label: 'Queue' },
                { type: 'doc', id: 'cli/api-reference/vault-commands', label: 'Vault' },
                { type: 'doc', id: 'cli/api-reference/audit-commands', label: 'Audit' },
              ],
            },
            'cli/api-reference/queue-functions',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Backup Solutions',
      collapsed: true,
      items: [
        'backup/zero-cost',
        'backup/time-travel',
        'backup/cross-backup',
      ],
    },
    {
      type: 'category',
      label: 'Scaling Solutions',
      collapsed: true,
      items: [
        'scaling/dynamic-resource-scaling',
        'scaling/legacy-database-scaling',
      ],
    },
    {
      type: 'category',
      label: 'Security Solutions',
      collapsed: true,
      items: [
        'security/real-time-defense',
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      collapsed: true,
      items: [
        'administration/risk-free-upgrades',
        'administration/blackout',
      ],
    },
  ],
};

export default sidebars;
