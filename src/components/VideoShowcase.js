import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import { Icon } from './Icon';

const VideoShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Animated feature change function
  const handleFeatureChange = (index) => {
    if (index === activeFeature) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveFeature(index);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 150);
  };

  // Media query check for mobile/desktop
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check initial state
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Clean up event listener
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const features = [
    {
      id: 'intelligent-backup',
      title: 'Intelligent Backup Solutions',
      category: 'Cost Optimization',
      description: 'Cut storage costs substantially and accelerate backup processes with our advanced file system technology.',
      icon: '📦',
      iconName: 'archive',
      highlight: 'Efficient archival solution',
      gradient: 'linear-gradient(135deg, #556b2f 0%, #10b981 100%)',
      docsLink: '/docs/use-cases/zero-cost',
      videoUrl: 'https://www.youtube.com/embed/JMYQmGfTltY?si=465jIzKOqgdkuCOw&title=Intelligent%20Backup',
      useCase: {
        title: 'System Administrators',
        description: 'Reduce backup storage costs by up to 99.99% while maintaining instant recovery capabilities.',
        iconName: 'server'
      }
    },
    {
      id: 'time-travel',
      title: 'Time Travel Recovery',
      category: 'Recovery',
      description: 'Restore systems to any point in time with automated hourly snapshots, preventing data loss and minimizing recovery time.',
      icon: '🕒',
      iconName: 'clock',
      highlight: 'Instant point-in-time recovery',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
      docsLink: '/docs/use-cases/time-travel',
      videoUrl: 'https://www.youtube.com/embed/JMYQmGfTltY?si=465jIzKOqgdkuCOw&title=Time%20Travel%20Recovery',
      useCase: {
        title: 'Database Administrators',
        description: 'Recover from any disaster scenario with confidence, minimizing downtime and data loss.',
        iconName: 'database'
      }
    },
    {
      id: 'cross-backup',
      title: 'Cross-platform Backup',
      category: 'Cross-Platform',
      description: 'Securely back up data to remote servers with significantly reduced bandwidth, enabling disaster recovery in minutes not days.',
      icon: '🔄',
      iconName: 'sync',
      highlight: 'Seamless platform migration',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
      docsLink: '/docs/use-cases/cross-backup',
      videoUrl: 'https://www.youtube.com/embed/JMYQmGfTltY?si=465jIzKOqgdkuCOw&title=Cross-platform%20Backup',
      useCase: {
        title: 'DevOps Teams',
        description: 'Seamlessly manage multi-cloud and hybrid deployments with unified backup strategies.',
        iconName: 'code'
      }
    },
    {
      id: 'advanced-security',
      title: 'Advanced Security',
      category: 'Security',
      description: 'Protect your data with end-to-end encryption and AI-powered real-time threat detection.',
      icon: '🔐',
      iconName: 'shield',
      highlight: 'Advanced threat protection',
      gradient: 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)',
      docsLink: '/features/security',
      videoUrl: 'https://www.youtube.com/embed/JMYQmGfTltY?si=465jIzKOqgdkuCOw&title=Advanced%20Security',
      useCase: {
        title: 'Security Teams',
        description: 'Stay ahead of threats with real-time monitoring and automated response systems.',
        iconName: 'shield'
      }
    },
    {
      id: 'dynamic-scaling',
      title: 'Dynamic Resource Scaling',
      category: 'Performance',
      description: 'Instantly clone environments to the cloud during peak loads, reducing costs substantially while boosting performance considerably.',
      icon: '📈',
      iconName: 'scaling',
      highlight: 'Automatic resource optimization',
      gradient: 'linear-gradient(135deg, #556b2f 0%, #84cc16 100%)',
      docsLink: '/docs/use-cases/dynamic-resource-scaling',
      videoUrl: 'https://www.youtube.com/embed/JMYQmGfTltY?si=465jIzKOqgdkuCOw&title=Dynamic%20Scaling',
      useCase: {
        title: 'Cloud Architects',
        description: 'Design scalable infrastructures that automatically adapt to changing demands.',
        iconName: 'cloud'
      }
    },
    {
      id: 'business-continuity',
      title: 'Business Continuity',
      category: 'Disaster Recovery',
      description: 'Ensure uninterrupted operations even during major infrastructure failures or disasters.',
      icon: '🔄',
      iconName: 'disaster-recovery',
      highlight: 'Intercontinental data mirroring',
      gradient: 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)',
      docsLink: '/docs/use-cases/cross-backup',
      videoUrl: 'https://www.youtube.com/embed/JMYQmGfTltY?si=465jIzKOqgdkuCOw&title=Business%20Continuity',
      useCase: {
        title: 'Financial Services',
        description: 'Maintain operations across continents with automatic failover and data synchronization.',
        iconName: 'finance'
      }
    },
    {
      id: 'legacy-enhancement',
      title: 'Legacy System Enhancement',
      category: 'Legacy Systems',
      description: 'Boost performance of legacy databases without expensive migration or rewriting.',
      icon: '🚀',
      iconName: 'database',
      highlight: 'Boost legacy performance',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      docsLink: '/docs/use-cases/legacy-database-scaling',
      videoUrl: 'https://www.youtube.com/embed/JMYQmGfTltY?si=465jIzKOqgdkuCOw&title=Legacy%20Enhancement',
      useCase: {
        title: 'Database Administrators',
        description: 'Scale legacy systems that cannot normally be horizontally scaled by replicating to multiple read servers.',
        iconName: 'database'
      }
    },
    {
      id: 'risk-free-upgrades',
      title: 'Risk-Free Upgrades',
      category: 'Reliability',
      description: 'Test system changes on instant clones with zero impact on production environments.',
      icon: '⚡',
      iconName: 'protected',
      highlight: 'Safe system updates',
      gradient: 'linear-gradient(135deg, #7d9b49 0%, #f59e0b 100%)',
      docsLink: '/docs/use-cases/risk-free-upgrades',
      videoUrl: 'https://www.youtube.com/embed/JMYQmGfTltY?si=465jIzKOqgdkuCOw&title=Risk-Free%20Upgrades',
      useCase: {
        title: 'System Administrators',
        description: 'Create perfect copies of production systems in seconds to test upgrades and detect issues before they impact users.',
        iconName: 'server'
      }
    }
  ];

  return (
    <section style={{
      padding: '6rem 1rem',
      background: 'var(--ifm-background-color)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background elements */}
      <div style={{
        position: 'absolute',
        top: '-10rem',
        right: '-10rem',
        width: '20rem',
        height: '20rem',
        background: 'var(--ifm-color-primary)',
        borderRadius: '50%',
        filter: 'blur(100px)',
        opacity: 0.05
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-10rem',
        left: '-10rem',
        width: '20rem',
        height: '20rem',
        background: '#3b82f6',
        borderRadius: '50%',
        filter: 'blur(100px)',
        opacity: 0.05
      }} />

      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '3rem', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            color: 'var(--ifm-heading-color)'
          }}>
            Security, Scaling & Backup
          </h2>
          <p style={{ 
            fontSize: '1.25rem', 
            color: 'var(--ifm-font-color-secondary)',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Three words that keep you awake at night. One platform that lets you sleep again.
          </p>
        </div>

        {/* Main Feature Content with Left Sidebar Navigation */}
        <div style={{
          background: 'var(--ifm-background-surface-color)',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
          border: '1px solid var(--ifm-toc-border-color)',
          transition: 'all 0.5s ease',
          opacity: isTransitioning ? 0.95 : 1
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 0 }}>
            {/* Mobile Tabs - Only visible on mobile */}
            {isMobile && (
              <div style={{
                display: 'flex',
                overflowX: 'auto',
                padding: '1rem',
                gap: '0.5rem',
                borderBottom: '1px solid var(--ifm-toc-border-color)',
                WebkitOverflowScrolling: 'touch'
              }}>
                {features.map((feature, index) => (
                  <button
                    key={`mobile-${feature.id}`}
                    onClick={() => handleFeatureChange(index)}
                    style={{
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      padding: '0.75rem 1rem',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '0.875rem',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      flexShrink: 0,
                      background: activeFeature === index ? 'var(--ifm-color-primary)' : 'var(--ifm-background-color)',
                      color: activeFeature === index ? 'white' : 'var(--ifm-font-color-base)',
                      transform: activeFeature === index ? 'scale(1.05)' : 'scale(1)',
                      boxShadow: activeFeature === index ? '0 4px 12px rgba(85, 107, 47, 0.3)' : 'none'
                    }}
                  >
                    <Icon name={feature.iconName} size={16} />
                    <span>{feature.category}</span>
                  </button>
                ))}
              </div>
            )}

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: isMobile ? '1fr' : '300px 1fr',
              gap: 0
            }}>
              {/* Desktop Sidebar - Only visible on desktop */}
              {!isMobile && (
                <div style={{
                  borderRight: '1px solid var(--ifm-toc-border-color)',
                  background: 'var(--ifm-background-color)'
                }}>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {features.map((feature, index) => (
                      <li key={feature.id} style={{ margin: 0 }}>
                        <button
                          onClick={() => handleFeatureChange(index)}
                          style={{
                            cursor: 'pointer',
                            width: '100%',
                            textAlign: 'left',
                            padding: '1.5rem',
                            background: activeFeature === index ? 'var(--ifm-background-surface-color)' : 'transparent',
                            border: 'none',
                            borderRight: activeFeature === index ? '4px solid var(--ifm-color-primary)' : '4px solid transparent',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            transform: activeFeature === index ? 'translateX(4px)' : 'translateX(0)'
                          }}
                          onMouseEnter={(e) => {
                            if (activeFeature !== index) {
                              e.currentTarget.style.background = 'var(--ifm-background-surface-color)';
                              e.currentTarget.style.transform = 'translateX(2px)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (activeFeature !== index) {
                              e.currentTarget.style.background = 'transparent';
                              e.currentTarget.style.transform = 'translateX(0)';
                            }
                          }}
                        >
                          <span style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            background: activeFeature === index ? 'var(--ifm-color-primary)' : 'var(--ifm-background-surface-color)',
                            color: activeFeature === index ? 'white' : 'var(--ifm-font-color-base)',
                            fontSize: '1.25rem',
                            transition: 'all 0.3s ease',
                            transform: activeFeature === index ? 'scale(1.1)' : 'scale(1)'
                          }}>
                            <Icon name={feature.iconName} size={20} />
                          </span>
                          <span style={{
                            fontWeight: activeFeature === index ? '600' : '500',
                            color: activeFeature === index ? 'var(--ifm-color-primary)' : 'var(--ifm-font-color-base)',
                            fontSize: '0.95rem'
                          }}>
                            {feature.category}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Right Column - Feature Content */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {/* Video Section */}
                <div style={{
                  padding: isMobile ? '1rem' : '2rem',
                  background: 'var(--ifm-background-color)',
                  borderBottom: '1px solid var(--ifm-toc-border-color)'
                }}>
                  <div style={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                    transition: 'all 0.5s ease',
                    opacity: isTransitioning ? 0 : 1,
                    transform: isTransitioning ? 'translateY(20px)' : 'translateY(0)'
                  }}>
                    <div style={{
                      position: 'relative',
                      paddingBottom: '56.25%',
                      height: 0,
                      overflow: 'hidden',
                      background: '#000'
                    }}>
                      <iframe
                        src={features[activeFeature].videoUrl}
                        title={features[activeFeature].title}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          border: 'none'
                        }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>

                {/* Feature Details */}
                <div style={{
                  padding: isMobile ? '1.5rem' : '2.5rem',
                  transition: 'all 0.3s ease',
                  opacity: isTransitioning ? 0 : 1,
                  transform: isTransitioning ? 'translateY(10px)' : 'translateY(0)'
                }}>
                  {/* Title and Badge */}
                  <div style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: features[activeFeature].gradient,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                        transition: 'all 0.3s ease',
                        transform: isTransitioning ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}>
                        <Icon name={features[activeFeature].iconName} size={24} />
                      </div>
                      <div>
                        <h3 style={{
                          fontSize: '1.75rem',
                          fontWeight: 'bold',
                          margin: 0,
                          color: 'var(--ifm-heading-color)'
                        }}>
                          {features[activeFeature].title}
                        </h3>
                        <p style={{
                          fontSize: '0.95rem',
                          margin: 0,
                          color: 'var(--ifm-color-primary)',
                          fontWeight: '500'
                        }}>
                          {features[activeFeature].category}
                        </p>
                      </div>
                    </div>

                    <p style={{
                      fontSize: '1.1rem',
                      lineHeight: '1.7',
                      color: 'var(--ifm-font-color-secondary)',
                      marginBottom: '1.5rem'
                    }}>
                      {features[activeFeature].description}
                    </p>

                    {/* Highlight Box */}
                    <div style={{
                      background: 'var(--ifm-background-color)',
                      borderLeft: '4px solid var(--ifm-color-primary)',
                      padding: '1rem 1.5rem',
                      borderRadius: '0 8px 8px 0',
                      marginBottom: '2rem'
                    }}>
                      <p style={{
                        margin: 0,
                        fontStyle: 'italic',
                        color: 'var(--ifm-font-color-base)',
                        fontSize: '1rem'
                      }}>
                        {features[activeFeature].highlight}
                      </p>
                    </div>
                  </div>

                  {/* Use Case Section */}
                  {features[activeFeature].useCase && (
                    <div style={{
                      marginBottom: '2rem',
                      padding: '1.5rem',
                      borderRadius: '12px',
                      background: 'var(--ifm-background-color)',
                      border: '1px solid var(--ifm-toc-border-color)',
                      transition: 'all 0.3s ease'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
                        <div style={{
                          fontSize: '2rem',
                          width: '48px',
                          height: '48px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'var(--ifm-color-primary)',
                          borderRadius: '50%',
                          opacity: 0.1,
                          flexShrink: 0
                        }}>
                          <Icon name={features[activeFeature].useCase.iconName} size={32} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <h4 style={{
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            marginBottom: '0.5rem',
                            color: 'var(--ifm-heading-color)'
                          }}>
                            {features[activeFeature].useCase.title}
                          </h4>
                          <p style={{
                            fontSize: '0.95rem',
                            color: 'var(--ifm-font-color-secondary)',
                            margin: 0,
                            lineHeight: '1.6'
                          }}>
                            {features[activeFeature].useCase.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Documentation Link */}
                  <Link
                    to={features[activeFeature].docsLink}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      color: 'var(--ifm-color-primary)',
                      fontWeight: '600',
                      fontSize: '1rem',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '8px',
                      background: 'var(--ifm-background-color)',
                      border: '2px solid var(--ifm-color-primary)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--ifm-color-primary)';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(85, 107, 47, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--ifm-background-color)';
                      e.currentTarget.style.color = 'var(--ifm-color-primary)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    View documentation
                    <svg style={{ width: '20px', height: '20px', marginLeft: '0.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;