/**
 * Centralized configuration for Related Resources across all feature and solution pages.
 * This ensures consistency and makes it easy to manage cross-page relationships.
 */

const relatedResources = {
  // Feature Pages
  'zero-cost-backup': [
    { label: 'Disaster Recovery', to: '/features/disaster-recovery', icon: 'shield' },
    { label: 'Time Travel Feature', to: '/features/time-travel', icon: 'history' },
    { label: 'Enterprise Scaling', to: '/solutions/enterprise-scaling', icon: 'trending-up' },
    { label: 'API Documentation', to: '/docs/cli/api-reference', icon: 'code' }
  ],
  
  'disaster-recovery': [
    { label: 'Backup Solutions', to: '/features/zero-cost-backup', icon: 'archive' },
    { label: 'Security Features', to: '/features/security', icon: 'shield' },
    { label: 'Time Travel', to: '/features/time-travel', icon: 'history' },
    { label: 'Enterprise Scaling', to: '/solutions/enterprise-scaling', icon: 'trending-up' }
  ],
  
  'time-travel': [
    { label: 'Zero-Cost Backup', to: '/features/zero-cost-backup', icon: 'archive' },
    { label: 'Disaster Recovery', to: '/features/disaster-recovery', icon: 'shield' },
    { label: 'Cross-Backup', to: '/features/cross-backup', icon: 'globe' },
    { label: 'Documentation', to: '/docs/intro', icon: 'book' }
  ],
  
  'cross-backup': [
    { label: 'Zero-Cost Backup', to: '/features/zero-cost-backup', icon: 'archive' },
    { label: 'Time Travel', to: '/features/time-travel', icon: 'history' },
    { label: 'Disaster Recovery', to: '/features/disaster-recovery', icon: 'shield' },
    { label: 'Cloud Migration', to: '/solutions/cloud-migration', icon: 'cloud-upload' }
  ],
  
  'dynamic-scaling': [
    { label: 'Enterprise Scaling', to: '/solutions/enterprise-scaling', icon: 'trending-up' },
    { label: 'Zero-Cost Backup', to: '/features/zero-cost-backup', icon: 'archive' },
    { label: 'Risk-Free Upgrades', to: '/features/risk-free-upgrades', icon: 'refresh-cw' },
    { label: 'DevOps Solutions', to: '/solutions/devops', icon: 'workflow' }
  ],
  
  'risk-free-upgrades': [
    { label: 'Time Travel', to: '/features/time-travel', icon: 'history' },
    { label: 'Dynamic Scaling', to: '/features/dynamic-scaling', icon: 'trending-up' },
    { label: 'Disaster Recovery', to: '/features/disaster-recovery', icon: 'shield' },
    { label: 'DevOps Solutions', to: '/solutions/devops', icon: 'workflow' }
  ],
  
  'scaling': [
    { label: 'Backup Solutions', to: '/features/zero-cost-backup', icon: 'archive' },
    { label: 'Disaster Recovery', to: '/features/disaster-recovery', icon: 'shield' },
    { label: 'Cloud Migration', to: '/solutions/cloud-migration', icon: 'cloud-upload' },
    { label: 'Enterprise Scaling', to: '/solutions/enterprise-scaling', icon: 'trending-up' }
  ],
  
  'security': [
    { label: 'Backup Security', to: '/features/zero-cost-backup', icon: 'archive' },
    { label: 'Disaster Recovery', to: '/features/disaster-recovery', icon: 'shield' },
    { label: 'Advanced Security Guide', to: '/docs/web-application', icon: 'book' },
    { label: 'AI Safety', to: '/solutions/ai-safety', icon: 'shield' }
  ],
  
  'ai-safety': [
    { label: 'Security Features', to: '/features/security', icon: 'shield' },
    { label: 'Disaster Recovery', to: '/features/disaster-recovery', icon: 'shield' },
    { label: 'Zero-Cost Backup', to: '/features/zero-cost-backup', icon: 'archive' },
    { label: 'Documentation', to: '/docs/intro', icon: 'book' }
  ],
  
  // Solution Pages
  'backup-recovery': [
    { label: 'Zero-Cost Backup', to: '/features/zero-cost-backup', icon: 'archive' },
    { label: 'Time Travel', to: '/features/time-travel', icon: 'history' },
    { label: 'Cross-Backup', to: '/features/cross-backup', icon: 'globe' },
    { label: 'Disaster Recovery', to: '/features/disaster-recovery', icon: 'shield' }
  ],
  
  'infrastructure-protection': [
    { label: 'Security Features', to: '/features/security', icon: 'shield' },
    { label: 'Disaster Recovery', to: '/features/disaster-recovery', icon: 'shield' },
    { label: 'Risk-Free Upgrades', to: '/features/risk-free-upgrades', icon: 'refresh-cw' },
    { label: 'Zero-Cost Backup', to: '/features/zero-cost-backup', icon: 'archive' }
  ],
  
  'enterprise-scaling': [
    { label: 'Dynamic Scaling', to: '/features/dynamic-scaling', icon: 'trending-up' },
    { label: 'Cross-Backup', to: '/features/cross-backup', icon: 'globe' },
    { label: 'Risk-Free Upgrades', to: '/features/risk-free-upgrades', icon: 'refresh-cw' },
    { label: 'Cloud Migration', to: '/solutions/cloud-migration', icon: 'cloud-upload' }
  ],
  
  'devops': [
    { label: 'Risk-Free Upgrades', to: '/features/risk-free-upgrades', icon: 'refresh-cw' },
    { label: 'Dynamic Scaling', to: '/features/dynamic-scaling', icon: 'trending-up' },
    { label: 'API Documentation', to: '/docs/cli/api-reference', icon: 'code' },
    { label: 'Cloud Migration', to: '/solutions/cloud-migration', icon: 'cloud-upload' }
  ],
  
  'database': [
    { label: 'Zero-Cost Backup', to: '/features/zero-cost-backup', icon: 'archive' },
    { label: 'Time Travel', to: '/features/time-travel', icon: 'history' },
    { label: 'Dynamic Scaling', to: '/features/dynamic-scaling', icon: 'trending-up' },
    { label: 'Disaster Recovery', to: '/features/disaster-recovery', icon: 'shield' }
  ],
  
  'cloud-migration': [
    { label: 'Cross-Backup', to: '/features/cross-backup', icon: 'globe' },
    { label: 'Dynamic Scaling', to: '/features/dynamic-scaling', icon: 'trending-up' },
    { label: 'Enterprise Scaling', to: '/solutions/enterprise-scaling', icon: 'trending-up' },
    { label: 'DevOps Solutions', to: '/solutions/devops', icon: 'workflow' }
  ],
  
  'ai-safety-solution': [
    { label: 'AI Safety Features', to: '/features/ai-safety', icon: 'shield' },
    { label: 'Security', to: '/features/security', icon: 'shield' },
    { label: 'Infrastructure Protection', to: '/solutions/infrastructure-protection', icon: 'shield' },
    { label: 'Documentation', to: '/docs/intro', icon: 'book' }
  ]
};

export default relatedResources;