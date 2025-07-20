import React from 'react';
import styles from './SpeedPricingTable.module.css';

const SpeedPricingTable = () => {
  const speedTiers = [
    {
      key: 'standard',
      name: 'Standard',
      speed: '24-48 hours',
      price: '$999',
      priceRange: 'per incident',
      highlight: false,
    },
    {
      key: 'priority',
      name: 'Priority',
      speed: '4-8 hours',
      price: '$2,999',
      priceRange: 'per incident',
      highlight: true,
    },
    {
      key: 'emergency',
      name: 'Emergency',
      speed: '< 1 hour',
      price: '$9,999',
      priceRange: 'per incident',
      highlight: false,
    }
  ];

  const serviceTypes = [
    { 
      key: 'migration', 
      icon: '🚚', 
      label: 'Data Migration',
      tooltip: 'Seamless migration from legacy systems to Rediacc'
    },
    { 
      key: 'ransomware', 
      icon: '🛡️', 
      label: 'Ransomware Recovery',
      tooltip: 'Rapid recovery from ransomware attacks'
    },
    { 
      key: 'compliance', 
      icon: '📋', 
      label: 'Compliance Setup',
      tooltip: 'Configure systems for regulatory compliance'
    },
    { 
      key: 'scaling', 
      icon: '📈', 
      label: 'Performance Scaling',
      tooltip: 'Scale your infrastructure for growth'
    },
    { 
      key: 'training', 
      icon: '🎓', 
      label: 'Team Training',
      tooltip: 'Comprehensive training for your team'
    },
    { 
      key: 'optimization', 
      icon: '⚡', 
      label: 'System Optimization',
      tooltip: 'Optimize performance and reduce costs'
    },
    { 
      key: 'integration', 
      icon: '🔧', 
      label: 'Custom Integration',
      tooltip: 'Integrate with your existing tools'
    }
  ];

  const serviceTimelines = {
    migration: { standard: '2-3 days', priority: '8-12 hours', emergency: '2-4 hours' },
    ransomware: { standard: '1-2 days', priority: '4-6 hours', emergency: '< 1 hour' },
    compliance: { standard: '3-5 days', priority: '1-2 days', emergency: '8-12 hours' },
    scaling: { standard: '2-3 days', priority: '8-12 hours', emergency: '2-4 hours' },
    training: { standard: '1 week', priority: '2-3 days', emergency: '1 day' },
    optimization: { standard: '2-3 days', priority: '8-12 hours', emergency: '2-4 hours' },
    integration: { standard: '1 week', priority: '2-3 days', emergency: '1 day' }
  };

  return (
    <div className={styles.speedPricingContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>Professional Services</h2>
        <p className={styles.subtitle}>
          When every minute counts, our expert team is ready to help
        </p>
        <div className={styles.tagline}>
          <span className={styles.taglineIcon}>⚡</span>
          <span>Response time guaranteed or your money back</span>
        </div>
        <div className={styles.eligibility}>
          <p>
            <strong>Available for:</strong> Premium and Elite tier customers only
          </p>
        </div>
      </div>

      <div className={styles.tableContainer}>
        {/* Desktop View */}
        <table className={styles.desktopTable}>
          <thead>
            <tr>
              <th className={styles.serviceHeader}>
                <span>Service Type</span>
              </th>
              {speedTiers.map((tier) => (
                <th key={tier.key} className={`${styles.tierHeader} ${tier.highlight ? styles.highlight : ''}`}>
                  <div className={styles.tierInfo}>
                    <h3>{tier.name}</h3>
                    <p className={styles.tierSpeed}>{tier.speed}</p>
                    <div className={styles.tierPrice}>
                      <span className={styles.priceAmount}>{tier.price}</span>
                      <span className={styles.priceRange}>{tier.priceRange}</span>
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {serviceTypes.map((service) => (
              <tr key={service.key}>
                <td className={styles.serviceCell}>
                  <div className={styles.serviceInfo}>
                    <span className={styles.serviceIcon}>{service.icon}</span>
                    <div>
                      <p className={styles.serviceLabel}>{service.label}</p>
                      <p className={styles.serviceTooltip}>{service.tooltip}</p>
                    </div>
                  </div>
                </td>
                {speedTiers.map((tier) => (
                  <td key={tier.key} className={`${styles.timelineCell} ${tier.highlight ? styles.highlight : ''}`}>
                    {serviceTimelines[service.key][tier.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile View */}
        <div className={styles.mobileView}>
          {speedTiers.map((tier) => (
            <div key={tier.key} className={`${styles.mobileTier} ${tier.highlight ? styles.highlight : ''}`}>
              <div className={styles.mobileTierHeader}>
                <h3>{tier.name}</h3>
                <p className={styles.tierSpeed}>{tier.speed}</p>
                <div className={styles.tierPrice}>
                  <span className={styles.priceAmount}>{tier.price}</span>
                  <span className={styles.priceRange}>{tier.priceRange}</span>
                </div>
              </div>
              <div className={styles.mobileServices}>
                {serviceTypes.map((service) => (
                  <div key={service.key} className={styles.mobileService}>
                    <div className={styles.mobileServiceHeader}>
                      <span className={styles.serviceIcon}>{service.icon}</span>
                      <span className={styles.serviceLabel}>{service.label}</span>
                    </div>
                    <p className={styles.mobileTimeline}>
                      {serviceTimelines[service.key][tier.key]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.benefits}>
        <div className={styles.benefitsIcon}>💡</div>
        <div className={styles.benefitsContent}>
          <h4>Why Professional Services?</h4>
          <p><strong>The average cost of IT downtime is $5,600 per minute</strong></p>
          <p><strong>78% of businesses experience at least one critical incident per year</strong></p>
          <p>Our professional services team helps you recover faster and minimize losses.</p>
          <ul>
            <li>✓ 24/7 availability with guaranteed response times</li>
            <li>✓ Expert engineers with 10+ years of experience</li>
            <li>✓ Full audit trail and compliance documentation</li>
            <li>✓ Post-incident analysis and prevention planning</li>
          </ul>
        </div>
      </div>

      <div className={styles.cta}>
        <h3>Need immediate assistance?</h3>
        <p>Our emergency response team is standing by 24/7</p>
        <a 
          href="https://outlook.office.com/owa/calendar/RediaccConsultationServices@rediacc.com/bookings/"
          target="_blank"
          rel="noopener noreferrer"
          className="button button--primary button--lg">
          Get Emergency Support
        </a>
      </div>
    </div>
  );
};

export default SpeedPricingTable;