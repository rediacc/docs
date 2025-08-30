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
      label: 'Developer Tools',
      collapsed: false,
      items: [
        // Getting Started
        'cli/rest-api-guide',
        
        // API Reference
        {
          type: 'category',
          label: 'API Reference',
          collapsed: true,
          items: [
            'cli/api-reference/index',
            'cli/api-reference/auth',
            {
              type: 'category',
              label: 'Resource Management',
              collapsed: true,
              items: [
                'cli/api-reference/create',
                'cli/api-reference/list',
                'cli/api-reference/inspect',
                'cli/api-reference/update',
                'cli/api-reference/rm',
              ],
            },
            {
              type: 'category',
              label: 'User & Access Control',
              collapsed: true,
              items: [
                'cli/api-reference/user',
                'cli/api-reference/permissions',
              ],
            },
            {
              type: 'category',
              label: 'Organization',
              collapsed: true,
              items: [
                'cli/api-reference/company',
                'cli/api-reference/team',
                'cli/api-reference/team-members',
              ],
            },
            {
              type: 'category',
              label: 'Infrastructure',
              collapsed: true,
              items: [
                'cli/api-reference/bridge',
                'cli/api-reference/machine',
                'cli/api-reference/region',
                'cli/api-reference/distributed-storage',
              ],
            },
            {
              type: 'category',
              label: 'System Operations',
              collapsed: true,
              items: [
                'cli/api-reference/queue',
                'cli/api-reference/vault',
                'cli/api-reference/audit',
              ],
            },
            {
              type: 'category',
              label: 'Other Commands',
              collapsed: true,
              items: [
                'cli/api-reference/clone',
                'cli/api-reference/misc',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Use Cases',
      collapsed: false,
      items: [
        'use-cases/dynamic-resource-scaling',
        'use-cases/time-travel',
        'use-cases/legacy-database-scaling',
        'use-cases/risk-free-upgrades',
        'use-cases/cross-backup',
        'use-cases/blackout',
        'use-cases/zero-cost',
      ],
    },
  ],
};

export default sidebars;
