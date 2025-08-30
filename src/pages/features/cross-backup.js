import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { Icon } from '../../components/Icon';

export default function CrossBackupFeature() {
  return (
    <Layout
      title="Cross-Backup - Multi-Site Data Protection | Rediacc"
      description="Protect your data across multiple locations with Cross-Backup. Reduce backup time from weeks to minutes while decreasing bandwidth consumption by up to 98%.">
      
      <Head>
        <meta property="og:title" content="Cross-Backup - Enterprise Multi-Site Protection" />
        <meta property="og:description" content="Revolutionary cross-site backup technology that reduces backup time from weeks to minutes. Protect against regional disasters with minimal bandwidth usage." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/features/cross-backup" />
        <link rel="canonical" href="/features/cross-backup" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Rediacc Cross-Backup",
            "description": "Multi-site backup solution with minimal bandwidth usage",
            "brand": {
              "@type": "Brand",
              "name": "Rediacc"
            }
          })}
        </script>
      </Head>

      <article>
        {/* Hero Section */}
        <section className="hero-section" style={{padding: '4rem 1rem'}}>
          <div className="container">
            <h1 className="hero-title animate-fade-in-up">
              Cross-Backup: When Disaster Strikes, Will Your Data Survive?
            </h1>
            <p className="hero-subtitle animate-fade-in-up animate-delay-100">
              With Rediacc Cross-Backup, it always does. Reduce backup time from weeks to minutes with up to 98% less bandwidth.
            </p>
            <div className="hero-buttons animate-fade-in-up animate-delay-200">
              <Link className="button button--primary button--lg" to="/docs/use-cases/cross-backup">
                View Use Case
              </Link>
              <Link className="button button--secondary button--lg" to="/console/login?register=manual" target="_blank">
                Try It Now
              </Link>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              The Single-Site Backup Crisis
            </h2>
            <div style={{maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', fontSize: '1.1rem'}}>
              <p>
                Backing up data only on the same machine or local site leaves your business vulnerable to 
                catastrophic data loss. When disaster strikes - whether hardware failure, cyber attack, or 
                natural disaster - local backups become useless.
              </p>
              <div style={{margin: '2rem 0', padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                <h3>Traditional Remote Backup Challenges:</h3>
                <ul>
                  <li><strong>Time Consuming:</strong> Backing up large datasets can take weeks</li>
                  <li><strong>Bandwidth Intensive:</strong> Can consume 90% of available bandwidth</li>
                  <li><strong>Outdated Protection:</strong> Infrequent backups leave data vulnerable</li>
                  <li><strong>Regional Risks:</strong> Local disasters affect all nearby backup sites</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              How Cross-Backup Works
            </h2>
            
            <div style={{maxWidth: '1000px', margin: '0 auto'}}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem'}}>
                <div className="feature-card">
                  <div style={{fontSize: '2rem', marginBottom: '1rem'}}><Icon name="upload" size={24} /></div>
                  <h3>Initial Full Backup</h3>
                  <p>First-time transfer of complete data to remote location</p>
                </div>
                <div className="feature-card">
                  <div style={{fontSize: '2rem', marginBottom: '1rem'}}><Icon name="sync" size={24} /></div>
                  <h3>Hourly Differentials</h3>
                  <p>Only changed data transferred every hour, not entire datasets</p>
                </div>
                <div className="feature-card">
                  <div style={{fontSize: '2rem', marginBottom: '1rem'}}><Icon name="globe" size={24} /></div>
                  <h3>Global Protection</h3>
                  <p>Backup to intercontinental servers for ultimate disaster protection</p>
                </div>
                <div className="feature-card">
                  <div style={{fontSize: '2rem', marginBottom: '1rem'}}><Icon name="clock" size={24} /></div>
                  <h3>Instant Activation</h3>
                  <p>Remote backups can be activated within minutes when needed</p>
                </div>
              </div>

              <div style={{padding: '2rem', background: 'var(--ifm-color-primary)', color: 'white', borderRadius: '8px', textAlign: 'center'}}>
                <h3 style={{fontSize: '1.8rem', marginBottom: '1rem'}}>Real-World Performance</h3>
                <p style={{fontSize: '1.2rem', marginBottom: '1rem'}}>
                  For enterprise data protection:
                </p>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem'}}>
                  <div>
                    <strong style={{fontSize: '1.1rem'}}>Traditional Backup</strong>
                    <div style={{fontSize: '1.8rem', fontWeight: 'bold', margin: '0.5rem 0'}}>2 Weeks</div>
                    <small>90% bandwidth consumption</small>
                  </div>
                  <div>
                    <strong style={{fontSize: '1.1rem'}}>Cross-Backup</strong>
                    <div style={{fontSize: '1.8rem', fontWeight: 'bold', margin: '0.5rem 0'}}>4 Minutes</div>
                    <small>Minimal bandwidth usage</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Key Benefits
            </h2>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto'}}>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '3rem', color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>Up to 98%</div>
                <h3>Bandwidth Reduction</h3>
                <p>Transfer only changed data, not entire datasets repeatedly</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '3rem', color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>Minutes</div>
                <h3>Backup Time</h3>
                <p>Reduce backup windows from weeks to minutes for large datasets</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '3rem', color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>Global</div>
                <h3>Disaster Protection</h3>
                <p>Protect against regional disasters with intercontinental backups</p>
              </div>
            </div>

            <div style={{marginTop: '3rem', padding: '2rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
              <h3>Perfect For:</h3>
              <ul style={{lineHeight: '2', fontSize: '1.1rem'}}>
                <li><Icon name="success" size={16} style={{marginRight: '8px'}} /><strong>Disaster Recovery:</strong> Protect against hardware failures, cyber attacks, and natural disasters</li>
                <li><Icon name="success" size={16} style={{marginRight: '8px'}} /><strong>Compliance Requirements:</strong> Meet regulatory requirements for off-site backup</li>
                <li><Icon name="success" size={16} style={{marginRight: '8px'}} /><strong>Large Datasets:</strong> Efficiently backup databases from gigabytes to petabytes</li>
                <li><Icon name="success" size={16} style={{marginRight: '8px'}} /><strong>Multi-Region Operations:</strong> Synchronize data across global locations</li>
                <li><Icon name="success" size={16} style={{marginRight: '8px'}} /><strong>Business Continuity:</strong> Ensure operations can continue from any location</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Advanced Cross-Backup Technology
            </h2>
            
            <div style={{maxWidth: '1000px', margin: '0 auto'}}>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center'}}>
                <div>
                  <h3>Intelligent Data Transfer</h3>
                  <p style={{lineHeight: '1.8', marginBottom: '1.5rem'}}>
                    Cross-Backup uses advanced differential algorithms to identify and transfer only 
                    the blocks that have changed since the last backup. This creates the perception 
                    of full backups while dramatically reducing bandwidth and time requirements.
                  </p>
                  <ul style={{lineHeight: '2'}}>
                    <li>Block-level change detection</li>
                    <li>Compression and deduplication</li>
                    <li>Encrypted transfer protocols</li>
                    <li>Automatic retry on failures</li>
                  </ul>
                </div>
                <div>
                  <div style={{padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                    <h4>Typical Backup Scenario</h4>
                    <div style={{marginTop: '1.5rem'}}>
                      <strong>Initial Backup:</strong>
                      <div style={{marginLeft: '1rem', marginTop: '0.5rem'}}>
                        20TB data → 2 weeks transfer
                      </div>
                    </div>
                    <div style={{marginTop: '1.5rem'}}>
                      <strong>Hourly Updates:</strong>
                      <div style={{marginLeft: '1rem', marginTop: '0.5rem'}}>
                        100GB changes → 4 minutes transfer
                      </div>
                    </div>
                    <div style={{marginTop: '1.5rem'}}>
                      <strong>Recovery Time:</strong>
                      <div style={{marginLeft: '1rem', marginTop: '0.5rem'}}>
                        Full restoration → Under 10 minutes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Case Preview */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
              <h2 style={{fontSize: '2rem', marginBottom: '1.5rem'}}>
                Real-World Impact
              </h2>
              <p style={{fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--ifm-font-color-secondary)'}}>
                See how companies protect their critical data with Cross-Backup
              </p>
              <div style={{
                padding: '2rem',
                background: 'var(--ifm-background-surface-color)',
                borderRadius: '12px',
                border: '2px solid var(--ifm-color-primary-lighter)'
              }}>
                <h3>Use Case: Preventing Total Data Loss</h3>
                <p style={{lineHeight: '1.8', marginBottom: '1.5rem'}}>
                  After experiencing a catastrophic disk failure, a company discovered their remote backup 
                  server's last successful backup was 3 weeks old. With Rediacc Cross-Backup, they now maintain 
                  hourly backups across continents with minimal bandwidth usage. When their main server crashed, 
                  the remote backup was activated in just 7 minutes, preventing significant data loss and 
                  maintaining business continuity.
                </p>
                <Link className="button button--primary" to="/docs/use-cases/cross-backup">
                  Read Full Use Case →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-color-primary)', color: 'white'}}>
          <div className="container" style={{textAlign: 'center'}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '1.5rem'}}>
              Protect Your Data Across the Globe
            </h2>
            <p style={{fontSize: '1.3rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem'}}>
              Start using Cross-Backup today and ensure your data survives any disaster
            </p>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link className="button button--primary button--lg" to="/contact">
                Request Demo
              </Link>
              <Link className="button button--secondary button--lg" to="/pricing">
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}