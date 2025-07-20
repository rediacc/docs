import React from 'react';
import styles from './PricingComparisonTable.module.css';

const PricingComparisonTable = () => {
  const features = [
    {
      category: 'Core Features',
      items: [
        { name: 'Machines', community: '1', advanced: '5', premium: '25', elite: 'Unlimited' },
        { name: 'Repositories', community: '25', advanced: '250', premium: '2,500', elite: 'Unlimited' },
        { name: 'Storage', community: '1 TB', advanced: '25 TB', premium: '250 TB', elite: 'Unlimited' },
        { name: 'Team Members', community: '5', advanced: '50', premium: '500', elite: 'Unlimited' },
        { name: 'API Access', community: '✓', advanced: '✓', premium: '✓', elite: '✓' },
      ]
    },
    {
      category: 'Backup & Recovery',
      items: [
        { name: 'Snapshot Frequency', community: 'Daily', advanced: 'Every 4 hours', premium: 'Every hour', elite: 'Real-time' },
        { name: 'Retention Period', community: '7 days', advanced: '30 days', premium: '90 days', elite: 'Custom' },
        { name: 'Cross-Region Backup', community: '✗', advanced: '✓', premium: '✓', elite: '✓' },
        { name: 'Point-in-Time Recovery', community: '✗', advanced: '✓', premium: '✓', elite: '✓' },
        { name: 'Instant Recovery', community: '✗', advanced: '✗', premium: '✓', elite: '✓' },
      ]
    },
    {
      category: 'Security & Compliance',
      items: [
        { name: 'Encryption at Rest', community: '✓', advanced: '✓', premium: '✓', elite: '✓' },
        { name: 'Encryption in Transit', community: '✓', advanced: '✓', premium: '✓', elite: '✓' },
        { name: 'Audit Logs', community: '7 days', advanced: '30 days', premium: '1 year', elite: 'Unlimited' },
        { name: 'RBAC', community: 'Basic', advanced: 'Advanced', premium: 'Advanced', elite: 'Custom' },
        { name: 'Compliance Reports', community: '✗', advanced: '✗', premium: '✓', elite: '✓' },
      ]
    },
    {
      category: 'Support',
      items: [
        { name: 'Support Level', community: 'Community', advanced: 'Priority', premium: '24/7', elite: 'Dedicated' },
        { name: 'Response Time', community: '48 hours', advanced: '8 hours', premium: '2 hours', elite: '< 30 min' },
        { name: 'Phone Support', community: '✗', advanced: '✗', premium: '✓', elite: '✓' },
        { name: 'Account Manager', community: '✗', advanced: '✗', premium: '✗', elite: '✓' },
        { name: 'Professional Services', community: '✗', advanced: '✗', premium: '✓', elite: '✓' },
      ]
    }
  ];

  const tiers = ['community', 'advanced', 'premium', 'elite'];
  const tierNames = {
    community: 'Community',
    advanced: 'Advanced',
    premium: 'Premium',
    elite: 'Elite'
  };

  return (
    <div className={styles.comparisonContainer}>
      <h3 className={styles.title}>Detailed Feature Comparison</h3>
      
      <div className={styles.tableWrapper}>
        <table className={styles.comparisonTable}>
          <thead>
            <tr>
              <th className={styles.featureHeader}>Features</th>
              {tiers.map(tier => (
                <th key={tier} className={`${styles.tierHeader} ${tier === 'premium' ? styles.highlighted : ''}`}>
                  {tierNames[tier]}
                  {tier === 'premium' && <span className={styles.popularBadge}>Most Popular</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((category, categoryIndex) => (
              <React.Fragment key={categoryIndex}>
                <tr className={styles.categoryRow}>
                  <td colSpan={5} className={styles.categoryName}>{category.category}</td>
                </tr>
                {category.items.map((feature, featureIndex) => (
                  <tr key={featureIndex} className={styles.featureRow}>
                    <td className={styles.featureName}>{feature.name}</td>
                    {tiers.map(tier => (
                      <td key={tier} className={`${styles.featureValue} ${tier === 'premium' ? styles.highlighted : ''}`}>
                        {feature[tier] === '✓' ? (
                          <span className={styles.checkmark}>✓</span>
                        ) : feature[tier] === '✗' ? (
                          <span className={styles.crossmark}>✗</span>
                        ) : (
                          feature[tier]
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className={styles.mobileView}>
        {tiers.map(tier => (
          <div key={tier} className={`${styles.mobileTierCard} ${tier === 'premium' ? styles.highlighted : ''}`}>
            <h4 className={styles.mobileTierName}>
              {tierNames[tier]}
              {tier === 'premium' && <span className={styles.popularBadge}>Most Popular</span>}
            </h4>
            {features.map((category, categoryIndex) => (
              <div key={categoryIndex} className={styles.mobileCategory}>
                <h5 className={styles.mobileCategoryName}>{category.category}</h5>
                {category.items.map((feature, featureIndex) => (
                  <div key={featureIndex} className={styles.mobileFeature}>
                    <span className={styles.mobileFeatureName}>{feature.name}</span>
                    <span className={styles.mobileFeatureValue}>
                      {feature[tier] === '✓' ? (
                        <span className={styles.checkmark}>✓</span>
                      ) : feature[tier] === '✗' ? (
                        <span className={styles.crossmark}>✗</span>
                      ) : (
                        feature[tier]
                      )}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingComparisonTable;