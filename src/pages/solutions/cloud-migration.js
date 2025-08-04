import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import Citations from '../../components/Citations';
import { Icon } from '../../components/Icon';

export default function CloudMigrationSolution() {
  return (
    <Layout
      title="Cloud Migration Services - Zero-Downtime Infrastructure Migration | Rediacc"
      description="Migrate to the cloud with confidence. Zero-downtime migrations, multi-cloud support, cost optimization, and expert guidance for AWS, Azure, and Google Cloud.">
      
      <Head>
        <meta property="og:title" content="Cloud Migration Services - Infrastructure Migration Platform" />
        <meta property="og:description" content="Complete cloud migration platform with zero-downtime migrations, cost optimization, and multi-cloud support. Migrate to AWS, Azure, or Google Cloud seamlessly." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/solutions/cloud-migration" />
        <link rel="canonical" href="/solutions/cloud-migration" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Rediacc Cloud Migration",
            "description": "Cloud migration and modernization platform",
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
              Move to the Cloud Without Moving Mountains
            </h1>
            <p className="hero-subtitle animate-fade-in-up animate-delay-100">
              Zero-downtime cloud migrations with guaranteed cost savings and performance improvements
            </p>
            <div className="hero-buttons animate-fade-in-up animate-delay-200">
              <Link className="button button--primary button--lg" to="/docs/intro">
                Start Migration
              </Link>
              <Link className="button button--secondary button--lg" to="/contact">
                Get Migration Assessment
              </Link>
            </div>
          </div>
        </section>

        {/* Migration Challenges */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Why Cloud Migrations Fail (And How We Prevent It)
            </h2>
            
            <div style={{maxWidth: '1000px', margin: '0 auto', marginBottom: '3rem'}}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
                <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                  <h3 style={{color: '#d32f2f'}}><Icon name="error" size={20} style={{marginRight: '8px'}} />Common Failures</h3>
                  <ul style={{lineHeight: '2'}}>
                    <li><span style={{display: 'inline-flex', alignItems: 'center'}}><Icon name="trending-down" size={16} style={{marginRight: '8px'}} />Extended downtime during migration</span></li>
                    <li><span style={{display: 'inline-flex', alignItems: 'center'}}><Icon name="cost" size={16} style={{marginRight: '8px'}} />Organizations spend $100B+ more than projected<sup>[1]</sup></span></li>
                    <li><span style={{display: 'inline-flex', alignItems: 'center'}}><Icon name="trending-down" size={16} style={{marginRight: '8px'}} />Performance worse than on-premise</span></li>
                    <li><span style={{display: 'inline-flex', alignItems: 'center'}}><Icon name="lock-open" size={16} style={{marginRight: '8px'}} />Security vulnerabilities exposed</span></li>
                    <li><span style={{display: 'inline-flex', alignItems: 'center'}}><Icon name="alert-triangle" size={16} style={{marginRight: '8px'}} />Data loss during transfer</span></li>
                    <li><span style={{display: 'inline-flex', alignItems: 'center'}}><Icon name="x-circle" size={16} style={{marginRight: '8px'}} />Rollback impossible after issues</span></li>
                  </ul>
                </div>
                <div style={{padding: '1.5rem', background: 'var(--ifm-color-primary)', color: 'white', borderRadius: '8px'}}>
                  <h3><Icon name="success" size={20} style={{marginRight: '8px'}} />Our Approach</h3>
                  <ul style={{lineHeight: '2'}}>
                    <li><span style={{display: 'inline-flex', alignItems: 'center'}}><Icon name="speed" size={16} style={{marginRight: '8px'}} />Zero-downtime migration guaranteed</span></li>
                    <li><span style={{display: 'inline-flex', alignItems: 'center'}}><Icon name="cost" size={16} style={{marginRight: '8px'}} />Fixed-price migrations with savings</span></li>
                    <li><span style={{display: 'inline-flex', alignItems: 'center'}}><Icon name="deploy" size={16} style={{marginRight: '8px'}} />Performance baseline and optimization</span></li>
                    <li><span style={{display: 'inline-flex', alignItems: 'center'}}><Icon name="security" size={16} style={{marginRight: '8px'}} />Security-first migration process</span></li>
                    <li><span style={{display: 'inline-flex', alignItems: 'center'}}><Icon name="success" size={16} style={{marginRight: '8px'}} />Data integrity verification at every step</span></li>
                    <li><span style={{display: 'inline-flex', alignItems: 'center'}}><Icon name="rotate-ccw" size={16} style={{marginRight: '8px'}} />Instant rollback capability maintained</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{padding: '2rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px', textAlign: 'center'}}>
              <h3 style={{marginBottom: '1rem', color: 'var(--ifm-color-primary)'}}>The Real Cost of Failed Migrations</h3>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '2rem'}}>
                <div>
                  <div style={{fontSize: '2rem', fontWeight: 'bold'}}>$100B+</div>
                  <p>global migration overspend<sup>[1]</sup></p>
                </div>
                <div>
                  <div style={{fontSize: '2rem', fontWeight: 'bold'}}>38%</div>
                  <p>run behind schedule<sup>[1]</sup></p>
                </div>
                <div>
                  <div style={{fontSize: '2rem', fontWeight: 'bold'}}>60%</div>
                  <p>face cost overruns<sup>[2]</sup></p>
                </div>
                <div>
                  <div style={{fontSize: '2rem', fontWeight: 'bold'}}>3 years</div>
                  <p>$100B+ expected waste<sup>[3]</sup></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Migration Process */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Our Proven 6R Migration Framework
            </h2>
            
            <div style={{maxWidth: '1200px', margin: '0 auto'}}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '3rem'}}>
                <div className="feature-card">
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="home" size={20} style={{marginRight: '8px'}} />Rehost (Lift & Shift)</h3>
                  <p><strong>Best for:</strong> Quick migrations with minimal changes</p>
                  <ul>
                    <li>Move as-is to cloud infrastructure</li>
                    <li>Minimal application changes</li>
                    <li>Fastest migration path</li>
                    <li>Immediate cost savings</li>
                  </ul>
                </div>

                <div className="feature-card">
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="configure" size={20} style={{marginRight: '8px'}} />Replatform (Lift & Reshape)</h3>
                  <p><strong>Best for:</strong> Optimization without major changes</p>
                  <ul>
                    <li>Leverage managed services</li>
                    <li>Minor optimizations</li>
                    <li>Better performance</li>
                    <li>Reduced operational overhead</li>
                  </ul>
                </div>

                <div className="feature-card">
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="sync" size={20} style={{marginRight: '8px'}} />Refactor (Re-architect)</h3>
                  <p><strong>Best for:</strong> Cloud-native transformation</p>
                  <ul>
                    <li>Microservices architecture</li>
                    <li>Serverless computing</li>
                    <li>Maximum cloud benefits</li>
                    <li>Long-term scalability</li>
                  </ul>
                </div>

                <div className="feature-card">
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="refresh-cw" size={20} style={{marginRight: '8px'}} />Repurchase (Replace)</h3>
                  <p><strong>Best for:</strong> Moving to SaaS solutions</p>
                  <ul>
                    <li>Replace with cloud services</li>
                    <li>Eliminate maintenance</li>
                    <li>Instant modernization</li>
                    <li>Reduced complexity</li>
                  </ul>
                </div>

                <div className="feature-card">
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="database" size={20} style={{marginRight: '8px'}} />Retain (Hybrid)</h3>
                  <p><strong>Best for:</strong> Compliance or latency requirements</p>
                  <ul>
                    <li>Keep critical systems on-premise</li>
                    <li>Hybrid cloud architecture</li>
                    <li>Phased migration approach</li>
                    <li>Risk mitigation</li>
                  </ul>
                </div>

                <div className="feature-card">
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="trash-2" size={20} style={{marginRight: '8px'}} />Retire (Decommission)</h3>
                  <p><strong>Best for:</strong> Legacy system cleanup</p>
                  <ul>
                    <li>Identify unused resources</li>
                    <li>Eliminate technical debt</li>
                    <li>Reduce complexity</li>
                    <li>Cost optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Migration Steps */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Zero-Downtime Migration Process
            </h2>
            
            <div style={{maxWidth: '1000px', margin: '0 auto'}}>
              <div style={{position: 'relative', padding: '2rem 0'}}>
                {[
                  {phase: 'Discovery', icon: 'search', duration: '1-2 weeks', tasks: ['Infrastructure assessment', 'Dependency mapping', 'Cost analysis', 'Risk evaluation']},
                  {phase: 'Planning', icon: 'clipboard', duration: '2-3 weeks', tasks: ['Migration strategy', 'Architecture design', 'Timeline creation', 'Team preparation']},
                  {phase: 'Preparation', icon: 'configure', duration: '2-4 weeks', tasks: ['Environment setup', 'Tool configuration', 'Security hardening', 'Testing procedures']},
                  {phase: 'Migration', icon: 'deploy', duration: '1-8 weeks', tasks: ['Data replication', 'Application migration', 'Continuous sync', 'Validation testing']},
                  {phase: 'Optimization', icon: 'speed', duration: 'Ongoing', tasks: ['Performance tuning', 'Cost optimization', 'Auto-scaling setup', 'Monitoring configuration']}
                ].map((phase, idx) => (
                  <div key={idx} style={{marginBottom: '2rem', display: 'flex', gap: '2rem', alignItems: 'flex-start'}}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'var(--ifm-color-primary)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      flexShrink: 0
                    }}>
                      <Icon name={phase.icon} size={24} />
                    </div>
                    <div style={{flex: 1}}>
                      <h3 style={{marginBottom: '0.5rem'}}>
                        Phase {idx + 1}: {phase.phase} 
                        <span style={{fontSize: '0.9rem', color: 'var(--ifm-font-color-secondary)', marginLeft: '1rem'}}>
                          ({phase.duration})
                        </span>
                      </h3>
                      <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                        {phase.tasks.map((task, tidx) => (
                          <span key={tidx} style={{
                            padding: '0.25rem 0.75rem',
                            background: 'var(--ifm-background-surface-color)',
                            borderRadius: '15px',
                            fontSize: '0.9rem'
                          }}>
                            {task}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Platforms */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Multi-Cloud Expertise
            </h2>
            
            <div style={{maxWidth: '1200px', margin: '0 auto'}}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '3rem'}}>
                <div style={{padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                  <h3 style={{color: '#FF9900'}}><Icon name="cloud" size={20} style={{marginRight: '8px'}} />Amazon Web Services</h3>
                  <ul style={{lineHeight: '2'}}>
                    <li>EC2, RDS, S3 migration expertise</li>
                    <li>AWS Migration Hub integration</li>
                    <li>Cost optimization with Reserved Instances</li>
                    <li>AWS Well-Architected Framework</li>
                    <li>Direct Connect setup</li>
                  </ul>
                </div>

                <div style={{padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                  <h3 style={{color: '#0078D4'}}><Icon name="cloud" size={20} style={{marginRight: '8px'}} />Microsoft Azure</h3>
                  <ul style={{lineHeight: '2'}}>
                    <li>Azure Migrate tooling</li>
                    <li>Hybrid cloud with Azure Arc</li>
                    <li>Azure Cost Management</li>
                    <li>Enterprise Agreement optimization</li>
                    <li>ExpressRoute connectivity</li>
                  </ul>
                </div>

                <div style={{padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                  <h3 style={{color: '#4285F4'}}><Icon name="cloud" size={20} style={{marginRight: '8px'}} />Google Cloud Platform</h3>
                  <ul style={{lineHeight: '2'}}>
                    <li>Migrate for Compute Engine</li>
                    <li>BigQuery data warehouse migration</li>
                    <li>Anthos hybrid platform</li>
                    <li>Committed use discounts</li>
                    <li>Cloud Interconnect setup</li>
                  </ul>
                </div>
              </div>

              <div style={{padding: '2rem', background: 'var(--ifm-color-primary)', color: 'white', borderRadius: '8px', textAlign: 'center'}}>
                <h3 style={{marginBottom: '1rem'}}>Multi-Cloud Strategy Benefits</h3>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '2rem'}}>
                  <div>
                    <div style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}><Icon name="locked" size={24} /></div>
                    <strong>No Vendor Lock-in</strong>
                  </div>
                  <div>
                    <div style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}><Icon name="cost" size={24} /></div>
                    <strong>Cost Arbitrage</strong>
                  </div>
                  <div>
                    <div style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}><Icon name="globe" size={24} /></div>
                    <strong>Global Reach</strong>
                  </div>
                  <div>
                    <div style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}><Icon name="security" size={24} /></div>
                    <strong>Risk Mitigation</strong>
                  </div>
                  <div>
                    <div style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}><Icon name="speed" size={24} /></div>
                    <strong>Best-of-Breed Services</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Optimization */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Guaranteed Cost Savings
            </h2>
            
            <div style={{maxWidth: '1000px', margin: '0 auto'}}>
              <div style={{marginBottom: '3rem', padding: '2rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                <h3 style={{color: 'var(--ifm-color-primary)', textAlign: 'center', marginBottom: '2rem'}}>
                  Average Customer Savings
                </h3>
                <div style={{fontSize: '3rem', fontWeight: 'bold', textAlign: 'center', color: 'var(--ifm-color-primary)'}}>
                  47% Lower Costs
                </div>
                <p style={{textAlign: 'center', marginTop: '1rem'}}>
                  compared to on-premise infrastructure
                </p>
              </div>

              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem'}}>
                <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                  <h4><Icon name="cost" size={20} style={{marginRight: '8px'}} />Right-Sizing</h4>
                  <p>Eliminate over-provisioned resources and save 30-50% immediately</p>
                </div>
                <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                  <h4><Icon name="analyze" size={20} style={{marginRight: '8px'}} />Reserved Capacity</h4>
                  <p>Leverage committed use discounts for 40-70% savings</p>
                </div>
                <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                  <h4><Icon name="clock" size={20} style={{marginRight: '8px'}} />Auto-Scaling</h4>
                  <p>Pay only for what you use with intelligent scaling</p>
                </div>
                <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                  <h4><Icon name="moon" size={20} style={{marginRight: '8px'}} />Spot Instances</h4>
                  <p>Use spot/preemptible instances for 60-90% discounts</p>
                </div>
                <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                  <h4><Icon name="database" size={20} style={{marginRight: '8px'}} />Storage Tiering</h4>
                  <p>Automatic data lifecycle management reduces storage costs</p>
                </div>
                <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                  <h4><Icon name="search" size={20} style={{marginRight: '8px'}} />Continuous Optimization</h4>
                  <p>AI-driven recommendations for ongoing savings</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Migration Success Stories
            </h2>
            
            <div style={{maxWidth: '1200px', margin: '0 auto'}}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem'}}>
                <div style={{padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="ecommerce" size={20} style={{marginRight: '8px'}} />E-Commerce Giant</h3>
                  <p><strong>Challenge:</strong> 500+ servers, 24/7 operations, no downtime allowed</p>
                  <p><strong>Solution:</strong> Phased migration with real-time replication</p>
                  <p><strong>Results:</strong></p>
                  <ul>
                    <li>Zero downtime achieved</li>
                    <li>60% cost reduction</li>
                    <li>3x performance improvement</li>
                    <li>Completed in 8 weeks</li>
                  </ul>
                </div>

                <div style={{padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="finance" size={20} style={{marginRight: '8px'}} />Financial Services</h3>
                  <p><strong>Challenge:</strong> Strict compliance, sensitive data, legacy systems</p>
                  <p><strong>Solution:</strong> Hybrid cloud with encrypted migration</p>
                  <p><strong>Results:</strong></p>
                  <ul>
                    <li>Full regulatory compliance</li>
                    <li>45% operational savings</li>
                    <li>Improved disaster recovery</li>
                    <li>Zero data loss</li>
                  </ul>
                </div>

                <div style={{padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="healthcare" size={20} style={{marginRight: '8px'}} />Healthcare Provider</h3>
                  <p><strong>Challenge:</strong> HIPAA compliance, 50TB of patient data</p>
                  <p><strong>Solution:</strong> Secure migration with continuous validation</p>
                  <p><strong>Results:</strong></p>
                  <ul>
                    <li>HIPAA compliant throughout</li>
                    <li>70% faster data access</li>
                    <li>50% cost reduction</li>
                    <li>Enhanced security posture</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Migration Readiness */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Are You Ready for Cloud Migration?
            </h2>
            
            <div style={{maxWidth: '800px', margin: '0 auto'}}>
              <div style={{padding: '2rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                <h3 style={{marginBottom: '1.5rem'}}>Quick Readiness Check:</h3>
                <ul style={{lineHeight: '2.5', fontSize: '1.1rem'}}>
                  <li><Icon name="check-square" size={16} style={{marginRight: '8px'}} />Current infrastructure costs exceeding budget?</li>
                  <li><Icon name="check-square" size={16} style={{marginRight: '8px'}} />Struggling with scalability during peak times?</li>
                  <li><Icon name="check-square" size={16} style={{marginRight: '8px'}} />Hardware refresh cycle approaching?</li>
                  <li><Icon name="check-square" size={16} style={{marginRight: '8px'}} />Need better disaster recovery capabilities?</li>
                  <li><Icon name="check-square" size={16} style={{marginRight: '8px'}} />Want to accelerate innovation and deployment?</li>
                  <li><Icon name="check-square" size={16} style={{marginRight: '8px'}} />Looking to reduce operational overhead?</li>
                  <li><Icon name="check-square" size={16} style={{marginRight: '8px'}} />Need global presence without data centers?</li>
                </ul>
                <div style={{marginTop: '2rem', padding: '1rem', background: 'var(--ifm-color-primary)', color: 'white', borderRadius: '8px', textAlign: 'center'}}>
                  <p style={{fontSize: '1.1rem', marginBottom: '1rem'}}>
                    If you checked any of these, you're ready for cloud migration!
                  </p>
                  <Link
                    className="button button--secondary button--lg"
                    to="/contact"
                    style={{color: 'var(--ifm-color-primary)'}}>
                    Get Free Migration Assessment
                  </Link>
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
              Start Your Cloud Journey Today
            </h2>
            <p style={{fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--ifm-font-color-secondary)'}}>
              Free migration assessment • Fixed pricing • Zero downtime guaranteed
            </p>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link
                className="button button--primary button--lg"
                to="/contact">
                Get Migration Assessment
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                Migration Guide
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/pricing">
                See Pricing
              </Link>
            </div>
          </div>
        </section>
        
        <Citations citations={[
          {
            text: "McKinsey research shows organizations globally spend over $100 billion more on their cloud migrations than their initial cost projections, with 38% of projects running over anticipated time",
            source: "McKinsey - Cloud migration opportunity: Business value grows, but missteps abound",
            url: "https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/cloud-migration-opportunity-business-value-grows-but-missteps-abound"
          },
          {
            text: "Gartner predicts that through 2024, 60% of infrastructure and operations leaders will encounter public cloud cost overruns that negatively impact their on-premises budgets",
            source: "Gartner - 6 Ways Cloud Migration Costs Go Off the Rails",
            url: "https://www.gartner.com/smarterwithgartner/6-ways-cloud-migration-costs-go-off-the-rails"
          },
          {
            text: "McKinsey analysis indicates approximately $100 billion of wasted migration spend is expected over the next three years, with most enterprises citing costs around migration as a major inhibitor to adopting the cloud",
            source: "McKinsey Technology Trends Outlook 2024",
            url: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-top-trends-in-tech-2024"
          }
        ]} />
      </article>
    </Layout>
  );
}