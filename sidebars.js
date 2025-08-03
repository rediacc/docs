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
      label: 'Console Guide',
      collapsed: true,
      items: [
        'console-guide/introduction',
        'console-guide/quick-start',
        'console-guide/authentication',
        'console-guide/dashboard',
        'console-guide/resources/index',
        'console-guide/queue',
        'console-guide/system',
        'console-guide/mcp-integration',
        'console-guide/api-integration',
        'console-guide/troubleshooting-guide',
      ],
    },
    {
      type: 'category',
      label: 'Developer Tools',
      collapsed: true,
      items: [
        // Getting Started
        'cli/introduction',
        'cli/installation',
        'cli/quick-start',
        'cli/configuration',
        'cli/rest-api-guide',
        
        // Tutorials
        {
          type: 'category',
          label: 'Tutorials',
          collapsed: true,
          items: [
            'cli/tutorials/getting-started-tutorial',
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
              label: 'Authentication',
              collapsed: true,
              items: [
                'cli/api-reference/authentication',
                'cli/api-reference/auth-commands',
              ],
            },
            {
              type: 'category',
              label: 'Resource Management',
              collapsed: true,
              items: [
                'cli/api-reference/resource-commands',
                'cli/api-reference/create-commands',
                'cli/api-reference/list-commands',
                'cli/api-reference/inspect-commands',
                'cli/api-reference/update-commands',
                'cli/api-reference/rm-commands',
              ],
            },
            {
              type: 'category',
              label: 'User & Access Control',
              collapsed: true,
              items: [
                'cli/api-reference/user-permission-commands',
                'cli/api-reference/user-commands',
                'cli/api-reference/permission-commands',
              ],
            },
            {
              type: 'category',
              label: 'Organization',
              collapsed: true,
              items: [
                'cli/api-reference/organization-commands',
                'cli/api-reference/company-commands',
                'cli/api-reference/team-commands',
                'cli/api-reference/team-member-commands',
              ],
            },
            {
              type: 'category',
              label: 'Infrastructure',
              collapsed: true,
              items: [
                'cli/api-reference/infrastructure-commands',
                'cli/api-reference/bridge-commands',
                'cli/api-reference/machine-commands',
                'cli/api-reference/region-commands',
                'cli/api-reference/distributed-storage-commands',
              ],
            },
            {
              type: 'category',
              label: 'System Operations',
              collapsed: true,
              items: [
                'cli/api-reference/system-commands',
                'cli/api-reference/queue-commands',
                'cli/api-reference/queue-functions',
                'cli/api-reference/vault-commands',
                'cli/api-reference/audit-commands',
              ],
            },
            {
              type: 'category',
              label: 'Other Commands',
              collapsed: true,
              items: [
                'cli/api-reference/clone-commands',
                'cli/api-reference/misc-commands',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Solutions',
      collapsed: true,
      items: [
        'guides/ai-safety-guide',
        'solutions/zero-cost',
        'solutions/time-travel',
        'solutions/cross-backup',
        'solutions/dynamic-resource-scaling',
        'solutions/legacy-database-scaling',
      ],
    },
    {
      type: 'category',
      label: 'Operations',
      collapsed: true,
      items: [
        'operations/risk-free-upgrades',
        'operations/blackout',
      ],
    },
  ],
};

export default sidebars;
