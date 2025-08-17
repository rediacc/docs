import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import Citations from '../../components/Citations';
import { Icon } from '../../components/Icon';

export default function SecurityFeature() {
  return (
    <Layout
      title="Enterprise Infrastructure Security - Military-Grade Protection | Rediacc"
      description="Protect your infrastructure with military-grade AES-256 encryption, multi-factor authentication, real-time threat detection, and enterprise security features.">
      
      <Head>
        <meta property="og:title" content="Enterprise Infrastructure Security Solutions" />
        <meta property="og:description" content="Military-grade security for your infrastructure. AES-256 encryption, MFA, real-time threat detection, and enterprise protection." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/features/security" />
        <link rel="canonical" href="/features/security" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Rediacc Security Suite",
            "description": "Enterprise-grade infrastructure security with encryption, MFA, and monitoring",
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
              Enterprise-Grade Security for Modern Infrastructure
            </h1>
            <p className="hero-subtitle animate-fade-in-up animate-delay-100">
              Military-grade encryption, real-time threat detection, and enterprise protection
            </p>
            <div className="hero-buttons animate-fade-in-up animate-delay-200">
              <Link className="button button--primary button--lg" to="/docs/console-guide/advanced-security">
                Security Guide
              </Link>
              <Link className="button button--secondary button--lg" to="/console/login?register=true" target="_blank">
                Play on Sandbox
              </Link>
            </div>
          </div>
        </section>

        {/* The Security Challenge */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              The Infrastructure Security Landscape
            </h2>
            <div style={{maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', fontSize: '1.1rem'}}>
              <p>
                In today's threat landscape, infrastructure security isn't optional—it's essential. 
                The global average data breach cost reached $4.88 million in 2024<sup>[1]</sup>, with healthcare breaches averaging $9.77 million<sup>[1]</sup>. 
                Organizations face sophisticated attacks, complex security requirements, and the 
                challenge of securing distributed systems across multiple environments.
              </p>
              <div style={{margin: '2rem 0', padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                <h3>Critical Security Challenges<sup>[1]</sup>:</h3>
                <ul>
                  <li><strong>Data Breaches:</strong> Global average cost of $4.88 million per incident (10% increase from 2023)</li>
                  <li><strong>Healthcare Breaches:</strong> $9.77 million average—highest of any industry</li>
                  <li><strong>Detection Time:</strong> Average 258 days to identify and contain breaches</li>
                  <li><strong>AI/Automation Savings:</strong> Organizations using AI save $2.2 million and respond 100 days faster</li>
                  <li><strong>Security Violations:</strong> Regulatory fines up to 4% of global revenue</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Security Architecture */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Multi-Layered Security Architecture
            </h2>
            
            <div style={{maxWidth: '1000px', margin: '0 auto'}}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem'}}>
                <div className="feature-card">
                  <div style={{fontSize: '2rem', marginBottom: '1rem'}}><Icon name="locked" size={24} /></div>
                  <h3>Encryption at Rest & Transit</h3>
                  <p>AES-256 encryption for all data, TLS 1.3 for communications, hardware security module integration</p>
                </div>
                <div className="feature-card">
                  <div style={{fontSize: '2rem', marginBottom: '1rem'}}><Icon name="security" size={24} /></div>
                  <h3>Zero-Trust Architecture</h3>
                  <p>Never trust, always verify. Every request authenticated, authorized, and encrypted</p>
                </div>
                <div className="feature-card">
                  <div style={{fontSize: '2rem', marginBottom: '1rem'}}><Icon name="user" size={24} /></div>
                  <h3>Multi-Factor Authentication</h3>
                  <p>Hardware tokens, biometric authentication, and time-based OTP support</p>
                </div>
                <div className="feature-card">
                  <div style={{fontSize: '2rem', marginBottom: '1rem'}}><Icon name="search" size={24} /></div>
                  <h3>Real-Time Threat Detection</h3>
                  <p>AI-powered anomaly detection, behavioral analysis, and automated response</p>
                </div>
              </div>

              <div style={{padding: '2rem', background: 'var(--ifm-color-primary)', color: 'white', borderRadius: '8px'}}>
                <h3 style={{fontSize: '1.8rem', marginBottom: '1rem'}}>Defense in Depth Strategy</h3>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '2rem'}}>
                  <div>
                    <strong>Perimeter Security</strong>
                    <ul style={{marginTop: '0.5rem', fontSize: '0.95rem'}}>
                      <li>Web Application Firewall</li>
                      <li>DDoS Protection</li>
                      <li>Rate Limiting</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Network Security</strong>
                    <ul style={{marginTop: '0.5rem', fontSize: '0.95rem'}}>
                      <li>Network Segmentation</li>
                      <li>VPN Access</li>
                      <li>Traffic Encryption</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Application Security</strong>
                    <ul style={{marginTop: '0.5rem', fontSize: '0.95rem'}}>
                      <li>Code Scanning</li>
                      <li>Dependency Analysis</li>
                      <li>Runtime Protection</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Data Security</strong>
                    <ul style={{marginTop: '0.5rem', fontSize: '0.95rem'}}>
                      <li>Encryption Keys</li>
                      <li>Access Controls</li>
                      <li>Data Masking</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Comprehensive Security Features
            </h2>
            
            <div style={{maxWidth: '1200px', margin: '0 auto'}}>
              <div style={{marginBottom: '3rem'}}>
                <h3 style={{color: 'var(--ifm-color-primary)', marginBottom: '1.5rem'}}>
                  <Icon name="locked" size={20} style={{marginRight: '8px'}} />Advanced Encryption
                </h3>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem'}}>
                  <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                    <h4>Data Encryption</h4>
                    <ul>
                      <li>AES-256-GCM encryption at rest</li>
                      <li>TLS 1.3 for data in transit</li>
                      <li>End-to-end encryption for sensitive operations</li>
                      <li>Customer-managed encryption keys (CMEK)</li>
                    </ul>
                  </div>
                  <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                    <h4>Key Management</h4>
                    <ul>
                      <li>Hardware Security Module (HSM) support</li>
                      <li>Automated key rotation</li>
                      <li>Key escrow and recovery</li>
                      <li>Industry-standard cryptographic modules</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div style={{marginBottom: '3rem'}}>
                <h3 style={{color: 'var(--ifm-color-primary)', marginBottom: '1.5rem'}}>
                  <Icon name="user" size={20} style={{marginRight: '8px'}} />Identity & Access Management
                </h3>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem'}}>
                  <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                    <h4>Authentication</h4>
                    <ul>
                      <li>Multi-factor authentication (MFA)</li>
                      <li>Single Sign-On (SSO) integration</li>
                      <li>Biometric authentication support</li>
                      <li>Hardware token compatibility</li>
                    </ul>
                  </div>
                  <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                    <h4>Authorization</h4>
                    <ul>
                      <li>Role-Based Access Control (RBAC)</li>
                      <li>Attribute-Based Access Control (ABAC)</li>
                      <li>Just-In-Time (JIT) access</li>
                      <li>Privileged Access Management (PAM)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div style={{marginBottom: '3rem'}}>
                <h3 style={{color: 'var(--ifm-color-primary)', marginBottom: '1.5rem'}}>
                  <Icon name="search" size={20} style={{marginRight: '8px'}} />Threat Detection & Response
                </h3>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem'}}>
                  <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                    <h4>Detection Capabilities</h4>
                    <ul>
                      <li>Real-time anomaly detection</li>
                      <li>Behavioral analytics</li>
                      <li>Machine learning threat models</li>
                      <li>Intrusion Detection System (IDS)</li>
                    </ul>
                  </div>
                  <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                    <h4>Automated Response</h4>
                    <ul>
                      <li>Automatic threat isolation</li>
                      <li>Incident response playbooks</li>
                      <li>Forensic data collection</li>
                      <li>Security orchestration (SOAR)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Enterprise Security Features
            </h2>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto'}}>
              <div className="feature-card" style={{textAlign: 'center'}}>
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}><Icon name="lock" size={24} /></div>
                <h4>Data Protection</h4>
                <p style={{fontSize: '0.9rem'}}>Advanced encryption and data residency controls</p>
              </div>
              <div className="feature-card" style={{textAlign: 'center'}}>
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}><Icon name="shield" size={24} /></div>
                <h4>Access Control</h4>
                <p style={{fontSize: '0.9rem'}}>Multi-factor authentication and role-based access</p>
              </div>
              <div className="feature-card" style={{textAlign: 'center'}}>
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}><Icon name="activity" size={24} /></div>
                <h4>Monitoring</h4>
                <p style={{fontSize: '0.9rem'}}>Real-time threat detection and response</p>
              </div>
              <div className="feature-card" style={{textAlign: 'center'}}>
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}><Icon name="file-text" size={24} /></div>
                <h4>Audit Trails</h4>
                <p style={{fontSize: '0.9rem'}}>Comprehensive logging and reporting</p>
              </div>
              <div className="feature-card" style={{textAlign: 'center'}}>
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}><Icon name="database" size={24} /></div>
                <h4>Backup Security</h4>
                <p style={{fontSize: '0.9rem'}}>Immutable backups and recovery protection</p>
              </div>
            </div>

            <div style={{marginTop: '3rem', padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px', maxWidth: '800px', margin: '3rem auto 0'}}>
              <h3>Security Capabilities:</h3>
              <ul style={{lineHeight: '2', fontSize: '1.1rem'}}>
                <li><Icon name="success" size={16} style={{marginRight: '8px'}} /><strong>Activity Logging:</strong> Immutable audit trails for all operations</li>
                <li><Icon name="success" size={16} style={{marginRight: '8px'}} /><strong>Data Residency:</strong> Control where your data is stored and processed</li>
                <li><Icon name="success" size={16} style={{marginRight: '8px'}} /><strong>Data Management:</strong> Secure data deletion and lifecycle management</li>
                <li><Icon name="success" size={16} style={{marginRight: '8px'}} /><strong>Data Portability:</strong> Export data in standard formats</li>
                <li><Icon name="success" size={16} style={{marginRight: '8px'}} /><strong>Security Reporting:</strong> Automated security reports and monitoring</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Security Operations */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              24/7 Security Operations
            </h2>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto'}}>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '3rem', color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>24/7</div>
                <h3>Security Monitoring</h3>
                <p>Round-the-clock monitoring by our Security Operations Center (SOC)</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '3rem', color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>258 days</div>
                <h3>Faster Than Average<sup>[1]</sup></h3>
                <p>Industry average detection time vs. our instant threat detection</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '3rem', color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>$2.2M</div>
                <h3>AI Savings<sup>[1]</sup></h3>
                <p>Average savings from AI-powered security automation</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Security FAQ
            </h2>
            
            <div style={{maxWidth: '800px', margin: '0 auto'}}>
              <details style={{marginBottom: '1rem', padding: '1rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                <summary style={{cursor: 'pointer', fontWeight: 'bold', fontSize: '1.2rem'}}>
                  How does Rediacc handle encryption keys?
                </summary>
                <p style={{marginTop: '1rem', lineHeight: '1.6'}}>
                  Rediacc uses a multi-layered key management approach. Master keys are stored in Hardware Security 
                  Modules (HSMs), data encryption keys are automatically rotated, and customers can bring their own 
                  keys (BYOK) for additional control. All key operations are logged and auditable.
                </p>
              </details>

              <details style={{marginBottom: '1rem', padding: '1rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                <summary style={{cursor: 'pointer', fontWeight: 'bold', fontSize: '1.2rem'}}>
                  What security standards does Rediacc follow?
                </summary>
                <p style={{marginTop: '1rem', lineHeight: '1.6'}}>
                  Rediacc implements enterprise-grade security practices including AES-256 encryption, multi-factor 
                  authentication, role-based access controls, and comprehensive audit logging. Our security documentation 
                  and architecture details are available upon request.
                </p>
              </details>

              <details style={{marginBottom: '1rem', padding: '1rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                <summary style={{cursor: 'pointer', fontWeight: 'bold', fontSize: '1.2rem'}}>
                  How is data isolated between customers?
                </summary>
                <p style={{marginTop: '1rem', lineHeight: '1.6'}}>
                  Each customer's data is completely isolated using multiple layers: logical isolation at the application 
                  level, network segmentation, separate encryption keys, and optional dedicated infrastructure for 
                  enterprise customers requiring physical isolation.
                </p>
              </details>

              <details style={{marginBottom: '1rem', padding: '1rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                <summary style={{cursor: 'pointer', fontWeight: 'bold', fontSize: '1.2rem'}}>
                  What happens during a security incident?
                </summary>
                <p style={{marginTop: '1rem', lineHeight: '1.6'}}>
                  Our incident response team follows a structured playbook: immediate containment, investigation, 
                  remediation, and transparent communication. Customers are notified within 1 hour of confirmed incidents, 
                  with detailed reports following resolution.
                </p>
              </details>

              <details style={{marginBottom: '1rem', padding: '1rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                <summary style={{cursor: 'pointer', fontWeight: 'bold', fontSize: '1.2rem'}}>
                  Can I perform my own security audits?
                </summary>
                <p style={{marginTop: '1rem', lineHeight: '1.6'}}>
                  Yes, enterprise customers can conduct their own security assessments, penetration testing, and audits. 
                  We provide full transparency with audit logs, security reports, and technical documentation to 
                  support your security review process.
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
              Secure Your Infrastructure Today
            </h2>
            <p style={{fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--ifm-font-color-secondary)'}}>
              Join enterprises trusting Rediacc for military-grade infrastructure security
            </p>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link
                className="button button--primary button--lg"
                to="/docs/console-guide/advanced-security">
                View Security Docs
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/console/login?register=true"
                target="_blank">
                Play on Sandbox
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/contact">
                Schedule Security Review
              </Link>
            </div>
          </div>
        </section>

        <Citations citations={[
          {
            text: "IBM Cost of a Data Breach Report 2024: Global average data breach cost reached $4.88 million (10% increase from 2023), with healthcare averaging $9.77 million. Organizations with severe staffing shortages observed $1.76 million higher breach costs. Organizations using AI/automation extensively save $2.2 million on average.",
            source: "IBM Cost of a Data Breach Report 2024",
            url: "https://newsroom.ibm.com/2024-07-30-ibm-report-escalating-data-breach-disruption-pushes-costs-to-new-highs"
          }
        ]} />
        
        {/* Related Resources */}
        <section style={{padding: '3rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h3 style={{textAlign: 'center', marginBottom: '2rem'}}>Related Resources</h3>
            <div style={{display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link to="/features/zero-cost-backup" className="quick-link">
                Backup Security →
              </Link>
              <Link to="/features/disaster-recovery" className="quick-link">
                Disaster Recovery →
              </Link>
              <Link to="/docs/console-guide/advanced-security" className="quick-link">
                Advanced Security Guide →
              </Link>
              <Link to="/docs/console-guide/advanced-security" className="quick-link">
                Security Guide →
              </Link>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}