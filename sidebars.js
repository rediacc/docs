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
        // Getting Started - Direct access
        'cli/introduction',
        'cli/installation',
        'cli/quick-start',
        'cli/getting-started-tutorial',
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
        
        // API Reference - Flattened
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
