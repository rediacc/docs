import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { Icon } from '../../components/Icon';

export default function TimeTravelFeature() {
  return (
    <Layout
      title="Time Travel - Point-in-Time Recovery for Infrastructure | Rediacc"
      description="Roll back your entire infrastructure to any point in time instantly. Undo mistakes, recover from attacks, test changes safely with Time Travel technology.">
      
      <Head>
        <meta property="og:title" content="Infrastructure Time Travel - Instant Point-in-Time Recovery" />
        <meta property="og:description" content="Revolutionary Time Travel technology lets you instantly restore your entire infrastructure to any previous state. Perfect recovery from any incident." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/features/time-travel" />
        <link rel="canonical" href="/features/time-travel" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Rediacc Time Travel",
            "description": "Point-in-time infrastructure recovery technology",
            "brand": {
              "@type": "Brand",
              "name": "Rediacc"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Head>

      <article>
        {/* Hero Section */}
        <section className="hero-section" style={{padding: '4rem 1rem'}}>
          <div className="container">
            <h1 className="hero-title animate-fade-in-up">
              Time Travel for Your Infrastructure
            </h1>
            <p className="hero-subtitle animate-fade-in-up animate-delay-100">
              Instantly restore your entire system to any point in the past—like it never happened
            </p>
            <div className="hero-buttons animate-fade-in-up animate-delay-200">
              <Link className="button button--primary button--lg" to="/solutions/time-travel">
                See It In Action
              </Link>
              <Link className="button button--secondary button--lg" to="/console/login?register=true" target="_blank">
                Play on Sandbox
              </Link>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              When Things Go Wrong, Every Minute Costs Money
            </h2>
            <div style={{maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', fontSize: '1.1rem'}}>
              <p>
                A bad deployment, a database corruption, a ransomware attack—disasters come in many forms. 
                Traditional recovery means hours of downtime, data loss, and scrambling to fix issues while 
                your business bleeds money.
              </p>
              <div style={{margin: '2rem 0', padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                <h3>Common Scenarios That Need Time Travel:</h3>
                <ul>
                  <li><strong>Bad Deployment:</strong> New release crashes production at 2 AM</li>
                  <li><strong>Data Corruption:</strong> Faulty script deletes critical customer data</li>
                  <li><strong>Security Breach:</strong> Malware encrypts your databases</li>
                  <li><strong>Human Error:</strong> Admin accidentally drops production database</li>
                  <li><strong>Testing Needs:</strong> Need production data from last month for debugging</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How Time Travel Works */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              How Time Travel Technology Works
            </h2>
            
            <div style={{maxWidth: '1000px', margin: '0 auto'}}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem'}}>
                <div className="feature-card">
                  <div style={{fontSize: '2rem', marginBottom: '1rem'}}><Icon name="camera" size={24} /></div>
                  <h3>Continuous Snapshots</h3>
                  <p>Automatic snapshots every few minutes capture your entire infrastructure state</p>
                </div>
                <div className="feature-card">
                  <div style={{fontSize: '2rem', marginBottom: '1rem'}}><Icon name="backup" size={24} /></div>
                  <h3>Efficient Storage</h3>
                  <p>Only changes are stored, keeping thousands of recovery points without breaking the bank</p>
                </div>
                <div className="feature-card">
                  <div style={{fontSize: '2rem', marginBottom: '1rem'}}><Icon name="speed" size={24} /></div>
                  <h3>Instant Recovery</h3>
                  <p>Restore to any snapshot in seconds, not hours—no matter the data size</p>
                </div>
                <div className="feature-card">
                  <div style={{fontSize: '2rem', marginBottom: '1rem'}}><Icon name="search" size={24} /></div>
                  <h3>Granular Control</h3>
                  <p>Restore everything or just specific databases, files, or configurations</p>
                </div>
              </div>

              <div style={{padding: '2rem', background: 'var(--ifm-color-primary)', color: 'white', borderRadius: '8px'}}>
                <h3 style={{fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: 'center'}}>
                  Time Travel Timeline
                </h3>
                <div style={{position: 'relative', padding: '2rem 0'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem'}}>
                    <div style={{textAlign: 'center', flex: 1}}>
                      <div style={{fontSize: '1.5rem'}}><Icon name="clock" size={20} /></div>
                      <strong>5 min ago</strong>
                      <div style={{fontSize: '0.9rem'}}>Latest snapshot</div>
                    </div>
                    <div style={{textAlign: 'center', flex: 1}}>
                      <div style={{fontSize: '1.5rem'}}><Icon name="calendar" size={20} /></div>
                      <strong>Yesterday</strong>
                      <div style={{fontSize: '0.9rem'}}>Before the issue</div>
                    </div>
                    <div style={{textAlign: 'center', flex: 1}}>
                      <div style={{fontSize: '1.5rem'}}><Icon name="calendar" size={20} /></div>
                      <strong>Last Week</strong>
                      <div style={{fontSize: '0.9rem'}}>Stable version</div>
                    </div>
                    <div style={{textAlign: 'center', flex: 1}}>
                      <div style={{fontSize: '1.5rem'}}><Icon name="calendar" size={20} /></div>
                      <strong>Last Month</strong>
                      <div style={{fontSize: '0.9rem'}}>Compliance audit</div>
                    </div>
                  </div>
                  <div style={{height: '2px', background: 'rgba(255,255,255,0.3)', position: 'relative'}}>
                    <div style={{position: 'absolute', left: 0, right: 0, top: '-4px', display: 'flex', justifyContent: 'space-between'}}>
                      <div style={{width: '10px', height: '10px', borderRadius: '50%', background: 'white'}}></div>
                      <div style={{width: '10px', height: '10px', borderRadius: '50%', background: 'white'}}></div>
                      <div style={{width: '10px', height: '10px', borderRadius: '50%', background: 'white'}}></div>
                      <div style={{width: '10px', height: '10px', borderRadius: '50%', background: 'white'}}></div>
                    </div>
                  </div>
                </div>
                <p style={{textAlign: 'center', marginTop: '2rem', fontSize: '1.1rem'}}>
                  Choose any point in time and restore instantly
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Powerful Time Travel Capabilities
            </h2>
            
            <div style={{maxWidth: '1200px', margin: '0 auto'}}>
              <div style={{marginBottom: '3rem'}}>
                <h3 style={{color: 'var(--ifm-color-primary)', marginBottom: '1.5rem'}}>
                  <Icon name="target" size={20} style={{marginRight: '8px'}} />Precision Recovery Options
                </h3>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem'}}>
                  <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                    <h4>Full System Restore</h4>
                    <ul>
                      <li>Entire infrastructure rollback</li>
                      <li>All services and configurations</li>
                      <li>Network settings preserved</li>
                      <li>User sessions maintained</li>
                    </ul>
                  </div>
                  <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                    <h4>Selective Recovery</h4>
                    <ul>
                      <li>Single database restoration</li>
                      <li>Specific file recovery</li>
                      <li>Configuration rollback only</li>
                      <li>Application-level restore</li>
                    </ul>
                  </div>
                  <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                    <h4>Comparison Mode</h4>
                    <ul>
                      <li>Side-by-side state comparison</li>
                      <li>Diff view of changes</li>
                      <li>Impact analysis before restore</li>
                      <li>Test restore in isolation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div style={{marginBottom: '3rem'}}>
                <h3 style={{color: 'var(--ifm-color-primary)', marginBottom: '1.5rem'}}>
                  <Icon name="settings" size={20} style={{marginRight: '8px'}} />Advanced Features
                </h3>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem'}}>
                  <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                    <h4>Retention Policies</h4>
                    <ul>
                      <li>Customizable retention periods</li>
                      <li>Compliance-driven archival</li>
                      <li>Automatic cleanup of old snapshots</li>
                      <li>Legal hold capabilities</li>
                    </ul>
                  </div>
                  <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                    <h4>Recovery Validation</h4>
                    <ul>
                      <li>Automated integrity checks</li>
                      <li>Application consistency verification</li>
                      <li>Database transaction validation</li>
                      <li>Network connectivity tests</li>
                    </ul>
                  </div>
                  <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                    <h4>Forensic Analysis</h4>
                    <ul>
                      <li>Mount snapshots read-only</li>
                      <li>Investigate past states</li>
                      <li>Security incident analysis</li>
                      <li>Audit trail reconstruction</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Real-World Time Travel Scenarios
            </h2>
            
            <div style={{maxWidth: '1200px', margin: '0 auto'}}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem'}}>
                <div style={{padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="deploy" size={20} style={{marginRight: '8px'}} />Failed Deployment Recovery</h3>
                  <p><strong>Scenario:</strong> Production deployment causes system-wide failures</p>
                  <p><strong>Traditional Fix:</strong> 4-6 hours of debugging and manual rollback</p>
                  <p><strong>With Time Travel:</strong> 30 seconds to restore pre-deployment state</p>
                  <div style={{marginTop: '1rem', padding: '0.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '4px'}}>
                    <strong>Result:</strong> Save $50,000+ in downtime costs
                  </div>
                </div>

                <div style={{padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="locked" size={20} style={{marginRight: '8px'}} />Ransomware Attack</h3>
                  <p><strong>Scenario:</strong> Ransomware encrypts critical databases</p>
                  <p><strong>Traditional Fix:</strong> Pay ransom or rebuild from scratch</p>
                  <p><strong>With Time Travel:</strong> Restore to pre-infection state instantly</p>
                  <div style={{marginTop: '1rem', padding: '0.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '4px'}}>
                    <strong>Result:</strong> Zero ransom paid, minimal downtime
                  </div>
                </div>

                <div style={{padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="analyze" size={20} style={{marginRight: '8px'}} />Data Corruption</h3>
                  <p><strong>Scenario:</strong> Faulty ETL job corrupts customer data</p>
                  <p><strong>Traditional Fix:</strong> Manual data reconstruction from logs</p>
                  <p><strong>With Time Travel:</strong> Restore specific tables to pre-corruption state</p>
                  <div style={{marginTop: '1rem', padding: '0.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '4px'}}>
                    <strong>Result:</strong> 100% data recovery in minutes
                  </div>
                </div>

                <div style={{padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="test-tube" size={20} style={{marginRight: '8px'}} />Testing & Development</h3>
                  <p><strong>Scenario:</strong> Need production data from specific date for testing</p>
                  <p><strong>Traditional Fix:</strong> Complex backup restoration process</p>
                  <p><strong>With Time Travel:</strong> Instantly clone any past state for testing</p>
                  <div style={{marginTop: '1rem', padding: '0.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '4px'}}>
                    <strong>Result:</strong> 10x faster development cycles
                  </div>
                </div>

                <div style={{padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="scale" size={20} style={{marginRight: '8px'}} />Compliance & Auditing</h3>
                  <p><strong>Scenario:</strong> Auditor needs system state from 6 months ago</p>
                  <p><strong>Traditional Fix:</strong> Restore old backups to separate environment</p>
                  <p><strong>With Time Travel:</strong> Mount historical snapshot read-only</p>
                  <div style={{marginTop: '1rem', padding: '0.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '4px'}}>
                    <strong>Result:</strong> Instant compliance verification
                  </div>
                </div>

                <div style={{padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="user" size={20} style={{marginRight: '8px'}} />Human Error</h3>
                  <p><strong>Scenario:</strong> Admin accidentally deletes critical configuration</p>
                  <p><strong>Traditional Fix:</strong> Recreate from documentation/memory</p>
                  <p><strong>With Time Travel:</strong> Restore specific files from minutes ago</p>
                  <div style={{marginTop: '1rem', padding: '0.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '4px'}}>
                    <strong>Result:</strong> Error undone in seconds
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Lightning-Fast Recovery Performance
            </h2>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto'}}>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '3rem', color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>30 sec</div>
                <h3>Full Restore Time</h3>
                <p>Any size infrastructure</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '3rem', color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>5 min</div>
                <h3>Snapshot Frequency</h3>
                <p>Continuous protection</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '3rem', color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>365 days</div>
                <h3>Retention Period</h3>
                <p>Customizable per policy</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '3rem', color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>10TB+</div>
                <h3>Largest Recovery</h3>
                <p>No size limitations</p>
              </div>
            </div>

            <div style={{marginTop: '3rem', padding: '2rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px', maxWidth: '800px', margin: '3rem auto 0'}}>
              <h3>Performance Guarantees:</h3>
              <ul style={{lineHeight: '2', fontSize: '1.1rem'}}>
                <li><Icon name="success" size={16} style={{marginRight: '8px'}} /><strong>Zero Performance Impact:</strong> Snapshots don't affect production performance</li>
                <li><Icon name="success" size={16} style={{marginRight: '8px'}} /><strong>Instant Mount:</strong> Access historical data without full restore</li>
                <li><Icon name="success" size={16} style={{marginRight: '8px'}} /><strong>Parallel Recovery:</strong> Restore multiple systems simultaneously</li>
                <li><Icon name="success" size={16} style={{marginRight: '8px'}} /><strong>Incremental Forever:</strong> Only changes are stored, forever</li>
                <li><Icon name="success" size={16} style={{marginRight: '8px'}} /><strong>Global Deduplication:</strong> Massive storage savings across snapshots</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Time Travel FAQ
            </h2>
            
            <div style={{maxWidth: '800px', margin: '0 auto'}}>
              <details style={{marginBottom: '1rem', padding: '1rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                <summary style={{cursor: 'pointer', fontWeight: 'bold', fontSize: '1.2rem'}}>
                  How far back can I travel?
                </summary>
                <p style={{marginTop: '1rem', lineHeight: '1.6'}}>
                  You can travel back as far as your retention policy allows. Most customers keep 30-90 days of 
                  high-frequency snapshots (every 5 minutes), then daily snapshots for a year, and monthly snapshots 
                  for compliance. The limit is only your storage budget—we've seen customers keep 7+ years of history.
                </p>
              </details>

              <details style={{marginBottom: '1rem', padding: '1rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                <summary style={{cursor: 'pointer', fontWeight: 'bold', fontSize: '1.2rem'}}>
                  Will Time Travel slow down my systems?
                </summary>
                <p style={{marginTop: '1rem', lineHeight: '1.6'}}>
                  No, Time Travel has zero performance impact. Snapshots are created using Copy-on-Write technology 
                  at the storage layer, which means they're instantaneous and don't consume CPU or memory. Your 
                  applications won't even know snapshots are being taken.
                </p>
              </details>

              <details style={{marginBottom: '1rem', padding: '1rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                <summary style={{cursor: 'pointer', fontWeight: 'bold', fontSize: '1.2rem'}}>
                  Can I restore just one file or database?
                </summary>
                <p style={{marginTop: '1rem', lineHeight: '1.6'}}>
                  Yes! You can restore at any granularity—entire infrastructure, specific servers, individual 
                  databases, single tables, or even just one file. You can also mount snapshots read-only to 
                  copy specific data without affecting the current state.
                </p>
              </details>

              <details style={{marginBottom: '1rem', padding: '1rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                <summary style={{cursor: 'pointer', fontWeight: 'bold', fontSize: '1.2rem'}}>
                  How much storage does Time Travel require?
                </summary>
                <p style={{marginTop: '1rem', lineHeight: '1.6'}}>
                  Much less than you'd think! Because we only store changes between snapshots, the storage overhead 
                  is typically 10-20% of your primary data size for a full year of protection. A 10TB database might 
                  only need 1-2TB for hundreds of recovery points.
                </p>
              </details>

              <details style={{marginBottom: '1rem', padding: '1rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                <summary style={{cursor: 'pointer', fontWeight: 'bold', fontSize: '1.2rem'}}>
                  Is Time Travel compliant with regulations?
                </summary>
                <p style={{marginTop: '1rem', lineHeight: '1.6'}}>
                  Yes, Time Travel is designed for compliance. It supports legal holds, tamper-proof snapshots, 
                  audit trails, and automated retention policies. It meets requirements for GDPR, HIPAA, SOX, 
                  and other major regulations. You can even use Time Travel to prove compliance by showing 
                  historical states to auditors.
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
              Never Fear Changes Again
            </h2>
            <p style={{fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--ifm-font-color-secondary)'}}>
              With Time Travel, every change is reversible, every mistake fixable, every attack recoverable
            </p>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link
                className="button button--primary button--lg"
                to="/console/login?register=true"
                target="_blank">
                Play on Sandbox
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/solutions/time-travel">
                See Live Demo
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/contact">
                Talk to Expert
              </Link>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section style={{padding: '3rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h3 style={{textAlign: 'center', marginBottom: '2rem'}}>Related Resources</h3>
            <div style={{display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link to="/features/backup" className="quick-link">
                Backup Solutions →
              </Link>
              <Link to="/features/disaster-recovery" className="quick-link">
                Disaster Recovery →
              </Link>
              <Link to="/solutions/time-travel" className="quick-link">
                Time Travel Guide →
              </Link>
              <Link to="/solutions/enterprise" className="quick-link">
                Enterprise Solutions →
              </Link>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}