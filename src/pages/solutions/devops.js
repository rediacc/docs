import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import Citations from '../../components/Citations';
import { Icon } from '../../components/Icon';

export default function DevOpsSolution() {
  return (
    <Layout
      title="DevOps Infrastructure Automation - CI/CD Pipeline Integration | Rediacc"
      description="Seamlessly integrate infrastructure automation into your DevOps workflows. Automate deployments, testing, rollbacks, and monitoring across your CI/CD pipeline.">
      
      <Head>
        <meta property="og:title" content="DevOps Infrastructure Automation Platform" />
        <meta property="og:description" content="Complete DevOps automation for infrastructure. Integrate with CI/CD pipelines, automate deployments, and achieve continuous delivery at scale." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/solutions/devops" />
        <link rel="canonical" href="/solutions/devops" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Rediacc DevOps Solution",
            "description": "DevOps infrastructure automation platform",
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
              DevOps Without the Infrastructure Headaches
            </h1>
            <p className="hero-subtitle animate-fade-in-up animate-delay-100">
              Automate your entire infrastructure lifecycle from code commit to production deployment
            </p>
            <div className="hero-buttons animate-fade-in-up animate-delay-200">
              <Link className="button button--primary button--lg" to="/console/login?register=quick">
                Start Automating
              </Link>
              <a 
                className="button button--secondary button--lg" 
                href="https://outlook.office.com/owa/calendar/RediaccConsultationServices@rediacc.com/bookings/?ismsaljsauthenabled"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </section>

        {/* DevOps Challenges */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Modern DevOps Challenges We Solve
            </h2>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto'}}>
              <div className="feature-card">
                <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="refresh-cw" size={20} style={{marginRight: '8px'}} />Environment Drift</h3>
                <p>Dev works, staging works, production fails. Sound familiar? We ensure perfect environment parity.</p>
              </div>
              <div className="feature-card">
                <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="clock" size={20} style={{marginRight: '8px'}} />Slow Deployments</h3>
                <p>Waiting hours for deployments kills productivity. Deploy in seconds, not hours.</p>
              </div>
              <div className="feature-card">
                <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="alert-triangle" size={20} style={{marginRight: '8px'}} />Rollback Nightmares</h3>
                <p>When things go wrong, every second counts. Instant rollbacks save the day.</p>
              </div>
              <div className="feature-card">
                <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="analyze" size={20} style={{marginRight: '8px'}} />Limited Visibility</h3>
                <p>Can't see what's happening in your pipeline? Get complete observability across all stages.</p>
              </div>
              <div className="feature-card">
                <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="configure" size={20} style={{marginRight: '8px'}} />Manual Processes</h3>
                <p>Still SSHing into servers? Automate everything from provisioning to patching.</p>
              </div>
              <div className="feature-card">
                <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="cost" size={20} style={{marginRight: '8px'}} />Resource Waste</h3>
                <p>Idle resources burning money? Auto-scale up and down based on actual demand.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CI/CD Integration */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Seamless CI/CD Pipeline Integration
            </h2>
            
            <div style={{maxWidth: '1200px', margin: '0 auto'}}>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', marginBottom: '3rem'}}>
                <div>
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="deploy" size={20} style={{marginRight: '8px'}} />Build Stage</h3>
                  <ul style={{lineHeight: '2'}}>
                    <li>Automatic environment provisioning</li>
                    <li>Dependency caching and optimization</li>
                    <li>Parallel build execution</li>
                    <li>Container image creation</li>
                    <li>Security scanning integration</li>
                  </ul>
                </div>
                <div style={{padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                  <pre style={{margin: 0, fontSize: '0.9rem'}}>
{`# .rediacc/pipeline.yml
build:
  trigger: [push, pull_request]
  environment: auto-provision
  steps:
    - npm install
    - npm run build
    - npm test
    - rediacc snapshot create`}
                  </pre>
                </div>
              </div>

              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', marginBottom: '3rem'}}>
                <div style={{padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                  <pre style={{margin: 0, fontSize: '0.9rem'}}>
{`# Automatic test environment
test:
  environment: 
    clone-from: production
    scale: 50%
  steps:
    - rediacc deploy staging
    - run integration-tests
    - run performance-tests
    - rediacc validate`}
                  </pre>
                </div>
                <div>
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="test-tube" size={20} style={{marginRight: '8px'}} />Test Stage</h3>
                  <ul style={{lineHeight: '2'}}>
                    <li>Instant test environment creation</li>
                    <li>Production data anonymization</li>
                    <li>Automated testing suites</li>
                    <li>Performance benchmarking</li>
                    <li>Automatic cleanup after tests</li>
                  </ul>
                </div>
              </div>

              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center'}}>
                <div>
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="target" size={20} style={{marginRight: '8px'}} />Deploy Stage</h3>
                  <ul style={{lineHeight: '2'}}>
                    <li>Blue-green deployments</li>
                    <li>Canary releases with auto-rollback</li>
                    <li>Zero-downtime deployments</li>
                    <li>Automatic health checks</li>
                    <li>Instant rollback capability</li>
                  </ul>
                </div>
                <div style={{padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                  <pre style={{margin: 0, fontSize: '0.9rem'}}>
{`# Zero-downtime deployment
deploy:
  strategy: blue-green
  steps:
    - rediacc deploy production
    - health-check wait=5m
    - traffic shift=10%
    - monitor duration=10m
    - traffic shift=100%`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GitOps Features */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              GitOps-Ready Infrastructure
            </h2>
            
            <div style={{maxWidth: '1000px', margin: '0 auto'}}>
              <div style={{marginBottom: '3rem'}}>
                <h3 style={{color: 'var(--ifm-color-primary)', marginBottom: '1.5rem'}}>
                  Infrastructure as Code (IaC)
                </h3>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem'}}>
                  <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                    <h4>Version Control Everything</h4>
                    <ul>
                      <li>Infrastructure configurations</li>
                      <li>Environment variables</li>
                      <li>Deployment scripts</li>
                      <li>Security policies</li>
                    </ul>
                  </div>
                  <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                    <h4>Declarative Management</h4>
                    <ul>
                      <li>Define desired state</li>
                      <li>Automatic reconciliation</li>
                      <li>Drift detection</li>
                      <li>Self-healing infrastructure</li>
                    </ul>
                  </div>
                  <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                    <h4>Pull Request Workflows</h4>
                    <ul>
                      <li>Infrastructure changes via PR</li>
                      <li>Automated validation</li>
                      <li>Cost impact analysis</li>
                      <li>Approval workflows</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div style={{padding: '2rem', background: 'var(--ifm-color-primary)', color: 'white', borderRadius: '8px'}}>
                <h3 style={{marginBottom: '1.5rem'}}>GitOps Workflow Example</h3>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem'}}>
                  <div style={{textAlign: 'center', flex: 1}}>
                    <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}><Icon name="file-text" size={24} /></div>
                    <strong>1. Commit</strong>
                    <div style={{fontSize: '0.9rem'}}>Push infrastructure changes</div>
                  </div>
                  <div style={{fontSize: '1.5rem'}}>→</div>
                  <div style={{textAlign: 'center', flex: 1}}>
                    <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}><Icon name="search" size={24} /></div>
                    <strong>2. Review</strong>
                    <div style={{fontSize: '0.9rem'}}>Automated PR validation</div>
                  </div>
                  <div style={{fontSize: '1.5rem'}}>→</div>
                  <div style={{textAlign: 'center', flex: 1}}>
                    <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}><Icon name="success" size={24} /></div>
                    <strong>3. Merge</strong>
                    <div style={{fontSize: '0.9rem'}}>Approved changes merged</div>
                  </div>
                  <div style={{fontSize: '1.5rem'}}>→</div>
                  <div style={{textAlign: 'center', flex: 1}}>
                    <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}><Icon name="deploy" size={24} /></div>
                    <strong>4. Deploy</strong>
                    <div style={{fontSize: '0.9rem'}}>Automatic deployment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Monitoring & Observability */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Complete Pipeline Observability
            </h2>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto'}}>
              <div className="feature-card">
                <h3><Icon name="analyze" size={20} style={{marginRight: '8px'}} />Real-Time Metrics</h3>
                <ul>
                  <li>Deployment frequency</li>
                  <li>Lead time for changes</li>
                  <li>Mean time to recovery</li>
                  <li>Change failure rate</li>
                  <li>Custom KPI tracking</li>
                </ul>
              </div>
              
              <div className="feature-card">
                <h3><Icon name="bell" size={20} style={{marginRight: '8px'}} />Smart Alerting</h3>
                <ul>
                  <li>Deployment status notifications</li>
                  <li>Performance degradation alerts</li>
                  <li>Cost threshold warnings</li>
                  <li>Security vulnerability detection</li>
                  <li>Compliance violation alerts</li>
                </ul>
              </div>
              
              <div className="feature-card">
                <h3><Icon name="trending-up" size={20} style={{marginRight: '8px'}} />Pipeline Analytics</h3>
                <ul>
                  <li>Build time optimization</li>
                  <li>Test coverage tracking</li>
                  <li>Bottleneck identification</li>
                  <li>Resource utilization</li>
                  <li>Team productivity metrics</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tool Integrations */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Works With Your Favorite Tools
            </h2>
            
            <div style={{maxWidth: '1200px', margin: '0 auto'}}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '3rem'}}>
                <div style={{textAlign: 'center'}}>
                  <h4>CI/CD Platforms</h4>
                  <p>Jenkins, GitLab CI, GitHub Actions, CircleCI, Travis CI</p>
                </div>
                <div style={{textAlign: 'center'}}>
                  <h4>Container Orchestration</h4>
                  <p>Kubernetes, Docker Swarm, OpenShift, EKS, GKE</p>
                </div>
                <div style={{textAlign: 'center'}}>
                  <h4>Configuration Management</h4>
                  <p>Ansible, Terraform, Puppet, Chef, SaltStack</p>
                </div>
                <div style={{textAlign: 'center'}}>
                  <h4>Monitoring Tools</h4>
                  <p>Prometheus, Grafana, DataDog, New Relic, Splunk</p>
                </div>
                <div style={{textAlign: 'center'}}>
                  <h4>Version Control</h4>
                  <p>GitHub, GitLab, Bitbucket, Azure DevOps</p>
                </div>
                <div style={{textAlign: 'center'}}>
                  <h4>Cloud Platforms</h4>
                  <p>AWS, Azure, Google Cloud, DigitalOcean</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              DevOps Success Metrics
            </h2>
            
            <div style={{marginBottom: '2rem', textAlign: 'center', fontSize: '1.1rem', color: 'var(--ifm-font-color-secondary)'}}>
              Elite DevOps performers (19% of teams) deploy multiple times per day with recovery times under 1 hour<sup>[1]</sup>
            </div>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto', textAlign: 'center'}}>
              <div>
                <div style={{fontSize: '3rem', color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>973x</div>
                <h4>Elite Performance<sup>[1]</sup></h4>
                <p>Elite vs low performer deployment frequency</p>
              </div>
              <div>
                <div style={{fontSize: '3rem', color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>&lt;1hr</div>
                <h4>Recovery Time<sup>[1]</sup></h4>
                <p>Elite performers' service recovery time</p>
              </div>
              <div>
                <div style={{fontSize: '3rem', color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>&lt;5%</div>
                <h4>Change Failure Rate<sup>[1]</sup></h4>
                <p>Elite teams' deployment failure rate</p>
              </div>
              <div>
                <div style={{fontSize: '3rem', color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>19%</div>
                <h4>Elite Teams<sup>[1]</sup></h4>
                <p>Organizations achieving elite performance</p>
              </div>
            </div>

            <div style={{marginTop: '3rem', padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px', maxWidth: '800px', margin: '3rem auto 0'}}>
              <blockquote style={{fontSize: '1.2rem', fontStyle: 'italic', margin: 0}}>
                "Rediacc transformed our deployment process. What used to take 4 hours now takes 15 minutes, 
                and we haven't had a deployment failure in 6 months. Our developers can focus on building 
                features instead of fighting infrastructure."
              </blockquote>
              <p style={{marginTop: '1rem', fontWeight: 'bold'}}>
                — Sarah Chen, VP of Engineering at TechCorp
              </p>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              DevOps Best Practices Built-In
            </h2>
            
            <div style={{maxWidth: '1000px', margin: '0 auto'}}>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
                <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="success" size={20} style={{marginRight: '8px'}} />Do's</h3>
                  <ul style={{lineHeight: '2'}}>
                    <li>Automate everything possible</li>
                    <li>Version control all configurations</li>
                    <li>Test in production-like environments</li>
                    <li>Monitor everything, alert smartly</li>
                    <li>Practice continuous improvement</li>
                    <li>Document your processes</li>
                  </ul>
                </div>
                <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="error" size={20} style={{marginRight: '8px'}} />Don'ts (We Prevent)</h3>
                  <ul style={{lineHeight: '2'}}>
                    <li>Manual production changes</li>
                    <li>Snowflake servers</li>
                    <li>Configuration drift</li>
                    <li>Untested deployments</li>
                    <li>Missing rollback plans</li>
                    <li>Security as afterthought</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Citations citations={[
          {
            text: "DORA State of DevOps Report 2024: Only 19% of teams achieved elite performance status. Historical DORA research (2021) found elite performers deploy 973x more frequently than low performers with recovery times under 1 hour and change failure rates under 5%.",
            source: "DORA State of DevOps Report 2024",
            url: "https://cloud.google.com/devops/state-of-devops"
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
              Ready to Supercharge Your DevOps?
            </h2>
            <p style={{fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--ifm-font-color-secondary)'}}>
              Join thousands of teams deploying faster and safer with Rediacc
            </p>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link
                className="button button--primary button--lg"
                to="/console/login?register=quick"
                target="_blank">
                Play on Sandbox
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/contact">
                Talk to DevOps Expert
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/console/login?register=manual">
                Read Documentation
              </Link>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}