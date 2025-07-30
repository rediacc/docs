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
        'cli/api-reference/index',
        'cli/api-reference/authentication',
        { type: 'doc', id: 'cli/api-reference/resource-commands', label: 'Resource Commands' },
        { type: 'doc', id: 'cli/api-reference/user-permission-commands', label: 'User & Permission Commands' },
        { type: 'doc', id: 'cli/api-reference/organization-commands', label: 'Organization Commands' },
        { type: 'doc', id: 'cli/api-reference/infrastructure-commands', label: 'Infrastructure Commands' },
        { type: 'doc', id: 'cli/api-reference/system-commands', label: 'System Commands' },
        'cli/api-reference/queue-functions',
      ],
    },
    {
      type: 'category',
      label: 'Solutions',
      collapsed: true,
      items: [
        'solutions/zero-cost',
        'solutions/time-travel',
        'solutions/cross-backup',
        'solutions/dynamic-resource-scaling',
        'solutions/legacy-database-scaling',
        'solutions/real-time-defense',
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
