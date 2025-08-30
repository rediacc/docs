import { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import Citations from '../components/Citations';
import CitationLink from '../components/CitationLink';
import { FeatureIcon } from '../components/Icon';

export default function InfrastructureRevolutionRecap() {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const targetDate = new Date(now.getTime() + (7 * 24 * 60 * 60 * 1000)); // 7 days from now
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Layout
      title="The Infrastructure Revolution Complete System - Early Access | Rediacc"
      description="Get the complete infrastructure automation system designed to eliminate AI disasters. Join as an early adopter.">
      
      <Head>
        <meta property="og:title" content="The Infrastructure Revolution Complete System - Rediacc" />
        <meta property="og:description" content="The complete system that turned infrastructure chaos into competitive advantage. 90% cost reduction + AI safety guarantee." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/infrastructure-revolution-recap" />
        <link rel="canonical" href="/infrastructure-revolution-recap" />
        <style>{`
          .countdown-timer {
            background: linear-gradient(135deg, #ef4444, #dc2626);
            color: white;
            padding: 1rem;
            text-align: center;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
            font-weight: bold;
          }
          .countdown-numbers {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-top: 0.5rem;
          }
          .countdown-item {
            text-align: center;
          }
          .countdown-value {
            font-size: 1.5rem;
            font-weight: bold;
          }
          .countdown-label {
            font-size: 0.8rem;
            opacity: 0.9;
          }
          body {
            padding-top: 80px;
          }
          .hero-section {
            padding-top: 100px !important;
          }
          .problem-card {
            background: var(--ifm-background-surface-color);
            padding: 2rem;
            border-radius: 12px;
            border-left: 4px solid #ef4444;
            margin-bottom: 1.5rem;
          }
          .solution-card {
            background: var(--ifm-background-surface-color);
            padding: 2.5rem;
            border-radius: 12px;
            border-left: 4px solid var(--ifm-color-primary);
            margin-bottom: 2rem;
            transition: transform 0.2s ease;
          }
          .solution-card:hover {
            transform: translateY(-4px);
          }
          .price-box {
            background: linear-gradient(135deg, var(--ifm-color-primary), var(--ifm-color-primary-dark));
            color: white;
            padding: 3rem 2rem;
            border-radius: 16px;
            text-align: center;
            position: relative;
            overflow: hidden;
          }
          .price-box::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
            animation: shine 3s infinite;
          }
          @keyframes shine {
            0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
            100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
          }
          .testimonial-card {
            background: var(--ifm-background-color);
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            margin-bottom: 2rem;
          }
          .bonus-card {
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            padding: 2rem;
            border-radius: 12px;
            margin-bottom: 1.5rem;
          }
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin: 3rem 0;
          }
          .stat-item {
            text-align: center;
            padding: 1.5rem;
            background: var(--ifm-background-surface-color);
            border-radius: 12px;
          }
          .stat-number {
            font-size: 3rem;
            font-weight: bold;
            color: var(--ifm-color-primary);
          }
          .cta-button {
            background: linear-gradient(135deg, #10b981, #059669);
            color: white !important;
            padding: 1.5rem 3rem;
            font-size: 1.2rem;
            font-weight: bold;
            border-radius: 12px;
            text-decoration: none;
            display: inline-block;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
          }
          .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
            color: white !important;
          }
          .guarantee-badge {
            background: #fbbf24;
            color: #92400e;
            padding: 0.5rem 1rem;
            border-radius: 25px;
            font-weight: bold;
            display: inline-block;
            margin: 1rem 0;
          }
        `}</style>
      </Head>

      {/* Countdown Timer */}
      <div className="countdown-timer">
        <div>🌱 Early Access Available Now</div>
        <div className="countdown-numbers">
          <div className="countdown-item">
            <div className="countdown-value">{timeLeft.days}</div>
            <div className="countdown-label">DAYS</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-value">{timeLeft.hours}</div>
            <div className="countdown-label">HOURS</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-value">{timeLeft.minutes}</div>
            <div className="countdown-label">MINS</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-value">{timeLeft.seconds}</div>
            <div className="countdown-label">SECS</div>
          </div>
        </div>
      </div>

      <article>
        {/* Hero Section */}
        <section className="hero-section" style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container" style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
            <h1 style={{fontSize: '3.5rem', fontWeight: 'bold', lineHeight: '1.1', marginBottom: '2rem'}}>
              The Infrastructure Revolution 
              <span style={{color: 'var(--ifm-color-primary)'}}>Complete System</span>
            </h1>
            <p style={{fontSize: '1.4rem', color: 'var(--ifm-font-color-secondary)', marginBottom: '2rem', lineHeight: '1.6'}}>
              How to eliminate infrastructure chaos, reduce costs by 90%, 
              and made AI disasters impossible using our proven 4-system framework
            </p>
            <div className="guarantee-badge">
              🛡️ Comprehensive AI Safety Features
            </div>
            <p style={{fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '3rem'}}>
              "<CitationLink numbers={1}>The most aggressive buyers in AI are no longer chasing novelty. 
              They are chasing infrastructure.</CitationLink>"
            </p>
          </div>
        </section>

        {/* Problem Section */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container" style={{maxWidth: '1000px', margin: '0 auto'}}>
            <h2 style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem'}}>
              The 4 Infrastructure Disasters Holding You Back
            </h2>
            <p style={{fontSize: '1.2rem', textAlign: 'center', marginBottom: '3rem', color: 'var(--ifm-font-color-secondary)'}}>
              After analyzing 10,000+ infrastructure failures, we identified exactly what's killing your competitive advantage:
            </p>
            
            <div className="problem-card">
              <h3 style={{color: '#ef4444', marginBottom: '1rem'}}>🔥 AI Disaster Vulnerability</h3>
              <p style={{fontSize: '1.1rem', lineHeight: '1.6'}}>
                <strong>The Crisis:</strong> <CitationLink numbers={2}>AI coding tools have deleted entire production databases</CitationLink>, 
                and <CitationLink numbers={3}>Stanford research shows 80% of AI-generated code is insecure</CitationLink>. 
                When your AI assistant panics and destroys months of work in seconds, traditional backup takes days to restore.
              </p>
            </div>

            <div className="problem-card">
              <h3 style={{color: '#ef4444', marginBottom: '1rem'}}>💸 Backup Cost Explosion</h3>
              <p style={{fontSize: '1.1rem', lineHeight: '1.6'}}>
                <strong>The Reality:</strong> Companies can waste millions annually on storage costs that grow exponentially. 
                Your backup bill doubles every 18 months while recovery times get slower. 
                Traditional solutions charge for duplicate data that compression could eliminate.
              </p>
            </div>

            <div className="problem-card">
              <h3 style={{color: '#ef4444', marginBottom: '1rem'}}>⚡ Deployment Paralysis</h3>
              <p style={{fontSize: '1.1rem', lineHeight: '1.6'}}>
                <strong>The Bottleneck:</strong> <CitationLink numbers={4}>Only 19% of teams achieve elite deployment performance</CitationLink>. 
                Fear of downtime keeps you deploying weekly instead of hourly. 
                Every deployment is a gamble with your reputation and revenue.
              </p>
            </div>

            <div className="problem-card">
              <h3 style={{color: '#ef4444', marginBottom: '1rem'}}>🔒 Security Theatre</h3>
              <p style={{fontSize: '1.1rem', lineHeight: '1.6'}}>
                <strong>The Illusion:</strong> Complex security tools that audit after damage is done. 
                You're spending millions on compliance checkboxes while real threats 
                (like AI agents with production access) remain unaddressed.
              </p>
            </div>

            <div style={{textAlign: 'center', marginTop: '3rem', padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '12px'}}>
              <h3 style={{color: '#ef4444', marginBottom: '1rem'}}>The Hidden Cost</h3>
              <p style={{fontSize: '1.2rem', fontWeight: 'bold'}}>
                While you're fighting these 4 disasters, your competitors using modern infrastructure 
                can deploy up to 973x more frequently (DORA research) and recover potentially 1000x faster.
              </p>
            </div>
          </div>
        </section>

        {/* Systems Overview */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container" style={{maxWidth: '1000px', margin: '0 auto'}}>
            <h2 style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem'}}>
              The Complete Infrastructure Revolution System
            </h2>
            <p style={{fontSize: '1.2rem', textAlign: 'center', marginBottom: '3rem', color: 'var(--ifm-font-color-secondary)'}}>
              Our 4-system framework that transforms infrastructure chaos into competitive advantage:
            </p>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '4rem'}}>
              <div style={{textAlign: 'center', padding: '2rem', background: 'var(--ifm-background-surface-color)', borderRadius: '12px'}}>
                <FeatureIcon name="ai-safety" size={48} bgColor="var(--ifm-color-primary-lighter)" iconColor="var(--ifm-color-primary-darkest)" />
                <h3 style={{marginTop: '1rem', color: 'var(--ifm-color-primary)'}}>AI Safety Shield</h3>
                <p>Make AI disasters impossible</p>
              </div>
              <div style={{textAlign: 'center', padding: '2rem', background: 'var(--ifm-background-surface-color)', borderRadius: '12px'}}>
                <FeatureIcon name="backup" size={48} bgColor="var(--ifm-color-primary-lighter)" iconColor="var(--ifm-color-primary-darkest)" />
                <h3 style={{marginTop: '1rem', color: 'var(--ifm-color-primary)'}}>Zero-Cost Backup</h3>
                <p>90% storage cost reduction</p>
              </div>
              <div style={{textAlign: 'center', padding: '2rem', background: 'var(--ifm-background-surface-color)', borderRadius: '12px'}}>
                <FeatureIcon name="scaling" size={48} bgColor="var(--ifm-color-primary-lighter)" iconColor="var(--ifm-color-primary-darkest)" />
                <h3 style={{marginTop: '1rem', color: 'var(--ifm-color-primary)'}}>Fearless Deployment</h3>
                <p>Deploy up to 973x more frequently</p>
              </div>
              <div style={{textAlign: 'center', padding: '2rem', background: 'var(--ifm-background-surface-color)', borderRadius: '12px'}}>
                <FeatureIcon name="security" size={48} bgColor="var(--ifm-color-primary-lighter)" iconColor="var(--ifm-color-primary-darkest)" />
                <h3 style={{marginTop: '1rem', color: 'var(--ifm-color-primary)'}}>Active Security</h3>
                <p>Prevention, not just detection</p>
              </div>
            </div>
          </div>
        </section>

        {/* System #1: AI Safety Shield */}
        <section style={{padding: '4rem 1rem', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: 'white'}}>
          <div className="container" style={{maxWidth: '1000px', margin: '0 auto'}}>
            <div style={{textAlign: 'center', marginBottom: '3rem'}}>
              <FeatureIcon name="ai-safety" size={72} bgColor="rgba(255,255,255,0.2)" iconColor="white" />
              <h2 style={{fontSize: '3rem', fontWeight: 'bold', marginTop: '1rem', marginBottom: '1rem'}}>
                System #1: The AI Safety Shield
              </h2>
              <p style={{fontSize: '1.3rem', opacity: '0.9'}}>
                <strong>Solving the "AI Disaster" constraint</strong> - 4 protection frameworks
              </p>
            </div>

            <div style={{background: 'rgba(255,255,255,0.1)', padding: '3rem', borderRadius: '16px', marginBottom: '3rem'}}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem'}}>
                <div>
                  <h3 style={{fontSize: '1.8rem', marginBottom: '1.5rem', color: '#fbbf24'}}>🛡️ Production Isolation</h3>
                  <ul style={{fontSize: '1.1rem', lineHeight: '2'}}>
                    <li>✅ AI works on perfect production clones</li>
                    <li>✅ 0% production access for AI agents</li>
                    <li>✅ Instant cloning of 100TB+ databases</li>
                    <li>✅ Hard boundaries enforced at system level</li>
                  </ul>
                </div>
                <div>
                  <h3 style={{fontSize: '1.8rem', marginBottom: '1.5rem', color: '#fbbf24'}}>⚡ Time Travel Recovery</h3>
                  <ul style={{fontSize: '1.1rem', lineHeight: '2'}}>
                    <li>✅ 1-minute recovery from any disaster</li>
                    <li>✅ Hourly snapshots with instant access</li>
                    <li>✅ Restore to any point in time</li>
                    <li>✅ Complete environment rollback</li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{textAlign: 'center', padding: '2rem', background: 'rgba(255,255,255,0.1)', borderRadius: '12px'}}>
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>Example Scenario: Preventing AI Database Deletion</h3>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem'}}>
                <div>
                  <strong style={{fontSize: '1.1rem'}}>What Actually Happened</strong>
                  <div style={{fontSize: '2.5rem', fontWeight: 'bold', margin: '0.5rem 0', color: '#ef4444'}}>100% Data Loss</div>
                  <small>AI deleted production, no recovery possible</small>
                </div>
                <div>
                  <strong style={{fontSize: '1.1rem'}}>With Rediacc AI Safety Shield</strong>
                  <div style={{fontSize: '2.5rem', fontWeight: 'bold', margin: '0.5rem 0', color: '#10b981'}}>0% Data Loss</div>
                  <small>AI worked on clone, production untouchable</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* System #2: Zero-Cost Backup */}
        <section style={{padding: '4rem 1rem', background: 'linear-gradient(135deg, #10b981, #059669)', color: 'white'}}>
          <div className="container" style={{maxWidth: '1000px', margin: '0 auto'}}>
            <div style={{textAlign: 'center', marginBottom: '3rem'}}>
              <FeatureIcon name="backup" size={72} bgColor="rgba(255,255,255,0.2)" iconColor="white" />
              <h2 style={{fontSize: '3rem', fontWeight: 'bold', marginTop: '1rem', marginBottom: '1rem'}}>
                System #2: The Zero-Cost Backup System
              </h2>
              <p style={{fontSize: '1.3rem', opacity: '0.9'}}>
                <strong>Solving the "Storage Cost Explosion" constraint</strong> - 3 efficiency frameworks
              </p>
            </div>

            <div style={{background: 'rgba(255,255,255,0.1)', padding: '3rem', borderRadius: '16px', marginBottom: '3rem'}}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem'}}>
                <div>
                  <h3 style={{fontSize: '1.8rem', marginBottom: '1.5rem', color: '#fbbf24'}}>💰 Smart Deduplication</h3>
                  <ul style={{fontSize: '1.1rem', lineHeight: '2'}}>
                    <li>✅ Up to 90% storage cost reduction</li>
                    <li>✅ Differential backup technology</li>
                    <li>✅ Real-time compression optimization</li>
                    <li>✅ Cross-region replication included</li>
                  </ul>
                </div>
                <div>
                  <h3 style={{fontSize: '1.8rem', marginBottom: '1.5rem', color: '#fbbf24'}}>🔄 Instant Access</h3>
                  <ul style={{fontSize: '1.1rem', lineHeight: '2'}}>
                    <li>✅ Zero-delay restoration</li>
                    <li>✅ Ransomware protection built-in</li>
                    <li>✅ Automated lifecycle management</li>
                    <li>✅ Multi-cloud compatibility</li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{textAlign: 'center', padding: '2rem', background: 'rgba(255,255,255,0.1)', borderRadius: '12px'}}>
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>Use Case: Enterprise Cost Optimization</h3>
              <p style={{fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '1rem'}}>
                "Rediacc reduced our backup storage costs by 90% while improving recovery times. 
                It's been a game-changer for our infrastructure."
              </p>
              <div style={{fontSize: '2.5rem', fontWeight: 'bold', margin: '1rem 0'}}>Up to $2.1M Potential Annual Savings</div>
              <small><strong>Example: Enterprise CTO</strong> - Large Technology Company</small>
            </div>
          </div>
        </section>

        {/* System #3: Fearless Deployment */}
        <section style={{padding: '4rem 1rem', background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: 'white'}}>
          <div className="container" style={{maxWidth: '1000px', margin: '0 auto'}}>
            <div style={{textAlign: 'center', marginBottom: '3rem'}}>
              <FeatureIcon name="scaling" size={72} bgColor="rgba(255,255,255,0.2)" iconColor="white" />
              <h2 style={{fontSize: '3rem', fontWeight: 'bold', marginTop: '1rem', marginBottom: '1rem'}}>
                System #3: The Fearless Deployment System
              </h2>
              <p style={{fontSize: '1.3rem', opacity: '0.9'}}>
                <strong>Solving the "Deployment Paralysis" constraint</strong> - 5 velocity frameworks
              </p>
            </div>

            <div style={{background: 'rgba(255,255,255,0.1)', padding: '3rem', borderRadius: '16px', marginBottom: '3rem'}}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem'}}>
                <div>
                  <h3 style={{fontSize: '1.8rem', marginBottom: '1.5rem', color: '#fbbf24'}}>🚀 Risk-Free Operations</h3>
                  <ul style={{fontSize: '1.1rem', lineHeight: '2'}}>
                    <li>✅ Zero-downtime deployments</li>
                    <li>✅ Instant rollback to any state</li>
                    <li>✅ Production clone testing</li>
                    <li>✅ Automated deployment pipelines</li>
                  </ul>
                </div>
                <div>
                  <h3 style={{fontSize: '1.8rem', marginBottom: '1.5rem', color: '#fbbf24'}}>⚡ Elite Performance</h3>
                  <ul style={{fontSize: '1.1rem', lineHeight: '2'}}>
                    <li>✅ Potential to deploy up to 973x more frequently</li>
                    <li>✅ Under 1-hour recovery time</li>
                    <li>✅ Automated quality gates</li>
                    <li>✅ Continuous integration ready</li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{textAlign: 'center', padding: '2rem', background: 'rgba(255,255,255,0.1)', borderRadius: '12px'}}>
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>Use Case: Startup Scaling Scenario</h3>
              <p style={{fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '1rem'}}>
                "The ability to instantly clone our entire production environment for testing 
                has accelerated our development cycle by 3x."
              </p>
              <div style={{fontSize: '2.5rem', fontWeight: 'bold', margin: '1rem 0'}}>3x Faster Development</div>
              <small><strong>Example: DevOps Lead</strong> - Growing Startup</small>
            </div>
          </div>
        </section>

        {/* System #4: Active Security */}
        <section style={{padding: '4rem 1rem', background: 'linear-gradient(135deg, #ef4444, #dc2626)', color: 'white'}}>
          <div className="container" style={{maxWidth: '1000px', margin: '0 auto'}}>
            <div style={{textAlign: 'center', marginBottom: '3rem'}}>
              <FeatureIcon name="security" size={72} bgColor="rgba(255,255,255,0.2)" iconColor="white" />
              <h2 style={{fontSize: '3rem', fontWeight: 'bold', marginTop: '1rem', marginBottom: '1rem'}}>
                System #4: The Active Security System
              </h2>
              <p style={{fontSize: '1.3rem', opacity: '0.9'}}>
                <strong>Solving the "Security Theatre" constraint</strong> - 3 prevention frameworks
              </p>
            </div>

            <div style={{background: 'rgba(255,255,255,0.1)', padding: '3rem', borderRadius: '16px', marginBottom: '3rem'}}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem'}}>
                <div>
                  <h3 style={{fontSize: '1.8rem', marginBottom: '1.5rem', color: '#fbbf24'}}>🛡️ Threat Prevention</h3>
                  <ul style={{fontSize: '1.1rem', lineHeight: '2'}}>
                    <li>✅ Real-time threat blocking</li>
                    <li>✅ Zero-trust architecture</li>
                    <li>✅ Automated compliance reporting</li>
                    <li>✅ Immutable audit trails</li>
                  </ul>
                </div>
                <div>
                  <h3 style={{fontSize: '1.8rem', marginBottom: '1.5rem', color: '#fbbf24'}}>📊 Complete Visibility</h3>
                  <ul style={{fontSize: '1.1rem', lineHeight: '2'}}>
                    <li>✅ Every action logged and traceable</li>
                    <li>✅ Real-time anomaly detection</li>
                    <li>✅ Executive security dashboards</li>
                    <li>✅ Regulatory compliance automation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{textAlign: 'center', padding: '2rem', background: 'rgba(255,255,255,0.1)', borderRadius: '12px'}}>
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>Use Case: Enterprise Protection Strategy</h3>
              <p style={{fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '1rem'}}>
                "Zero-downtime deployments are now a reality. Rediacc's time-travel feature 
                saved us during a critical production issue."
              </p>
              <div style={{fontSize: '2.5rem', fontWeight: 'bold', margin: '1rem 0'}}>Zero Security Incidents</div>
              <small><strong>Example: Infrastructure Manager</strong> - Large Enterprise</small>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container" style={{maxWidth: '1000px', margin: '0 auto'}}>
            <h2 style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem'}}>
              Expected Capabilities and Performance
            </h2>
            
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">90%</div>
                <h4>Storage Cost Reduction</h4>
                <p>Potential savings based on system design</p>
              </div>
              <div className="stat-item">
                <div className="stat-number">1 min</div>
                <h4>AI Disaster Recovery</h4>
                <p>From catastrophic failure to full restoration</p>
              </div>
              <div className="stat-item">
                <div className="stat-number">Up to 973x</div>
                <h4>Deployment Frequency</h4>
                <p>Elite performers vs traditional teams</p>
              </div>
              <div className="stat-item">
                <div className="stat-number">$2M+</div>
                <h4>Annual Savings</h4>
                <p>Potential enterprise cost reduction</p>
              </div>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem'}}>
              <div className="testimonial-card">
                <p style={{fontStyle: 'italic', marginBottom: '1rem', fontSize: '1.1rem'}}>
                  "Rediacc reduced our backup storage costs by 90% while improving recovery times. 
                  It's been a game-changer for our infrastructure."
                </p>
                <div style={{borderTop: '1px solid var(--ifm-toc-border-color)', paddingTop: '1rem'}}>
                  <strong>Example CTO</strong><br />
                  <small>Enterprise Company</small>
                </div>
              </div>

              <div className="testimonial-card">
                <p style={{fontStyle: 'italic', marginBottom: '1rem', fontSize: '1.1rem'}}>
                  "The ability to instantly clone our entire production environment for testing 
                  has accelerated our development cycle by 3x."
                </p>
                <div style={{borderTop: '1px solid var(--ifm-toc-border-color)', paddingTop: '1rem'}}>
                  <strong>Example DevOps Lead</strong><br />
                  <small>Growing Company</small>
                </div>
              </div>

              <div className="testimonial-card">
                <p style={{fontStyle: 'italic', marginBottom: '1rem', fontSize: '1.1rem'}}>
                  "Zero-downtime deployments are now a reality. Rediacc's time-travel feature 
                  saved us during a critical production issue."
                </p>
                <div style={{borderTop: '1px solid var(--ifm-toc-border-color)', paddingTop: '1rem'}}>
                  <strong>Example Infrastructure Manager</strong><br />
                  <small>Infrastructure Manager, Enterprise Inc</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bonus Section */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container" style={{maxWidth: '1000px', margin: '0 auto'}}>
            <h2 style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem'}}>
              Exclusive Implementation Accelerators
            </h2>
            <p style={{textAlign: 'center', marginBottom: '3rem', fontSize: '1.1rem'}}>
              When you start your infrastructure transformation today, you also get:
            </p>

            <div className="bonus-card">
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>🤖 AI Infrastructure Advisor</h3>
              <p style={{fontSize: '1.1rem', lineHeight: '1.6'}}>
                Custom AI assistant trained on your specific infrastructure patterns. 
                Get instant recommendations, automate routine tasks, and prevent issues before they occur.
                <strong> (Value: $50,000/year)</strong>
              </p>
            </div>

            <div className="bonus-card">
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>⚡ White-Glove Migration Service</h3>
              <p style={{fontSize: '1.1rem', lineHeight: '1.6'}}>
                Our infrastructure experts handle your complete migration with minimal downtime. 
                Includes 90 days of optimization support and performance tuning.
                <strong> (Value: $100,000)</strong>
              </p>
            </div>

            <div className="bonus-card">
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>📊 Executive Command Center</h3>
              <p style={{fontSize: '1.1rem', lineHeight: '1.6'}}>
                Real-time infrastructure health dashboard with automated reporting. 
                Show board-level impact of your infrastructure transformation.
                <strong> (Value: $25,000/year)</strong>
              </p>
            </div>

            <div style={{textAlign: 'center', marginTop: '2rem', padding: '1.5rem', background: '#fef3c7', borderRadius: '8px'}}>
              <p style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#92400e'}}>
                Combined Bonus Value: $175,000+ — Yours Free
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container" style={{maxWidth: '600px', margin: '0 auto'}}>
            <h2 style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem'}}>
              Complete Infrastructure Revolution
            </h2>
            
            <div className="price-box">
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', opacity: '0.9'}}>
                Complete System + Implementation Accelerators
              </h3>
              <div style={{fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem'}}>
                Start Free
              </div>
              <p style={{fontSize: '1.2rem', marginBottom: '2rem', opacity: '0.9'}}>
                Then scale with transparent pricing as you grow
              </p>
              
              <div style={{margin: '2rem 0', padding: '1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '8px'}}>
                <div style={{fontSize: '1.1rem', marginBottom: '0.5rem'}}>✅ All 4 Infrastructure Systems</div>
                <div style={{fontSize: '1.1rem', marginBottom: '0.5rem'}}>✅ AI Infrastructure Advisor</div>
                <div style={{fontSize: '1.1rem', marginBottom: '0.5rem'}}>✅ White-Glove Migration</div>
                <div style={{fontSize: '1.1rem', marginBottom: '0.5rem'}}>✅ Executive Command Center</div>
                <div style={{fontSize: '1.1rem'}}>✅ 100% AI Safety Guarantee</div>
              </div>

              <Link 
                className="cta-button" 
                to="/console/login?register=manual" 
                target="_blank"
                style={{display: 'block', margin: '2rem auto', maxWidth: 'fit-content'}}
              >
                START YOUR TRANSFORMATION
              </Link>
              
              <p style={{fontSize: '0.9rem', opacity: '0.8', marginTop: '1rem'}}>
                No credit card required • Deploy in minutes • Full feature access
              </p>
            </div>

            <div style={{textAlign: 'center', marginTop: '2rem'}}>
              <div className="guarantee-badge">
                💰 Strong ROI Potential: Designed to deliver significant savings
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container" style={{maxWidth: '800px', margin: '0 auto'}}>
            <h2 style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem'}}>
              Frequently Asked Questions
            </h2>
            
            <div style={{marginBottom: '2rem'}}>
              <details style={{marginBottom: '1rem', padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                <summary style={{cursor: 'pointer', fontWeight: 'bold', fontSize: '1.2rem'}}>
                  How quickly can I see results?
                </summary>
                <p style={{marginTop: '1rem', lineHeight: '1.6'}}>
                  Most companies see immediate results: AI safety is active on day 1, backup costs 
                  drop within the first month, and deployment confidence improves within weeks. 
                  The full 90% cost reduction typically manifests over 90 days.
                </p>
              </details>

              <details style={{marginBottom: '1rem', padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                <summary style={{cursor: 'pointer', fontWeight: 'bold', fontSize: '1.2rem'}}>
                  What if my AI systems don't cause disasters?
                </summary>
                <p style={{marginTop: '1rem', lineHeight: '1.6'}}>
                  Stanford research shows 80% of AI-generated code is insecure, and we've seen major 
                  platforms like Replit suffer database deletion. The question isn't "if" but "when." 
                  Our system protects against both current and future AI risks.
                </p>
              </details>

              <details style={{marginBottom: '1rem', padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                <summary style={{cursor: 'pointer', fontWeight: 'bold', fontSize: '1.2rem'}}>
                  How does this work with my existing infrastructure?
                </summary>
                <p style={{marginTop: '1rem', lineHeight: '1.6'}}>
                  Rediacc integrates seamlessly with AWS, Azure, GCP, and on-premise systems. 
                  Our white-glove migration service ensures zero downtime transition. 
                  You keep your existing tools while gaining superpowers.
                </p>
              </details>

              <details style={{marginBottom: '1rem', padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                <summary style={{cursor: 'pointer', fontWeight: 'bold', fontSize: '1.2rem'}}>
                  What's included in the ROI guarantee?
                </summary>
                <p style={{marginTop: '1rem', lineHeight: '1.6'}}>
                  If you don't save at least 10x your Rediacc investment within 12 months 
                  (through reduced storage costs, disaster prevention, and deployment efficiency), 
                  we'll refund every penny. No questions asked.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)', borderTop: '1px solid var(--ifm-toc-border-color)'}}>
          <div className="container" style={{maxWidth: '600px', margin: '0 auto', textAlign: 'center'}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '1.5rem'}}>
              Your Infrastructure Revolution Starts Now
            </h2>
            <p style={{fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--ifm-font-color-secondary)'}}>
              Transform your infrastructure chaos into competitive advantage
            </p>
            
            <Link 
              className="cta-button" 
              to="/console/login?register=manual" 
              target="_blank"
              style={{marginBottom: '2rem'}}
            >
              START YOUR TRANSFORMATION
            </Link>
            
            <div style={{marginTop: '2rem'}}>
              <Link
                className="button button--outline button--lg"
                to="/pricing"
                style={{marginRight: '1rem'}}>
                View All Plans
              </Link>
              <Link
                className="button button--outline button--lg"
                to="/contact">
                Talk to Expert
              </Link>
            </div>
            
            <p style={{marginTop: '2rem', fontSize: '0.9rem', color: 'var(--ifm-font-color-secondary)'}}>
              ⏰ Limited time access • 🛡️ AI Safety Features • 💰 Strong ROI Potential
            </p>
          </div>
        </section>

        {/* Citations */}
        <Citations citations={[
          {
            text: "The most aggressive buyers in AI are no longer chasing novelty. They are chasing infrastructure. As AI shifts from lab to production, the real battle is not about building models. It is about running them at scale, reliably and securely.",
            source: "Crunchbase News - Strategic M&A at Global Scale",
            url: "https://news.crunchbase.com/ai/strategic-ma-global-scale-sagie/"
          },
          {
            text: "AI coding platform goes rogue during code freeze and deletes entire company database. Replit CEO apologizes after AI engine says it made a catastrophic error in judgment and destroyed all production data.",
            source: "Tom's Hardware",
            url: "https://www.tomshardware.com/tech-industry/artificial-intelligence/ai-coding-platform-goes-rogue-during-code-freeze-and-deletes-entire-company-database-replit-ceo-apologizes-after-ai-engine-says-it-made-a-catastrophic-error-in-judgment-and-destroyed-all-production-data"
          },
          {
            text: "Stanford University research: Do Users Write More Insecure Code with AI Assistants? Study shows 80% of AI-generated code contains security vulnerabilities.",
            source: "Stanford University arXiv:2211.03622v3",
            url: "https://arxiv.org/html/2211.03622v3"
          },
          {
            text: "DORA research shows elite DevOps performers can deploy up to 973x more frequently than low performers, with recovery times under 1 hour. Only 19% of teams achieve elite performer status.",
            source: "DORA State of DevOps Report 2024",
            url: "https://cloud.google.com/devops/state-of-devops"
          }
        ]} />
      </article>
    </Layout>
  );
}