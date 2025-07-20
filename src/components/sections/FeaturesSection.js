import React, { useState } from 'react';
import styles from './FeaturesSection.module.css';

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 'intelligent-backup',
      title: 'Intelligent Backup',
      description: 'Save substantially on storage costs with our differential backup technology that stores only changed data.',
      icon: '📦',
      highlight: 'Efficient archival solution',
      badge: 'Cost Optimization',
      gradient: 'from-green-600 to-emerald-600',
      docsLink: '/docs/backup/zero-cost',
      videoUrl: 'https://www.youtube.com/embed/JMYQmGfTltY?si=465jIzKOqgdkuCOw',
      useCase: {
        title: 'System Administrators',
        description: 'Simplify backup management, automate routine tasks, and ensure rapid recovery.',
        icon: '🖥️'
      }
    },
    {
      id: 'time-travel',
      title: 'Time Travel Recovery',
      description: 'Restore systems to any point in time with automated hourly snapshots, preventing data loss and minimizing recovery time.',
      icon: '🕒',
      highlight: 'Instant point-in-time recovery',
      badge: 'Recovery',
      gradient: 'from-blue-600 to-indigo-600',
      docsLink: '/docs/backup/time-travel',
      videoUrl: 'https://www.youtube.com/embed/JMYQmGfTltY?si=465jIzKOqgdkuCOw'
    },
    {
      id: 'cross-backup',
      title: 'Cross-platform Backup',
      description: 'Securely back up data to remote servers with significantly reduced bandwidth, enabling disaster recovery in minutes not days.',
      icon: '🔄',
      highlight: 'Seamless platform migration',
      badge: 'Cross-Platform',
      gradient: 'from-purple-600 to-pink-600',
      docsLink: '/docs/backup/cross-backup',
      videoUrl: 'https://www.youtube.com/embed/JMYQmGfTltY?si=465jIzKOqgdkuCOw',
      useCase: {
        title: 'DevOps Teams',
        description: 'Streamline CI/CD pipelines with instant environment cloning.',
        icon: '⚙️'
      }
    },
    {
      id: 'advanced-security',
      title: 'Advanced Security',
      description: 'Multi-layered security architecture with end-to-end encryption, access controls, and audit trails.',
      icon: '🔐',
      highlight: 'Advanced threat protection',
      badge: 'Security',
      gradient: 'from-red-600 to-orange-600',
      docsLink: '/docs/security/real-time-defense',
      videoUrl: 'https://www.youtube.com/embed/JMYQmGfTltY?si=465jIzKOqgdkuCOw',
      useCase: {
        title: 'Security Teams',
        description: 'Implement comprehensive data protection strategies.',
        icon: '🔐'
      }
    },
    {
      id: 'dynamic-scaling',
      title: 'Dynamic Scaling',
      description: 'Instantly clone environments to the cloud during peak loads, reducing costs while boosting performance.',
      icon: '📈',
      highlight: 'Automatic resource optimization',
      badge: 'Performance',
      gradient: 'from-green-600 to-lime-600',
      docsLink: '/docs/scaling/dynamic-resource-scaling',
      videoUrl: 'https://www.youtube.com/embed/JMYQmGfTltY?si=465jIzKOqgdkuCOw',
      useCase: {
        title: 'Cloud Architects',
        description: 'Design scalable architectures that optimize costs.',
        icon: '☁️'
      }
    },
    {
      id: 'risk-free-upgrades',
      title: 'Risk-Free Upgrades',
      description: 'Test system upgrades on instant clones without affecting production environments.',
      icon: '⚡',
      highlight: 'Safe system updates',
      badge: 'Reliability',
      gradient: 'from-yellow-600 to-amber-600',
      docsLink: '/docs/administration/risk-free-upgrades',
      videoUrl: 'https://www.youtube.com/embed/JMYQmGfTltY?si=465jIzKOqgdkuCOw'
    }
  ];

  return (
    <section id="features" className={styles.featuresSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Security • Scaling • Backup
          </h2>
          <p className={styles.sectionSubtitle}>
            Three words that keep you awake at night. One platform that lets you sleep again.
          </p>
        </div>

        <div className={styles.featuresContainer}>
          <div className={styles.featuresList}>
            {/* Desktop Sidebar */}
            <div className={styles.desktopSidebar}>
              {features.map((feature, index) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(index)}
                  className={`${styles.featureTab} ${activeFeature === index ? styles.active : ''}`}
                >
                  <span className={styles.featureIcon}>{feature.icon}</span>
                  <span className={styles.featureBadge}>{feature.badge}</span>
                </button>
              ))}
            </div>

            {/* Mobile Tabs */}
            <div className={styles.mobileTabs}>
              {features.map((feature, index) => (
                <button
                  key={`mobile-${feature.id}`}
                  onClick={() => setActiveFeature(index)}
                  className={`${styles.mobileTab} ${activeFeature === index ? styles.active : ''}`}
                >
                  <span>{feature.icon}</span>
                  <span>{feature.badge}</span>
                </button>
              ))}
            </div>

            {/* Feature Content */}
            <div className={styles.featureContent}>
              <div className={styles.videoContainer}>
                <iframe
                  src={features[activeFeature].videoUrl}
                  title={features[activeFeature].title}
                  className={styles.video}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className={styles.featureDetails}>
                <div className={styles.featureHeader}>
                  <div className={styles.featureIconLarge}>
                    {features[activeFeature].icon}
                  </div>
                  <h3 className={styles.featureTitle}>{features[activeFeature].title}</h3>
                </div>
                
                <p className={styles.featureDescription}>
                  {features[activeFeature].description}
                </p>
                
                <div className={styles.featureHighlight}>
                  <p>{features[activeFeature].highlight}</p>
                </div>

                {features[activeFeature].useCase && (
                  <div className={styles.useCase}>
                    <div className={styles.useCaseIcon}>
                      {features[activeFeature].useCase.icon}
                    </div>
                    <div className={styles.useCaseContent}>
                      <h4>{features[activeFeature].useCase.title}</h4>
                      <p>{features[activeFeature].useCase.description}</p>
                    </div>
                  </div>
                )}
                
                <a href={features[activeFeature].docsLink} className={styles.docsLink}>
                  View documentation
                  <svg className={styles.arrow} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;