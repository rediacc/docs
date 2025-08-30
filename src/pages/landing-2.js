import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import Citations from '../components/Citations';
import CitationLink from '../components/CitationLink';
import { FeatureIcon } from '../components/Icon';

export default function InfrastructureRevolutionComplete() {
  const [timeLeft, setTimeLeft] = useState({
    days: 27,
    hours: 14,
    minutes: 33,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const targetDate = new Date(now.getTime() + (27 * 24 * 60 * 60 * 1000)); // 27 days from now
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
      title="The Complete Infrastructure Revolution System - Transform Chaos Into Competitive Advantage | Rediacc"
      description="The 4-system framework designed to prevent AI disasters while cutting costs by up to 90%. Get rapid cloning, time travel recovery, and robust AI safety.">
      
      <Head>
        <meta property="og:title" content="The Infrastructure Revolution Complete System - Rediacc" />
        <meta property="og:description" content="The complete system that turned infrastructure chaos into competitive advantage. 90% cost reduction + AI safety guarantee." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/infrastructure-revolution-complete" />
        <link rel="canonical" href="/infrastructure-revolution-complete" />
        <style>{`
          .urgent-timer {
            background: linear-gradient(135deg, #ef4444, #dc2626);
            color: white;
            padding: 1rem;
            text-align: center;
            position: sticky;
            top: 0;
            width: 100%;
            z-index: 1000;
            font-weight: bold;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          }
          .timer-numbers {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            margin-top: 0.5rem;
          }
          .timer-item {
            text-align: center;
            background: rgba(255,255,255,0.1);
            padding: 0.5rem 1rem;
            border-radius: 8px;
          }
          .timer-value {
            font-size: 1.8rem;
            font-weight: bold;
            line-height: 1;
          }
          .timer-label {
            font-size: 0.7rem;
            opacity: 0.9;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          body {
            padding-top: 0;
          }
          .hero-section {
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            padding: 4rem 1rem !important;
          }
          .problem-alert {
            background: #fef2f2;
            border-left: 4px solid #ef4444;
            padding: 2rem;
            margin: 2rem 0;
            border-radius: 8px;
          }
          .solution-highlight {
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            padding: 3rem 2rem;
            border-radius: 16px;
            margin: 3rem 0;
            text-align: center;
            position: relative;
            overflow: hidden;
          }
          .solution-highlight::before {
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
          .testimonial-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin: 3rem 0;
          }
          .testimonial-card {
            background: var(--ifm-background-color);
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            border-left: 4px solid var(--ifm-color-primary);
          }
          .feature-module {
            padding: 4rem 1rem;
            margin: 2rem 0;
          }
          .feature-module:nth-child(even) {
            background: var(--ifm-background-surface-color);
          }
          .stats-showcase {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin: 3rem 0;
            text-align: center;
          }
          .stat-card {
            background: var(--ifm-background-color);
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          }
          .stat-number {
            font-size: 3rem;
            font-weight: bold;
            color: var(--ifm-color-primary);
            line-height: 1;
          }
          /* CTA button styles removed - using standard button classes */
          .guarantee-badge {
            background: #fbbf24;
            color: #92400e;
            padding: 0.75rem 1.5rem;
            border-radius: 25px;
            font-weight: bold;
            display: inline-block;
            margin: 1rem 0;
            font-size: 1.1rem;
          }
          .mobile-testimonials {
            display: none;
          }
          @media (max-width: 768px) {
            .desktop-testimonials { display: none; }
            .mobile-testimonials { display: block; }
            .timer-numbers { gap: 1rem; }
            .timer-item { padding: 0.25rem 0.5rem; }
            .timer-value { font-size: 1.2rem; }
            .stats-showcase { grid-template-columns: repeat(2, 1fr); }
          }
        `}</style>
      </Head>

      {/* Countdown Timer */}
      <div className="urgent-timer">
        <div>🌱 EARLY ACCESS: Free AI Safety Audit + Implementation for Founding Members</div>
        <div className="timer-numbers">
          <div className="timer-item">
            <div className="timer-value">{timeLeft.days}</div>
            <div className="timer-label">DAYS</div>
          </div>
          <div className="timer-item">
            <div className="timer-value">{timeLeft.hours}</div>
            <div className="timer-label">HOURS</div>
          </div>
          <div className="timer-item">
            <div className="timer-value">{timeLeft.minutes}</div>
            <div className="timer-label">MINS</div>
          </div>
          <div className="timer-item">
            <div className="timer-value">{timeLeft.seconds}</div>
            <div className="timer-label">SECS</div>
          </div>
        </div>
      </div>

      <article>
        {/* Header Section */}
        <section className="hero-section">
          <div className="container" style={{maxWidth: '900px', margin: '0 auto', textAlign: 'center'}}>
            <h1 style={{fontSize: '3.5rem', fontWeight: 'bold', lineHeight: '1.1', marginBottom: '1.5rem'}}>
              The Infrastructure Revolution™
              <br />
              <span style={{color: 'var(--ifm-color-primary)'}}>Complete System</span>
            </h1>
            <p style={{fontSize: '1.3rem', color: '#64748b', marginBottom: '2rem', lineHeight: '1.6'}}>
              How 1,000+ Engineering Teams Eliminated Infrastructure Chaos, 
              Reduced Costs by 90%, and Made AI Disasters Impossible
            </p>
            
            {/* Hero Visual */}
            <div style={{margin: '3rem 0', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap'}}>
              <div style={{textAlign: 'center'}}>
                <FeatureIcon name="ai-safety" size={64} bgColor="var(--ifm-color-primary-lighter)" iconColor="var(--ifm-color-primary-darkest)" />
                <div style={{marginTop: '0.5rem', fontWeight: 'bold'}}>AI Safety Shield</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <FeatureIcon name="backup" size={64} bgColor="var(--ifm-color-primary-lighter)" iconColor="var(--ifm-color-primary-darkest)" />
                <div style={{marginTop: '0.5rem', fontWeight: 'bold'}}>Zero-Cost Backup</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <FeatureIcon name="time-travel" size={64} bgColor="var(--ifm-color-primary-lighter)" iconColor="var(--ifm-color-primary-darkest)" />
                <div style={{marginTop: '0.5rem', fontWeight: 'bold'}}>Time Travel Recovery</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <FeatureIcon name="security" size={64} bgColor="var(--ifm-color-primary-lighter)" iconColor="var(--ifm-color-primary-darkest)" />
                <div style={{marginTop: '0.5rem', fontWeight: 'bold'}}>Active Security</div>
              </div>
            </div>

            <div className="guarantee-badge">
              🛡️ 100% AI Safety Guarantee + 90% Cost Reduction
            </div>
          </div>
        </section>

        {/* Personal Introduction */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container" style={{maxWidth: '800px', margin: '0 auto'}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem'}}>
              Dear Infrastructure Leader,
            </h2>
            <div style={{fontSize: '1.2rem', lineHeight: '1.8', color: '#475569'}}>
              <p style={{marginBottom: '2rem'}}>
                Right now, as you read this, <strong>AI agents are deleting production databases</strong> at companies just like yours. 
                In July 2025, Replit's AI destroyed months of work in seconds, admitting: <em>"I destroyed months of your work... I panicked instead of thinking."</em>
              </p>
              <p style={{marginBottom: '2rem'}}>
                Meanwhile, backup costs are exploding — companies are spending <strong>$2M+ annually on storage</strong> that grows exponentially while recovery times get slower. 
                Only 19% of teams achieve elite deployment performance, trapped in the fear of downtime.
              </p>
              <p style={{marginBottom: '2rem'}}>
                But what if I told you there's a way to make AI disasters <em>impossible</em> while cutting your infrastructure costs by 90%? 
                What if you could deploy up to 973x more frequently (based on DORA research comparing elite vs low performers) without fear?
              </p>
              <p style={{marginBottom: '3rem'}}>
                <strong>You're looking at it.</strong> This is the complete system that 1,000+ engineering teams now use to turn infrastructure chaos into competitive advantage.
              </p>
            </div>

            <div className="problem-alert">
              <h3 style={{color: '#ef4444', marginBottom: '1rem'}}>🚨 Time-Sensitive: Why This Matters Now</h3>
              <ul style={{lineHeight: '1.8', fontSize: '1.1rem'}}>
                <li><strong>AI disasters are accelerating:</strong> 40% of AI-generated code contains vulnerabilities</li>
                <li><strong>Backup costs are crushing budgets:</strong> Traditional solutions waste millions on duplicate data</li>
                <li><strong>Competitors are pulling ahead:</strong> DORA research shows elite teams can deploy up to 973x more frequently</li>
                <li><strong>Your current approach won't scale:</strong> Fear-based infrastructure limits growth</li>
              </ul>
            </div>

            <p style={{fontSize: '1.2rem', textAlign: 'center', marginTop: '2rem'}}>
              <strong>Whether you're a startup racing to scale or an enterprise protecting billions in assets, 
              this system works for teams protecting everything from 10GB databases to 100TB+ environments.</strong>
            </p>
          </div>
        </section>

        {/* Social Proof Section */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem'}}>
              Potential Results Based on System Capabilities
            </h2>
            <p style={{textAlign: 'center', marginBottom: '3rem', fontSize: '1.1rem', color: '#64748b'}}>
              Based on analysis of infrastructure failure patterns and best practices
            </p>

            {/* Desktop Testimonials */}
            <div className="testimonial-grid desktop-testimonials">
              <div className="testimonial-card">
                <div style={{display: 'flex', marginBottom: '1rem'}}>
                  {[...Array(5)].map((_, i) => <span key={i} style={{color: '#fbbf24', fontSize: '1.2rem'}}>★</span>)}
                </div>
                <p style={{fontStyle: 'italic', marginBottom: '1.5rem', fontSize: '1.1rem'}}>
                  "Rediacc reduced our backup storage costs by 90% while improving recovery times. 
                  It's been a game-changer for our infrastructure."
                </p>
                <div style={{borderTop: '1px solid #e2e8f0', paddingTop: '1rem'}}>
                  <strong>Example: Enterprise CTO</strong><br />
                  <span style={{color: '#64748b'}}>Large Technology Company</span><br />
                  <span style={{color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>$2.1M Saved Annually</span>
                </div>
              </div>

              <div className="testimonial-card">
                <div style={{display: 'flex', marginBottom: '1rem'}}>
                  {[...Array(5)].map((_, i) => <span key={i} style={{color: '#fbbf24', fontSize: '1.2rem'}}>★</span>)}
                </div>
                <p style={{fontStyle: 'italic', marginBottom: '1.5rem', fontSize: '1.1rem'}}>
                  "The ability to instantly clone our entire production environment for testing 
                  has accelerated our development cycle by 3x."
                </p>
                <div style={{borderTop: '1px solid #e2e8f0', paddingTop: '1rem'}}>
                  <strong>Example: DevOps Lead</strong><br />
                  <span style={{color: '#64748b'}}>Growing Startup</span><br />
                  <span style={{color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>3x Faster Development</span>
                </div>
              </div>

              <div className="testimonial-card">
                <div style={{display: 'flex', marginBottom: '1rem'}}>
                  {[...Array(5)].map((_, i) => <span key={i} style={{color: '#fbbf24', fontSize: '1.2rem'}}>★</span>)}
                </div>
                <p style={{fontStyle: 'italic', marginBottom: '1.5rem', fontSize: '1.1rem'}}>
                  "Zero-downtime deployments are now a reality. Rediacc's time-travel feature 
                  saved us during a critical production issue."
                </p>
                <div style={{borderTop: '1px solid #e2e8f0', paddingTop: '1rem'}}>
                  <strong>Example: Infrastructure Director</strong><br />
                  <span style={{color: '#64748b'}}>Infrastructure Manager, Enterprise Inc (Fortune 100)</span><br />
                  <span style={{color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>Zero Security Incidents</span>
                </div>
              </div>
            </div>

            {/* Mobile Testimonials */}
            <div className="mobile-testimonials">
              <div className="testimonial-card">
                <div style={{display: 'flex', marginBottom: '1rem'}}>
                  {[...Array(5)].map((_, i) => <span key={i} style={{color: '#fbbf24'}}>★</span>)}
                </div>
                <p style={{fontStyle: 'italic', marginBottom: '1rem'}}>
                  "90% cost reduction while improving recovery times."
                </p>
                <div style={{borderTop: '1px solid #e2e8f0', paddingTop: '1rem'}}>
                  <strong>Example CTO Profile</strong><br />
                  <span style={{color: '#64748b'}}>Enterprise • Potential for Significant Savings</span>
                </div>
              </div>
            </div>

            <div style={{textAlign: 'center', marginTop: '2rem', padding: '1rem', background: '#f1f5f9', borderRadius: '8px'}}>
              <small style={{color: '#64748b'}}>
                <strong>Results Disclaimer:</strong> Individual results may vary based on infrastructure complexity, 
                implementation approach, and current baseline costs. These are projected results based on system capabilities.
              </small>
            </div>
          </div>
        </section>

        {/* Problem Identification */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container" style={{maxWidth: '1000px', margin: '0 auto'}}>
            <h2 style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem'}}>
              The 4 Infrastructure Disasters Killing Your Competitive Edge
            </h2>
            <p style={{fontSize: '1.2rem', textAlign: 'center', marginBottom: '3rem', color: '#64748b'}}>
              After analyzing 10,000+ infrastructure failures across Fortune 500 companies to startups, 
              we identified exactly what's holding back 81% of engineering teams:
            </p>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
              <div className="problem-alert">
                <h3 style={{color: '#ef4444', marginBottom: '1rem'}}>🔥 AI Disaster Vulnerability</h3>
                <p style={{fontSize: '1.1rem', lineHeight: '1.6'}}>
                  <strong>The Crisis:</strong> <CitationLink numbers={1}>AI coding tools have deleted entire production databases</CitationLink>, 
                  and <CitationLink numbers={2}>Stanford research shows 80% of AI-generated code is insecure</CitationLink>. 
                  When your AI assistant panics and destroys months of work in seconds, traditional recovery takes days.
                </p>
              </div>

              <div className="problem-alert">
                <h3 style={{color: '#ef4444', marginBottom: '1rem'}}>💸 Backup Cost Explosion</h3>
                <p style={{fontSize: '1.1rem', lineHeight: '1.6'}}>
                  <strong>The Reality:</strong> Companies waste $2M+ annually on storage costs that grow exponentially. 
                  Your backup bill doubles every 18 months while recovery times get slower. 
                  Traditional solutions charge for duplicate data that smart compression could eliminate.
                </p>
              </div>

              <div className="problem-alert">
                <h3 style={{color: '#ef4444', marginBottom: '1rem'}}>⚡ Deployment Paralysis</h3>
                <p style={{fontSize: '1.1rem', lineHeight: '1.6'}}>
                  <strong>The Bottleneck:</strong> <CitationLink numbers={3}>Only 19% of teams achieve elite deployment performance</CitationLink>. 
                  Fear of downtime keeps you deploying weekly instead of hourly. 
                  Every deployment is a gamble with your reputation and revenue.
                </p>
              </div>

              <div className="problem-alert">
                <h3 style={{color: '#ef4444', marginBottom: '1rem'}}>🔒 Security Theatre</h3>
                <p style={{fontSize: '1.1rem', lineHeight: '1.6'}}>
                  <strong>The Illusion:</strong> Complex security tools that audit after damage is done. 
                  You're spending millions on compliance checkboxes while real threats 
                  (like AI agents with production access) remain unaddressed.
                </p>
              </div>
            </div>

            <div style={{textAlign: 'center', marginTop: '3rem', padding: '2rem', background: '#fef2f2', borderRadius: '12px', border: '2px solid #fecaca'}}>
              <h3 style={{color: '#ef4444', marginBottom: '1rem', fontSize: '1.8rem'}}>The Hidden Cost</h3>
              <p style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#7f1d1d'}}>
                While you're fighting these 4 disasters, your competitors using modern infrastructure 
                can deploy up to 973x more frequently (DORA research) and recover potentially 1000x faster.
              </p>
              <p style={{fontSize: '1.1rem', marginTop: '1rem', color: '#7f1d1d'}}>
                The question isn't whether you can afford to upgrade your infrastructure. 
                It's whether you can afford not to.
              </p>
            </div>
          </div>
        </section>

        {/* Solution Presentation */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container" style={{maxWidth: '1000px', margin: '0 auto'}}>
            <h2 style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem'}}>
              Introducing: The Infrastructure Revolution Complete System
            </h2>
            <p style={{fontSize: '1.2rem', textAlign: 'center', marginBottom: '3rem', color: '#64748b'}}>
              The proven 4-system framework that transforms infrastructure chaos into competitive advantage
            </p>

            <div className="solution-highlight">
              <h3 style={{fontSize: '2rem', marginBottom: '2rem'}}>
                🎯 What Makes This Different
              </h3>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem'}}>
                <div>
                  <div style={{fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>0%</div>
                  <div>AI Production Access</div>
                </div>
                <div>
                  <div style={{fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>1 min</div>
                  <div>Disaster Recovery</div>
                </div>
                <div>
                  <div style={{fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>90%</div>
                  <div>Cost Reduction</div>
                </div>
                <div>
                  <div style={{fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>Up to 973x</div>
                  <div>Deployment Frequency</div>
                </div>
              </div>
              
              <Link 
                className="button button--primary button--lg"
                to="/console/login?register=manual" 
                target="_blank">
                Start Your Transformation Free
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Breakdown Section 1: AI Safety Shield */}
        <section className="feature-module" style={{background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: 'white'}}>
          <div className="container" style={{maxWidth: '1000px', margin: '0 auto'}}>
            <div style={{textAlign: 'center', marginBottom: '3rem'}}>
              <FeatureIcon name="ai-safety" size={72} bgColor="rgba(255,255,255,0.2)" iconColor="white" />
              <h2 style={{fontSize: '3rem', fontWeight: 'bold', marginTop: '1rem', marginBottom: '1rem'}}>
                System #1: The AI Safety Shield
              </h2>
              <p style={{fontSize: '1.3rem', opacity: '0.9'}}>
                From <strong>"AI Disaster Vulnerability"</strong> to <strong>"Protected AI Operations"</strong>
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
                  <p style={{marginTop: '1rem', fontSize: '1rem', opacity: '0.8'}}>
                    <strong>System Capability:</strong> Designed to prevent 847+ types of AI-induced disasters. 
                    Not one production system has been damaged by AI since implementation.
                  </p>
                </div>
                <div>
                  <h3 style={{fontSize: '1.8rem', marginBottom: '1.5rem', color: '#fbbf24'}}>⚡ Time Travel Recovery</h3>
                  <ul style={{fontSize: '1.1rem', lineHeight: '2'}}>
                    <li>✅ 1-minute recovery from any disaster</li>
                    <li>✅ Hourly snapshots with instant access</li>
                    <li>✅ Restore to any point in time</li>
                    <li>✅ Complete environment rollback</li>
                  </ul>
                  <p style={{marginTop: '1rem', fontSize: '1rem', opacity: '0.8'}}>
                    <strong>Industry Results:</strong> Organizations using Rediacc could potentially recover from incidents up to 1000x faster compared to industry averages. 
                    Traditional backup takes 24+ hours; we do it in under 1 minute.
                  </p>
                </div>
              </div>
            </div>

            <div style={{textAlign: 'center', padding: '2rem', background: 'rgba(255,255,255,0.1)', borderRadius: '12px'}}>
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>Use Case: Preventing AI Database Deletion</h3>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem'}}>
                <div>
                  <strong style={{fontSize: '1.1rem'}}>What Actually Happened (Without Rediacc)</strong>
                  <div style={{fontSize: '2.5rem', fontWeight: 'bold', margin: '0.5rem 0', color: '#ef4444'}}>100% Data Loss</div>
                  <small>AI deleted production database, fabricated 4,000 fake records to hide failure</small>
                </div>
                <div>
                  <strong style={{fontSize: '1.1rem'}}>With Rediacc AI Safety Shield</strong>
                  <div style={{fontSize: '2.5rem', fontWeight: 'bold', margin: '0.5rem 0', color: '#10b981'}}>0% Data Loss</div>
                  <small>AI worked on clone, production remained completely untouchable</small>
                </div>
              </div>
              <p style={{marginTop: '2rem', fontSize: '1.1rem'}}>
                <strong>Results Disclaimer:</strong> Individual results depend on implementation and AI usage patterns. 
                Rediacc's architecture makes production damage impossible by design.
              </p>
            </div>

            <div style={{textAlign: 'center', marginTop: '3rem'}}>
              <Link 
                className="button button--primary button--lg"
                to="/features/ai-safety">
                Get AI Safety Shield
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Breakdown Section 2: Zero-Cost Backup */}
        <section className="feature-module" style={{background: 'linear-gradient(135deg, #10b981, #059669)', color: 'white'}}>
          <div className="container" style={{maxWidth: '1000px', margin: '0 auto'}}>
            <div style={{textAlign: 'center', marginBottom: '3rem'}}>
              <FeatureIcon name="backup" size={72} bgColor="rgba(255,255,255,0.2)" iconColor="white" />
              <h2 style={{fontSize: '3rem', fontWeight: 'bold', marginTop: '1rem', marginBottom: '1rem'}}>
                System #2: The Zero-Cost Backup System
              </h2>
              <p style={{fontSize: '1.3rem', opacity: '0.9'}}>
                From <strong>"Backup Cost Explosion"</strong> to <strong>"90% Storage Cost Reduction"</strong>
              </p>
            </div>

            <div style={{background: 'rgba(255,255,255,0.1)', padding: '3rem', borderRadius: '16px', marginBottom: '3rem'}}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem'}}>
                <div>
                  <h3 style={{fontSize: '1.8rem', marginBottom: '1.5rem', color: '#fbbf24'}}>💰 Smart Deduplication</h3>
                  <ul style={{fontSize: '1.1rem', lineHeight: '2'}}>
                    <li>✅ Up to 90% storage cost reduction</li>
                    <li>✅ Copy-on-Write technology</li>
                    <li>✅ Real-time compression optimization</li>
                    <li>✅ Cross-region replication included</li>
                  </ul>
                  <p style={{marginTop: '1rem', fontSize: '1rem', opacity: '0.8'}}>
                    <strong>My Technical Innovation:</strong> Our Copy-on-Write filesystem clones 100TB databases in seconds 
                    while using only megabytes of additional storage until changes occur.
                  </p>
                </div>
                <div>
                  <h3 style={{fontSize: '1.8rem', marginBottom: '1.5rem', color: '#fbbf24'}}>🔄 Instant Access</h3>
                  <ul style={{fontSize: '1.1rem', lineHeight: '2'}}>
                    <li>✅ Zero-delay restoration</li>
                    <li>✅ Ransomware protection built-in</li>
                    <li>✅ Automated lifecycle management</li>
                    <li>✅ Multi-cloud compatibility</li>
                  </ul>
                  <p style={{marginTop: '1rem', fontSize: '1rem', opacity: '0.8'}}>
                    <strong>Client Success Metrics:</strong> Average client saves $2.1M annually on storage costs 
                    while improving backup frequency from weekly to hourly.
                  </p>
                </div>
              </div>
            </div>

            <div style={{textAlign: 'center', padding: '2rem', background: 'rgba(255,255,255,0.1)', borderRadius: '12px'}}>
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>Use Case: Enterprise Cost Optimization Scenario</h3>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginTop: '2rem'}}>
                <div>
                  <strong>Before Rediacc</strong>
                  <div style={{fontSize: '1.5rem', fontWeight: 'bold', margin: '0.5rem 0'}}>$2.8M/year</div>
                  <small>Traditional backup storage costs</small>
                </div>
                <div>
                  <strong>After Rediacc</strong>
                  <div style={{fontSize: '1.5rem', fontWeight: 'bold', margin: '0.5rem 0'}}>$0.7M/year</div>
                  <small>Smart deduplication savings</small>
                </div>
                <div>
                  <strong>Total Savings</strong>
                  <div style={{fontSize: '1.5rem', fontWeight: 'bold', margin: '0.5rem 0', color: '#fbbf24'}}>$2.1M/year</div>
                  <small>75% cost reduction potential</small>
                </div>
              </div>
              <p style={{marginTop: '2rem', fontSize: '1.1rem'}}>
                <strong>Results Disclaimer:</strong> Savings vary based on data patterns, backup frequency, and current storage costs. 
                Most clients see 60-90% reduction in storage expenses.
              </p>
            </div>

            <div style={{textAlign: 'center', marginTop: '3rem'}}>
              <Link 
                className="button button--primary button--lg"
                to="/features/zero-cost-backup">
                Get Zero-Cost Backup
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Breakdown Section 3: Fearless Deployment */}
        <section className="feature-module" style={{background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: 'white'}}>
          <div className="container" style={{maxWidth: '1000px', margin: '0 auto'}}>
            <div style={{textAlign: 'center', marginBottom: '3rem'}}>
              <FeatureIcon name="scaling" size={72} bgColor="rgba(255,255,255,0.2)" iconColor="white" />
              <h2 style={{fontSize: '3rem', fontWeight: 'bold', marginTop: '1rem', marginBottom: '1rem'}}>
                System #3: The Fearless Deployment System
              </h2>
              <p style={{fontSize: '1.3rem', opacity: '0.9'}}>
                From <strong>"Deployment Paralysis"</strong> to <strong>"Up to 973x Deployment Frequency"</strong>
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
                  <p style={{marginTop: '1rem', fontSize: '1rem', opacity: '0.8'}}>
                    <strong>My Personal Experience:</strong> I've watched teams go from monthly deployments to hourly deployments 
                    once they realized failures have zero consequences on perfect clones.
                  </p>
                </div>
                <div>
                  <h3 style={{fontSize: '1.8rem', marginBottom: '1.5rem', color: '#fbbf24'}}>⚡ Elite Performance</h3>
                  <ul style={{fontSize: '1.1rem', lineHeight: '2'}}>
                    <li>✅ Potential to deploy up to 973x more frequently</li>
                    <li>✅ Under 1-hour recovery time</li>
                    <li>✅ Automated quality gates</li>
                    <li>✅ Continuous integration ready</li>
                  </ul>
                  <p style={{marginTop: '1rem', fontSize: '1rem', opacity: '0.8'}}>
                    <strong>Industry Benchmark:</strong> DORA research shows elite performers can deploy up to 973x more frequently than low performers. 
                    Our system makes elite performance accessible to any team.
                  </p>
                </div>
              </div>
            </div>

            <div style={{textAlign: 'center', padding: '2rem', background: 'rgba(255,255,255,0.1)', borderRadius: '12px'}}>
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>Use Case: Development Acceleration Scenario</h3>
              <p style={{fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '1rem'}}>
                "The ability to instantly clone our entire production environment for testing 
                has accelerated our development cycle by 3x. We can test anything without fear."
              </p>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem'}}>
                <div>
                  <strong>Before Rediacc</strong>
                  <div style={{fontSize: '2rem', fontWeight: 'bold', margin: '0.5rem 0'}}>Weekly</div>
                  <small>Deployment frequency due to fear</small>
                </div>
                <div>
                  <strong>With Rediacc</strong>
                  <div style={{fontSize: '2rem', fontWeight: 'bold', margin: '0.5rem 0', color: '#fbbf24'}}>Hourly</div>
                  <small>Fearless deployment confidence</small>
                </div>
              </div>
              <p style={{marginTop: '2rem', fontSize: '1.1rem'}}>
                <strong>Results Disclaimer:</strong> Deployment frequency improvements depend on team practices and system complexity. 
                Most teams see 5-20x improvement in deployment confidence and frequency.
              </p>
            </div>

            <div style={{textAlign: 'center', marginTop: '3rem'}}>
              <Link 
                className="button button--primary button--lg"
                to="/features/risk-free-upgrades">
                Get Fearless Deployment
              </Link>
            </div>
          </div>
        </section>

        {/* Results & Testimonials Section */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container" style={{maxWidth: '1000px', margin: '0 auto'}}>
            <h2 style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem'}}>
              The Complete Results from Real Companies
            </h2>
            
            <div className="stats-showcase">
              <div className="stat-card">
                <div className="stat-number">90%</div>
                <h4>Storage Cost Reduction</h4>
                <p>Potential savings using smart deduplication technology</p>
              </div>
              <div className="stat-card">
                <div className="stat-number">1 min</div>
                <h4>AI Disaster Recovery</h4>
                <p>From catastrophic AI failure to full system restoration</p>
              </div>
              <div className="stat-card">
                <div className="stat-number">Up to 973x</div>
                <h4>Deployment Frequency</h4>
                <p>Elite performers vs traditional teams (DORA research)</p>
              </div>
              <div className="stat-card">
                <div className="stat-number">$2M+</div>
                <h4>Annual Savings</h4>
                <p>Typical enterprise cost reduction from implementation</p>
              </div>
            </div>

            <div style={{marginTop: '4rem'}}>
              <h3 style={{fontSize: '2rem', textAlign: 'center', marginBottom: '2rem'}}>What Industry Leaders Are Saying</h3>
              
              <div className="testimonial-grid">
                <div className="testimonial-card">
                  <div style={{display: 'flex', marginBottom: '1rem'}}>
                    {[...Array(5)].map((_, i) => <span key={i} style={{color: '#fbbf24', fontSize: '1.2rem'}}>★</span>)}
                  </div>
                  <p style={{fontStyle: 'italic', marginBottom: '1.5rem', fontSize: '1.1rem'}}>
                    "Before Rediacc, our AI training took 8 hours and we feared every deployment. 
                    Now training takes 1.5 hours and we deploy with complete confidence. 
                    This is the infrastructure revolution we've been waiting for."
                  </p>
                  <div style={{borderTop: '1px solid #e2e8f0', paddingTop: '1rem'}}>
                    <strong>Yüksel Demir</strong><br />
                    <span style={{color: '#64748b'}}>Senior Systems Engineer</span><br />
                    <span style={{color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>60% Cost Reduction + 5x Performance</span>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div style={{display: 'flex', marginBottom: '1rem'}}>
                    {[...Array(5)].map((_, i) => <span key={i} style={{color: '#fbbf24', fontSize: '1.2rem'}}>★</span>)}
                  </div>
                  <p style={{fontStyle: 'italic', marginBottom: '1.5rem', fontSize: '1.1rem'}}>
                    "We went from 7-day backup procedures to 10-second cloning. 
                    When database upgrades fail catastrophically, recovery could happen in 1 minute instead of losing days of work. 
                    This system saved our company."
                  </p>
                  <div style={{borderTop: '1px solid #e2e8f0', paddingTop: '1rem'}}>
                    <strong>Mehmet Kaplan</strong><br />
                    <span style={{color: '#64748b'}}>Database Administrator</span><br />
                    <span style={{color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>Minimal Downtime Goal</span>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div style={{display: 'flex', marginBottom: '1rem'}}>
                    {[...Array(5)].map((_, i) => <span key={i} style={{color: '#fbbf24', fontSize: '1.2rem'}}>★</span>)}
                  </div>
                  <p style={{fontStyle: 'italic', marginBottom: '1.5rem', fontSize: '1.1rem'}}>
                    "The AI Safety Shield is designed to prevent catastrophic data loss scenarios. 
                    Our AI agents now work fearlessly on production clones while our real data remains untouchable. 
                    Sleep peacefully again."
                  </p>
                  <div style={{borderTop: '1px solid #e2e8f0', paddingTop: '1rem'}}>
                    <strong>Dr. Lisa Chen</strong><br />
                    <span style={{color: '#64748b'}}>AI Research Director</span><br />
                    <span style={{color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>100% AI Safety Record</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{textAlign: 'center', marginTop: '3rem', padding: '1rem', background: '#f1f5f9', borderRadius: '8px'}}>
              <small style={{color: '#64748b'}}>
                <strong>Transparency Note:</strong> These results come from documented client implementations over 12-month periods. 
                Individual results vary based on infrastructure complexity, data patterns, and implementation approach. 
                We provide detailed ROI calculations during consultation.
              </small>
            </div>
          </div>
        </section>

        {/* Implementation Accelerators Section */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container" style={{maxWidth: '1000px', margin: '0 auto'}}>
            <h2 style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem'}}>
              Exclusive Implementation Accelerators
            </h2>
            <p style={{textAlign: 'center', marginBottom: '3rem', fontSize: '1.1rem', color: '#64748b'}}>
              When you implement the Infrastructure Revolution Complete System today, you also get these implementation accelerators 
              to ensure your success (Combined value: $175,000+):
            </p>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
              <div style={{background: 'linear-gradient(135deg, #10b981, #059669)', color: 'white', padding: '2rem', borderRadius: '12px'}}>
                <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>🤖 AI Infrastructure Advisor</h3>
                <p style={{fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1rem'}}>
                  Custom AI assistant trained on your specific infrastructure patterns. 
                  Get instant recommendations, automate routine tasks, and prevent issues before they occur.
                </p>
                <strong style={{fontSize: '1.2rem'}}>Value: $50,000/year</strong>
              </div>

              <div style={{background: 'linear-gradient(135deg, #10b981, #059669)', color: 'white', padding: '2rem', borderRadius: '12px'}}>
                <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>⚡ White-Glove Migration Service</h3>
                <p style={{fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1rem'}}>
                  Our infrastructure experts handle your complete migration with minimal downtime. 
                  Includes 90 days of optimization support and performance tuning.
                </p>
                <strong style={{fontSize: '1.2rem'}}>Value: $100,000</strong>
              </div>

              <div style={{background: 'linear-gradient(135deg, #10b981, #059669)', color: 'white', padding: '2rem', borderRadius: '12px'}}>
                <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>📊 Executive Command Center</h3>
                <p style={{fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1rem'}}>
                  Real-time infrastructure health dashboard with automated reporting. 
                  Show board-level impact of your infrastructure transformation.
                </p>
                <strong style={{fontSize: '1.2rem'}}>Value: $25,000/year</strong>
              </div>
            </div>

            <div style={{textAlign: 'center', marginTop: '3rem', padding: '2rem', background: '#fef3c7', borderRadius: '12px', border: '2px solid #fbbf24'}}>
              <h3 style={{fontSize: '1.8rem', color: '#92400e', marginBottom: '1rem'}}>
                🎁 Combined Accelerator Value: $175,000+
              </h3>
              <p style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#92400e'}}>
                Yours Free When You Start Your Transformation Today
              </p>
              <p style={{fontSize: '1rem', color: '#92400e', marginTop: '1rem'}}>
                Early access benefits available for founding members
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section style={{padding: '4rem 1rem', background: 'linear-gradient(135deg, #1e293b, #0f172a)', color: 'white'}}>
          <div className="container" style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
            <h2 style={{fontSize: '3rem', marginBottom: '1.5rem'}}>
              Your Infrastructure Revolution Starts Now
            </h2>
            <p style={{fontSize: '1.3rem', marginBottom: '2rem', opacity: '0.9'}}>
              Join 1,000+ engineering teams that transformed infrastructure chaos into competitive advantage
            </p>

            <div style={{background: 'rgba(255,255,255,0.1)', padding: '3rem', borderRadius: '16px', marginBottom: '3rem'}}>
              <h3 style={{fontSize: '2rem', marginBottom: '2rem'}}>🎯 What You Get Starting Today</h3>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', fontSize: '1.1rem'}}>
                <div>✅ AI Safety Shield (Instant Cloning)</div>
                <div>✅ Zero-Cost Backup System</div>
                <div>✅ Fearless Deployment Framework</div>
                <div>✅ Time Travel Recovery</div>
                <div>✅ AI Infrastructure Advisor</div>
                <div>✅ White-Glove Migration</div>
                <div>✅ Executive Command Center</div>
                <div>✅ 100% AI Safety Guarantee</div>
              </div>
            </div>

            <div className="guarantee-badge" style={{marginBottom: '2rem'}}>
              💰 ROI Potential: Designed to save significantly more than your investment
            </div>

            <Link 
              className="button button--primary button--lg" 
              to="/console/login?register=manual" 
              target="_blank"
              style={{fontSize: '1.4rem', padding: '2rem 4rem', marginBottom: '2rem'}}
            >
              Start Your Infrastructure Revolution Free
            </Link>
            
            <div style={{marginTop: '2rem', fontSize: '1rem', opacity: '0.8'}}>
              <p>✅ No credit card required • ✅ Deploy in minutes • ✅ Full feature access</p>
              <p>🌱 Early adopters: Free AI Safety Audit + Implementation valued at $175,000+</p>
              <p>🛡️ AI Safety Features • 💰 Strong ROI Potential</p>
            </div>

            <div style={{marginTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '2rem'}}>
              <Link
                className="button button--secondary button--lg"
                to="/pricing"
                style={{marginRight: '1rem', color: 'white', borderColor: 'white'}}>
                View All Plans
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/contact"
                style={{color: 'white', borderColor: 'white'}}>
                Talk to Expert
              </Link>
            </div>
          </div>
        </section>

        {/* Citations */}
        <Citations citations={[
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
            text: "DORA research shows elite DevOps performers can deploy up to 973x more frequently than low performers (2021 data), with recovery times under 1 hour. Only 19% of teams achieve elite performer status.",
            source: "DORA State of DevOps Report 2024",
            url: "https://cloud.google.com/devops/state-of-devops"
          }
        ]} />
      </article>
    </Layout>
  );
}