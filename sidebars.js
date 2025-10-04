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
    {
      type: 'doc',
      id: 'intro',
      label: 'What is Rediacc?',
    },
    {
      type: 'category',
      label: 'Developer Tools',
      collapsed: false,
      items: [
        // Getting Started
        {
          type: 'doc',
          id: 'cli/rest-api-guide',
          label: 'REST API Guide',
        },
        
        // API Reference
        {
          type: 'category',
          label: 'API Reference',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'cli/api-reference/index',
              label: 'API Overview',
            },
            {
              type: 'doc',
              id: 'cli/api-reference/auth',
              label: 'Authentication',
            },
            {
              type: 'category',
              label: 'Resource Management',
              collapsed: true,
              items: [
                {type: 'doc', id: 'cli/api-reference/create', label: 'Create Resources'},
                {type: 'doc', id: 'cli/api-reference/list', label: 'List Resources'},
                {type: 'doc', id: 'cli/api-reference/inspect', label: 'Inspect Resources'},
                {type: 'doc', id: 'cli/api-reference/update', label: 'Update Resources'},
                {type: 'doc', id: 'cli/api-reference/rm', label: 'Remove Resources'},
              ],
            },
            {
              type: 'category',
              label: 'User & Access Control',
              collapsed: true,
              items: [
                {type: 'doc', id: 'cli/api-reference/user', label: 'User Management'},
                {type: 'doc', id: 'cli/api-reference/permissions', label: 'Permissions'},
              ],
            },
            {
              type: 'category',
              label: 'Organization',
              collapsed: true,
              items: [
                {type: 'doc', id: 'cli/api-reference/company', label: 'Company Management'},
                {type: 'doc', id: 'cli/api-reference/team', label: 'Team Management'},
                {type: 'doc', id: 'cli/api-reference/team-members', label: 'Team Members'},
              ],
            },
            {
              type: 'category',
              label: 'Infrastructure',
              collapsed: true,
              items: [
                {type: 'doc', id: 'cli/api-reference/bridge', label: 'Bridge'},
                {type: 'doc', id: 'cli/api-reference/machine', label: 'Machine'},
                {type: 'doc', id: 'cli/api-reference/region', label: 'Region'},
                {type: 'doc', id: 'cli/api-reference/distributed-storage', label: 'Distributed Storage'},
              ],
            },
            {
              type: 'category',
              label: 'System Operations',
              collapsed: true,
              items: [
                {type: 'doc', id: 'cli/api-reference/queue', label: 'Queue'},
                {type: 'doc', id: 'cli/api-reference/vault', label: 'Vault'},
                {type: 'doc', id: 'cli/api-reference/audit', label: 'Audit Logs'},
              ],
            },
            {
              type: 'category',
              label: 'Other Commands',
              collapsed: true,
              items: [
                {type: 'doc', id: 'cli/api-reference/clone', label: 'Clone'},
                {type: 'doc', id: 'cli/api-reference/misc', label: 'Miscellaneous'},
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      collapsed: false,
      items: [
        {type: 'doc', id: 'concepts/smart-deduplication', label: 'Smart Deduplication'},
      ],
    },
    {
      type: 'category',
      label: 'Use Cases',
      collapsed: false,
      items: [
        {type: 'doc', id: 'use-cases/dynamic-resource-scaling', label: 'Dynamic Resource Scaling'},
        {type: 'doc', id: 'use-cases/time-travel', label: 'Time Travel'},
        {type: 'doc', id: 'use-cases/legacy-database-scaling', label: 'Legacy Database Scaling'},
        {type: 'doc', id: 'use-cases/risk-free-upgrades', label: 'Risk-Free Upgrades'},
        {type: 'doc', id: 'use-cases/cross-backup', label: 'Cross-Region Backup'},
        {type: 'doc', id: 'use-cases/blackout', label: 'Blackout Recovery'},
        {type: 'doc', id: 'use-cases/zero-cost', label: 'Zero-Cost Backup'},
      ],
    },
  ],
};

export default sidebars;
