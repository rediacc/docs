import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';

export default function Transparency() {
  return (
    <Layout
      title="Transparency & Startup Status | Rediacc"
      description="Full transparency about our startup journey, development status, and what you can expect as an early adopter.">
      <Head>
        <meta property="og:title" content="Our Startup Journey - Full Transparency | Rediacc" />
        <meta property="og:description" content="We believe in radical transparency. Learn about our current status, development roadmap, and how you can join us as an early adopter." />
        <link rel="canonical" href="/transparency" />
      </Head>

      <article>
        {/* Hero Section */}
        <section style={{
          padding: '4rem 1rem',
          background: 'linear-gradient(135deg, var(--ifm-color-primary-dark), var(--ifm-color-primary))',
          color: 'white',
          textAlign: 'center'
        }}>
          <div className="container">
            <h1 style={{fontSize: '3rem', marginBottom: '1rem'}}>
              Full Transparency
            </h1>
            <p style={{fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto'}}>
              We're building something special, and we believe honesty is the foundation of trust.
              Here's exactly where we are in our journey.
            </p>
          </div>
        </section>

        {/* Current Status */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container" style={{maxWidth: '900px', margin: '0 auto'}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Where We Are Today
            </h2>
            
            <div style={{
              padding: '2rem',
              background: 'var(--ifm-background-surface-color)',
              borderRadius: '12px',
              marginBottom: '2rem'
            }}>
              <h3 style={{color: 'var(--ifm-color-primary)', marginBottom: '1rem'}}>
                🌱 Early-Stage Startup
              </h3>
              <ul style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
                <li><strong>Founded:</strong> 2024 (evolved from original concept)</li>
                <li><strong>Current Stage:</strong> Early access launched, cloud environment active</li>
                <li><strong>Team Size:</strong> Small founding team</li>
                <li><strong>Customers:</strong> Early access users testing the platform</li>
                <li><strong>Funding:</strong> Bootstrapped</li>
              </ul>
            </div>

            <div style={{
              padding: '2rem',
              background: 'var(--ifm-background-surface-color)',
              borderRadius: '12px',
              marginBottom: '2rem'
            }}>
              <h3 style={{color: 'var(--ifm-color-primary)', marginBottom: '1rem'}}>
                🔧 Development Status
              </h3>
              <ul style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
                <li><strong>Core Architecture:</strong> ✅ Completed</li>
                <li><strong>Web Application:</strong> ✅ Completed with automated tests</li>
                <li><strong>Desktop Application:</strong> ✅ Completed with automated tests</li>
                <li><strong>Backend Services:</strong> ✅ Completed with automated tests</li>
                <li><strong>Cloud Environment:</strong> ✅ Early access launched and operational</li>
                <li><strong>AI Integration:</strong> 📅 Planned for Q1 2026</li>
                <li><strong>Advanced CLI Features:</strong> 📅 Planned for Q1-Q2 2026</li>
                <li><strong>Documentation:</strong> ✅ Continuously improving</li>
              </ul>
            </div>

            <div style={{
              padding: '2rem',
              background: 'var(--ifm-background-surface-color)',
              borderRadius: '12px'
            }}>
              <h3 style={{color: 'var(--ifm-color-primary)', marginBottom: '1rem'}}>
                📊 Marketing Claims Context
              </h3>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem'}}>
                All performance metrics and results shown on our website are:
              </p>
              <ul style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
                <li>Based on theoretical system capabilities</li>
                <li>Derived from industry research (DORA, ITIC, etc.)</li>
                <li>Projected outcomes from our architecture design</li>
                <li>Hypothetical use cases to demonstrate potential</li>
                <li>Subject to variation based on implementation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What This Means */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container" style={{maxWidth: '900px', margin: '0 auto'}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              What This Means For You
            </h2>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem'}}>
              <div style={{
                padding: '1.5rem',
                background: 'var(--ifm-background-color)',
                borderRadius: '8px',
                border: '2px solid var(--ifm-color-success)'
              }}>
                <h3 style={{color: 'var(--ifm-color-success)'}}>
                  The Opportunities
                </h3>
                <ul>
                  <li>Join as a founding member</li>
                  <li>Shape product development</li>
                  <li>Lock in early-adopter pricing</li>
                  <li>Direct access to founders</li>
                  <li>Priority feature requests</li>
                </ul>
              </div>

              <div style={{
                padding: '1.5rem',
                background: 'var(--ifm-background-color)',
                borderRadius: '8px',
                border: '2px solid var(--ifm-color-warning)'
              }}>
                <h3 style={{color: 'var(--ifm-color-warning)'}}>
                  The Risks
                </h3>
                <ul>
                  <li>Features still in development</li>
                  <li>Potential bugs and issues</li>
                  <li>Limited support initially</li>
                  <li>Roadmap may change</li>
                  <li>Startup uncertainty</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container" style={{maxWidth: '900px', margin: '0 auto'}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Our Commitment to You
            </h2>
            
            <div style={{
              padding: '2rem',
              background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
              borderRadius: '12px',
              border: '1px solid #86efac'
            }}>
              <h3 style={{marginBottom: '1.5rem'}}>We Promise To:</h3>
              <ul style={{fontSize: '1.1rem', lineHeight: '2'}}>
                <li>Be transparent about our progress and challenges</li>
                <li>Communicate openly about feature availability</li>
                <li>Provide regular updates on development</li>
                <li>Listen to and act on early adopter feedback</li>
                <li>Honor early-adopter pricing for life</li>
                <li>Build the product you actually need</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container" style={{maxWidth: '900px', margin: '0 auto'}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Development Roadmap
            </h2>
            
            <div style={{position: 'relative'}}>
              {/* Q1 2025 - Completed */}
              <div style={{marginBottom: '2rem'}}>
                <h3 style={{color: 'var(--ifm-color-primary)'}}>Q1 2025 - Core Development ✅</h3>
                <ul>
                  <li>✅ Core architecture implementation</li>
                  <li>✅ Web application development</li>
                  <li>✅ Desktop application development</li>
                  <li>✅ Backend services setup</li>
                </ul>
              </div>

              {/* Q2 2025 - Completed */}
              <div style={{marginBottom: '2rem'}}>
                <h3 style={{color: 'var(--ifm-color-primary)'}}>Q2 2025 - Testing & Automation ✅</h3>
                <ul>
                  <li>✅ Automated testing suite</li>
                  <li>✅ CI/CD pipeline setup</li>
                  <li>✅ Security hardening</li>
                  <li>✅ Performance optimization</li>
                </ul>
              </div>

              {/* Q3-Q4 2025 - Current */}
              <div style={{marginBottom: '2rem'}}>
                <h3 style={{color: 'var(--ifm-color-primary)'}}>Q3-Q4 2025 - Early Access (Current) 🔄</h3>
                <ul>
                  <li>✅ Rediacc cloud environment deployed</li>
                  <li>✅ Early access program launched</li>
                  <li>🔄 Gathering user feedback</li>
                  <li>🔄 Iterating based on user feedback</li>
                </ul>
              </div>

              {/* Q1 2026 */}
              <div style={{marginBottom: '2rem'}}>
                <h3 style={{color: 'var(--ifm-color-primary)'}}>Q1 2026 - AI & Scale 📅</h3>
                <ul>
                  <li>📅 AI integration (MCP protocol)</li>
                  <li>📅 Advanced disaster recovery</li>
                  <li>📅 Multi-region deployment</li>
                  <li>📅 Public launch</li>
                </ul>
              </div>

              {/* Q2 2026 */}
              <div style={{marginBottom: '2rem'}}>
                <h3 style={{color: 'var(--ifm-color-primary)'}}>Q2 2026 - Full Platform 📅</h3>
                <ul>
                  <li>📅 Enhanced CLI capabilities</li>
                  <li>📅 Enterprise features</li>
                  <li>📅 24/7 support launch</li>
                  <li>📅 General availability</li>
                </ul>
              </div>
            </div>

            <p style={{
              textAlign: 'center',
              fontStyle: 'italic',
              marginTop: '2rem',
              padding: '1rem',
              background: 'var(--ifm-background-color)',
              borderRadius: '8px'
            }}>
              * Roadmap subject to change based on user feedback and technical discoveries
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container" style={{maxWidth: '900px', margin: '0 auto'}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Honest Answers to Tough Questions
            </h2>
            
            <div style={{marginBottom: '2rem'}}>
              <h3>Q: Do you have any customers?</h3>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
                <strong>A:</strong> We have early access users currently testing the platform. We're in active early access phase, 
                gathering feedback and improving the platform before our general availability launch.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3>Q: Are all features ready?</h3>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
                <strong>A:</strong> Most core features are complete. Web, desktop, and backend applications are 
                ready with automated tests. Our cloud environment is live with early access users. AI integration planned for 2026.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3>Q: How accurate are your performance claims?</h3>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
                <strong>A:</strong> They're based on architectural design and industry benchmarks. 
                Actual results will vary based on implementation, infrastructure, and use case.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3>Q: What if you don't make it?</h3>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
                <strong>A:</strong> It's a valid concern. We're committed to open-sourcing core 
                components if we can't continue, ensuring early adopters aren't left stranded.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3>Q: Why should I trust you?</h3>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
                <strong>A:</strong> You shouldn't blindly trust anyone. That's why we're being 
                completely transparent. Judge us by our honesty, our progress, and our commitment 
                to building something valuable.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{
          padding: '4rem 1rem',
          background: 'linear-gradient(135deg, var(--ifm-color-primary-dark), var(--ifm-color-primary))',
          color: 'white',
          textAlign: 'center'
        }}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '1.5rem'}}>
              Ready to Join Our Journey?
            </h2>
            <p style={{fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem'}}>
              We're looking for early adopters who value transparency, 
              want to shape the future of infrastructure, and believe in our vision.
            </p>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link
                className="button button--secondary button--lg"
                style={{background: 'white', color: 'var(--ifm-color-primary)'}}
                to="/contact">
                Let's Talk
              </Link>
              <Link
                className="button button--secondary button--lg"
                style={{background: 'transparent', border: '2px solid white', color: 'white'}}
                to="/pricing">
                View Early Access Pricing
              </Link>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}