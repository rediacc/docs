import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { Icon } from '../../components/Icon';
import Citations from '../../components/Citations';

export default function EnterpriseSolution() {
  return (
    <Layout
      title="Enterprise Infrastructure Management - Complete Automation Platform | Rediacc"
      description="Enterprise-grade infrastructure automation platform with advanced security, compliance, unlimited scalability, and 24/7 support. Trusted by Fortune 500 companies.">
      
      <Head>
        <meta property="og:title" content="Enterprise Infrastructure Management Platform" />
        <meta property="og:description" content="Complete infrastructure automation for enterprises. Advanced security, compliance, disaster recovery, and dedicated support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/solutions/enterprise" />
        <link rel="canonical" href="/solutions/enterprise" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Rediacc Enterprise",
            "description": "Enterprise infrastructure automation platform",
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
              Enterprise Infrastructure at Scale
            </h1>
            <p className="hero-subtitle animate-fade-in-up animate-delay-100">
              Trusted by Fortune 500 companies to manage mission-critical infrastructure. Organizations globally overspend $100B+ on cloud migrations<sup>[1]</sup>
            </p>
            <div className="hero-buttons animate-fade-in-up animate-delay-200">
              <Link className="button button--primary button--lg" to="/contact">
                Request Demo
              </Link>
              <Link className="button button--secondary button--lg" to="/pricing">
                See Enterprise Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Enterprise Features */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Built for Enterprise Requirements
            </h2>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto'}}>
              <div className="feature-card">
                <h3><Icon name="building" size={20} style={{marginRight: '8px'}} />Multi-Tenant Architecture</h3>
                <p>Complete isolation between business units with centralized management and billing.</p>
              </div>
              <div className="feature-card">
                <h3><Icon name="globe" size={20} style={{marginRight: '8px'}} />Global Deployment</h3>
                <p>Deploy across 50+ regions worldwide with automatic geo-redundancy and compliance.</p>
              </div>
              <div className="feature-card">
                <h3><Icon name="users" size={20} style={{marginRight: '8px'}} />Advanced RBAC</h3>
                <p>Granular role-based access control with AD/LDAP integration and audit trails.</p>
              </div>
              <div className="feature-card">
                <h3><Icon name="analyze" size={20} style={{marginRight: '8px'}} />Executive Dashboards</h3>
                <p>Real-time KPI monitoring, cost analytics, and compliance reporting for C-suite.</p>
              </div>
              <div className="feature-card">
                <h3><Icon name="refresh-cw" size={20} style={{marginRight: '8px'}} />Change Management</h3>
                <p>ITIL-compliant change workflows with approval chains and automatic rollback.</p>
              </div>
              <div className="feature-card">
                <h3><Icon name="support" size={20} style={{marginRight: '8px'}} />Dedicated Support</h3>
                <p>24/7 dedicated support team, technical account manager, and priority escalation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Compliance */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Enterprise Security & Compliance
            </h2>
            
            <div style={{maxWidth: '1000px', margin: '0 auto'}}>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center'}}>
                <div>
                  <h3>Security First</h3>
                  <ul style={{lineHeight: '2'}}>
                    <li><Icon name="success" size={16} style={{marginRight: '8px'}} />SOC 2 Type II Certified</li>
                    <li><Icon name="success" size={16} style={{marginRight: '8px'}} />ISO 27001 Compliant</li>
                    <li><Icon name="success" size={16} style={{marginRight: '8px'}} />HIPAA Ready</li>
                    <li><Icon name="success" size={16} style={{marginRight: '8px'}} />PCI-DSS Level 1</li>
                    <li><Icon name="success" size={16} style={{marginRight: '8px'}} />FedRAMP Authorized</li>
                    <li><Icon name="success" size={16} style={{marginRight: '8px'}} />GDPR Compliant</li>
                  </ul>
                </div>
                <div>
                  <h3>Advanced Features</h3>
                  <ul style={{lineHeight: '2'}}>
                    <li><Icon name="success" size={16} style={{marginRight: '8px'}} />Hardware Security Modules</li>
                    <li><Icon name="success" size={16} style={{marginRight: '8px'}} />Air-gapped environments</li>
                    <li><Icon name="success" size={16} style={{marginRight: '8px'}} />Private connectivity (VPN/Direct)</li>
                    <li><Icon name="success" size={16} style={{marginRight: '8px'}} />Data residency controls</li>
                    <li><Icon name="success" size={16} style={{marginRight: '8px'}} />Encryption key management</li>
                    <li><Icon name="success" size={16} style={{marginRight: '8px'}} />Compliance automation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Ecosystem */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Seamless Enterprise Integration
            </h2>
            
            <div style={{maxWidth: '1200px', margin: '0 auto'}}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem'}}>
                <div style={{textAlign: 'center', padding: '1.5rem'}}>
                  <h4>IT Service Management</h4>
                  <p>ServiceNow, Jira Service Desk, BMC Remedy</p>
                </div>
                <div style={{textAlign: 'center', padding: '1.5rem'}}>
                  <h4>Monitoring & Observability</h4>
                  <p>Datadog, Splunk, New Relic, Prometheus</p>
                </div>
                <div style={{textAlign: 'center', padding: '1.5rem'}}>
                  <h4>CI/CD Pipelines</h4>
                  <p>Jenkins, GitLab, GitHub Actions, Azure DevOps</p>
                </div>
                <div style={{textAlign: 'center', padding: '1.5rem'}}>
                  <h4>Cloud Platforms</h4>
                  <p>AWS, Azure, Google Cloud, VMware, OpenStack</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Enterprise Success Metrics
            </h2>
            
            <div style={{marginBottom: '2rem', textAlign: 'center', fontSize: '1.1rem', color: 'var(--ifm-font-color-secondary)'}}>
              17% of large IT projects threaten company existence with 200-400% budget overruns<sup>[2]</sup>, while only 16.2% of IT projects are deemed fully successful<sup>[3]</sup>
            </div>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto', textAlign: 'center'}}>
              <div>
                <div style={{fontSize: '3rem', color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>$100B+</div>
                <h4>Cloud Overspend<sup>[1]</sup></h4>
                <p>Global migration budget overruns</p>
              </div>
              <div>
                <div style={{fontSize: '3rem', color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>16.2%</div>
                <h4>Fully Successful<sup>[3]</sup></h4>
                <p>IT projects completed successfully</p>
              </div>
              <div>
                <div style={{fontSize: '3rem', color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>38%</div>
                <h4>Cloud Waste<sup>[4]</sup></h4>
                <p>Enterprises wasting 30%+ of cloud spend</p>
              </div>
              <div>
                <div style={{fontSize: '3rem', color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>24/7</div>
                <h4>Support Coverage</h4>
                <p>Dedicated enterprise support</p>
              </div>
            </div>
          </div>
        </section>

        <Citations citations={[
          {
            text: "McKinsey research shows organizations globally spend over $100 billion more on their cloud migrations than their initial cost projections, with 38% of projects running over anticipated time.",
            source: "McKinsey - Cloud migration opportunity: Business value grows, but missteps abound",
            url: "https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/cloud-migration-opportunity-business-value-grows-but-missteps-abound"
          },
          {
            text: "McKinsey: 17% of large IT projects (>$15M) threaten company existence with 200-400% budget overruns.",
            source: "McKinsey - Delivering large-scale IT projects on time, on budget, and on value",
            url: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/delivering-large-scale-it-projects-on-time-on-budget-and-on-value"
          },
          {
            text: "Standish Group CHAOS research shows only 16.2% of IT projects are deemed successful (on time, on budget, with all promised functionality), while 31.1% are classified as failed (abandoned or cancelled).",
            source: "Standish Group CHAOS Report Research",
            url: "https://www.standishgroup.com/"
          },
          {
            text: "Enterprise cloud waste studies indicate significant spending inefficiencies, with organizations commonly wasting 30% or more of cloud spending on unused or underutilized resources.",
            source: "Cloud Cost Optimization Industry Analysis",
            url: "https://www.gartner.com/en/newsroom/press-releases/2024-05-20-gartner-forecasts-worldwide-public-cloud-end-user-spending-to-surpass-675-billion-in-2024"
          }
        ]} />
        
        {/* CTA Section */}
        <section style={{
          padding: '4rem 1rem',
          background: 'var(--ifm-background-surface-color)',
          borderTop: '1px solid var(--ifm-toc-border-color)',
          textAlign: 'center',
        }}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--ifm-heading-color)'}}>
              Ready for Enterprise-Scale Infrastructure?
            </h2>
            <p style={{fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--ifm-font-color-secondary)'}}>
              Join Fortune 500 companies already transforming their infrastructure
            </p>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <a
                className="button button--primary button--lg"
                href="https://outlook.office.com/owa/calendar/RediaccConsultationServices@rediacc.com/bookings/?ismsaljsauthenabled"
                target="_blank"
                rel="noopener noreferrer">
                Schedule Demo
              </a>
              <Link
                className="button button--secondary button--lg"
                to="/pricing">
                Enterprise Pricing
              </Link>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}