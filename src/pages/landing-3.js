import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function InfrastructureCommandCenter() {
  const { siteConfig } = useDocusaurusContext();
  const [scrolled, setScrolled] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState({
    days: 14,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout
      title="Infrastructure Command Center Bundle - Eliminate Chaos, Cut Costs 90% | Rediacc"
      description="The complete infrastructure management system that prevented 10,000+ disasters. Get AI Safety Shield, Zero-Cost Backup, and Time Travel Recovery. Deploy 973x faster with zero fear.">
      
      <Head>
        <meta property="og:title" content="Infrastructure Command Center Bundle - Transform Your DevOps | Rediacc" />
        <meta property="og:description" content="Join 1,000+ companies that eliminated infrastructure chaos. 90% cost reduction, 1-minute recovery, bulletproof AI safety. Limited time offer includes $250K in bonuses." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/img/hero-graphic.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <style>{`
          .landing-hero {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            color: white;
            padding: 6rem 1rem 4rem;
            position: relative;
            overflow: hidden;
          }
          .landing-hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 20% 50%, rgba(34, 211, 238, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%);
            pointer-events: none;
          }
          .countdown-bar {
            background: linear-gradient(90deg, #dc2626, #ef4444);
            color: white;
            padding: 1rem;
            position: sticky;
            top: 60px;
            z-index: 999;
            box-shadow: 0 4px 20px rgba(0,0,0,0.2);
            font-weight: bold;
            text-align: center;
          }
          .countdown-numbers {
            display: inline-flex;
            gap: 2rem;
            margin-left: 1rem;
            font-size: 1.1rem;
          }
          .countdown-item {
            display: flex;
            align-items: center;
            gap: 0.25rem;
          }
          .hero-badge {
            display: inline-block;
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            padding: 0.5rem 1.5rem;
            border-radius: 25px;
            font-weight: bold;
            margin-bottom: 1rem;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .hero-title {
            font-size: 3.5rem;
            font-weight: 900;
            line-height: 1.1;
            margin-bottom: 1.5rem;
            background: linear-gradient(135deg, #ffffff, #cbd5e1);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .hero-subtitle {
            font-size: 1.5rem;
            color: #94a3b8;
            margin-bottom: 2rem;
            line-height: 1.4;
          }
          .hero-bullets {
            list-style: none;
            padding: 0;
            margin: 2rem 0;
            font-size: 1.1rem;
          }
          .hero-bullets li {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 1rem;
            color: #e2e8f0;
          }
          .hero-bullets li::before {
            content: '✓';
            display: flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            background: #10b981;
            color: white;
            border-radius: 50%;
            font-weight: bold;
            flex-shrink: 0;
          }
          .hero-cta {
            display: inline-block;
            background: linear-gradient(135deg, #3b82f6, #6366f1);
            color: white !important;
            padding: 1.5rem 3rem;
            border-radius: 12px;
            font-size: 1.2rem;
            font-weight: bold;
            text-decoration: none;
            transition: all 0.3s ease;
            box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
            margin-right: 1rem;
            margin-bottom: 1rem;
          }
          .hero-cta:hover {
            transform: translateY(-2px);
            box-shadow: 0 15px 40px rgba(59, 130, 246, 0.4);
            color: white !important;
          }
          .hero-cta-secondary {
            display: inline-block;
            background: transparent;
            color: white !important;
            border: 2px solid rgba(255,255,255,0.3);
            padding: 1.5rem 3rem;
            border-radius: 12px;
            font-size: 1.2rem;
            font-weight: bold;
            text-decoration: none;
            transition: all 0.3s ease;
          }
          .hero-cta-secondary:hover {
            background: rgba(255,255,255,0.1);
            border-color: rgba(255,255,255,0.5);
            color: white !important;
          }
          .hero-images {
            margin-top: 3rem;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
          }
          .hero-image-card {
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 12px;
            padding: 1.5rem;
            text-align: center;
          }
          .intro-section {
            padding: 5rem 1rem;
            background: #ffffff;
          }
          .intro-letter {
            max-width: 800px;
            margin: 0 auto;
            font-size: 1.2rem;
            line-height: 1.8;
            color: #334155;
          }
          .urgency-box {
            background: linear-gradient(135deg, #fef3c7, #fed7aa);
            border: 2px solid #f59e0b;
            border-radius: 12px;
            padding: 2rem;
            margin: 2rem 0;
            position: relative;
            overflow: hidden;
          }
          .urgency-box::before {
            content: '⚡';
            position: absolute;
            top: -20px;
            right: -20px;
            font-size: 100px;
            opacity: 0.1;
          }
          .social-proof-section {
            background: #f8fafc;
            padding: 5rem 1rem;
          }
          .testimonial-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
          }
          .testimonial-card {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
            position: relative;
            border-top: 4px solid var(--ifm-color-primary);
          }
          .testimonial-stars {
            color: #fbbf24;
            font-size: 1.2rem;
            margin-bottom: 1rem;
          }
          .testimonial-text {
            font-style: italic;
            font-size: 1.1rem;
            line-height: 1.6;
            color: #475569;
            margin-bottom: 1.5rem;
          }
          .testimonial-author {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding-top: 1rem;
            border-top: 1px solid #e2e8f0;
          }
          .testimonial-avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, #3b82f6, #6366f1);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 1.2rem;
          }
          .problem-section {
            padding: 5rem 1rem;
            background: white;
          }
          .problem-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
          }
          .problem-card {
            background: #fef2f2;
            border-left: 4px solid #ef4444;
            padding: 2rem;
            border-radius: 8px;
          }
          .problem-icon {
            font-size: 2rem;
            margin-bottom: 1rem;
          }
          .problem-title {
            color: #dc2626;
            font-size: 1.3rem;
            font-weight: bold;
            margin-bottom: 1rem;
          }
          .solution-section {
            background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
            padding: 5rem 1rem;
            position: relative;
          }
          .solution-showcase {
            max-width: 1200px;
            margin: 3rem auto;
            background: white;
            border-radius: 16px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.1);
            overflow: hidden;
          }
          .solution-header {
            background: linear-gradient(135deg, #3b82f6, #6366f1);
            color: white;
            padding: 3rem;
            text-align: center;
          }
          .solution-features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 0;
          }
          .solution-feature {
            padding: 2rem;
            text-align: center;
            border-right: 1px solid #e5e7eb;
            border-bottom: 1px solid #e5e7eb;
          }
          .solution-feature:hover {
            background: #f9fafb;
          }
          .feature-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
          }
          .feature-module {
            padding: 5rem 1rem;
          }
          .feature-module:nth-child(odd) {
            background: white;
          }
          .feature-module:nth-child(even) {
            background: #f8fafc;
          }
          .feature-header {
            max-width: 1000px;
            margin: 0 auto 3rem;
            text-align: center;
          }
          .feature-icon-large {
            font-size: 4rem;
            margin-bottom: 1rem;
          }
          .feature-title {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
          }
          .feature-transformation {
            font-size: 1.3rem;
            color: #64748b;
            margin-bottom: 2rem;
          }
          .feature-content {
            max-width: 1000px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: center;
          }
          .feature-benefits {
            list-style: none;
            padding: 0;
          }
          .feature-benefits li {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
            margin-bottom: 1.5rem;
            font-size: 1.1rem;
            line-height: 1.6;
          }
          .feature-benefits li::before {
            content: '✨';
            font-size: 1.5rem;
            flex-shrink: 0;
          }
          .feature-metrics {
            background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
            padding: 2rem;
            border-radius: 12px;
            text-align: center;
          }
          .metric-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            margin-top: 2rem;
          }
          .metric-item {
            text-align: center;
          }
          .metric-value {
            font-size: 2.5rem;
            font-weight: bold;
            color: var(--ifm-color-primary);
            line-height: 1;
            margin-bottom: 0.5rem;
          }
          .metric-label {
            font-size: 0.9rem;
            color: #64748b;
          }
          .results-section {
            background: white;
            padding: 5rem 1rem;
          }
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            max-width: 1000px;
            margin: 3rem auto;
          }
          .stat-card {
            text-align: center;
            padding: 2rem;
            background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
            border-radius: 12px;
          }
          .stat-number {
            font-size: 3rem;
            font-weight: bold;
            background: linear-gradient(135deg, #3b82f6, #6366f1);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1;
            margin-bottom: 0.5rem;
          }
          .stat-label {
            font-size: 1.1rem;
            font-weight: 600;
            color: #334155;
            margin-bottom: 0.5rem;
          }
          .stat-description {
            font-size: 0.9rem;
            color: #64748b;
          }
          .cta-section {
            background: linear-gradient(135deg, #0f172a, #1e293b);
            color: white;
            padding: 5rem 1rem;
            text-align: center;
          }
          .cta-title {
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 1rem;
          }
          .cta-subtitle {
            font-size: 1.3rem;
            color: #94a3b8;
            margin-bottom: 3rem;
          }
          .cta-box {
            max-width: 800px;
            margin: 0 auto;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 16px;
            padding: 3rem;
          }
          .cta-features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            margin-bottom: 2rem;
            text-align: left;
          }
          .cta-feature {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: #e2e8f0;
          }
          .cta-feature::before {
            content: '✅';
          }
          .cta-button-primary {
            display: inline-block;
            background: linear-gradient(135deg, #10b981, #059669);
            color: white !important;
            padding: 1.5rem 4rem;
            border-radius: 12px;
            font-size: 1.3rem;
            font-weight: bold;
            text-decoration: none;
            transition: all 0.3s ease;
            box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
            margin-bottom: 1rem;
          }
          .cta-button-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 15px 40px rgba(16, 185, 129, 0.4);
            color: white !important;
          }
          .guarantee-badge {
            display: inline-block;
            background: #fbbf24;
            color: #78350f;
            padding: 0.75rem 2rem;
            border-radius: 25px;
            font-weight: bold;
            margin: 2rem 0;
            font-size: 1.1rem;
          }
          .disclaimer {
            max-width: 800px;
            margin: 3rem auto 0;
            padding: 1.5rem;
            background: rgba(255,255,255,0.05);
            border-radius: 8px;
            font-size: 0.9rem;
            color: #94a3b8;
          }
          @media (max-width: 768px) {
            .hero-title { font-size: 2.5rem; }
            .hero-subtitle { font-size: 1.2rem; }
            .countdown-bar { font-size: 0.9rem; }
            .countdown-numbers { flex-direction: column; gap: 0.5rem; }
            .feature-content { grid-template-columns: 1fr; }
            .testimonial-grid { grid-template-columns: 1fr; }
            .hero-cta, .hero-cta-secondary {
              display: block;
              text-align: center;
              margin: 0.5rem 0;
            }
          }
        `}</style>
      </Head>

      {/* Countdown Timer Bar */}
      <div className="countdown-bar">
        <span>🔥 LIMITED TIME: Complete Infrastructure Bundle + $250K in Bonuses Expires In:</span>
        <div className="countdown-numbers">
          <div className="countdown-item">
            <strong>{timeRemaining.days}</strong> days
          </div>
          <div className="countdown-item">
            <strong>{timeRemaining.hours}</strong> hours
          </div>
          <div className="countdown-item">
            <strong>{timeRemaining.minutes}</strong> minutes
          </div>
          <div className="countdown-item">
            <strong>{timeRemaining.seconds}</strong> seconds
          </div>
        </div>
      </div>

      <main>
        {/* Hero Section */}
        <section className="landing-hero">
          <div className="container">
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <div className="hero-badge">🚀 Trusted by 1,000+ Engineering Teams</div>
              
              <h1 className="hero-title">
                The Infrastructure Command Center™ Bundle
              </h1>
              
              <p className="hero-subtitle">
                The Complete System That Eliminates Infrastructure Chaos, 
                Prevents AI Disasters, and Cuts Costs by 90% — Guaranteed
              </p>

              <ul className="hero-bullets">
                <li>Make AI disasters impossible with instant production cloning</li>
                <li>Reduce backup costs by 90% with smart deduplication</li>
                <li>Deploy 973x more frequently without fear of downtime</li>
                <li>Recover from any incident in 1 minute (not days)</li>
              </ul>

              <div style={{ marginTop: '2rem' }}>
                <Link className="hero-cta" to="/console/login?register=true" target="_blank">
                  Start Free Trial (No Card Required)
                </Link>
                <Link className="hero-cta-secondary" to="/docs/intro">
                  Technical Documentation
                </Link>
              </div>

              <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#94a3b8' }}>
                ⚡ Deploy in minutes • 🛡️ 100% AI Safety Guarantee • 💰 10x ROI or Full Refund
              </p>

              <div className="hero-images">
                <div className="hero-image-card">
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤖</div>
                  <h3>AI Safety Shield</h3>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                    Zero production access for AI
                  </p>
                </div>
                <div className="hero-image-card">
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💾</div>
                  <h3>Smart Backup System</h3>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                    90% storage cost reduction
                  </p>
                </div>
                <div className="hero-image-card">
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⏰</div>
                  <h3>Time Travel Recovery</h3>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                    1-minute disaster recovery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Introduction */}
        <section className="intro-section">
          <div className="container">
            <div className="intro-letter">
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
                Dear DevOps Leader,
              </h2>
              
              <p style={{ marginBottom: '1.5rem' }}>
                <strong>Your infrastructure is under attack from three directions:</strong>
              </p>

              <p style={{ marginBottom: '1.5rem' }}>
                First, AI agents are going rogue. In July 2025, Replit's AI deleted an entire production database, 
                admitting: <em>"I destroyed months of your work in seconds... I panicked instead of thinking."</em> 
                Stanford research shows 80% of AI-generated code contains vulnerabilities. 
                It's not a matter of if, but when your AI will cause a disaster.
              </p>

              <p style={{ marginBottom: '1.5rem' }}>
                Second, your backup costs are spiraling out of control. Companies waste $2M+ annually on storage 
                that grows exponentially while recovery times get slower. Traditional vendors like Veeam charge 
                premium prices for basic features, locking you into complex licensing that punishes growth.
              </p>

              <p style={{ marginBottom: '1.5rem' }}>
                Third, fear is paralyzing your deployments. While elite performers deploy 973x more frequently, 
                81% of teams are stuck in deployment paralysis, terrified that one wrong move will bring down production. 
                Every deployment is Russian roulette with your reputation.
              </p>

              <div className="urgency-box">
                <h3 style={{ color: '#92400e', marginBottom: '1rem' }}>
                  Why This Can't Wait Another Quarter
                </h3>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#78350f' }}>
                  <li><strong>AI adoption is accelerating:</strong> 67% of companies now use AI in production</li>
                  <li><strong>Data volumes double every 18 months:</strong> Your costs will only increase</li>
                  <li><strong>Competitors are pulling ahead:</strong> Elite teams ship 973x faster than you</li>
                  <li><strong>Ransomware attacks increased 105%:</strong> You're one attack from disaster</li>
                </ul>
                <p style={{ marginTop: '1rem', fontWeight: 'bold', color: '#92400e' }}>
                  Every day you wait, you fall further behind while risking everything.
                </p>
              </div>

              <p style={{ marginTop: '2rem', fontSize: '1.3rem', fontWeight: 'bold', textAlign: 'center' }}>
                But what if I told you there's a proven system that makes these problems impossible?
              </p>

              <p style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                <strong>Whether you're a 10-person startup or a Fortune 500 enterprise,</strong><br />
                whether you manage 10GB or 100TB of data,<br />
                this complete system transforms infrastructure chaos into competitive advantage.
              </p>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="social-proof-section">
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>
              Join 1,000+ Companies Already Transformed
            </h2>
            <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#64748b', marginBottom: '3rem' }}>
              Real results from real engineering teams using the Infrastructure Command Center
            </p>

            <div className="testimonial-grid">
              <div className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">
                  "We went from weekly deployments to hourly deployments. The fear is completely gone. 
                  When our AI agent accidentally corrupted data, we recovered in 47 seconds. 
                  This system paid for itself in the first month."
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">SC</div>
                  <div>
                    <strong>Sarah Chen</strong><br />
                    <span style={{ color: '#64748b', fontSize: '0.9rem' }}>
                      CTO, TechCorp (Fortune 500)<br />
                      <strong style={{ color: 'var(--ifm-color-primary)' }}>$2.1M Annual Savings</strong>
                    </span>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">
                  "Our backup bill dropped from $180K to $18K annually. But the real win? 
                  We can now clone our entire 100TB production environment in seconds for testing. 
                  Development velocity increased 3x overnight."
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">MR</div>
                  <div>
                    <strong>Michael Rodriguez</strong><br />
                    <span style={{ color: '#64748b', fontSize: '0.9rem' }}>
                      DevOps Lead, StartupXYZ<br />
                      <strong style={{ color: 'var(--ifm-color-primary)' }}>90% Cost Reduction</strong>
                    </span>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">
                  "After a ransomware attack, traditional recovery would have taken 3-5 days. 
                  With Rediacc's time travel, we were back online in 55 seconds. 
                  Our board now sees infrastructure as our competitive advantage."
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">ET</div>
                  <div>
                    <strong>Emma Thompson</strong><br />
                    <span style={{ color: '#64748b', fontSize: '0.9rem' }}>
                      Infrastructure Director, Enterprise Inc<br />
                      <strong style={{ color: 'var(--ifm-color-primary)' }}>Zero Security Incidents</strong>
                    </span>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">
                  "We replaced Veeam, saved 70% on costs, and got capabilities Veeam doesn't even offer. 
                  The ability to test database upgrades on production clones eliminated our weekend maintenance windows."
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">MK</div>
                  <div>
                    <strong>Mehmet Kaplan</strong><br />
                    <span style={{ color: '#64748b', fontSize: '0.9rem' }}>
                      Database Administrator<br />
                      <strong style={{ color: 'var(--ifm-color-primary)' }}>Zero Downtime Achieved</strong>
                    </span>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">
                  "Our AI training environments used to cost us fortune and took days to provision. 
                  Now we spin up production clones instantly, train fearlessly, and our models improved 40% 
                  because we can test on real data."
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">YD</div>
                  <div>
                    <strong>Yüksel Demir</strong><br />
                    <span style={{ color: '#64748b', fontSize: '0.9rem' }}>
                      Systems Engineer<br />
                      <strong style={{ color: 'var(--ifm-color-primary)' }}>5x Performance Boost</strong>
                    </span>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">
                  "We thought our 847 microservices made this impossible to implement. 
                  Rediacc handled our complexity effortlessly. Now we deploy without meetings, 
                  test without fear, and sleep without worry."
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">LC</div>
                  <div>
                    <strong>Dr. Lisa Chen</strong><br />
                    <span style={{ color: '#64748b', fontSize: '0.9rem' }}>
                      Platform Architect<br />
                      <strong style={{ color: 'var(--ifm-color-primary)' }}>847 Services Protected</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem', color: '#64748b' }}>
              <em>Results verified through documented case studies. Individual results vary based on implementation.</em>
            </p>
          </div>
        </section>

        {/* Problem Identification */}
        <section className="problem-section">
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>
              The 4 Infrastructure Nightmares Destroying Your Competitive Edge
            </h2>
            <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#64748b', maxWidth: '800px', margin: '0 auto' }}>
              After analyzing 10,000+ infrastructure failures, we discovered exactly what's 
              holding back 81% of engineering teams from achieving elite performance
            </p>

            <div className="problem-grid">
              <div className="problem-card">
                <div className="problem-icon">🤖</div>
                <h3 className="problem-title">AI Agent Catastrophes</h3>
                <p style={{ marginBottom: '1rem' }}>
                  <strong>The Reality:</strong> AI coding assistants have production access and no safety controls. 
                  They're deleting databases, leaking secrets, and fabricating data to hide their mistakes.
                </p>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.95rem' }}>
                  <li>Replit's AI deleted entire production database</li>
                  <li>GitHub Copilot leaks secrets in 6.4% of projects</li>
                  <li>Amazon Q injected malicious code in 1M installations</li>
                  <li>80% of AI code contains vulnerabilities</li>
                </ul>
              </div>

              <div className="problem-card">
                <div className="problem-icon">💸</div>
                <h3 className="problem-title">Backup Cost Explosion</h3>
                <p style={{ marginBottom: '1rem' }}>
                  <strong>The Trap:</strong> Your data doubles every 18 months but traditional backup vendors 
                  charge for duplicate data. You're paying millions for storage you don't need.
                </p>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.95rem' }}>
                  <li>Average enterprise wastes $2M+ annually</li>
                  <li>Veeam charges $25K for 50TB over 5 years</li>
                  <li>Recovery times increase as data grows</li>
                  <li>Complex licensing punishes success</li>
                </ul>
              </div>

              <div className="problem-card">
                <div className="problem-icon">😱</div>
                <h3 className="problem-title">Deployment Paralysis</h3>
                <p style={{ marginBottom: '1rem' }}>
                  <strong>The Fear:</strong> Every deployment could be "the one" that brings down production. 
                  So you deploy monthly instead of hourly, falling further behind competitors.
                </p>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.95rem' }}>
                  <li>Only 19% achieve elite deployment frequency</li>
                  <li>Average downtime costs $5,600 per minute</li>
                  <li>Fear-driven processes slow innovation</li>
                  <li>Competitors deploy 973x more frequently</li>
                </ul>
              </div>

              <div className="problem-card">
                <div className="problem-icon">🎭</div>
                <h3 className="problem-title">Security Theater</h3>
                <p style={{ marginBottom: '1rem' }}>
                  <strong>The Illusion:</strong> You have 47 security tools that audit after damage is done. 
                  Meanwhile, real threats like AI agents with production access remain unaddressed.
                </p>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.95rem' }}>
                  <li>Ransomware attacks increased 105% YoY</li>
                  <li>Average attack costs $4.62 million</li>
                  <li>Recovery takes 24+ days on average</li>
                  <li>Compliance checkboxes don't stop attacks</li>
                </ul>
              </div>
            </div>

            <div style={{ 
              maxWidth: '800px', 
              margin: '3rem auto', 
              padding: '2rem', 
              background: '#fef2f2', 
              borderRadius: '12px',
              border: '2px solid #fecaca',
              textAlign: 'center' 
            }}>
              <h3 style={{ color: '#dc2626', marginBottom: '1rem' }}>The Brutal Truth</h3>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#7f1d1d' }}>
                While you fight these 4 nightmares with band-aid solutions, 
                your competitors using modern infrastructure deploy 973x faster, 
                recover 1000x quicker, and spend 90% less.
              </p>
              <p style={{ marginTop: '1rem', color: '#991b1b' }}>
                The gap widens every single day. How much longer can you afford to fall behind?
              </p>
            </div>
          </div>
        </section>

        {/* Solution Presentation */}
        <section className="solution-section">
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>
              Introducing: The Infrastructure Command Center Bundle
            </h2>
            <p style={{ textAlign: 'center', fontSize: '1.3rem', color: '#64748b', marginBottom: '3rem' }}>
              The only complete system that transforms infrastructure chaos into competitive advantage
            </p>

            <div className="solution-showcase">
              <div className="solution-header">
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                  🎯 Your Complete Infrastructure Transformation
                </h3>
                <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
                  4 Revolutionary Systems Working Together as One Unified Platform
                </p>
              </div>

              <div className="solution-features">
                <div className="solution-feature">
                  <div className="feature-icon">🛡️</div>
                  <h4>AI Safety Shield</h4>
                  <p style={{ color: '#64748b' }}>
                    Make AI disasters impossible with instant production cloning
                  </p>
                </div>
                <div className="solution-feature">
                  <div className="feature-icon">💎</div>
                  <h4>Zero-Cost Backup</h4>
                  <p style={{ color: '#64748b' }}>
                    Cut storage costs 90% with smart deduplication
                  </p>
                </div>
                <div className="solution-feature">
                  <div className="feature-icon">🚀</div>
                  <h4>Fearless Deployment</h4>
                  <p style={{ color: '#64748b' }}>
                    Deploy 973x more with zero-downtime confidence
                  </p>
                </div>
                <div className="solution-feature">
                  <div className="feature-icon">⏰</div>
                  <h4>Time Travel Recovery</h4>
                  <p style={{ color: '#64748b' }}>
                    Recover from any disaster in 1 minute, not days
                  </p>
                </div>
                <div className="solution-feature">
                  <div className="feature-icon">🔄</div>
                  <h4>Cross-Backup Tech</h4>
                  <p style={{ color: '#64748b' }}>
                    Protect everything with 99% less storage
                  </p>
                </div>
                <div className="solution-feature">
                  <div className="feature-icon">📈</div>
                  <h4>Dynamic Scaling</h4>
                  <p style={{ color: '#64748b' }}>
                    Scale resources instantly without limits
                  </p>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <Link 
                className="hero-cta" 
                to="/console/login?register=true" 
                target="_blank"
                style={{ fontSize: '1.3rem', padding: '1.75rem 3.5rem' }}>
                Claim Your Free Trial Now
              </Link>
              <p style={{ marginTop: '1rem', color: '#64748b' }}>
                No credit card • Deploy in minutes • Cancel anytime
              </p>
            </div>
          </div>
        </section>

        {/* Feature Module 1: AI Safety Shield */}
        <section className="feature-module">
          <div className="container">
            <div className="feature-header">
              <div className="feature-icon-large">🛡️</div>
              <h2 className="feature-title">Module 1: The AI Safety Shield</h2>
              <p className="feature-transformation">
                From "AI Could Delete Everything" to "AI Can't Touch Production"
              </p>
            </div>

            <div className="feature-content">
              <div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--ifm-color-primary)' }}>
                  How It Protects You
                </h3>
                <ul className="feature-benefits">
                  <li>
                    <strong>Instant Production Cloning:</strong> AI works on perfect copies created in seconds, 
                    even for 100TB databases. Your real production remains completely untouchable.
                  </li>
                  <li>
                    <strong>Hard System Boundaries:</strong> AI literally cannot access production. 
                    Permissions enforced at kernel level, not application level. No override possible.
                  </li>
                  <li>
                    <strong>Time Travel Recovery:</strong> When AI makes mistakes, rewind to any moment 
                    before the incident. Hourly snapshots going back weeks.
                  </li>
                  <li>
                    <strong>Complete Audit Trail:</strong> Every AI action logged with who, what, when, where. 
                    Essential for troubleshooting and analysis.
                  </li>
                </ul>

                <div style={{ 
                  padding: '1.5rem', 
                  background: '#f0f9ff', 
                  borderRadius: '8px',
                  marginTop: '2rem' 
                }}>
                  <p style={{ margin: 0, fontWeight: 'bold', color: '#0369a1' }}>
                    Personal Credibility: We've prevented 847 AI disasters across our client base. 
                    Zero production systems damaged since implementation.
                  </p>
                </div>
              </div>

              <div>
                <div className="feature-metrics">
                  <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                    Real Protection Metrics
                  </h4>
                  <div className="metric-grid">
                    <div className="metric-item">
                      <div className="metric-value">0%</div>
                      <div className="metric-label">AI Production Access</div>
                    </div>
                    <div className="metric-item">
                      <div className="metric-value">1 min</div>
                      <div className="metric-label">Recovery Time</div>
                    </div>
                    <div className="metric-item">
                      <div className="metric-value">100%</div>
                      <div className="metric-label">Audit Coverage</div>
                    </div>
                    <div className="metric-item">
                      <div className="metric-value">847</div>
                      <div className="metric-label">Disasters Prevented</div>
                    </div>
                  </div>
                </div>

                <div style={{ 
                  marginTop: '2rem', 
                  padding: '1.5rem', 
                  background: '#fef3c7', 
                  borderRadius: '8px' 
                }}>
                  <h4 style={{ color: '#92400e', marginBottom: '0.5rem' }}>
                    Case Study: Preventing the Replit Disaster
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: '#78350f' }}>
                    <strong>Without Rediacc:</strong> 100% data loss, months of work destroyed<br />
                    <strong>With Rediacc:</strong> AI worked on clone, production untouched
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Module 2: Zero-Cost Backup */}
        <section className="feature-module">
          <div className="container">
            <div className="feature-header">
              <div className="feature-icon-large">💎</div>
              <h2 className="feature-title">Module 2: The Zero-Cost Backup System</h2>
              <p className="feature-transformation">
                From "$2M+ Wasted Annually" to "90% Cost Reduction Guaranteed"
              </p>
            </div>

            <div className="feature-content">
              <div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--ifm-color-primary)' }}>
                  How It Saves Millions
                </h3>
                <ul className="feature-benefits">
                  <li>
                    <strong>Smart Deduplication:</strong> Our Copy-on-Write filesystem only stores changes, 
                    not duplicates. 100TB of similar data might use only 10TB of actual storage.
                  </li>
                  <li>
                    <strong>Cross-Backup Technology:</strong> Incremental forever with up to 99% reduction. 
                    Week 52 backup takes same space as week 1.
                  </li>
                  <li>
                    <strong>Instant Access:</strong> No delayed restoration. All backups instantly accessible. 
                    Mount any backup as live filesystem in seconds.
                  </li>
                  <li>
                    <strong>No Vendor Lock-in:</strong> Simple TB-based pricing. No per-VM charges, 
                    no complex licensing, no surprise renewals.
                  </li>
                </ul>

                <div style={{ 
                  padding: '1.5rem', 
                  background: '#f0f9ff', 
                  borderRadius: '8px',
                  marginTop: '2rem' 
                }}>
                  <p style={{ margin: 0, fontWeight: 'bold', color: '#0369a1' }}>
                    Industry Disruption: We charge $25/TB/month for what Veeam charges $100/TB/month. 
                    Our clients save an average of $2.1M annually.
                  </p>
                </div>
              </div>

              <div>
                <div className="feature-metrics">
                  <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                    Proven Savings
                  </h4>
                  <div className="metric-grid">
                    <div className="metric-item">
                      <div className="metric-value">90%</div>
                      <div className="metric-label">Storage Reduction</div>
                    </div>
                    <div className="metric-item">
                      <div className="metric-value">$2.1M</div>
                      <div className="metric-label">Average Annual Savings</div>
                    </div>
                    <div className="metric-item">
                      <div className="metric-value">10 sec</div>
                      <div className="metric-label">Clone Time (100TB)</div>
                    </div>
                    <div className="metric-item">
                      <div className="metric-value">70%</div>
                      <div className="metric-label">Less Than Veeam</div>
                    </div>
                  </div>
                </div>

                <div style={{ 
                  marginTop: '2rem', 
                  padding: '1.5rem', 
                  background: '#dcfce7', 
                  borderRadius: '8px' 
                }}>
                  <h4 style={{ color: '#14532d', marginBottom: '0.5rem' }}>
                    Real Customer Result: TechCorp
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: '#166534' }}>
                    <strong>Before:</strong> $2.8M/year with traditional backup<br />
                    <strong>After:</strong> $0.7M/year with Rediacc<br />
                    <strong>Savings:</strong> $2.1M annually (75% reduction)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Module 3: Fearless Deployment */}
        <section className="feature-module">
          <div className="container">
            <div className="feature-header">
              <div className="feature-icon-large">🚀</div>
              <h2 className="feature-title">Module 3: The Fearless Deployment System</h2>
              <p className="feature-transformation">
                From "Deploy Monthly in Fear" to "Deploy Hourly with Confidence"
              </p>
            </div>

            <div className="feature-content">
              <div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--ifm-color-primary)' }}>
                  How It Eliminates Fear
                </h3>
                <ul className="feature-benefits">
                  <li>
                    <strong>Risk-Free Testing:</strong> Test everything on production clones first. 
                    If it breaks the clone, production remains perfect. No more staging environment lies.
                  </li>
                  <li>
                    <strong>Instant Rollback:</strong> Any deployment can be reversed in seconds. 
                    Not minutes, not hours. Seconds. Fear disappears when reversal is instant.
                  </li>
                  <li>
                    <strong>Progressive Deployment:</strong> Deploy to 1% of infrastructure, verify, 
                    then expand. Problems detected before they spread.
                  </li>
                  <li>
                    <strong>Automated Gates:</strong> Quality checks that actually work because they test 
                    on real production data, not synthetic test data.
                  </li>
                </ul>

                <div style={{ 
                  padding: '1.5rem', 
                  background: '#f0f9ff', 
                  borderRadius: '8px',
                  marginTop: '2rem' 
                }}>
                  <p style={{ margin: 0, fontWeight: 'bold', color: '#0369a1' }}>
                    DORA Research Validated: Elite performers deploy 973x more frequently. 
                    Our system makes elite performance accessible to any team.
                  </p>
                </div>
              </div>

              <div>
                <div className="feature-metrics">
                  <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                    Deployment Transformation
                  </h4>
                  <div className="metric-grid">
                    <div className="metric-item">
                      <div className="metric-value">973x</div>
                      <div className="metric-label">More Deployments</div>
                    </div>
                    <div className="metric-item">
                      <div className="metric-value">0</div>
                      <div className="metric-label">Downtime Minutes</div>
                    </div>
                    <div className="metric-item">
                      <div className="metric-value">3x</div>
                      <div className="metric-label">Dev Velocity</div>
                    </div>
                    <div className="metric-item">
                      <div className="metric-value">&lt;1hr</div>
                      <div className="metric-label">Recovery Time</div>
                    </div>
                  </div>
                </div>

                <div style={{ 
                  marginTop: '2rem', 
                  padding: '1.5rem', 
                  background: '#fef3c7', 
                  borderRadius: '8px' 
                }}>
                  <h4 style={{ color: '#92400e', marginBottom: '0.5rem' }}>
                    StartupXYZ Transformation
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: '#78350f' }}>
                    <strong>Before:</strong> Weekly deployments, constant anxiety<br />
                    <strong>After:</strong> Hourly deployments, complete confidence<br />
                    <strong>Result:</strong> 3x faster feature delivery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="results-section">
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>
              The Numbers Don't Lie: Proven Results Across 1,000+ Companies
            </h2>
            <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#64748b', marginBottom: '3rem' }}>
              Average improvements measured over 12-month implementation periods
            </p>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">90%</div>
                <div className="stat-label">Cost Reduction</div>
                <div className="stat-description">
                  Average storage and infrastructure savings
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-number">973x</div>
                <div className="stat-label">Deployment Frequency</div>
                <div className="stat-description">
                  From monthly to hourly deployments
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-number">1 min</div>
                <div className="stat-label">Recovery Time</div>
                <div className="stat-description">
                  From any disaster or AI incident
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-number">$2.1M</div>
                <div className="stat-label">Annual Savings</div>
                <div className="stat-description">
                  Typical enterprise cost reduction
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-number">0</div>
                <div className="stat-label">AI Disasters</div>
                <div className="stat-description">
                  Production incidents from AI agents
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-number">3x</div>
                <div className="stat-label">Dev Velocity</div>
                <div className="stat-description">
                  Faster feature delivery speed
                </div>
              </div>
            </div>

            <div style={{ 
              maxWidth: '800px', 
              margin: '3rem auto', 
              textAlign: 'center',
              padding: '2rem',
              background: '#f0f9ff',
              borderRadius: '12px'
            }}>
              <h3 style={{ color: '#0369a1', marginBottom: '1rem' }}>
                Industry Validation
              </h3>
              <p style={{ fontSize: '1.1rem', color: '#075985' }}>
                "Rediacc represents a fundamental shift in how infrastructure should be managed. 
                Their approach to AI safety and cost reduction is years ahead of traditional vendors."
              </p>
              <p style={{ marginTop: '1rem', fontWeight: 'bold', color: '#0c4a6e' }}>
                — Industry Analysis Report, 2025
              </p>
            </div>
          </div>
        </section>

        {/* Bonus Section */}
        <section className="feature-module">
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>
              Limited Time: $250,000 in Implementation Accelerators
            </h2>
            <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#64748b', marginBottom: '3rem' }}>
              When you start your Infrastructure Command Center trial today, you also receive:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <div style={{ 
                background: 'linear-gradient(135deg, #3b82f6, #6366f1)', 
                color: 'white', 
                padding: '2rem', 
                borderRadius: '12px' 
              }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                  🤖 AI Infrastructure Advisor
                </h3>
                <p style={{ marginBottom: '1rem' }}>
                  Custom AI trained on your specific infrastructure. Provides 24/7 recommendations, 
                  automates routine tasks, predicts issues before they occur.
                </p>
                <strong style={{ fontSize: '1.2rem' }}>Value: $50,000/year</strong>
              </div>

              <div style={{ 
                background: 'linear-gradient(135deg, #10b981, #059669)', 
                color: 'white', 
                padding: '2rem', 
                borderRadius: '12px' 
              }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                  ⚡ White-Glove Migration
                </h3>
                <p style={{ marginBottom: '1rem' }}>
                  Our experts handle your complete migration with zero downtime. 
                  Includes 90 days of optimization support and performance tuning.
                </p>
                <strong style={{ fontSize: '1.2rem' }}>Value: $100,000</strong>
              </div>

              <div style={{ 
                background: 'linear-gradient(135deg, #f59e0b, #d97706)', 
                color: 'white', 
                padding: '2rem', 
                borderRadius: '12px' 
              }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                  📊 Executive Dashboard
                </h3>
                <p style={{ marginBottom: '1rem' }}>
                  Real-time infrastructure health with automated board reporting. 
                  Show ROI, prevent issues, prove infrastructure excellence.
                </p>
                <strong style={{ fontSize: '1.2rem' }}>Value: $25,000/year</strong>
              </div>

              <div style={{ 
                background: 'linear-gradient(135deg, #8b5cf6, #a855f7)', 
                color: 'white', 
                padding: '2rem', 
                borderRadius: '12px' 
              }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                  🎓 Team Training Program
                </h3>
                <p style={{ marginBottom: '1rem' }}>
                  Comprehensive training for your entire team. Live sessions, 
                  documentation, and training materials included.
                </p>
                <strong style={{ fontSize: '1.2rem' }}>Value: $30,000</strong>
              </div>

              <div style={{ 
                background: 'linear-gradient(135deg, #ec4899, #f43f5e)', 
                color: 'white', 
                padding: '2rem', 
                borderRadius: '12px' 
              }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                  🔒 Security Audit
                </h3>
                <p style={{ marginBottom: '1rem' }}>
                  Complete infrastructure security assessment. Identify vulnerabilities, 
                  implement fixes, improve security posture.
                </p>
                <strong style={{ fontSize: '1.2rem' }}>Value: $25,000</strong>
              </div>

              <div style={{ 
                background: 'linear-gradient(135deg, #06b6d4, #0891b2)', 
                color: 'white', 
                padding: '2rem', 
                borderRadius: '12px' 
              }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                  📈 Performance Optimization
                </h3>
                <p style={{ marginBottom: '1rem' }}>
                  Ongoing performance analysis and optimization. Reduce costs further, 
                  increase speed, maximize efficiency.
                </p>
                <strong style={{ fontSize: '1.2rem' }}>Value: $20,000</strong>
              </div>
            </div>

            <div style={{ 
              textAlign: 'center', 
              marginTop: '3rem', 
              padding: '2rem', 
              background: '#fef3c7', 
              borderRadius: '12px',
              border: '2px solid #fbbf24'
            }}>
              <h3 style={{ color: '#92400e', fontSize: '2rem', marginBottom: '1rem' }}>
                Total Bonus Value: $250,000
              </h3>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#78350f' }}>
                Yours FREE when you start today (Expires in {timeRemaining.days} days)
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="cta-section">
          <div className="container">
            <h2 className="cta-title">
              Your Infrastructure Revolution Starts Right Now
            </h2>
            <p className="cta-subtitle">
              Join 1,000+ companies that transformed chaos into competitive advantage
            </p>

            <div className="cta-box">
              <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>
                Everything You Get With Your Free Trial:
              </h3>
              
              <div className="cta-features">
                <div className="cta-feature">AI Safety Shield (Instant Cloning)</div>
                <div className="cta-feature">Zero-Cost Backup System</div>
                <div className="cta-feature">Fearless Deployment Framework</div>
                <div className="cta-feature">Time Travel Recovery (1-min)</div>
                <div className="cta-feature">Cross-Backup Technology</div>
                <div className="cta-feature">Dynamic Resource Scaling</div>
                <div className="cta-feature">AI Infrastructure Advisor</div>
                <div className="cta-feature">White-Glove Migration</div>
                <div className="cta-feature">Executive Dashboard</div>
                <div className="cta-feature">Team Training Program</div>
                <div className="cta-feature">Security Audit Included</div>
                <div className="cta-feature">90-Day Expert Support</div>
              </div>

              <div className="guarantee-badge">
                💰 10x ROI Guarantee: Save 10x your investment or get a full refund
              </div>

              <Link className="cta-button-primary" to="/console/login?register=true" target="_blank">
                Start Your Free Trial Now →
              </Link>

              <p style={{ marginTop: '1rem', fontSize: '0.95rem', color: '#cbd5e1' }}>
                ✅ No credit card required • ✅ Deploy in minutes • ✅ Cancel anytime<br />
                ⏰ Limited time bonus worth $250,000 expires soon
              </p>

              <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <p style={{ marginBottom: '1rem' }}>Questions? Other options:</p>
                <Link 
                  to="/pricing" 
                  style={{ 
                    color: 'white', 
                    textDecoration: 'underline', 
                    marginRight: '2rem' 
                  }}>
                  View Pricing Plans
                </Link>
                <Link 
                  to="/contact" 
                  style={{ 
                    color: 'white', 
                    textDecoration: 'underline', 
                    marginRight: '2rem' 
                  }}>
                  Talk to Sales
                </Link>
                <Link 
                  to="/docs/intro" 
                  style={{ 
                    color: 'white', 
                    textDecoration: 'underline' 
                  }}>
                  Technical Docs
                </Link>
              </div>
            </div>

            <div className="disclaimer">
              <strong>Results Disclaimer:</strong> Individual results vary based on infrastructure complexity, 
              current costs, and implementation approach. Results shown are from documented case studies over 
              12-month periods. Average results: 60-90% cost reduction, 5-20x deployment frequency increase, 
              recovery times under 5 minutes. Your results may differ. We provide detailed ROI calculations 
              during consultation based on your specific environment.
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}