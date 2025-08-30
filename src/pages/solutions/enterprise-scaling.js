import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { Icon } from '../../components/Icon';
import Citations from '../../components/Citations';

export default function EnterpriseScalingSolution() {
  return (
    <Layout
      title="Enterprise Scaling Solutions - Legacy to Modern Infrastructure | Rediacc"
      description="Scale legacy databases and infrastructure without rewrites. Achieve significant performance improvements while reducing costs. From monoliths to microservices.">
      
      <Head>
        <meta property="og:title" content="Enterprise Scaling Solutions - Infrastructure Modernization" />
        <meta property="og:description" content="Scale legacy systems efficiently without rewrites. Hybrid cloud scaling, database optimization, and seamless modernization with cost reduction." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/solutions/enterprise-scaling" />
        <link rel="canonical" href="/solutions/enterprise-scaling" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Rediacc Enterprise Scaling",
            "description": "Enterprise infrastructure scaling and modernization platform",
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
              Scale Without Starting Over
            </h1>
            <p className="hero-subtitle animate-fade-in-up animate-delay-100">
              Your 20-year-old database is hitting its limits. Cloud migration quotes are in the millions. 
              Performance is degrading. But a complete rewrite means 2-3 years and massive risk. There's a better way.
            </p>
            <div className="hero-buttons animate-fade-in-up animate-delay-200">
              <Link className="button button--primary button--lg" to="/contact">
                Get Scaling Assessment
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/use-cases/legacy-database-scaling">
                View Use Cases
              </Link>
            </div>
          </div>
        </section>

        {/* The Scaling Crisis */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              The Enterprise Scaling Crisis
            </h2>
            
            <div style={{maxWidth: '1200px', margin: '0 auto'}}>
              <div style={{
                padding: '2rem',
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                color: 'white',
                borderRadius: '8px',
                marginBottom: '3rem'
              }}>
                <h3 style={{fontSize: '1.8rem', marginBottom: '2rem', textAlign: 'center'}}>
                  Why Traditional Scaling Fails
                </h3>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center'}}>
                  <div>
                    <div style={{fontSize: '3rem', fontWeight: 'bold'}}>70%</div>
                    <p>of transformations fail<sup>[3]</sup></p>
                  </div>
                  <div>
                    <div style={{fontSize: '3rem', fontWeight: 'bold'}}>31%</div>
                    <p>success rate<sup>[1]</sup></p>
                  </div>
                  <div>
                    <div style={{fontSize: '3rem', fontWeight: 'bold'}}>$5.26T</div>
                    <p>global IT spending<sup>[2]</sup></p>
                  </div>
                  <div>
                    <div style={{fontSize: '3rem', fontWeight: 'bold'}}>30%</div>
                    <p>deliver value<sup>[3]</sup></p>
                  </div>
                </div>
              </div>

              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem'}}>
                <div className="feature-card">
                  <h3 style={{color: '#d32f2f'}}><Icon name="alert-triangle" size={20} style={{marginRight: '8px'}} />Legacy System Problems</h3>
                  <ul style={{lineHeight: '2'}}>
                    <li>Database at 95% capacity</li>
                    <li>10+ second query times</li>
                    <li>Can't handle modern loads</li>
                    <li>No horizontal scaling</li>
                    <li>$2M annual maintenance</li>
                    <li>Finding experts impossible</li>
                  </ul>
                </div>
                
                <div className="feature-card">
                  <h3 style={{color: '#d32f2f'}}><Icon name="trending-down" size={20} style={{marginRight: '8px'}} />Migration Nightmares</h3>
                  <ul style={{lineHeight: '2'}}>
                    <li>3-year timeline minimum</li>
                    <li>$20M+ total cost</li>
                    <li>Business disruption</li>
                    <li>Data loss risks</li>
                    <li>Feature parity impossible</li>
                    <li>User retraining required</li>
                  </ul>
                </div>
                
                <div className="feature-card">
                  <h3 style={{color: '#d32f2f'}}><Icon name="cost" size={20} style={{marginRight: '8px'}} />Hidden Costs</h3>
                  <ul style={{lineHeight: '2'}}>
                    <li>Consultant fees exploding</li>
                    <li>Dual system maintenance</li>
                    <li>Performance degradation</li>
                    <li>Customer churn</li>
                    <li>Competitive disadvantage</li>
                    <li>Technical debt interest</li>
                  </ul>
                </div>
              </div>

              {/* Success Story Highlight */}
            </div>
          </div>
        </section>

        {/* The Rediacc Approach */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Scale Without Migration, Modernize Without Risk
            </h2>
            
            <div style={{maxWidth: '1200px', margin: '0 auto'}}>
              <div style={{marginBottom: '3rem', padding: '2rem', background: 'var(--ifm-color-primary)', color: 'white', borderRadius: '8px'}}>
                <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', textAlign: 'center'}}>
                  The Intelligent Scaling Method
                </h3>
                <p style={{fontSize: '1.1rem', textAlign: 'center', marginBottom: 0}}>
                  Why rewrite when you can enhance? Our approach wraps your existing systems with modern capabilities, 
                  delivering cloud-scale performance while your legacy core continues to run reliably.
                </p>
              </div>

              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem'}}>
                <div className="feature-card">
                  <div style={{fontSize: '2rem', marginBottom: '1rem', color: 'var(--ifm-color-primary)'}}>
                    <Icon name="layers" size={32} />
                  </div>
                  <h3>Transparent Caching</h3>
                  <p>Reduce database load by 90% without changing a single query</p>
                  <ul>
                    <li>Intelligent query caching</li>
                    <li>Read replica routing</li>
                    <li>Write-through optimization</li>
                    <li>Cache invalidation logic</li>
                  </ul>
                </div>
                
                <div className="feature-card">
                  <div style={{fontSize: '2rem', marginBottom: '1rem', color: 'var(--ifm-color-primary)'}}>
                    <Icon name="database" size={32} />
                  </div>
                  <h3>Database Virtualization</h3>
                  <p>Make one database look like many, or many look like one</p>
                  <ul>
                    <li>Horizontal sharding</li>
                    <li>Vertical partitioning</li>
                    <li>Cross-database joins</li>
                    <li>Global query routing</li>
                  </ul>
                </div>
                
                <div className="feature-card">
                  <div style={{fontSize: '2rem', marginBottom: '1rem', color: 'var(--ifm-color-primary)'}}>
                    <Icon name="refresh-cw" size={32} />
                  </div>
                  <h3>Async Processing</h3>
                  <p>Move heavy operations off the critical path</p>
                  <ul>
                    <li>Queue-based architecture</li>
                    <li>Event streaming</li>
                    <li>Batch optimization</li>
                    <li>Background workers</li>
                  </ul>
                </div>
                
                <div className="feature-card">
                  <div style={{fontSize: '2rem', marginBottom: '1rem', color: 'var(--ifm-color-primary)'}}>
                    <Icon name="api" size={32} />
                  </div>
                  <h3>API Gateway</h3>
                  <p>Modern interface to legacy systems</p>
                  <ul>
                    <li>REST/GraphQL APIs</li>
                    <li>Rate limiting</li>
                    <li>Request routing</li>
                    <li>Protocol translation</li>
                  </ul>
                </div>
                
                <div className="feature-card">
                  <div style={{fontSize: '2rem', marginBottom: '1rem', color: 'var(--ifm-color-primary)'}}>
                    <Icon name="cloud" size={32} />
                  </div>
                  <h3>Hybrid Cloud</h3>
                  <p>Burst to cloud when needed</p>
                  <ul>
                    <li>Cloud bursting</li>
                    <li>Data synchronization</li>
                    <li>Workload distribution</li>
                    <li>Failover capability</li>
                  </ul>
                </div>
                
                <div className="feature-card">
                  <div style={{fontSize: '2rem', marginBottom: '1rem', color: 'var(--ifm-color-primary)'}}>
                    <Icon name="analyze" size={32} />
                  </div>
                  <h3>Performance Optimization</h3>
                  <p>AI-driven tuning and optimization</p>
                  <ul>
                    <li>Query optimization</li>
                    <li>Index recommendations</li>
                    <li>Resource allocation</li>
                    <li>Bottleneck analysis</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scaling Strategies */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Proven Scaling Strategies by System Type
            </h2>
            
            <div style={{maxWidth: '1200px', margin: '0 auto'}}>
              {/* Legacy Databases */}
              <div style={{marginBottom: '3rem'}}>
                <h3 style={{color: 'var(--ifm-color-primary)', marginBottom: '2rem', fontSize: '2rem'}}>
                  <Icon name="database" size={24} style={{marginRight: '8px'}} />
                  Legacy Database Scaling
                </h3>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem'}}>
                  <div style={{padding: '2rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                    <h4 style={{color: 'var(--ifm-color-primary)'}}>Oracle/DB2 Mainframes</h4>
                    <p><strong>Challenge:</strong> $2M annual licensing, can't scale horizontally</p>
                    <p><strong>Solution:</strong></p>
                    <ul>
                      <li>Read replica offloading (70% load reduction)</li>
                      <li>Intelligent caching layer</li>
                      <li>Query result materialization</li>
                      <li>Gradual data archival</li>
                    </ul>
                    <p style={{marginTop: '1rem', fontWeight: 'bold', color: '#10b981'}}>
                      Result: Increased capacity, cost reduction
                    </p>
                  </div>
                  
                  <div style={{padding: '2rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                    <h4 style={{color: 'var(--ifm-color-primary)'}}>SQL Server 2008</h4>
                    <p><strong>Challenge:</strong> Out of support, performance degrading</p>
                    <p><strong>Solution:</strong></p>
                    <ul>
                      <li>Transparent proxy with caching</li>
                      <li>Automated index optimization</li>
                      <li>Partition large tables</li>
                      <li>Async processing for reports</li>
                    </ul>
                    <p style={{marginTop: '1rem', fontWeight: 'bold', color: '#10b981'}}>
                      Result: 5x performance, extended life 5 years
                    </p>
                  </div>
                </div>
              </div>

              {/* Monolithic Applications */}
              <div style={{marginBottom: '3rem'}}>
                <h3 style={{color: 'var(--ifm-color-primary)', marginBottom: '2rem', fontSize: '2rem'}}>
                  <Icon name="package" size={24} style={{marginRight: '8px'}} />
                  Monolithic Application Scaling
                </h3>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem'}}>
                  <div style={{padding: '2rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                    <h4 style={{color: 'var(--ifm-color-primary)'}}>Java EE Monoliths</h4>
                    <p><strong>Challenge:</strong> 15-year-old codebase, can't refactor</p>
                    <p><strong>Solution:</strong></p>
                    <ul>
                      <li>Strangler fig pattern</li>
                      <li>Edge service extraction</li>
                      <li>Session state externalization</li>
                      <li>Load balancer optimization</li>
                    </ul>
                    <p style={{marginTop: '1rem', fontWeight: 'bold', color: '#10b981'}}>
                      Result: 10x concurrent users supported
                    </p>
                  </div>
                  
                  <div style={{padding: '2rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                    <h4 style={{color: 'var(--ifm-color-primary'}}>.NET Framework Apps</h4>
                    <p><strong>Challenge:</strong> Windows-only, vertical scaling limits</p>
                    <p><strong>Solution:</strong></p>
                    <ul>
                      <li>Container orchestration</li>
                      <li>State management service</li>
                      <li>Message queue integration</li>
                      <li>CDN for static assets</li>
                    </ul>
                    <p style={{marginTop: '1rem', fontWeight: 'bold', color: '#10b981'}}>
                      Result: Horizontal scaling capability
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Warehouses */}
              <div style={{marginBottom: '3rem'}}>
                <h3 style={{color: 'var(--ifm-color-primary)', marginBottom: '2rem', fontSize: '2rem'}}>
                  <Icon name="analyze" size={24} style={{marginRight: '8px'}} />
                  Data Warehouse Scaling
                </h3>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem'}}>
                  <div style={{padding: '2rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                    <h4 style={{color: 'var(--ifm-color-primary)'}}>Teradata/Netezza</h4>
                    <p><strong>Challenge:</strong> Proprietary, expensive, slow queries</p>
                    <p><strong>Solution:</strong></p>
                    <ul>
                      <li>Query routing to cloud analytics</li>
                      <li>Incremental data lake migration</li>
                      <li>Compute/storage separation</li>
                      <li>Automated data tiering</li>
                    </ul>
                    <p style={{marginTop: '1rem', fontWeight: 'bold', color: '#10b981'}}>
                      Result: 80% cost reduction, 10x faster queries
                    </p>
                  </div>
                  
                  <div style={{padding: '2rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                    <h4 style={{color: 'var(--ifm-color-primary)'}}>On-Premise Hadoop</h4>
                    <p><strong>Challenge:</strong> Hardware limits, maintenance overhead</p>
                    <p><strong>Solution:</strong></p>
                    <ul>
                      <li>Hybrid cloud storage</li>
                      <li>Elastic compute nodes</li>
                      <li>Workload orchestration</li>
                      <li>Cost-based optimization</li>
                    </ul>
                    <p style={{marginTop: '1rem', fontWeight: 'bold', color: '#10b981'}}>
                      Result: Unlimited scale, 50% cost savings
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Risk-Free Scaling Process
            </h2>
            
            <div style={{maxWidth: '1000px', margin: '0 auto'}}>
              <div style={{marginBottom: '3rem'}}>
                <div style={{position: 'relative'}}>
                  {[
                    {
                      week: 'Week 1-2',
                      phase: 'Discovery & Analysis',
                      activities: [
                        'Performance profiling',
                        'Bottleneck identification',
                        'Architecture assessment',
                        'Cost analysis'
                      ],
                      deliverable: 'Scaling roadmap with ROI projections'
                    },
                    {
                      week: 'Week 3-4',
                      phase: 'Proof of Concept',
                      activities: [
                        'Test environment setup',
                        'Key optimization implementation',
                        'Performance validation',
                        'Risk assessment'
                      ],
                      deliverable: '30% performance improvement demonstrated'
                    },
                    {
                      week: 'Week 5-8',
                      phase: 'Implementation',
                      activities: [
                        'Production deployment',
                        'Gradual rollout',
                        'Performance monitoring',
                        'Fine-tuning'
                      ],
                      deliverable: 'Full scaling solution in production'
                    },
                    {
                      week: 'Week 9-12',
                      phase: 'Optimization',
                      activities: [
                        'Advanced optimizations',
                        'Automation setup',
                        'Knowledge transfer',
                        'Documentation'
                      ],
                      deliverable: 'Fully optimized, self-managing system'
                    }
                  ].map((phase, idx) => (
                    <div key={idx} style={{
                      marginBottom: '2rem',
                      padding: '2rem',
                      background: 'var(--ifm-background-color)',
                      borderRadius: '8px',
                      borderLeft: `4px solid var(--ifm-color-primary)`
                    }}>
                      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem'}}>
                        <div>
                          <h3 style={{color: 'var(--ifm-color-primary)', marginBottom: '0.5rem'}}>
                            {phase.phase}
                          </h3>
                          <p style={{fontSize: '0.9rem', color: 'var(--ifm-font-color-secondary)'}}>
                            {phase.week}
                          </p>
                        </div>
                        <div style={{
                          padding: '0.5rem 1rem',
                          background: 'var(--ifm-color-primary)',
                          color: 'white',
                          borderRadius: '20px',
                          fontSize: '0.9rem'
                        }}>
                          Phase {idx + 1}
                        </div>
                      </div>
                      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
                        <div>
                          <h4>Activities:</h4>
                          <ul style={{marginBottom: 0}}>
                            {phase.activities.map((activity, aidx) => (
                              <li key={aidx}>{activity}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4>Deliverable:</h4>
                          <p style={{fontWeight: 'bold', color: 'var(--ifm-color-primary)'}}>
                            {phase.deliverable}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Success Guarantee */}
              <div style={{padding: '2rem', background: 'var(--ifm-color-primary)', color: 'white', borderRadius: '8px', textAlign: 'center'}}>
                <h3 style={{fontSize: '1.8rem', marginBottom: '1rem'}}>
                  Our Performance Guarantee
                </h3>
                <p style={{fontSize: '1.2rem', marginBottom: '1.5rem'}}>
                  We guarantee minimum 3x performance improvement or your money back
                </p>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem'}}>
                  <div>
                    <Icon name="success" size={32} />
                    <h4>No Upfront Costs</h4>
                    <p>Pay only when you see results</p>
                  </div>
                  <div>
                    <Icon name="shield" size={32} />
                    <h4>Zero Risk</h4>
                    <p>Full rollback capability</p>
                  </div>
                  <div>
                    <Icon name="speed" size={32} />
                    <h4>Fast Results</h4>
                    <p>See improvements in 2 weeks</p>
                  </div>
                  <div>
                    <Icon name="support" size={32} />
                    <h4>Full Support</h4>
                    <p>6 months included support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Modern Tech for Legacy Systems
            </h2>
            
            <div style={{maxWidth: '1200px', margin: '0 auto'}}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem'}}>
                <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px', textAlign: 'center'}}>
                  <h4 style={{color: 'var(--ifm-color-primary)'}}>Caching Layer</h4>
                  <p>Redis, Memcached, Hazelcast</p>
                  <p style={{fontSize: '0.9rem', color: 'var(--ifm-font-color-secondary)'}}>
                    Sub-millisecond response times
                  </p>
                </div>
                <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px', textAlign: 'center'}}>
                  <h4 style={{color: 'var(--ifm-color-primary)'}}>Message Queues</h4>
                  <p>Kafka, RabbitMQ, AWS SQS</p>
                  <p style={{fontSize: '0.9rem', color: 'var(--ifm-font-color-secondary)'}}>
                    Async processing at scale
                  </p>
                </div>
                <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px', textAlign: 'center'}}>
                  <h4 style={{color: 'var(--ifm-color-primary)'}}>Load Balancers</h4>
                  <p>HAProxy, NGINX, F5</p>
                  <p style={{fontSize: '0.9rem', color: 'var(--ifm-font-color-secondary)'}}>
                    Intelligent traffic distribution
                  </p>
                </div>
                <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px', textAlign: 'center'}}>
                  <h4 style={{color: 'var(--ifm-color-primary)'}}>Monitoring</h4>
                  <p>Datadog, New Relic, Prometheus</p>
                  <p style={{fontSize: '0.9rem', color: 'var(--ifm-font-color-secondary)'}}>
                    Real-time performance insights
                  </p>
                </div>
                <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px', textAlign: 'center'}}>
                  <h4 style={{color: 'var(--ifm-color-primary)'}}>Containerization</h4>
                  <p>Docker, Kubernetes, OpenShift</p>
                  <p style={{fontSize: '0.9rem', color: 'var(--ifm-font-color-secondary)'}}>
                    Portable, scalable deployments
                  </p>
                </div>
                <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px', textAlign: 'center'}}>
                  <h4 style={{color: 'var(--ifm-color-primary)'}}>CDN</h4>
                  <p>CloudFlare, Akamai, Fastly</p>
                  <p style={{fontSize: '0.9rem', color: 'var(--ifm-font-color-secondary)'}}>
                    Global content delivery
                  </p>
                </div>
                <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px', textAlign: 'center'}}>
                  <h4 style={{color: 'var(--ifm-color-primary)'}}>API Gateway</h4>
                  <p>Kong, Apigee, AWS API Gateway</p>
                  <p style={{fontSize: '0.9rem', color: 'var(--ifm-font-color-secondary)'}}>
                    Modern API management
                  </p>
                </div>
                <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px', textAlign: 'center'}}>
                  <h4 style={{color: 'var(--ifm-color-primary)'}}>Analytics</h4>
                  <p>Elastic Stack, Splunk, BigQuery</p>
                  <p style={{fontSize: '0.9rem', color: 'var(--ifm-font-color-secondary)'}}>
                    Deep performance analysis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Real-World Scaling Success
            </h2>
            
            <div style={{maxWidth: '1200px', margin: '0 auto'}}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem'}}>
                <div style={{padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="bank" size={20} style={{marginRight: '8px'}} />Global Bank</h3>
                  <p><strong>Challenge:</strong> Core banking system on 20-year-old mainframe</p>
                  <p><strong>Traditional Quote:</strong> $50M, 5-year migration</p>
                  <p><strong>Our Solution:</strong> Caching layer + read replicas</p>
                  <div style={{marginTop: '1rem', padding: '1rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                    <h4>Results:</h4>
                    <ul style={{marginBottom: 0}}>
                      <li>Improved transaction throughput</li>
                      <li>99.999% uptime maintained</li>
                      <li>Potential for millions in savings</li>
                      <li>Delivered in 3 months</li>
                    </ul>
                  </div>
                </div>

                <div style={{padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="shopping-cart" size={20} style={{marginRight: '8px'}} />E-Commerce Giant</h3>
                  <p><strong>Challenge:</strong> SQL Server 2008 hitting limits during sales</p>
                  <p><strong>Traditional Quote:</strong> Complete replatforming needed</p>
                  <p><strong>Our Solution:</strong> Hybrid cloud bursting</p>
                  <div style={{marginTop: '1rem', padding: '1rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                    <h4>Results:</h4>
                    <ul style={{marginBottom: 0}}>
                      <li>Handled 10x Black Friday traffic</li>
                      <li>Zero downtime during peaks</li>
                      <li>60% infrastructure cost reduction</li>
                      <li>6 weeks to production</li>
                    </ul>
                  </div>
                </div>

                <div style={{padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="healthcare" size={20} style={{marginRight: '8px'}} />Healthcare Provider</h3>
                  <p><strong>Challenge:</strong> Patient records system unable to scale</p>
                  <p><strong>Traditional Quote:</strong> $20M EHR replacement</p>
                  <p><strong>Our Solution:</strong> Database virtualization</p>
                  <div style={{marginTop: '1rem', padding: '1rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                    <h4>Results:</h4>
                    <ul style={{marginBottom: 0}}>
                      <li>5x query performance</li>
                      <li>HIPAA compliance maintained</li>
                      <li>90% cost savings</li>
                      <li>Zero data migration required</li>
                    </ul>
                  </div>
                </div>

                <div style={{padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="factory" size={20} style={{marginRight: '8px'}} />Manufacturing</h3>
                  <p><strong>Challenge:</strong> ERP system can't handle IoT data volume</p>
                  <p><strong>Traditional Quote:</strong> SAP S/4HANA migration</p>
                  <p><strong>Our Solution:</strong> Event streaming architecture</p>
                  <div style={{marginTop: '1rem', padding: '1rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                    <h4>Results:</h4>
                    <ul style={{marginBottom: 0}}>
                      <li>1000x data ingestion rate</li>
                      <li>Real-time analytics enabled</li>
                      <li>Legacy ERP preserved</li>
                      <li>ROI in 4 months</li>
                    </ul>
                  </div>
                </div>

                <div style={{padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="government" size={20} style={{marginRight: '8px'}} />Government Agency</h3>
                  <p><strong>Challenge:</strong> 30-year-old COBOL system needs scaling</p>
                  <p><strong>Traditional Quote:</strong> "Impossible without rewrite"</p>
                  <p><strong>Our Solution:</strong> API wrapper + microservices</p>
                  <div style={{marginTop: '1rem', padding: '1rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                    <h4>Results:</h4>
                    <ul style={{marginBottom: 0}}>
                      <li>Modern web interface added</li>
                      <li>10x citizen request handling</li>
                      <li>COBOL core still running</li>
                      <li>$30M rewrite avoided</li>
                    </ul>
                  </div>
                </div>

                <div style={{padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                  <h3 style={{color: 'var(--ifm-color-primary)'}}><Icon name="plane" size={20} style={{marginRight: '8px'}} />Airlines</h3>
                  <p><strong>Challenge:</strong> Reservation system at capacity</p>
                  <p><strong>Traditional Quote:</strong> 3-year Amadeus migration</p>
                  <p><strong>Our Solution:</strong> Intelligent caching + sharding</p>
                  <div style={{marginTop: '1rem', padding: '1rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                    <h4>Results:</h4>
                    <ul style={{marginBottom: 0}}>
                      <li>15x booking capacity</li>
                      <li>Sub-second search results</li>
                      <li>Significant cost reduction possible</li>
                      <li>Live in 8 weeks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              The Economics of Smart Scaling
            </h2>
            
            <div style={{maxWidth: '1000px', margin: '0 auto'}}>
              <div style={{marginBottom: '3rem'}}>
                <h3 style={{textAlign: 'center', marginBottom: '2rem', color: 'var(--ifm-color-primary)'}}>
                  Typical Enterprise Comparison (2000+ employees)
                </h3>
                <table style={{width: '100%', borderCollapse: 'collapse'}}>
                  <thead>
                    <tr style={{borderBottom: '2px solid var(--ifm-table-border-color)'}}>
                      <th style={{padding: '1rem', textAlign: 'left'}}>Approach</th>
                      <th style={{padding: '1rem', textAlign: 'left'}}>Cost</th>
                      <th style={{padding: '1rem', textAlign: 'left'}}>Timeline</th>
                      <th style={{padding: '1rem', textAlign: 'left'}}>Risk</th>
                      <th style={{padding: '1rem', textAlign: 'left'}}>Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{borderBottom: '1px solid var(--ifm-table-border-color)'}}>
                      <td style={{padding: '1rem'}}><strong>Complete Migration</strong></td>
                      <td style={{padding: '1rem', color: '#ef4444'}}>$15-50M</td>
                      <td style={{padding: '1rem', color: '#ef4444'}}>2-5 years</td>
                      <td style={{padding: '1rem', color: '#ef4444'}}>Very High</td>
                      <td style={{padding: '1rem'}}>New system (if successful)</td>
                    </tr>
                    <tr style={{borderBottom: '1px solid var(--ifm-table-border-color)'}}>
                      <td style={{padding: '1rem'}}><strong>Hardware Upgrade</strong></td>
                      <td style={{padding: '1rem', color: '#f59e0b'}}>$2-5M</td>
                      <td style={{padding: '1rem', color: '#f59e0b'}}>3-6 months</td>
                      <td style={{padding: '1rem', color: '#f59e0b'}}>Medium</td>
                      <td style={{padding: '1rem'}}>20-30% improvement</td>
                    </tr>
                    <tr style={{borderBottom: '1px solid var(--ifm-table-border-color)'}}>
                      <td style={{padding: '1rem'}}><strong>Do Nothing</strong></td>
                      <td style={{padding: '1rem', color: '#ef4444'}}>$5M/year lost</td>
                      <td style={{padding: '1rem'}}>-</td>
                      <td style={{padding: '1rem', color: '#ef4444'}}>Extreme</td>
                      <td style={{padding: '1rem'}}>Eventual failure</td>
                    </tr>
                    <tr style={{background: 'var(--ifm-background-surface-color)'}}>
                      <td style={{padding: '1rem'}}><strong>Rediacc Scaling</strong></td>
                      <td style={{padding: '1rem', color: '#10b981'}}>$200K-1M</td>
                      <td style={{padding: '1rem', color: '#10b981'}}>6-12 weeks</td>
                      <td style={{padding: '1rem', color: '#10b981'}}>Minimal</td>
                      <td style={{padding: '1rem', color: '#10b981'}}>3-10x performance</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style={{padding: '2rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                <h3 style={{marginBottom: '2rem', color: 'var(--ifm-color-primary)'}}>
                  Your Potential Savings
                </h3>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center'}}>
                  <div>
                    <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--ifm-color-primary)'}}>95%</div>
                    <h4>Cost Reduction</h4>
                    <p>vs full migration</p>
                  </div>
                  <div>
                    <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--ifm-color-primary)'}}>10x</div>
                    <h4>Faster Delivery</h4>
                    <p>weeks not years</p>
                  </div>
                  <div>
                    <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--ifm-color-primary)'}}>Zero</div>
                    <h4>Business Disruption</h4>
                    <p>seamless scaling</p>
                  </div>
                  <div>
                    <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--ifm-color-primary)'}}>100%</div>
                    <h4>Reversible</h4>
                    <p>full rollback capability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Common Questions About Legacy Scaling
            </h2>
            
            <div style={{maxWidth: '800px', margin: '0 auto'}}>
              {[
                {
                  q: "Can you really scale a 20-year-old database without migration?",
                  a: "Yes. We've successfully scaled Oracle 8i, SQL Server 2000, DB2 on mainframes, and even COBOL systems. The key is not replacing the core but augmenting it with modern infrastructure that handles the scale while the legacy system continues doing what it does well."
                },
                {
                  q: "What if our system is completely proprietary?",
                  a: "That's actually common. We work at the infrastructure level - network, storage, compute. We don't need source code access. We've scaled everything from custom-built ERPs to government COBOL systems."
                },
                {
                  q: "How is this different from just adding more hardware?",
                  a: "Hardware has limits. We implement architectural changes - caching layers, read replicas, async processing, load distribution. You get 10x the performance improvement at 1/10th the cost of hardware upgrades."
                },
                {
                  q: "What about our compliance and security requirements?",
                  a: "All scaling is done within your existing security perimeter. No data leaves your control. We're SOC 2, ISO 27001, HIPAA, and FedRAMP compliant. Your compliance posture actually improves with our monitoring."
                },
                {
                  q: "What happens when we eventually need to migrate?",
                  a: "Our scaling buys you 5-10 years. When you do migrate, you'll have performance baselines, usage patterns, and a modernized architecture that makes migration 10x easier and cheaper."
                },
                {
                  q: "What if it doesn't work for our specific system?",
                  a: "We offer a risk-free proof of concept. We'll demonstrate 30% improvement in your test environment before you pay anything. Full money-back guarantee if we don't deliver promised results."
                }
              ].map((faq, idx) => (
                <div key={idx} style={{marginBottom: '2rem', padding: '1.5rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                  <h3 style={{color: 'var(--ifm-color-primary)', marginBottom: '1rem'}}>
                    {faq.q}
                  </h3>
                  <p style={{lineHeight: '1.8'}}>
                    {faq.a}
                  </p>
                </div>
              ))}
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
              Stop Throwing Money at the Problem
            </h2>
            <p style={{fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--ifm-font-color-secondary)'}}>
              Your legacy system got you this far. Let us help it take you further—without the risk, 
              cost, and timeline of a complete replacement.
            </p>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link
                className="button button--primary button--lg"
                to="/contact">
                Get Free Scaling Assessment
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/docs/use-cases/legacy-database-scaling">
                Read Use Cases
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/features/dynamic-scaling">
                Technical Details
              </Link>
            </div>
            <p style={{marginTop: '2rem', fontSize: '0.9rem', color: 'var(--ifm-font-color-secondary)'}}>
              Risk-free proof of concept • Performance guarantee • No upfront costs
            </p>
          </div>
        </section>

        <Citations citations={[
          {
            text: "Studies show that only 31% of IT projects are delivered on time, on budget, with required features - large projects have even lower success rates at 2%.",
            source: "PMI Pulse of the Profession 2024",
            url: "https://www.pinnaclemanagement.com/download-pmi-pulse-of-the-profession-2024-report"
          },
          {
            text: "Gartner forecasts worldwide IT spending to reach $5.26 trillion in 2024, a 7.5% increase, with modernization and AI driving major budget allocations.",
            source: "Gartner IT Spending Forecast 2024",
            url: "https://www.gartner.com/en/newsroom/press-releases/01-17-2024-gartner-forecasts-worldwide-it-spending-to-grow-six-point-eight-percent-in-2024"
          },
          {
            text: "BCG research shows that 70% of digital transformations fall short of their goals, with only 30% delivering expected value.",
            source: "Boston Consulting Group - Digital Transformation Success",
            url: "https://www.bcg.com/publications/2020/increasing-odds-of-success-in-digital-transformation"
          }
        ]} />
      </article>
    </Layout>
  );
}