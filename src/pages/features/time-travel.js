import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { Icon } from '../../components/Icon';

export default function TimeTravelFeature() {
  return (
    <Layout
      title="Time Travel Recovery - Restore Beyond Traditional Backup Windows | Rediacc"
      description="Instantly restore your systems to any point in time, even beyond traditional backup retention periods. Recover from accidental deletions, corruptions, and ransomware attacks.">
      
      <Head>
        <meta property="og:title" content="Time Travel Recovery - Restore to Any Point in Time" />
        <meta property="og:description" content="Revolutionary recovery technology that allows you to restore to any moment in the past, even beyond traditional backup windows. Protect against data loss with infinite recovery points." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/features/time-travel" />
        <link rel="canonical" href="/features/time-travel" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Rediacc Time Travel Recovery",
            "description": "Point-in-time recovery solution with extended retention capabilities",
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
              Time Travel Recovery: When Others Lose Data Forever, You Can Travel Back In Time
            </h1>
            <p className="hero-subtitle animate-fade-in-up animate-delay-100">
              Instantly restore to any point in time, even weeks or months in the past, with our revolutionary snapshot technology
            </p>
            <div className="hero-buttons animate-fade-in-up animate-delay-200">
              <Link className="button button--primary button--lg" to="/docs/use-cases/time-travel">
                View Use Case
              </Link>
              <Link className="button button--secondary button--lg" to="/console/login?register=quick" target="_blank">
                Try It Now
              </Link>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              The Recovery Window Crisis
            </h2>
            <div style={{maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', fontSize: '1.1rem'}}>
              <p>
                Traditional backup solutions often keep data for only days or weeks due to storage constraints. 
                When critical data is accidentally deleted or corrupted beyond this window, it's typically lost forever.
              </p>
              <div style={{margin: '2rem 0', padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                <h3>Common Recovery Failures:</h3>
                <ul>
                  <li><strong>Delayed Discovery:</strong> Data corruption or deletion often discovered weeks later</li>
                  <li><strong>Limited Retention:</strong> Most companies keep backups for only 14-30 days</li>
                  <li><strong>Storage Constraints:</strong> Extended retention typically requires prohibitive storage costs</li>
                  <li><strong>Recovery Complexity:</strong> Restoring from old backups can take hours or days</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              How Time Travel Recovery Works
            </h2>
            
            <div style={{maxWidth: '1000px', margin: '0 auto'}}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem'}}>
                <div className="feature-card">
                  <div style={{fontSize: '2rem', marginBottom: '1rem'}}><Icon name="history" size={24} /></div>
                  <h3>Hourly Snapshots</h3>
                  <p>Automatic snapshots capture your system state every hour without performance impact</p>
                </div>
                <div className="feature-card">
                  <div style={{fontSize: '2rem', marginBottom: '1rem'}}><Icon name="database" size={24} /></div>
                  <h3>Efficient Storage</h3>
                  <p>Only changed blocks are stored, allowing months of retention at minimal cost</p>
                </div>
                <div className="feature-card">
                  <div style={{fontSize: '2rem', marginBottom: '1rem'}}><Icon name="clock" size={24} /></div>
                  <h3>Instant Recovery</h3>
                  <p>Restore to any snapshot in minutes, not hours, regardless of data size</p>
                </div>
                <div className="feature-card">
                  <div style={{fontSize: '2rem', marginBottom: '1rem'}}><Icon name="search" size={24} /></div>
                  <h3>Point Selection</h3>
                  <p>Browse and select exact recovery points with visual timeline interface</p>
                </div>
              </div>

              <div style={{padding: '2rem', background: 'var(--ifm-color-primary)', color: 'white', borderRadius: '8px', textAlign: 'center'}}>
                <h3 style={{fontSize: '1.8rem', marginBottom: '1rem'}}>Real-World Impact</h3>
                <p style={{fontSize: '1.2rem', marginBottom: '1rem'}}>
                  When traditional backups fail:
                </p>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem'}}>
                  <div>
                    <strong style={{fontSize: '1.1rem'}}>Without Time Travel</strong>
                    <div style={{fontSize: '1.8rem', fontWeight: 'bold', margin: '0.5rem 0'}}>Data Lost Forever</div>
                    <small>Recovery typically limited to 14-30 days</small>
                  </div>
                  <div>
                    <strong style={{fontSize: '1.1rem'}}>With Time Travel</strong>
                    <div style={{fontSize: '1.8rem', fontWeight: 'bold', margin: '0.5rem 0'}}>Complete Recovery</div>
                    <small>Restore from months in the past</small>
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
                <div style={{fontSize: '3rem', color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>Up to 95%</div>
                <h3>Data Recovery Success</h3>
                <p>Recover data that would typically be lost forever with traditional backup solutions</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '3rem', color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>Minutes</div>
                <h3>Recovery Time</h3>
                <p>Restore complete systems in minutes instead of hours, regardless of retention period</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '3rem', color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>Months</div>
                <h3>Extended Retention</h3>
                <p>Keep recovery points for months or years without prohibitive storage costs</p>
              </div>
            </div>

            <div style={{marginTop: '3rem', padding: '2rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
              <h3>Perfect For:</h3>
              <ul style={{lineHeight: '2', fontSize: '1.1rem'}}>
                <li><Icon name="success" size={16} style={{marginRight: '8px'}} /><strong>Accidental Deletions:</strong> Recover data deleted weeks or months ago</li>
                <li><Icon name="success" size={16} style={{marginRight: '8px'}} /><strong>Corruption Recovery:</strong> Roll back to before corruption occurred</li>
                <li><Icon name="success" size={16} style={{marginRight: '8px'}} /><strong>Compliance Requirements:</strong> Meet regulatory retention requirements efficiently</li>
                <li><Icon name="success" size={16} style={{marginRight: '8px'}} /><strong>Development Rollbacks:</strong> Restore to any previous application state</li>
                <li><Icon name="success" size={16} style={{marginRight: '8px'}} /><strong>Ransomware Recovery:</strong> Go back to clean state before infection</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Use Case Preview */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
              <h2 style={{fontSize: '2rem', marginBottom: '1.5rem'}}>
                See It In Action
              </h2>
              <p style={{fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--ifm-font-color-secondary)'}}>
                Learn how companies recover from critical data loss scenarios that would typically be unrecoverable
              </p>
              <div style={{
                padding: '2rem',
                background: 'var(--ifm-background-color)',
                borderRadius: '12px',
                border: '2px solid var(--ifm-color-primary-lighter)'
              }}>
                <h3>Use Case: E-Commerce Database Recovery</h3>
                <p style={{lineHeight: '1.8', marginBottom: '1.5rem'}}>
                  A major online retailer discovered that critical order data had been accidentally deleted 
                  3 weeks prior - beyond their traditional backup retention. With Rediacc's Time Travel Recovery, 
                  they were able to restore the data completely within minutes, preventing significant financial 
                  loss and maintaining customer trust.
                </p>
                <Link className="button button--primary" to="/docs/use-cases/time-travel">
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
              Never Lose Data Again
            </h2>
            <p style={{fontSize: '1.3rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem'}}>
              Start protecting your data with Time Travel Recovery today
            </p>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link className="button button--secondary button--lg" style={{background: 'white', color: 'var(--ifm-color-primary)'}} to="/contact">
                Request Demo
              </Link>
              <Link className="button button--outline button--lg" style={{borderColor: 'white', color: 'white'}} to="/console/login?register=quick" target="_blank">
                Try Free Sandbox
              </Link>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}