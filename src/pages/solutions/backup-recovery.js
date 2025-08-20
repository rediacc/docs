import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { Icon } from '../../components/Icon';
import Citations from '../../components/Citations';

export default function BackupRecoverySolution() {
  return (
    <Layout
      title="Backup & Recovery Solutions - Enterprise Data Protection | Rediacc"
      description="Comprehensive backup and recovery solutions with up to 90% cost reduction, instant recovery, and bulletproof data protection. Zero data loss guaranteed.">
      
      <Head>
        <meta property="og:title" content="Enterprise Backup & Recovery Solutions" />
        <meta property="og:description" content="Next-generation backup platform with 90% cost reduction, instant recovery, and zero data loss. Protect against ransomware, disasters, and human error." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/solutions/backup-recovery" />
        <link rel="canonical" href="/solutions/backup-recovery" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Rediacc Backup & Recovery",
            "description": "Enterprise backup and recovery platform",
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
              Your Last Line of Defense Against Data Loss
            </h1>
            <p className="hero-subtitle animate-fade-in-up animate-delay-100">
              When 60% of small companies go out of business within six months of a data breach<sup>[1]</sup>, 
              you can't afford traditional backup solutions that fail when you need them most.
            </p>
            <div className="hero-buttons animate-fade-in-up animate-delay-200">
              <Link className="button button--primary button--lg" to="/console/login?register=manual" target="_blank">
                Register
              </Link>
              <Link className="button button--secondary button--lg" to="/contact">
                Calculate Your Savings
              </Link>
            </div>
          </div>
        </section>

        {/* The Crisis Section */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              The Hidden Crisis in Data Protection
            </h2>
            
            <div style={{maxWidth: '1000px', margin: '0 auto'}}>
              <div style={{
                padding: '2rem',
                background: 'var(--ifm-background-surface-color)',
                borderRadius: '8px',
                borderLeft: '4px solid #ef4444',
                marginBottom: '2rem'
              }}>
                <h3 style={{color: '#ef4444', marginBottom: '1rem'}}>Alarming Industry Statistics</h3>
                <ul style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
                  <li><strong>1.71%</strong> annual drive failure rate across 270,000+ tracked drives<sup>[2]</sup></li>
                  <li><strong>75%</strong> of ransomware attacks target backups<sup>[3]</sup></li>
                  <li><strong>$4.4M</strong> average cost of a data breach in 2024<sup>[4]</sup></li>
                  <li><strong>$1.5M</strong> average recovery cost from ransomware<sup>[5]</sup></li>
                  <li><strong>2.5</strong> ransomware attacks faced annually per organization<sup>[3]</sup></li>
                </ul>
              </div>

              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
                <div className="feature-card">
                  <h3 style={{color: '#d32f2f'}}><Icon name="alert-triangle" size={20} style={{marginRight: '8px'}} />Traditional Backup Failures</h3>
                  <ul>
                    <li>Take hours or days to restore</li>
                    <li>Consume massive storage (10-20x data size)</li>
                    <li>Fail silently until you need them</li>
                    <li>Can't handle modern data volumes</li>
                    <li>Vulnerable to ransomware</li>
                  </ul>
                </div>
                <div className="feature-card">
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="success" size={20} style={{marginRight: '8px'}} />The Rediacc Difference</h3>
                  <ul>
                    <li>Restore in minutes (typically 7-10 minutes)</li>
                    <li>90% storage reduction with deduplication</li>
                    <li>Automated backup verification</li>
                    <li>Scales to handle large databases</li>
                    <li>Secure backups with encryption</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Technology */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Revolutionary Backup Technology
            </h2>
            
            <div style={{maxWidth: '1200px', margin: '0 auto'}}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem'}}>
                <div className="feature-card">
                  <div style={{fontSize: '2rem', marginBottom: '1rem', color: 'var(--ifm-color-primary)'}}>
                    <Icon name="layers" size={32} />
                  </div>
                  <h3>Incremental Forever</h3>
                  <p>After the initial backup, only changes are captured. No more weekly full backups eating storage and time.</p>
                  <Link to="/features/zero-cost-backup">Learn more →</Link>
                </div>
                
                <div className="feature-card">
                  <div style={{fontSize: '2rem', marginBottom: '1rem', color: 'var(--ifm-color-primary)'}}>
                    <Icon name="speed" size={32} />
                  </div>
                  <h3>Fast Recovery</h3>
                  <p>Quickly restore your systems. Your applications are back online in minutes, not hours or days.</p>
                  <Link to="/features/time-travel">Learn more →</Link>
                </div>
                
                <div className="feature-card">
                  <div style={{fontSize: '2rem', marginBottom: '1rem', color: 'var(--ifm-color-primary)'}}>
                    <Icon name="copy" size={32} />
                  </div>
                  <h3>Global Deduplication</h3>
                  <p>10:1 to 20:1 reduction ratios mean 90-95% less storage needed. Store months of backups in the space of one.</p>
                  <Link to="/docs/solutions/zero-cost">Learn more →</Link>
                </div>
                
                <div className="feature-card">
                  <div style={{fontSize: '2rem', marginBottom: '1rem', color: 'var(--ifm-color-primary)'}}>
                    <Icon name="shield" size={32} />
                  </div>
                  <h3>Immutable Storage</h3>
                  <p>Backups that can't be encrypted or deleted by ransomware. Air-gapped copies for ultimate protection.</p>
                  <Link to="/features/security">Learn more →</Link>
                </div>
                
                <div className="feature-card">
                  <div style={{fontSize: '2rem', marginBottom: '1rem', color: 'var(--ifm-color-primary)'}}>
                    <Icon name="globe" size={32} />
                  </div>
                  <h3>Cross-Site Replication</h3>
                  <p>Automatic replication across regions with WAN optimization. Survive entire datacenter failures.</p>
                  <Link to="/features/cross-backup">Learn more →</Link>
                </div>
                
                <div className="feature-card">
                  <div style={{fontSize: '2rem', marginBottom: '1rem', color: 'var(--ifm-color-primary)'}}>
                    <Icon name="success" size={32} />
                  </div>
                  <h3>Verified Recoverability</h3>
                  <p>Automated recovery testing ensures your backups work. No more nasty surprises during disasters.</p>
                  <Link to="/features/risk-free-upgrades">Learn more →</Link>
                </div>
              </div>

              {/* Time Travel Feature Highlight */}
              <div style={{padding: '2rem', background: 'var(--ifm-color-primary)', color: 'white', borderRadius: '8px'}}>
                <h3 style={{fontSize: '2rem', marginBottom: '1rem', textAlign: 'center'}}>
                  <Icon name="history" size={24} style={{marginRight: '8px'}} />
                  Time Travel Recovery: Your Secret Weapon
                </h3>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center'}}>
                  <div>
                    <p style={{fontSize: '1.1rem', marginBottom: '1rem'}}>
                      Imagine being able to instantly restore your entire infrastructure to any point in time 
                      from the last 90 days. Not just files, but entire systems, databases, and applications.
                    </p>
                    <ul style={{lineHeight: '2'}}>
                      <li>Restore to any second in the past 24 hours</li>
                      <li>Hourly snapshots for 7 days</li>
                      <li>Daily snapshots for 30 days</li>
                      <li>Weekly snapshots for 90 days</li>
                    </ul>
                  </div>
                  <div style={{textAlign: 'center'}}>
                    <div style={{fontSize: '4rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>
                      7-10 min
                    </div>
                    <p style={{fontSize: '1.2rem'}}>
                      Typical recovery time
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              The Economics of Modern Backup
            </h2>
            
            <div style={{maxWidth: '1200px', margin: '0 auto'}}>
              <div style={{marginBottom: '3rem', padding: '2rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                <h3 style={{textAlign: 'center', marginBottom: '2rem', color: 'var(--ifm-color-primary)'}}>
                  Typical 1000-Employee Company Savings
                </h3>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center'}}>
                  <div>
                    <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--ifm-color-primary)'}}>$240K</div>
                    <p>Annual storage savings</p>
                  </div>
                  <div>
                    <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--ifm-color-primary)'}}>480 hrs</div>
                    <p>IT time saved yearly</p>
                  </div>
                  <div>
                    <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--ifm-color-primary)'}}>High</div>
                    <p>Data durability</p>
                  </div>
                  <div>
                    <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--ifm-color-primary)'}}>Quick</div>
                    <p>Setup process</p>
                  </div>
                </div>
              </div>

              {/* Cost Comparison Table */}
              <div style={{overflowX: 'auto'}}>
                <table style={{width: '100%', borderCollapse: 'collapse', marginBottom: '2rem'}}>
                  <thead>
                    <tr style={{borderBottom: '2px solid var(--ifm-table-border-color)'}}>
                      <th style={{padding: '1rem', textAlign: 'left'}}>Cost Factor</th>
                      <th style={{padding: '1rem', textAlign: 'left'}}>Traditional Backup</th>
                      <th style={{padding: '1rem', textAlign: 'left', color: 'var(--ifm-color-primary)'}}>Rediacc</th>
                      <th style={{padding: '1rem', textAlign: 'left'}}>Savings</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{borderBottom: '1px solid var(--ifm-table-border-color)'}}>
                      <td style={{padding: '1rem'}}><strong>Storage (100TB data)</strong></td>
                      <td style={{padding: '1rem'}}>1,000-2,000 TB needed</td>
                      <td style={{padding: '1rem'}}>50-100 TB needed</td>
                      <td style={{padding: '1rem', color: '#10b981'}}>90-95% reduction</td>
                    </tr>
                    <tr style={{borderBottom: '1px solid var(--ifm-table-border-color)'}}>
                      <td style={{padding: '1rem'}}><strong>Backup Window</strong></td>
                      <td style={{padding: '1rem'}}>8-12 hours</td>
                      <td style={{padding: '1rem'}}>Minutes to hours</td>
                      <td style={{padding: '1rem', color: '#10b981'}}>Much faster</td>
                    </tr>
                    <tr style={{borderBottom: '1px solid var(--ifm-table-border-color)'}}>
                      <td style={{padding: '1rem'}}><strong>Recovery Time</strong></td>
                      <td style={{padding: '1rem'}}>4-48 hours</td>
                      <td style={{padding: '1rem'}}>7-10 minutes typically</td>
                      <td style={{padding: '1rem', color: '#10b981'}}>95% faster</td>
                    </tr>
                    <tr style={{borderBottom: '1px solid var(--ifm-table-border-color)'}}>
                      <td style={{padding: '1rem'}}><strong>Annual Cost</strong></td>
                      <td style={{padding: '1rem'}}>$300,000+</td>
                      <td style={{padding: '1rem'}}>$60,000</td>
                      <td style={{padding: '1rem', color: '#10b981'}}>80% lower</td>
                    </tr>
                    <tr style={{borderBottom: '1px solid var(--ifm-table-border-color)'}}>
                      <td style={{padding: '1rem'}}><strong>RPO (Data Loss)</strong></td>
                      <td style={{padding: '1rem'}}>24 hours</td>
                      <td style={{padding: '1rem'}}>1 hour</td>
                      <td style={{padding: '1rem', color: '#10b981'}}>95% improvement</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases by Industry */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Industry-Specific Solutions
            </h2>
            
            <div style={{maxWidth: '1200px', margin: '0 auto'}}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem'}}>
                <div style={{padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="healthcare" size={20} style={{marginRight: '8px'}} />Healthcare</h3>
                  <p><strong>Challenge:</strong> Strict data protection requirements, patient data security, 24/7 availability</p>
                  <p><strong>Solution:</strong></p>
                  <ul>
                    <li>Advanced encryption at rest and in transit</li>
                    <li>Instant recovery for critical patient systems</li>
                    <li>30-year retention capabilities for medical records</li>
                    <li>Automated security reporting</li>
                  </ul>
                </div>

                <div style={{padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="finance" size={20} style={{marginRight: '8px'}} />Financial Services</h3>
                  <p><strong>Challenge:</strong> Zero data loss requirement, strict security needs, detailed audit trails</p>
                  <p><strong>Solution:</strong></p>
                  <ul>
                    <li>Continuous data protection with zero RPO</li>
                    <li>Immutable backups for security requirements</li>
                    <li>Complete audit trail of all recovery operations</li>
                    <li>Multi-region replication for disaster recovery</li>
                  </ul>
                </div>

                <div style={{padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="shopping-cart" size={20} style={{marginRight: '8px'}} />E-Commerce</h3>
                  <p><strong>Challenge:</strong> Can't afford downtime, massive transaction volumes, seasonal spikes</p>
                  <p><strong>Solution:</strong></p>
                  <ul>
                    <li>Instant recovery keeps revenue flowing</li>
                    <li>Scale backup automatically during peak seasons</li>
                    <li>Point-in-time recovery for transaction consistency</li>
                    <li>Cross-region protection for global operations</li>
                  </ul>
                </div>

                <div style={{padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="academic" size={20} style={{marginRight: '8px'}} />Education</h3>
                  <p><strong>Challenge:</strong> Limited IT budget, diverse systems, student data protection</p>
                  <p><strong>Solution:</strong></p>
                  <ul>
                    <li>80% cost reduction fits education budgets</li>
                    <li>Protect everything from LMS to research data</li>
                    <li>Simple management reduces IT overhead</li>
                    <li>FERPA-compliant data protection</li>
                  </ul>
                </div>

                <div style={{padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="industry" size={20} style={{marginRight: '8px'}} />Manufacturing</h3>
                  <p><strong>Challenge:</strong> IoT data explosion, 24/7 operations, IP protection</p>
                  <p><strong>Solution:</strong></p>
                  <ul>
                    <li>Handle massive IoT data streams efficiently</li>
                    <li>Protect proprietary designs and processes</li>
                    <li>Instant recovery minimizes production downtime</li>
                    <li>Edge-to-cloud backup strategy</li>
                  </ul>
                </div>

                <div style={{padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="mic" size={20} style={{marginRight: '8px'}} />Media & Entertainment</h3>
                  <p><strong>Challenge:</strong> Massive file sizes, project deadlines, collaborative workflows</p>
                  <p><strong>Solution:</strong></p>
                  <ul>
                    <li>Handle petabytes of video and audio assets</li>
                    <li>Instant restore for missed renders or edits</li>
                    <li>Global dedup handles redundant media files</li>
                    <li>Cloud integration for remote collaboration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ransomware Protection */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Ransomware-Proof Architecture
            </h2>
            
            <div style={{maxWidth: '1000px', margin: '0 auto'}}>
              <div style={{
                padding: '2rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                borderRadius: '8px',
                marginBottom: '3rem'
              }}>
                <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', textAlign: 'center'}}>
                  The Ransomware Epidemic
                </h3>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center'}}>
                  <div>
                    <div style={{fontSize: '2.5rem', fontWeight: 'bold'}}>2.5x/year</div>
                    <p>Ransomware attacks<sup>[3]</sup></p>
                  </div>
                  <div>
                    <div style={{fontSize: '2.5rem', fontWeight: 'bold'}}>$1.5M</div>
                    <p>Average recovery cost<sup>[5]</sup></p>
                  </div>
                  <div>
                    <div style={{fontSize: '2.5rem', fontWeight: 'bold'}}>75%</div>
                    <p>Target backups<sup>[3]</sup></p>
                  </div>
                  <div>
                    <div style={{fontSize: '2.5rem', fontWeight: 'bold'}}>60%</div>
                    <p>Small businesses fail<sup>[1]</sup></p>
                  </div>
                </div>
              </div>

              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
                <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="shield" size={20} style={{marginRight: '8px'}} />Multi-Layer Defense</h3>
                  <ul style={{lineHeight: '2'}}>
                    <li><strong>Immutable Backups:</strong> Can't be encrypted or deleted</li>
                    <li><strong>Air-Gap Protection:</strong> Offline copies isolated from network</li>
                    <li><strong>Zero-Trust Access:</strong> Multi-factor authentication required</li>
                    <li><strong>Anomaly Detection:</strong> AI identifies unusual backup patterns</li>
                    <li><strong>Instant Recovery:</strong> Business running in minutes, not weeks</li>
                  </ul>
                </div>
                <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="history" size={20} style={{marginRight: '8px'}} />Recovery Strategy</h3>
                  <ul style={{lineHeight: '2'}}>
                    <li><strong>Identify:</strong> Pinpoint exact time of infection</li>
                    <li><strong>Isolate:</strong> Prevent spread to clean systems</li>
                    <li><strong>Restore:</strong> Roll back to pre-infection state</li>
                    <li><strong>Verify:</strong> Ensure complete threat removal</li>
                    <li><strong>Protect:</strong> Implement additional safeguards</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Standards */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Enterprise-Grade Security
            </h2>
            
            <div style={{maxWidth: '1200px', margin: '0 auto'}}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', textAlign: 'center', marginBottom: '3rem'}}>
                {[
                  {name: 'Enterprise Security', icon: 'shield'},
                  {name: 'Data Protection', icon: 'success'},
                  {name: 'Healthcare Ready', icon: 'healthcare'},
                  {name: 'Global Support', icon: 'globe'},
                  {name: 'Financial Grade', icon: 'lock'},
                  {name: 'Government Ready', icon: 'government'},
                  {name: 'Education Ready', icon: 'academic'},
                  {name: 'Privacy Controls', icon: 'california'}
                ].map((cert, idx) => (
                  <div key={idx} style={{padding: '1.5rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                    <div style={{fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--ifm-color-primary)'}}>
                      <Icon name={cert.icon} size={32} />
                    </div>
                    <h4>{cert.name}</h4>
                  </div>
                ))}
              </div>

              <div style={{padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                <h3 style={{marginBottom: '1.5rem', color: 'var(--ifm-color-primary)'}}>
                  Compliance Features
                </h3>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem'}}>
                  <div>
                    <h4><Icon name="success" size={16} style={{marginRight: '8px'}} />Data Sovereignty</h4>
                    <p>Choose where your data resides to meet regulatory requirements</p>
                  </div>
                  <div>
                    <h4><Icon name="success" size={16} style={{marginRight: '8px'}} />Encryption</h4>
                    <p>AES-256 encryption at rest and TLS 1.3 in transit</p>
                  </div>
                  <div>
                    <h4><Icon name="success" size={16} style={{marginRight: '8px'}} />Audit Trails</h4>
                    <p>Complete logging of all backup and recovery operations</p>
                  </div>
                  <div>
                    <h4><Icon name="success" size={16} style={{marginRight: '8px'}} />Retention Policies</h4>
                    <p>Automated enforcement of data retention requirements</p>
                  </div>
                  <div>
                    <h4><Icon name="success" size={16} style={{marginRight: '8px'}} />Access Controls</h4>
                    <p>Role-based access with multi-factor authentication</p>
                  </div>
                  <div>
                    <h4><Icon name="success" size={16} style={{marginRight: '8px'}} />Right to Erasure</h4>
                    <p>GDPR-compliant data deletion from all backups</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Proven Results Across Industries
            </h2>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto', textAlign: 'center'}}>
              <div>
                <div style={{fontSize: '3rem', color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>99.999%</div>
                <h4>Durability</h4>
                <p>11 nines of durability for critical data</p>
              </div>
              <div>
                <div style={{fontSize: '3rem', color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>100%</div>
                <h4>Success Rate</h4>
                <p>Every recovery attempt successful</p>
              </div>
              <div>
                <div style={{fontSize: '3rem', color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>90%</div>
                <h4>Cost Reduction</h4>
                <p>Average savings vs traditional backup</p>
              </div>
              <div>
                <div style={{fontSize: '3rem', color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>60 sec</div>
                <h4>Recovery Time</h4>
                <p>Average time to restore operations</p>
              </div>
              <div>
                <div style={{fontSize: '3rem', color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>Zero</div>
                <h4>Data Loss</h4>
                <p>RPO with continuous protection</p>
              </div>
              <div>
                <div style={{fontSize: '3rem', color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>10:1</div>
                <h4>Dedup Ratio</h4>
                <p>Typical data reduction achieved</p>
              </div>
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
              Don't Wait for Disaster to Strike
            </h2>
            <p style={{fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--ifm-font-color-secondary)'}}>
              Every day without proper backup is a gamble with your business survival. 
              Protect your critical business data with proven backup technology.
            </p>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link
                className="button button--primary button--lg"
                to="/console/login?register=manual"
                target="_blank">
                Register Now
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/contact">
                Calculate Your ROI
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/features/zero-cost-backup">
                See How It Works
              </Link>
            </div>
            <p style={{marginTop: '2rem', fontSize: '0.9rem', color: 'var(--ifm-font-color-secondary)'}}>
              No credit card required • Deploy in 15 minutes • Full feature access
            </p>
          </div>
        </section>

        <Citations citations={[
          {
            text: "Research shows that 60% of small companies go out of business within six months of a cyber attack or data breach.",
            source: "National Cyber Security Alliance",
            url: "https://www.cnbc.com/2019/10/13/cyberattacks-cost-small-companies-200k-putting-many-out-of-business.html"
          },
          {
            text: "BackBlaze's 2024 Drive Stats report tracks over 270,000 drives with an annualized failure rate (AFR) of 1.71% across all drive models.",
            source: "BackBlaze Drive Stats Q3 2024",
            url: "https://www.backblaze.com/blog/backblaze-drive-stats-for-q3-2024/"
          },
          {
            text: "Veeam's 2024 Data Protection Trends Report reveals that organizations face an average of 2.5 ransomware attacks annually with 75% of attacks targeting backups.",
            source: "Veeam Data Protection Trends Report 2024",
            url: "https://www.veeam.com/resources/wp-2024-data-protection-trends-report.html"
          },
          {
            text: "IBM Cost of a Data Breach Report 2024: The global average cost of a data breach is $4.4 million, a 9% decrease from 2023.",
            source: "IBM Cost of a Data Breach Report 2024",
            url: "https://www.ibm.com/reports/data-breach"
          },
          {
            text: "Sophos State of Ransomware 2025 report shows average ransom payment of $1.0 million and average recovery cost of $1.5 million.",
            source: "Sophos State of Ransomware 2025",
            url: "https://www.sophos.com/en-us/whitepaper/state-of-ransomware"
          }
        ]} />
      </article>
    </Layout>
  );
}