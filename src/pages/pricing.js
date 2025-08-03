import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { Icon } from '../components/Icon';

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const plans = [
    {
      name: 'Community',
      price: 'Free',
      originalPrice: billingPeriod === 'monthly' ? '$499' : '$5,988',
      period: '',
      description: 'Perfect for personal projects and testing',
      features: [
        'Success 1 Active repository',
        'Success Up to 10 GB repo size',
        'Success Public Servers',
        'Success Community support',
        'Success Hourly snapshots',
        'Success Basic restore options',
        'Error No backup automation',
        'Error Limited to shared infrastructure'
      ],
      cta: 'Get Started',
      ctaLink: '/intro',
      highlighted: false
    },
    {
      name: 'Advanced',
      price: billingPeriod === 'monthly' ? '$2,399' : '$23,950',
      period: billingPeriod === 'monthly' ? '/month' : '/year',
      description: 'Ideal for growing teams with increased demands',
      features: [
        'Success Everything in Community plus:',
        'Success Unlimited repositories',
        'Success Up to 100 GB repo size',
        'Success Public & Dedicated Servers',
        'Success Priority email support',
        'Success Ransomware protection',
        'Success Time Travel recovery',
        'Success Basic API access'
      ],
      cta: 'Start Free Trial',
      ctaLink: '/intro',
      highlighted: true,
      badge: 'Most Popular',
      savePercent: billingPeriod === 'yearly' ? '17%' : null
    },
    {
      name: 'Premium',
      price: billingPeriod === 'monthly' ? '$3,899' : '$36,070',
      period: billingPeriod === 'monthly' ? '/month' : '/year',
      description: 'Designed for businesses with advanced needs',
      features: [
        'Success Everything in Advanced plus:',
        'Success Up to 1 TB repo size',
        'Success On-premise Servers',
        'Success 24/7 phone support',
        'Success Cross-region replication',
        'Success Advanced security features',
        'Success Custom backup schedules',
        'Success Full API access'
      ],
      cta: 'Start Free Trial',
      ctaLink: '/intro',
      highlighted: false,
      savePercent: billingPeriod === 'yearly' ? '23%' : null
    },
    {
      name: 'Elite',
      price: billingPeriod === 'monthly' ? '$6,999' : '$59,951',
      period: billingPeriod === 'monthly' ? '/month' : '/year',
      description: 'For enterprises requiring ultimate flexibility',
      features: [
        'Success Everything in Premium plus:',
        'Success Unlimited storage',
        'Success Dedicated account manager',
        'Success Custom SLA guarantees',
        'Success Priority feature requests',
        'Success White-glove onboarding',
        'Success Custom integrations',
        'Success Executive reporting'
      ],
      cta: 'Contact Sales',
      ctaLink: '/contact',
      highlighted: false,
      savePercent: billingPeriod === 'yearly' ? '29%' : null
    }
  ];

  return (
    <Layout
      title="Pricing - Simple, Transparent Infrastructure Automation Pricing | Rediacc"
      description="Choose the perfect plan for your infrastructure needs. Transparent pricing with no hidden fees. Start free, scale as you grow.">
      
      <Head>
        <meta property="og:title" content="Rediacc Pricing - Infrastructure Automation Plans" />
        <meta property="og:description" content="Simple, transparent pricing for infrastructure automation. Start free, scale as you grow. No hidden fees." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/pricing" />
        <link rel="canonical" href="/pricing" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Rediacc",
            "offers": plans.map(plan => ({
              "@type": "Offer",
              "name": plan.name,
              "price": plan.price.replace('$', ''),
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }))
          })}
        </script>
      </Head>

      <article>
        {/* Hero Section */}
        <section className="hero-section" style={{padding: '4rem 1rem'}}>
          <div className="container">
            <h1 className="hero-title animate-fade-in-up">
              Sophisticated Value Architecture
            </h1>
            <p className="hero-subtitle animate-fade-in-up animate-delay-100">
              Choose the plan that's right for your business, whether you're a startup or an enterprise.
            </p>
            
            {/* Billing Toggle */}
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '2rem'}}>
              <span style={{color: billingPeriod === 'monthly' ? 'white' : 'rgba(255,255,255,0.7)'}}>Monthly</span>
              <button
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
                style={{
                  position: 'relative',
                  width: '60px',
                  height: '30px',
                  borderRadius: '15px',
                  background: 'rgba(255,255,255,0.2)',
                  border: 'none',
                  cursor: 'pointer'
                }}>
                <div style={{
                  position: 'absolute',
                  top: '3px',
                  left: billingPeriod === 'monthly' ? '3px' : '33px',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'white',
                  transition: 'left 0.3s ease'
                }}></div>
              </button>
              <span style={{color: billingPeriod === 'yearly' ? 'white' : 'rgba(255,255,255,0.7)'}}>
                Yearly <span style={{color: 'var(--ifm-color-primary-lightest)', fontWeight: 'bold'}}>(Save 20%)</span>
              </span>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <div className="pricing-grid-container" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1400px', margin: '0 auto'}}>
              {plans.map((plan, idx) => (
                <div
                  key={idx}
                  className="feature-card"
                  style={{
                    position: 'relative',
                    padding: '2rem',
                    border: plan.highlighted ? '2px solid var(--ifm-color-primary)' : 'none',
                    transform: plan.highlighted ? 'scale(1.05)' : 'scale(1)'
                  }}>
                  {plan.badge && (
                    <div style={{
                      position: 'absolute',
                      top: '-15px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'var(--ifm-color-primary)',
                      color: 'white',
                      padding: '0.25rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.875rem',
                      fontWeight: 'bold'
                    }}>
                      {plan.badge}
                    </div>
                  )}
                  
                  <h3 style={{fontSize: '1.75rem', marginBottom: '0.5rem'}}>{plan.name}</h3>
                  <p style={{color: 'var(--ifm-font-color-secondary)', marginBottom: '1.5rem'}}>{plan.description}</p>
                  
                  <div style={{marginBottom: '2rem'}}>
                    {plan.originalPrice && (
                      <div style={{marginBottom: '0.5rem'}}>
                        <span style={{fontSize: '1.5rem', textDecoration: 'line-through', color: 'var(--ifm-font-color-secondary)'}}>
                          {plan.originalPrice}
                        </span>
                      </div>
                    )}
                    <span style={{fontSize: '3rem', fontWeight: 'bold', color: 'var(--ifm-color-primary)'}}>
                      {plan.price}
                    </span>
                    <span style={{fontSize: '1.2rem', color: 'var(--ifm-font-color-secondary)'}}>
                      {plan.period}
                    </span>
                    {plan.savePercent && (
                      <div style={{marginTop: '0.5rem'}}>
                        <span style={{
                          background: 'var(--ifm-color-success)',
                          color: 'white',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '20px',
                          fontSize: '0.875rem',
                          fontWeight: 'bold'
                        }}>
                          Save {plan.savePercent}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <ul style={{listStyle: 'none', padding: 0, marginBottom: '2rem'}}>
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} style={{marginBottom: '0.75rem', fontSize: '1rem', display: 'flex', alignItems: 'center'}}>
                        {feature.startsWith('Success') ? (
                          <>
                            <Icon name="success" size={16} style={{marginRight: '8px', color: 'var(--ifm-color-success)'}} />
                            {feature.replace('Success ', '')}
                          </>
                        ) : feature.startsWith('Error') ? (
                          <>
                            <Icon name="error" size={16} style={{marginRight: '8px', color: 'var(--ifm-color-danger)'}} />
                            {feature.replace('Error ', '')}
                          </>
                        ) : (
                          feature
                        )}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    className={`button button--${plan.highlighted ? 'primary' : 'secondary'} button--lg button--block`}
                    to={plan.ctaLink}>
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center'}}>
              Detailed Feature Comparison
            </h2>
            <p style={{textAlign: 'center', marginBottom: '2rem', fontSize: '0.9rem', opacity: 0.7}}>
              ← Scroll horizontally to see all plans →
            </p>
            
            <div style={{overflowX: 'auto', WebkitOverflowScrolling: 'touch', boxShadow: 'inset -10px 0 10px -10px rgba(0,0,0,0.1)', margin: '0 auto', maxWidth: '1200px'}}>
              <table style={{width: '100%', minWidth: '600px', margin: '0 auto', borderCollapse: 'collapse'}}>
                <thead>
                  <tr style={{borderBottom: '2px solid var(--ifm-color-emphasis-300)'}}>
                    <th style={{padding: '1rem', textAlign: 'left'}}>Feature</th>
                    <th style={{padding: '1rem', textAlign: 'center'}}>Community</th>
                    <th style={{padding: '1rem', textAlign: 'center', background: 'var(--ifm-background-color)'}}>Advanced</th>
                    <th style={{padding: '1rem', textAlign: 'center'}}>Premium</th>
                    <th style={{padding: '1rem', textAlign: 'center'}}>Elite</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Repositories', '1 Active', 'Unlimited', 'Unlimited', 'Unlimited'],
                    ['Repository Size', '10 GB', '100 GB', '1 TB', 'Unlimited'],
                    ['Server Types', 'Public Only', 'Public & Dedicated', 'On-premise', 'All Types'],
                    ['Backup Frequency', 'Hourly', '15 min', '5 min', 'Real-time'],
                    ['Support', 'Community', 'Priority Email', '24/7 Phone', 'Dedicated Manager'],
                    ['Ransomware Protection', 'No', 'Yes', 'Yes', 'Yes'],
                    ['Time Travel Recovery', 'No', 'Yes', 'Yes', 'Yes'],
                    ['API Access', 'No', 'Basic', 'Full', 'Full'],
                    ['Cross-region Replication', 'No', 'No', 'Yes', 'Yes'],
                    ['Custom SLA', 'No', 'No', 'No', 'Yes'],
                    ['Priority Features', 'No', 'No', 'No', 'Yes'],
                  ].map(([feature, community, advanced, premium, elite], idx) => {
                    const renderCell = (value) => {
                      if (value === 'Yes') {
                        return <Icon name="success" size={16} style={{color: 'var(--ifm-color-success)'}} />;
                      } else if (value === 'No') {
                        return <Icon name="error" size={16} style={{color: 'var(--ifm-color-danger)'}} />;
                      }
                      return value;
                    };
                    
                    return (
                      <tr key={idx} style={{borderBottom: '1px solid var(--ifm-color-emphasis-200)'}}>
                        <td style={{padding: '1rem', fontWeight: '500'}}>{feature}</td>
                        <td style={{padding: '1rem', textAlign: 'center'}}>{renderCell(community)}</td>
                        <td style={{padding: '1rem', textAlign: 'center', background: 'var(--ifm-background-color)'}}>{renderCell(advanced)}</td>
                        <td style={{padding: '1rem', textAlign: 'center'}}>{renderCell(premium)}</td>
                        <td style={{padding: '1rem', textAlign: 'center'}}>{renderCell(elite)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Frequently Asked Questions
            </h2>
            
            <div style={{maxWidth: '800px', margin: '0 auto'}}>
              <details style={{marginBottom: '1rem', padding: '1rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                <summary style={{cursor: 'pointer', fontWeight: 'bold', fontSize: '1.2rem'}}>
                  What's included in the Community (Free) plan?
                </summary>
                <p style={{marginTop: '1rem', lineHeight: '1.6'}}>
                  The Community plan is perfect for personal projects and testing. You get 1 active repository with up to 10GB storage, 
                  hourly snapshots, and basic restore options on our public servers. It's completely free forever - no credit card required.
                </p>
              </details>

              <details style={{marginBottom: '1rem', padding: '1rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                <summary style={{cursor: 'pointer', fontWeight: 'bold', fontSize: '1.2rem'}}>
                  What's the difference between public, dedicated, and on-premise servers?
                </summary>
                <p style={{marginTop: '1rem', lineHeight: '1.6'}}>
                  Public servers are shared cloud infrastructure - cost-effective for most workloads. Dedicated servers provide 
                  isolated resources for better performance. On-premise servers let you run Rediacc on your own hardware while 
                  maintaining all cloud features and management capabilities.
                </p>
              </details>

              <details style={{marginBottom: '1rem', padding: '1rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                <summary style={{cursor: 'pointer', fontWeight: 'bold', fontSize: '1.2rem'}}>
                  Can I save money with annual billing?
                </summary>
                <p style={{marginTop: '1rem', lineHeight: '1.6'}}>
                  Yes! Annual billing offers significant savings: 17% off Advanced, 23% off Premium, and 29% off Elite plans. 
                  You pay for 10-8.5 months and get 12 months of service. Annual plans are billed upfront.
                </p>
              </details>

              <details style={{marginBottom: '1rem', padding: '1rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                <summary style={{cursor: 'pointer', fontWeight: 'bold', fontSize: '1.2rem'}}>
                  What happens if I exceed my plan limits?
                </summary>
                <p style={{marginTop: '1rem', lineHeight: '1.6'}}>
                  We'll notify you when you're approaching your limits. You can either upgrade your plan or purchase additional 
                  resources as needed. We never cut off service unexpectedly - your business continuity is our priority.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          padding: '4rem 1rem',
          background: 'var(--ifm-background-surface-color)',
          borderTop: '1px solid var(--ifm-toc-border-color)',
          textAlign: 'center',
        }}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--ifm-heading-color)'}}>
              Ready to Get Started?
            </h2>
            <p style={{fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--ifm-font-color-secondary)'}}>
              Join thousands of companies automating their infrastructure with Rediacc
            </p>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link
                className="button button--primary button--lg"
                to="/intro">
                Start Free Trial
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/contact">
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}