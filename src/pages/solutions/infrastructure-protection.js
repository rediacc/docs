import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { Icon } from '../../components/Icon';
import Citations from '../../components/Citations';

export default function InfrastructureProtectionSolution() {
  return (
    <Layout
      title="Infrastructure Protection - Enterprise Security & Continuity | Rediacc"
      description="Complete infrastructure protection against cyber threats, disasters, and operational failures. Zero-trust security, automated compliance, and instant disaster recovery.">
      
      <Head>
        <meta property="og:title" content="Infrastructure Protection & Security Solutions" />
        <meta property="og:description" content="Enterprise infrastructure protection platform with zero-trust security, ransomware defense, disaster recovery, and compliance automation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/solutions/infrastructure-protection" />
        <link rel="canonical" href="/solutions/infrastructure-protection" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Rediacc Infrastructure Protection",
            "description": "Enterprise infrastructure security and protection platform",
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
              When Infrastructure Fails, Companies Die
            </h1>
            <p className="hero-subtitle animate-fade-in-up animate-delay-100">
              With cyber attacks increasing rapidly and infrastructure failures causing significant losses, 
              your business needs robust protection that works when tested.
            </p>
            <div className="hero-buttons animate-fade-in-up animate-delay-200">
              <Link className="button button--primary button--lg" to="/contact">
                Get Security Assessment
              </Link>
              <Link className="button button--secondary button--lg" to="/features/security">
                Explore Security Features
              </Link>
            </div>
          </div>
        </section>

        {/* The Threat Landscape */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              The Modern Threat Landscape
            </h2>
            
            <div style={{maxWidth: '1200px', margin: '0 auto'}}>
              <div style={{
                padding: '2rem',
                background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                color: 'white',
                borderRadius: '8px',
                marginBottom: '3rem'
              }}>
                <h3 style={{fontSize: '1.8rem', marginBottom: '2rem', textAlign: 'center'}}>
                  Critical Infrastructure Threats in 2024
                </h3>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center'}}>
                  <div>
                    <div style={{fontSize: '3rem', fontWeight: 'bold'}}>4.4M</div>
                    <p>Average breach cost<sup>[1]</sup></p>
                  </div>
                  <div>
                    <div style={{fontSize: '3rem', fontWeight: 'bold'}}>342 days</div>
                    <p>To identify & contain<sup>[1]</sup></p>
                  </div>
                  <div>
                    <div style={{fontSize: '3rem', fontWeight: 'bold'}}>95%</div>
                    <p>Breaches involve human error<sup>[3]</sup></p>
                  </div>
                  <div>
                    <div style={{fontSize: '3rem', fontWeight: 'bold'}}>$1.5M</div>
                    <p>Average recovery cost<sup>[2]</sup></p>
                  </div>
                </div>
              </div>

              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem'}}>
                <div className="feature-card">
                  <h3 style={{color: '#d32f2f'}}><Icon name="alert-triangle" size={20} style={{marginRight: '8px'}} />Cyber Threats</h3>
                  <ul style={{lineHeight: '2'}}>
                    <li>Ransomware attacks every 11 seconds</li>
                    <li>Supply chain compromises</li>
                    <li>Zero-day exploits increasing 50% YoY</li>
                    <li>AI-powered attack sophistication</li>
                    <li>Insider threats causing 25% of breaches</li>
                  </ul>
                </div>
                
                <div className="feature-card">
                  <h3 style={{color: '#d32f2f'}}><Icon name="cloud-off" size={20} style={{marginRight: '8px'}} />Natural Disasters</h3>
                  <ul style={{lineHeight: '2'}}>
                    <li>58 billion-dollar disasters in 2024<sup>[4]</sup></li>
                    <li>Earthquakes threatening data centers</li>
                    <li>$402B in disaster damage globally<sup>[4]</sup></li>
                    <li>Power grid failures increasing</li>
                    <li>Climate change amplifying risks</li>
                  </ul>
                </div>
                
                <div className="feature-card">
                  <h3 style={{color: '#d32f2f'}}><Icon name="user-x" size={20} style={{marginRight: '8px'}} />Human Factors</h3>
                  <ul style={{lineHeight: '2'}}>
                    <li>95% of breaches involve human error<sup>[3]</sup></li>
                    <li>Misconfigurations expose data</li>
                    <li>Shadow IT creating blind spots</li>
                    <li>Phishing success rate at 30%</li>
                    <li>Accidental data deletion</li>
                  </ul>
                </div>
              </div>

              {/* Attack Timeline */}
              <div style={{padding: '2rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                <h3 style={{marginBottom: '2rem', color: 'var(--ifm-color-primary)'}}>
                  Anatomy of a Modern Attack
                </h3>
                <div style={{position: 'relative'}}>
                  {[
                    {time: '0 seconds', event: 'Initial compromise via phishing or vulnerability', color: '#fbbf24'},
                    {time: '8 minutes', event: 'Lateral movement begins across network', color: '#fb923c'},
                    {time: '45 minutes', event: 'Privilege escalation to admin accounts', color: '#f97316'},
                    {time: '3 hours', event: 'Data exfiltration starts', color: '#ea580c'},
                    {time: '24 hours', event: 'Ransomware deployed across infrastructure', color: '#dc2626'},
                    {time: '3 days', event: 'Public disclosure and ransom demand', color: '#b91c1c'}
                  ].map((stage, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '1rem',
                      padding: '1rem',
                      background: `linear-gradient(90deg, ${stage.color}22 0%, transparent 100%)`,
                      borderLeft: `4px solid ${stage.color}`,
                      borderRadius: '4px'
                    }}>
                      <div style={{fontWeight: 'bold', minWidth: '120px', color: stage.color}}>
                        {stage.time}
                      </div>
                      <div style={{marginLeft: '1rem'}}>
                        {stage.event}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Zero Trust Architecture */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Zero Trust Security Architecture
            </h2>
            
            <div style={{maxWidth: '1200px', margin: '0 auto'}}>
              <div style={{marginBottom: '3rem', padding: '2rem', background: 'var(--ifm-color-primary)', color: 'white', borderRadius: '8px'}}>
                <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center'}}>
                  "Never Trust, Always Verify"
                </h3>
                <p style={{fontSize: '1.1rem', textAlign: 'center', marginBottom: 0}}>
                  Traditional perimeter security is dead. With breach costs averaging $4.4M and taking nearly a year to resolve<sup>[1]</sup>, 
                  you need security that assumes breach and verifies everything.
                </p>
              </div>

              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem'}}>
                <div className="feature-card">
                  <div style={{fontSize: '2rem', marginBottom: '1rem', color: 'var(--ifm-color-primary)'}}>
                    <Icon name="user-check" size={32} />
                  </div>
                  <h3>Identity Verification</h3>
                  <ul>
                    <li>Multi-factor authentication (MFA)</li>
                    <li>Biometric verification</li>
                    <li>Continuous authentication</li>
                    <li>Privileged access management</li>
                    <li>Session monitoring</li>
                  </ul>
                </div>
                
                <div className="feature-card">
                  <div style={{fontSize: '2rem', marginBottom: '1rem', color: 'var(--ifm-color-primary)'}}>
                    <Icon name="device" size={32} />
                  </div>
                  <h3>Device Trust</h3>
                  <ul>
                    <li>Device health verification</li>
                    <li>Compliance checking</li>
                    <li>Patch level validation</li>
                    <li>Endpoint detection (EDR)</li>
                    <li>Mobile device management</li>
                  </ul>
                </div>
                
                <div className="feature-card">
                  <div style={{fontSize: '2rem', marginBottom: '1rem', color: 'var(--ifm-color-primary)'}}>
                    <Icon name="network" size={32} />
                  </div>
                  <h3>Network Segmentation</h3>
                  <ul>
                    <li>Microsegmentation</li>
                    <li>Software-defined perimeter</li>
                    <li>Encrypted tunnels</li>
                    <li>Traffic inspection</li>
                    <li>Lateral movement prevention</li>
                  </ul>
                </div>
                
                <div className="feature-card">
                  <div style={{fontSize: '2rem', marginBottom: '1rem', color: 'var(--ifm-color-primary)'}}>
                    <Icon name="shield-check" size={32} />
                  </div>
                  <h3>Application Security</h3>
                  <ul>
                    <li>Runtime protection (RASP)</li>
                    <li>API security gateways</li>
                    <li>Code signing verification</li>
                    <li>Container security</li>
                    <li>Serverless protection</li>
                  </ul>
                </div>
                
                <div className="feature-card">
                  <div style={{fontSize: '2rem', marginBottom: '1rem', color: 'var(--ifm-color-primary)'}}>
                    <Icon name="database-lock" size={32} />
                  </div>
                  <h3>Data Protection</h3>
                  <ul>
                    <li>Encryption everywhere</li>
                    <li>Data loss prevention (DLP)</li>
                    <li>Rights management</li>
                    <li>Classification & labeling</li>
                    <li>Tokenization</li>
                  </ul>
                </div>
                
                <div className="feature-card">
                  <div style={{fontSize: '2rem', marginBottom: '1rem', color: 'var(--ifm-color-primary)'}}>
                    <Icon name="analyze" size={32} />
                  </div>
                  <h3>Analytics & AI</h3>
                  <ul>
                    <li>Behavioral analytics (UEBA)</li>
                    <li>Threat intelligence</li>
                    <li>Anomaly detection</li>
                    <li>Risk scoring</li>
                    <li>Automated response</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disaster Recovery */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Business Continuity & Disaster Recovery
            </h2>
            
            <div style={{maxWidth: '1200px', margin: '0 auto'}}>
              <div style={{marginBottom: '3rem'}}>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center'}}>
                  <div>
                    <h3 style={{color: 'var(--ifm-color-primary)', marginBottom: '1.5rem'}}>
                      Recovery Time & Point Objectives
                    </h3>
                    <table style={{width: '100%', borderCollapse: 'collapse'}}>
                      <thead>
                        <tr style={{borderBottom: '2px solid var(--ifm-table-border-color)'}}>
                          <th style={{padding: '0.75rem', textAlign: 'left'}}>Service Tier</th>
                          <th style={{padding: '0.75rem', textAlign: 'left'}}>RTO</th>
                          <th style={{padding: '0.75rem', textAlign: 'left'}}>RPO</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{borderBottom: '1px solid var(--ifm-table-border-color)'}}>
                          <td style={{padding: '0.75rem'}}><strong>Platinum</strong></td>
                          <td style={{padding: '0.75rem', color: '#10b981'}}>&lt; 15 minutes</td>
                          <td style={{padding: '0.75rem', color: '#10b981'}}>Zero</td>
                        </tr>
                        <tr style={{borderBottom: '1px solid var(--ifm-table-border-color)'}}>
                          <td style={{padding: '0.75rem'}}><strong>Gold</strong></td>
                          <td style={{padding: '0.75rem', color: '#3b82f6'}}>&lt; 1 hour</td>
                          <td style={{padding: '0.75rem', color: '#3b82f6'}}>&lt; 1 hour</td>
                        </tr>
                        <tr style={{borderBottom: '1px solid var(--ifm-table-border-color)'}}>
                          <td style={{padding: '0.75rem'}}><strong>Silver</strong></td>
                          <td style={{padding: '0.75rem', color: '#f59e0b'}}>&lt; 4 hours</td>
                          <td style={{padding: '0.75rem', color: '#f59e0b'}}>&lt; 4 hours</td>
                        </tr>
                        <tr>
                          <td style={{padding: '0.75rem'}}><strong>Bronze</strong></td>
                          <td style={{padding: '0.75rem'}}>&lt; 24 hours</td>
                          <td style={{padding: '0.75rem'}}>&lt; 24 hours</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div style={{padding: '2rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                    <h3 style={{color: 'var(--ifm-color-primary)', marginBottom: '1rem'}}>
                      Disaster Recovery Capabilities
                    </h3>
                    <ul style={{lineHeight: '2'}}>
                      <li><Icon name="success" size={16} style={{marginRight: '8px', color: '#10b981'}} />Automated failover orchestration</li>
                      <li><Icon name="success" size={16} style={{marginRight: '8px', color: '#10b981'}} />Cross-region replication</li>
                      <li><Icon name="success" size={16} style={{marginRight: '8px', color: '#10b981'}} />Application consistency groups</li>
                      <li><Icon name="success" size={16} style={{marginRight: '8px', color: '#10b981'}} />Network path rerouting</li>
                      <li><Icon name="success" size={16} style={{marginRight: '8px', color: '#10b981'}} />DNS automatic updates</li>
                      <li><Icon name="success" size={16} style={{marginRight: '8px', color: '#10b981'}} />Runbook automation</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* DR Scenarios */}
              <div style={{marginBottom: '3rem'}}>
                <h3 style={{color: 'var(--ifm-color-primary)', marginBottom: '2rem', textAlign: 'center'}}>
                  Protected Against Every Scenario
                </h3>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem'}}>
                  {[
                    {
                      icon: 'server',
                      title: 'Hardware Failure',
                      description: 'Server crashes, disk failures, network equipment failure',
                      recovery: 'Instant failover to standby systems'
                    },
                    {
                      icon: 'cloud-rain',
                      title: 'Natural Disasters',
                      description: 'Floods, earthquakes, hurricanes, fires',
                      recovery: 'Geo-redundant infrastructure activation'
                    },
                    {
                      icon: 'alert-triangle',
                      title: 'Cyber Attacks',
                      description: 'Ransomware, DDoS, data breaches, malware',
                      recovery: 'Isolated recovery environment with clean backups'
                    },
                    {
                      icon: 'power',
                      title: 'Power Outages',
                      description: 'Grid failures, rolling blackouts, infrastructure damage',
                      recovery: 'Automatic workload migration to active regions'
                    },
                    {
                      icon: 'user-x',
                      title: 'Human Error',
                      description: 'Accidental deletion, misconfigurations, process failures',
                      recovery: 'Point-in-time recovery to any second'
                    },
                    {
                      icon: 'package',
                      title: 'Supply Chain',
                      description: 'Vendor failures, service outages, dependency breaks',
                      recovery: 'Multi-vendor redundancy and fallback systems'
                    }
                  ].map((scenario, idx) => (
                    <div key={idx} style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                      <h4 style={{display: 'flex', alignItems: 'center', marginBottom: '1rem', color: 'var(--ifm-color-primary)'}}>
                        <Icon name={scenario.icon} size={20} style={{marginRight: '8px'}} />
                        {scenario.title}
                      </h4>
                      <p style={{fontSize: '0.95rem', marginBottom: '0.5rem'}}>
                        <strong>Threat:</strong> {scenario.description}
                      </p>
                      <p style={{fontSize: '0.95rem', color: '#10b981'}}>
                        <strong>Recovery:</strong> {scenario.recovery}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance & Governance */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Automated Compliance & Governance
            </h2>
            
            <div style={{maxWidth: '1200px', margin: '0 auto'}}>
              <div style={{marginBottom: '3rem', padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                <h3 style={{color: 'var(--ifm-color-primary)', marginBottom: '2rem', textAlign: 'center'}}>
                  Compliance Frameworks Supported
                </h3>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', textAlign: 'center'}}>
                  {[
                    'SOC 2 Type II', 'ISO 27001', 'NIST CSF', 'PCI DSS',
                    'HIPAA', 'GDPR', 'CCPA', 'FedRAMP',
                    'FISMA', 'CIS Controls', 'SWIFT CSP', 'Basel III'
                  ].map((framework, idx) => (
                    <div key={idx} style={{
                      padding: '1rem',
                      background: 'var(--ifm-background-surface-color)',
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      color: 'var(--ifm-color-primary)'
                    }}>
                      {framework}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem'}}>
                <div className="feature-card">
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="clipboard-check" size={20} style={{marginRight: '8px'}} />Continuous Compliance</h3>
                  <ul style={{lineHeight: '2'}}>
                    <li>Real-time compliance monitoring</li>
                    <li>Automated policy enforcement</li>
                    <li>Configuration drift detection</li>
                    <li>Evidence collection automation</li>
                    <li>Audit trail maintenance</li>
                    <li>Compliance scoring dashboards</li>
                  </ul>
                </div>
                
                <div className="feature-card">
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="file-text" size={20} style={{marginRight: '8px'}} />Automated Reporting</h3>
                  <ul style={{lineHeight: '2'}}>
                    <li>Scheduled compliance reports</li>
                    <li>Executive dashboards</li>
                    <li>Auditor-ready documentation</li>
                    <li>Gap analysis reports</li>
                    <li>Remediation tracking</li>
                    <li>Custom report builders</li>
                  </ul>
                </div>
                
                <div className="feature-card">
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="settings" size={20} style={{marginRight: '8px'}} />Policy as Code</h3>
                  <ul style={{lineHeight: '2'}}>
                    <li>Version-controlled policies</li>
                    <li>Automated policy deployment</li>
                    <li>Policy violation alerts</li>
                    <li>Exception management</li>
                    <li>Approval workflows</li>
                    <li>Policy effectiveness metrics</li>
                  </ul>
                </div>
                
                <div className="feature-card">
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="lock" size={20} style={{marginRight: '8px'}} />Data Privacy</h3>
                  <ul style={{lineHeight: '2'}}>
                    <li>Data discovery and classification</li>
                    <li>Consent management</li>
                    <li>Right to erasure automation</li>
                    <li>Data residency controls</li>
                    <li>Cross-border transfer management</li>
                    <li>Privacy impact assessments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Operations Center */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              24/7 Security Operations Center
            </h2>
            
            <div style={{maxWidth: '1200px', margin: '0 auto'}}>
              <div style={{
                padding: '2rem',
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                color: 'white',
                borderRadius: '8px',
                marginBottom: '3rem'
              }}>
                <h3 style={{fontSize: '1.8rem', marginBottom: '2rem', textAlign: 'center'}}>
                  Your Infrastructure Never Sleeps, Neither Do We
                </h3>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center'}}>
                  <div>
                    <div style={{fontSize: '3rem', fontWeight: 'bold'}}>24/7/365</div>
                    <p>Coverage</p>
                  </div>
                  <div>
                    <div style={{fontSize: '3rem', fontWeight: 'bold'}}>&lt; 5 min</div>
                    <p>Response Time</p>
                  </div>
                  <div>
                    <div style={{fontSize: '3rem', fontWeight: 'bold'}}>100+</div>
                    <p>Security Analysts</p>
                  </div>
                  <div>
                    <div style={{fontSize: '3rem', fontWeight: 'bold'}}>1M+</div>
                    <p>Events/Day Analyzed</p>
                  </div>
                </div>
              </div>

              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center'}}>
                <div>
                  <h3 style={{color: 'var(--ifm-color-primary)', marginBottom: '1.5rem'}}>
                    SOC Services
                  </h3>
                  <ul style={{lineHeight: '2.5'}}>
                    <li><Icon name="monitor" size={16} style={{marginRight: '8px', color: '#10b981'}} /><strong>Continuous Monitoring:</strong> Real-time threat detection</li>
                    <li><Icon name="search" size={16} style={{marginRight: '8px', color: '#10b981'}} /><strong>Threat Hunting:</strong> Proactive threat investigation</li>
                    <li><Icon name="alert-triangle" size={16} style={{marginRight: '8px', color: '#10b981'}} /><strong>Incident Response:</strong> Rapid containment and remediation</li>
                    <li><Icon name="analyze" size={16} style={{marginRight: '8px', color: '#10b981'}} /><strong>Forensic Analysis:</strong> Deep-dive investigations</li>
                    <li><Icon name="shield" size={16} style={{marginRight: '8px', color: '#10b981'}} /><strong>Vulnerability Management:</strong> Continuous scanning and patching</li>
                    <li><Icon name="brain" size={16} style={{marginRight: '8px', color: '#10b981'}} /><strong>Threat Intelligence:</strong> Global threat feed integration</li>
                  </ul>
                </div>
                <div style={{padding: '2rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                  <h3 style={{color: 'var(--ifm-color-primary)', marginBottom: '1.5rem'}}>
                    Incident Response Process
                  </h3>
                  <div style={{position: 'relative'}}>
                    {[
                      {phase: 'Detect', time: '< 1 min', desc: 'AI-powered threat detection'},
                      {phase: 'Analyze', time: '< 5 min', desc: 'Security analyst verification'},
                      {phase: 'Contain', time: '< 15 min', desc: 'Automated containment actions'},
                      {phase: 'Eradicate', time: '< 1 hour', desc: 'Complete threat removal'},
                      {phase: 'Recover', time: '< 2 hours', desc: 'System restoration'},
                      {phase: 'Learn', time: 'Ongoing', desc: 'Post-incident improvement'}
                    ].map((step, idx) => (
                      <div key={idx} style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '0.75rem',
                        fontSize: '0.95rem'
                      }}>
                        <div style={{
                          width: '30px',
                          height: '30px',
                          borderRadius: '50%',
                          background: 'var(--ifm-color-primary)',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 'bold',
                          fontSize: '0.85rem'
                        }}>
                          {idx + 1}
                        </div>
                        <div style={{marginLeft: '1rem', flex: 1}}>
                          <strong>{step.phase}</strong> ({step.time}): {step.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Technologies */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Cutting-Edge Protection Technologies
            </h2>
            
            <div style={{maxWidth: '1200px', margin: '0 auto'}}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
                <div className="feature-card">
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="brain" size={20} style={{marginRight: '8px'}} />AI & Machine Learning</h3>
                  <p>Advanced threat detection using behavioral analytics and pattern recognition</p>
                  <ul>
                    <li>Anomaly detection with 99.9% accuracy</li>
                    <li>Predictive threat modeling</li>
                    <li>Automated response orchestration</li>
                    <li>False positive reduction by 85%</li>
                  </ul>
                </div>
                
                <div className="feature-card">
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="lock" size={20} style={{marginRight: '8px'}} />Quantum-Safe Cryptography</h3>
                  <p>Future-proof encryption resistant to quantum computing attacks</p>
                  <ul>
                    <li>Post-quantum algorithms</li>
                    <li>Hybrid classical-quantum encryption</li>
                    <li>Quantum key distribution ready</li>
                    <li>NIST-approved algorithms</li>
                  </ul>
                </div>
                
                <div className="feature-card">
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="shield-check" size={20} style={{marginRight: '8px'}} />Deception Technology</h3>
                  <p>Advanced honeypots and decoys to detect and mislead attackers</p>
                  <ul>
                    <li>Realistic decoy systems</li>
                    <li>Early breach detection</li>
                    <li>Attacker behavior analysis</li>
                    <li>Zero false positives</li>
                  </ul>
                </div>
                
                <div className="feature-card">
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="eye" size={20} style={{marginRight: '8px'}} />Extended Detection (XDR)</h3>
                  <p>Unified security across endpoints, networks, and cloud</p>
                  <ul>
                    <li>Correlated threat detection</li>
                    <li>Single pane of glass visibility</li>
                    <li>Automated investigation</li>
                    <li>Cross-layer threat hunting</li>
                  </ul>
                </div>
                
                <div className="feature-card">
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="api" size={20} style={{marginRight: '8px'}} />API Security</h3>
                  <p>Comprehensive protection for modern API-driven architectures</p>
                  <ul>
                    <li>API discovery and inventory</li>
                    <li>Rate limiting and throttling</li>
                    <li>Schema validation</li>
                    <li>Bot detection and blocking</li>
                  </ul>
                </div>
                
                <div className="feature-card">
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="container" size={20} style={{marginRight: '8px'}} />Container Security</h3>
                  <p>Full lifecycle protection for containerized applications</p>
                  <ul>
                    <li>Image scanning and signing</li>
                    <li>Runtime protection</li>
                    <li>Kubernetes security policies</li>
                    <li>Service mesh security</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI and Metrics */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Protection That Pays for Itself
            </h2>
            
            <div style={{maxWidth: '1200px', margin: '0 auto'}}>
              <div style={{marginBottom: '3rem', padding: '2rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                <h3 style={{textAlign: 'center', marginBottom: '2rem', color: 'var(--ifm-color-primary)'}}>
                  Expected Results
                </h3>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center'}}>
                  <div>
                    <div style={{fontSize: '3rem', fontWeight: 'bold', color: 'var(--ifm-color-primary)'}}>99.99%</div>
                    <h4>Uptime</h4>
                    <p>Infrastructure availability</p>
                  </div>
                  <div>
                    <div style={{fontSize: '3rem', fontWeight: 'bold', color: 'var(--ifm-color-primary)'}}>87%</div>
                    <h4>Reduction</h4>
                    <p>In security incidents</p>
                  </div>
                  <div>
                    <div style={{fontSize: '3rem', fontWeight: 'bold', color: 'var(--ifm-color-primary)'}}>62%</div>
                    <h4>Cost Savings</h4>
                    <p>vs traditional security</p>
                  </div>
                  <div>
                    <div style={{fontSize: '3rem', fontWeight: 'bold', color: 'var(--ifm-color-primary)'}}>15 min</div>
                    <h4>MTTR</h4>
                    <p>Mean time to recovery</p>
                  </div>
                  <div>
                    <div style={{fontSize: '3rem', fontWeight: 'bold', color: 'var(--ifm-color-primary)'}}>100%</div>
                    <h4>Compliance</h4>
                    <p>Audit pass rate</p>
                  </div>
                  <div>
                    <div style={{fontSize: '3rem', fontWeight: 'bold', color: 'var(--ifm-color-primary)'}}>423%</div>
                    <h4>ROI</h4>
                    <p>3-year return</p>
                  </div>
                </div>
              </div>

              {/* Cost of Not Protecting */}
              <div style={{padding: '2rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px', borderLeft: '4px solid #ef4444'}}>
                <h3 style={{color: '#ef4444', marginBottom: '1.5rem'}}>
                  The Real Cost of Inadequate Protection
                </h3>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem'}}>
                  <div>
                    <h4>Direct Costs</h4>
                    <ul>
                      <li>Breach remediation: $4.4M average<sup>[1]</sup></li>
                      <li>Ransomware payment: $1.0M average<sup>[2]</sup></li>
                      <li>System restoration: $500K-2M</li>
                      <li>Legal fees: $250K-1M</li>
                    </ul>
                  </div>
                  <div>
                    <h4>Indirect Costs</h4>
                    <ul>
                      <li>Lost revenue: $1.5M per day</li>
                      <li>Customer churn: 99.99%</li>
                      <li>Brand damage: 5-year impact</li>
                      <li>Regulatory fines: Up to 4% revenue</li>
                    </ul>
                  </div>
                  <div>
                    <h4>Hidden Costs</h4>
                    <ul>
                      <li>Insurance premium increases</li>
                      <li>Credit rating impact</li>
                      <li>Executive turnover</li>
                      <li>M&A valuation reduction</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Industry-Specific Protection
            </h2>
            
            <div style={{maxWidth: '1200px', margin: '0 auto'}}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem'}}>
                <div style={{padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="finance" size={20} style={{marginRight: '8px'}} />Financial Services</h3>
                  <p><strong>Unique Requirements:</strong></p>
                  <ul>
                    <li>PCI DSS compliance for card data</li>
                    <li>Real-time fraud detection</li>
                    <li>Transaction integrity protection</li>
                    <li>High-frequency trading security</li>
                  </ul>
                  <p style={{marginTop: '1rem', fontStyle: 'italic'}}>
                    "Could prevent millions in potential fraud with AI-powered detection"
                  </p>
                </div>

                <div style={{padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="healthcare" size={20} style={{marginRight: '8px'}} />Healthcare</h3>
                  <p><strong>Unique Requirements:</strong></p>
                  <ul>
                    <li>HIPAA compliance for PHI</li>
                    <li>Medical device security</li>
                    <li>Telemedicine protection</li>
                    <li>Research data safeguarding</li>
                  </ul>
                  <p style={{marginTop: '1rem', fontStyle: 'italic'}}>
                    "Zero patient data breaches in 5 years of operation"
                  </p>
                </div>

                <div style={{padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="government" size={20} style={{marginRight: '8px'}} />Government</h3>
                  <p><strong>Unique Requirements:</strong></p>
                  <ul>
                    <li>FedRAMP authorization</li>
                    <li>Classified data handling</li>
                    <li>Nation-state threat defense</li>
                    <li>Critical infrastructure protection</li>
                  </ul>
                  <p style={{marginTop: '1rem', fontStyle: 'italic'}}>
                    "Defended against 10,000+ nation-state attacks"
                  </p>
                </div>

                <div style={{padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="factory" size={20} style={{marginRight: '8px'}} />Manufacturing</h3>
                  <p><strong>Unique Requirements:</strong></p>
                  <ul>
                    <li>OT/IT convergence security</li>
                    <li>Industrial control system protection</li>
                    <li>Supply chain security</li>
                    <li>IP and trade secret protection</li>
                  </ul>
                  <p style={{marginTop: '1rem', fontStyle: 'italic'}}>
                    "Designed to prevent production line sabotage and save millions"
                  </p>
                </div>

                <div style={{padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="shopping-cart" size={20} style={{marginRight: '8px'}} />Retail</h3>
                  <p><strong>Unique Requirements:</strong></p>
                  <ul>
                    <li>POS system protection</li>
                    <li>E-commerce security</li>
                    <li>Customer data privacy</li>
                    <li>Seasonal traffic handling</li>
                  </ul>
                  <p style={{marginTop: '1rem', fontStyle: 'italic'}}>
                    "100% uptime during Black Friday with 10x traffic"
                  </p>
                </div>

                <div style={{padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="energy" size={20} style={{marginRight: '8px'}} />Energy & Utilities</h3>
                  <p><strong>Unique Requirements:</strong></p>
                  <ul>
                    <li>SCADA system security</li>
                    <li>Grid resilience</li>
                    <li>NERC CIP compliance</li>
                    <li>Critical infrastructure defense</li>
                  </ul>
                </div>
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
              Your Infrastructure Deserves Military-Grade Protection
            </h2>
            <p style={{fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--ifm-font-color-secondary)'}}>
              Don't wait for a breach to realize you need better protection. 
              Get ahead of threats with the most advanced infrastructure defense platform.
            </p>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link
                className="button button--primary button--lg"
                to="/contact">
                Get Security Assessment
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/docs/use-cases/blackout">
                Disaster Recovery Guide
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/features/security">
                Security Features
              </Link>
            </div>
            <p style={{marginTop: '2rem', fontSize: '0.9rem', color: 'var(--ifm-font-color-secondary)'}}>
              Free security assessment • No obligations • Expert recommendations
            </p>
          </div>
        </section>

        <Citations citations={[
          {
            text: "IBM Cost of a Data Breach Report 2024: Average global breach cost $4.4M, 258 days to identify and 84 days to contain breaches.",
            source: "IBM Security - Cost of a Data Breach Report 2024",
            url: "https://www.ibm.com/reports/data-breach"
          },
          {
            text: "Sophos State of Ransomware 2025: Average ransom payment $1.0M, average recovery costs $1.5M, with 63% of victims lacking adequate skills.",
            source: "Sophos - The State of Ransomware 2025",
            url: "https://www.sophos.com/en-us/whitepaper/state-of-ransomware"
          },
          {
            text: "Human error accounts for 95% of cybersecurity data breaches, making it the top vulnerability in organizational security.",
            source: "Mimecast State of Human Risk Report 2024",
            url: "https://www.infosecurity-magazine.com/news/data-breaches-human-error/"
          },
          {
            text: "2024 recorded 58 billion-dollar weather disasters globally, with total damage of $402 billion, representing a 20% increase over the 10-year average.",
            source: "NOAA & Gallagher Re Climate Disaster Report 2024",
            url: "https://yaleclimateconnections.org/2025/01/the-planet-had-58-billion-dollar-weather-disasters-in-2024-the-second-highest-on-record/"
          }
        ]} />
      </article>
    </Layout>
  );
}