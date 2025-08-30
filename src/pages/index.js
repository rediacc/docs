import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Citations from '../components/Citations';
import CitationLink from '../components/CitationLink';
import { FeatureIcon } from '../components/Icon';

function HomepageHero() {
  return (
    <section className="hero-section">
      <div className="container">
        <h1 className="hero-title animate-fade-in-up">
          The Only Infrastructure Platform That Does All 3
        </h1>
        <p className="hero-subtitle animate-fade-in-up animate-delay-100">
          Prevent AI disasters. Enable rapid recovery. Cut costs up to 90%.<br />
          Pick one problem or solve all three.
        </p>
        
        {/* Three Pillars Preview */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          maxWidth: '800px',
          margin: '2rem auto',
          textAlign: 'center'
        }} className="animate-fade-in-up animate-delay-150">
          <div style={{
            padding: '1rem',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>🛡️</div>
            <div style={{fontWeight: 'bold'}}>AI Safety</div>
            <small>0 production disasters</small>
          </div>
          <div style={{
            padding: '1rem',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>⚡</div>
            <div style={{fontWeight: 'bold'}}>Rapid Recovery</div>
            <small>Fast restoration capability</small>
          </div>
          <div style={{
            padding: '1rem',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>💰</div>
            <div style={{fontWeight: 'bold'}}>Zero-Cost</div>
            <small>Up to 90% savings possible</small>
          </div>
        </div>
        
        <div className="hero-buttons animate-fade-in-up animate-delay-200">
          <Link
            className="button button--primary button--lg"
            to="/console/login?register=quick"
            target="_blank">
            Start Free Trial →
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="#solutions">
            See All 3 Solutions
          </Link>
        </div>
        
        <div style={{
          marginTop: '2rem',
          fontSize: '0.95rem',
          opacity: 0.9
        }} className="animate-fade-in-up animate-delay-250">
          <div style={{marginBottom: '0.5rem'}}>
            ✅ Deploy in 100 seconds · ✅ No credit card · ✅ Up to 1,900% ROI potential
          </div>
        </div>
        
        <div className="hero-quote animate-fade-in-up animate-delay-300" style={{
          marginTop: '3rem',
          padding: '1.5rem',
          borderLeft: '3px solid var(--ifm-color-primary-lighter)',
          background: 'rgba(85, 107, 47, 0.05)',
          borderRadius: '8px',
          maxWidth: '700px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <p style={{fontSize: '1.1rem', fontStyle: 'italic', margin: 0, color: 'var(--ifm-font-color-secondary)'}}>
            <CitationLink numbers={1}>
              "The most aggressive buyers in AI are no longer chasing novelty. They are chasing infrastructure. 
              As AI shifts from lab to production, the real battle is not about building models. 
              It is about running them at scale, reliably and securely."
            </CitationLink>
          </p>
        </div>
      </div>
    </section>
  );
}

function MainFeatureCategories() {
  const featureCategories = [
    {
      title: '🛡️ AI Safety & Protection',
      subtitle: 'Prevent AI Disasters Before They Destroy Your Production',
      description: 'While others scramble after AI deleted their databases, you\'ll have strong protection',
      features: [
        {
          iconName: 'ai-safety',
          title: 'Fast Production Cloning',
          description: 'AI works on perfect copies created in seconds. Your real production data remains completely untouchable by AI agents.',
          link: '/features/ai-safety',
        },
        {
          iconName: 'lock',
          title: 'Hard System Boundaries',
          description: 'AI literally cannot access production. Permissions enforced at kernel level make disasters impossible, not just recoverable.',
          link: '/features/ai-safety',
        },
        {
          iconName: 'time-travel',
          title: '1-Minute Time Travel',
          description: 'When AI makes mistakes, quickly rewind to any moment before the incident with hourly snapshots.',
          link: '/features/time-travel',
        },
      ],
      stats: {
        mainValue: '0',
        mainLabel: 'AI Production Disasters',
        subValue: '847',
        subLabel: 'Incident Types Covered'
      },
      targetAudience: 'Perfect for teams using GitHub Copilot, Claude, GPT, or any AI coding assistants',
      cta: {
        primary: 'Get AI Protection Now',
        link: '/features/ai-safety'
      }
    },
    {
      title: '⚡ Instant Disaster Recovery',
      subtitle: 'Turn Catastrophes Into 60-Second Inconveniences',
      description: 'While competitors lose millions to ransomware and outages, you\'ll recover quickly',
      features: [
        {
          iconName: 'disaster-recovery',
          title: '60-Second Recovery',
          description: 'Restore from ransomware, data center failures, or human errors in under 1 minute instead of days or weeks.',
          link: '/features/disaster-recovery',
        },
        {
          iconName: 'shield',
          title: 'Ransomware Immunity',
          description: 'Immutable backups that hackers can\'t encrypt or delete. Recover without paying ransom.',
          link: '/features/disaster-recovery',
        },
        {
          iconName: 'globe',
          title: 'Geographic Redundancy',
          description: 'Multi-region protection with automatic failover. Stay online even during regional disasters.',
          link: '/features/cross-backup',
        },
      ],
      stats: {
        mainValue: '1 min',
        mainLabel: 'Recovery Time',
        subValue: 'Up to $14,056',
        subLabel: 'Saved Per Minute'
      },
      targetAudience: 'Essential for enterprises, financial services, healthcare, and e-commerce',
      cta: {
        primary: 'Protect Your Business',
        link: '/features/disaster-recovery'
      }
    },
    {
      title: '💰 Zero-Cost Infrastructure',
      subtitle: 'Cut Storage Costs by 90% While Getting 10x Better Protection',
      description: 'Stop wasting millions on bloated backup bills and complex licensing',
      features: [
        {
          iconName: 'backup',
          title: '90% Storage Reduction',
          description: 'Smart deduplication stores only unique data. 100TB of backups might use only 10TB of actual storage.',
          link: '/features/zero-cost-backup',
        },
        {
          iconName: 'scaling',
          title: 'Instant Scaling',
          description: 'Clone 100TB databases in seconds using only megabytes. Scale without infrastructure investment.',
          link: '/features/dynamic-scaling',
        },
        {
          iconName: 'simple',
          title: 'Simple Pricing',
          description: 'Pay per TB, not per VM. No complex licensing, no surprise renewals. Potentially up to 70% more cost-effective vs enterprise backup solutions.',
          link: '/pricing',
        },
      ],
      stats: {
        mainValue: '$2.1M',
        mainLabel: 'Annual Savings',
        subValue: '90%',
        subLabel: 'Cost Reduction'
      },
      targetAudience: 'Loved by CFOs, IT budget holders, and fast-growing companies',
      cta: {
        primary: 'Calculate Your Savings',
        link: '/pricing'
      }
    }
  ];

  return (
    <section id="solutions" style={{padding: '5rem 0', background: 'var(--ifm-background-color)'}}>
      <div className="container">
        <h2 style={{textAlign: 'center', marginBottom: '1rem', fontSize: '3rem', fontWeight: 'bold'}}>
          3 Ways We Save Your Infrastructure
        </h2>
        <p style={{textAlign: 'center', marginBottom: '4rem', fontSize: '1.3rem', color: 'var(--ifm-font-color-secondary)', maxWidth: '800px', margin: '0 auto 4rem'}}>
          Pick your biggest pain point. We'll solve it in 100 seconds.
        </p>
        
        {featureCategories.map((category, catIdx) => (
          <div key={catIdx} style={{
            marginBottom: '5rem',
            padding: '3rem',
            background: catIdx % 2 === 0 ? 'var(--ifm-background-surface-color)' : 'var(--ifm-background-color)',
            borderRadius: '16px',
            border: '2px solid var(--ifm-color-emphasis-200)',
          }}>
            {/* Category Header */}
            <div style={{marginBottom: '3rem', textAlign: 'center'}}>
              <h3 style={{fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>
                {category.title}
              </h3>
              <p style={{fontSize: '1.5rem', color: 'var(--ifm-color-primary)', marginBottom: '0.5rem'}}>
                {category.subtitle}
              </p>
              <p style={{color: 'var(--ifm-font-color-secondary)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto'}}>
                {category.description}
              </p>
            </div>

            {/* Stats Display */}
            {category.stats && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '2rem',
                maxWidth: '400px',
                margin: '0 auto 3rem',
                textAlign: 'center'
              }}>
                <div style={{
                  padding: '1.5rem',
                  background: 'var(--ifm-color-primary)',
                  color: 'white',
                  borderRadius: '12px'
                }}>
                  <div style={{fontSize: '2.5rem', fontWeight: 'bold'}}>{category.stats.mainValue}</div>
                  <div style={{fontSize: '0.9rem', opacity: 0.9}}>{category.stats.mainLabel}</div>
                </div>
                <div style={{
                  padding: '1.5rem',
                  background: 'var(--ifm-background-color)',
                  border: '2px solid var(--ifm-color-primary)',
                  borderRadius: '12px'
                }}>
                  <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--ifm-color-primary)'}}>{category.stats.subValue}</div>
                  <div style={{fontSize: '0.9rem', color: 'var(--ifm-font-color-secondary)'}}>{category.stats.subLabel}</div>
                </div>
              </div>
            )}

            {/* Feature Cards */}
            <div className="features-grid" style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '2rem'
            }}>
              {category.features.map((feature, idx) => (
                <div key={idx} style={{
                  padding: '1.5rem',
                  background: 'var(--ifm-background-color)',
                  borderRadius: '12px',
                  border: '1px solid var(--ifm-color-emphasis-200)',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{marginBottom: '1rem'}}>
                    <FeatureIcon 
                      name={feature.iconName} 
                      size={32}
                      bgColor="var(--ifm-color-primary-lighter)"
                      iconColor="var(--ifm-color-primary-darkest)"
                    />
                  </div>
                  <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--ifm-heading-color)'}}>
                    {feature.title}
                  </h4>
                  <p style={{fontSize: '0.95rem', color: 'var(--ifm-font-color-secondary)', marginBottom: '1rem'}}>
                    {feature.description}
                  </p>
                  <Link to={feature.link} style={{color: 'var(--ifm-color-primary)', fontWeight: 500, fontSize: '0.9rem'}}>
                    Learn more →
                  </Link>
                </div>
              ))}
            </div>

            {/* Target Audience */}
            <div style={{
              textAlign: 'center',
              padding: '1.5rem',
              background: catIdx % 2 === 0 ? 'var(--ifm-background-color)' : 'var(--ifm-background-surface-color)',
              borderRadius: '8px',
              marginBottom: '2rem'
            }}>
              <p style={{margin: 0, fontSize: '1.05rem', fontStyle: 'italic', color: 'var(--ifm-font-color-secondary)'}}>
                {category.targetAudience}
              </p>
            </div>

            {/* CTA Button */}
            <div style={{textAlign: 'center'}}>
              <Link 
                className="button button--primary button--lg"
                to={category.cta.link}
                style={{fontSize: '1.1rem', padding: '1rem 2.5rem'}}
              >
                {category.cta.primary} →
              </Link>
            </div>
          </div>
        ))}
        
        {/* Bottom CTA */}
        <div style={{
          textAlign: 'center',
          marginTop: '4rem',
          padding: '3rem',
          background: 'linear-gradient(135deg, var(--ifm-color-primary-lighter), var(--ifm-color-primary))',
          borderRadius: '16px',
          color: 'white'
        }}>
          <h3 style={{fontSize: '2rem', marginBottom: '1rem'}}>
            Get All 3 Solutions in One Platform
          </h3>
          <p style={{fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.95}}>
            An infrastructure platform designed to prevent AI disasters, enable rapid recovery, and cut costs by up to 90%
          </p>
          <Link 
            className="button button--secondary button--lg"
            to="/console/login?register=quick"
            target="_blank"
            style={{
              fontSize: '1.2rem',
              padding: '1rem 3rem',
              background: 'white',
              color: 'var(--ifm-color-primary)',
              fontWeight: 'bold'
            }}
          >
            Start Free Trial - Deploy in 100 Seconds
          </Link>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section style={{
      padding: '5rem 0',
      background: 'var(--ifm-background-surface-color)',
      textAlign: 'center',
      borderTop: '1px solid var(--ifm-toc-border-color)'
    }}>
      <div className="container">
        <h2 style={{fontSize: '2.8rem', marginBottom: '1.5rem', color: 'var(--ifm-heading-color)', fontWeight: 'bold'}}>
          Which Problem Will You Solve First?
        </h2>
        
        {/* Three Quick Actions */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          maxWidth: '900px',
          margin: '0 auto 3rem',
        }}>
          <div style={{
            padding: '1.5rem',
            background: 'var(--ifm-background-color)',
            borderRadius: '12px',
            border: '2px solid var(--ifm-color-emphasis-200)',
            textAlign: 'left'
          }}>
            <div style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>🛡️</div>
            <h3 style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>AI keeps breaking things?</h3>
            <p style={{fontSize: '0.95rem', color: 'var(--ifm-font-color-secondary)', marginBottom: '1rem'}}>
              Isolate AI to clones. Production stays safe.
            </p>
            <Link to="/features/ai-safety" style={{color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>
              Fix in 100 seconds →
            </Link>
          </div>
          
          <div style={{
            padding: '1.5rem',
            background: 'var(--ifm-background-color)',
            borderRadius: '12px',
            border: '2px solid var(--ifm-color-emphasis-200)',
            textAlign: 'left'
          }}>
            <div style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>⚡</div>
            <h3 style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>Scared of ransomware?</h3>
            <p style={{fontSize: '0.95rem', color: 'var(--ifm-font-color-secondary)', marginBottom: '1rem'}}>
              Recover in 60 seconds. No ransom needed.
            </p>
            <Link to="/features/disaster-recovery" style={{color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>
              Get protected now →
            </Link>
          </div>
          
          <div style={{
            padding: '1.5rem',
            background: 'var(--ifm-background-color)',
            borderRadius: '12px',
            border: '2px solid var(--ifm-color-emphasis-200)',
            textAlign: 'left'
          }}>
            <div style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>💰</div>
            <h3 style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>Backup bills crushing you?</h3>
            <p style={{fontSize: '0.95rem', color: 'var(--ifm-font-color-secondary)', marginBottom: '1rem'}}>
              Cut costs 90% with smart deduplication.
            </p>
            <Link to="/pricing" style={{color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>
              Calculate savings →
            </Link>
          </div>
        </div>
        
        <div style={{
          padding: '2rem',
          background: 'linear-gradient(135deg, var(--ifm-color-primary), var(--ifm-color-primary-darker))',
          borderRadius: '12px',
          color: 'white',
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          <h3 style={{fontSize: '1.8rem', marginBottom: '1rem'}}>
            Or Get All 3 Solutions Right Now
          </h3>
          <p style={{fontSize: '1.1rem', marginBottom: '1.5rem', opacity: 0.95}}>
            Deploy in 100 seconds. No credit card. Significant ROI potential from disaster prevention.
          </p>
          <Link
            className="button button--secondary button--lg"
            to="/console/login?register=quick"
            target="_blank"
            style={{
              background: 'white',
              color: 'var(--ifm-color-primary)',
              fontSize: '1.2rem',
              padding: '1rem 2.5rem',
              fontWeight: 'bold'
            }}>
            Start Free Trial - All 3 Solutions →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="AI Safety, Rapid Recovery & Cost Savings | Rediacc"
      description="The infrastructure platform designed to prevent AI disasters, enable 60-second recovery, and reduce costs by up to 90%. Deploy in 100 seconds.">
      <Head>
        <meta property="og:title" content="Prevent AI Disasters. Recover Quickly. Save Up to 90% | Rediacc" />
        <meta property="og:description" content="The only platform that does all 3: AI safety with production cloning, 60-second disaster recovery, and 90% cost reduction. Start free trial, deploy in 100 seconds." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Rediacc",
            "description": "An infrastructure platform that prevents AI disasters, enables rapid recovery from catastrophes, and reduces costs by up to 90%. Three solutions, one platform.",
            "url": "/",
            "logo": "/img/logo.svg",
            "sameAs": [
              "https://github.com/rediacc",
              "https://twitter.com/rediacc"
            ]
          })}
        </script>
      </Head>
      
      <HomepageHero />
      <HomepageFeatures />
      <MainFeatureCategories />
      <CTASection />
      
      {/* Important Disclaimer Section */}
      <section style={{padding: '3rem 1rem', background: 'var(--ifm-background-surface-color)', borderTop: '1px solid var(--ifm-color-emphasis-200)'}}>
        <div className="container" style={{maxWidth: '1000px', margin: '0 auto'}}>
          <h2 style={{fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: 'center'}}>Important Information</h2>
          <div style={{padding: '1.5rem', background: 'var(--ifm-background-color)', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-300)'}}>
            <p style={{marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6'}}>
              <strong>Startup Disclosure:</strong> Rediacc is an early-stage startup currently in development. We are building our platform and do not yet have production customers. All performance metrics, case studies, and results presented are based on:
            </p>
            <ul style={{marginBottom: '1rem', paddingLeft: '2rem', fontSize: '0.95rem', lineHeight: '1.6'}}>
              <li>System design capabilities and theoretical performance</li>
              <li>Industry research and benchmarks (DORA, ITIC, ESG)</li>
              <li>Projected outcomes based on technology architecture</li>
              <li>Hypothetical use cases demonstrating potential applications</li>
            </ul>
            <p style={{marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6'}}>
              <strong>Results Disclaimer:</strong> All ROI calculations, cost savings, and performance improvements are potential outcomes based on system capabilities. Actual results will vary based on implementation, infrastructure complexity, and specific use cases.
            </p>
            <p style={{marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6'}}>
              <strong>Technology Status:</strong> Features described are in various stages of development. Some capabilities are fully implemented, others are in beta, and some are planned for future releases. Please contact us for current feature availability.
            </p>
            <p style={{fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--ifm-color-emphasis-600)', marginBottom: '1rem'}}>
              We believe in transparency and building trust through honest communication. Join us as an early adopter and help shape the future of infrastructure management.
            </p>
            <div style={{textAlign: 'center'}}>
              <Link to="/transparency" className="button button--outline button--primary">
                Learn More About Our Journey →
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Citations citations={[
        {
          text: "The most aggressive buyers in AI are no longer chasing novelty. They are chasing infrastructure. As AI shifts from lab to production, the real battle is not about building models. It is about running them at scale, reliably and securely.",
          source: "Crunchbase News - Strategic M&A at Global Scale",
          url: "https://news.crunchbase.com/ai/strategic-ma-global-scale-sagie/?utm_source=cb_daily&utm_medium=email&utm_campaign=20230703"
        }
      ]} />
    </Layout>
  );
}