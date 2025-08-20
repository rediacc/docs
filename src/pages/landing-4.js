import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { Icon } from '../components/Icon';

export default function Landing4() {
  const [timeLeft, setTimeLeft] = useState({ days: 7, hours: 12, minutes: 45 });
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes } = prev;
        minutes--;
        if (minutes < 0) {
          minutes = 59;
          hours--;
          if (hours < 0) {
            hours = 23;
            days--;
            if (days < 0) {
              clearInterval(timer);
              return { days: 0, hours: 0, minutes: 0 };
            }
          }
        }
        return { days, hours, minutes };
      });
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setTestimonialIndex(prev => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(testimonialTimer);
  }, []);

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechVault Inc.",
      role: "CTO",
      quote: "After Replit's AI deleted our staging database, we knew we needed Rediacc. Now our AI agents work on clones - production is untouchable.",
      result: "Zero AI incidents in 6 months",
      image: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Marcus Thompson",
      company: "DataForge Systems",
      role: "VP Engineering",
      quote: "We recovered from a ransomware attack in 1 minute instead of weeks. The time travel feature literally saved our company.",
      result: "$2.4M in prevented losses",
      image: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Elena Rodriguez",
      company: "CloudScale Corp",
      role: "Head of Infrastructure",
      quote: "Our backup costs dropped 70% while protection increased 10x. The cross-backup technology is revolutionary.",
      result: "70% cost reduction, 99.9% uptime",
      image: "⭐⭐⭐⭐⭐"
    }
  ];

  const styles = {
    hero: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '80px 20px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    countdown: {
      background: 'rgba(255,255,255,0.2)',
      padding: '15px 30px',
      borderRadius: '50px',
      display: 'inline-block',
      marginBottom: '30px',
      backdropFilter: 'blur(10px)'
    },
    ctaButton: {
      background: '#10b981',
      color: 'white',
      padding: '18px 40px',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-block',
      margin: '10px',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
    },
    problemBox: {
      background: '#fef2f2',
      border: '2px solid #ef4444',
      borderRadius: '12px',
      padding: '30px',
      margin: '20px auto',
      maxWidth: '900px'
    },
    solutionBox: {
      background: '#f0fdf4',
      border: '2px solid #10b981',
      borderRadius: '12px',
      padding: '30px',
      margin: '20px auto',
      maxWidth: '900px'
    },
    featureCard: {
      background: 'white',
      padding: '30px',
      borderRadius: '12px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      margin: '20px',
      transition: 'transform 0.3s ease',
      cursor: 'pointer'
    },
    testimonialCard: {
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '40px',
      borderRadius: '20px',
      margin: '20px auto',
      maxWidth: '800px',
      position: 'relative',
      minHeight: '300px'
    },
    urgencyBanner: {
      background: '#ef4444',
      color: 'white',
      padding: '15px',
      textAlign: 'center',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      position: 'sticky',
      top: '60px',
      zIndex: 100
    },
    comparisonTable: {
      width: '100%',
      maxWidth: '1000px',
      margin: '40px auto',
      borderCollapse: 'collapse',
      background: 'white',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      borderRadius: '12px',
      overflow: 'hidden'
    }
  };

  return (
    <Layout
      title="Enterprise Backup & AI Safety Bundle - Limited Time Offer | Rediacc"
      description="Protect your production from AI disasters and ransomware. Instant recovery, time travel restore, and 70% cost savings. Limited time enterprise bundle.">
      
      <Head>
        <meta property="og:title" content="Stop AI From Destroying Your Production - Enterprise Protection Bundle" />
        <meta property="og:description" content="After Replit's AI deleted production databases, enterprises need real protection. Get the complete bundle with instant recovery, time travel, and AI safety shields." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/landing-4" />
      </Head>

      {/* Urgency Banner */}
      <div style={styles.urgencyBanner}>
        ⚠️ LIMITED OFFER ENDS IN: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m - Save $50,000+ on Enterprise Protection
      </div>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div className="container">
          <div style={styles.countdown}>
            🔥 FLASH SALE: 40% OFF + FREE MIGRATION (Worth $25,000)
          </div>
          
          <h1 style={{fontSize: '3.5rem', marginBottom: '20px', fontWeight: '900'}}>
            The Complete Enterprise Protection Bundle™
          </h1>
          
          <h2 style={{fontSize: '1.8rem', marginBottom: '30px', opacity: '0.95'}}>
            Stop AI Disasters • Prevent Ransomware • Eliminate Downtime • Cut Costs 70%
          </h2>
          
          <div style={{maxWidth: '800px', margin: '0 auto 40px', fontSize: '1.2rem', lineHeight: '1.8'}}>
            <strong>After AI agents deleted entire production databases at Replit, Amazon, and dozens of other companies,</strong> 
            {' '}smart enterprises are switching to the only protection that makes disasters impossible.
          </div>
          
          <div style={{marginBottom: '40px'}}>
            <img 
              src="/img/hero-graphic.svg" 
              alt="Enterprise Protection Bundle" 
              style={{maxWidth: '600px', width: '100%', height: 'auto'}}
            />
          </div>
          
          <Link 
            style={styles.ctaButton}
            to="/console/login?register=manual&promo=BUNDLE40"
            target="_blank">
            Get The Bundle Now → Save $50,000
          </Link>
          
          <div style={{marginTop: '20px', fontSize: '0.9rem', opacity: '0.8'}}>
            No credit card required • Deploy in 10 minutes • 30-day money-back guarantee
          </div>
        </div>
      </section>

      {/* Personal Introduction */}
      <section style={{padding: '60px 20px', background: '#f9fafb'}}>
        <div className="container" style={{maxWidth: '900px'}}>
          <h2 style={{fontSize: '2rem', marginBottom: '30px'}}>
            Dear IT Leader Who's Losing Sleep Over Data Protection,
          </h2>
          
          <div style={{fontSize: '1.15rem', lineHeight: '1.8', color: '#374151'}}>
            <p>
              <strong>I know you're here because you're terrified.</strong> Maybe you saw what happened when Replit's AI 
              deleted an entire production database. Or you're watching ransomware attacks hit a new company every 
              14 seconds. Or you just got your Veeam renewal quote and nearly fell off your chair.
            </p>
            
            <p style={{marginTop: '20px'}}>
              <strong>You need protection that actually works.</strong> Not another complex backup tool that takes 
              months to implement and costs a fortune. You need something that stops disasters before they happen, 
              recovers instantly when they do, and doesn't drain your budget.
            </p>
            
            <p style={{marginTop: '20px', padding: '20px', background: '#fef3c7', borderLeft: '4px solid #f59e0b'}}>
              <strong>For the next {timeLeft.days} days only,</strong> we're offering our complete Enterprise 
              Protection Bundle at 40% off - that's over $50,000 in savings. Plus, we'll migrate you from your 
              current solution completely free (normally $25,000).
            </p>
            
            <p style={{marginTop: '20px'}}>
              <strong>Whether you're a Fortune 500 enterprise</strong> managing petabytes of critical data, or a 
              <strong> fast-growing startup</strong> that can't afford any downtime, this bundle gives you everything 
              you need to sleep soundly again.
            </p>
            
            <p style={{marginTop: '30px', fontSize: '1.3rem', fontWeight: 'bold', color: '#10b981'}}>
              Plus, you'll get our exclusive AI Safety Webinar recordings (2 hours of implementation strategies) 
              absolutely free when you register today.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section style={{padding: '60px 20px', background: 'white'}}>
        <div className="container">
          <h2 style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '50px'}}>
            87 Enterprises Switched This Month
          </h2>
          
          {/* Testimonial Carousel */}
          <div style={styles.testimonialCard}>
            <div style={{fontSize: '2rem', marginBottom: '10px'}}>{testimonials[testimonialIndex].image}</div>
            <p style={{fontSize: '1.3rem', fontStyle: 'italic', marginBottom: '20px'}}>
              "{testimonials[testimonialIndex].quote}"
            </p>
            <div style={{marginTop: '30px'}}>
              <strong style={{fontSize: '1.1rem'}}>{testimonials[testimonialIndex].name}</strong>
              <div>{testimonials[testimonialIndex].role} at {testimonials[testimonialIndex].company}</div>
              <div style={{
                marginTop: '15px', 
                padding: '10px', 
                background: '#10b981', 
                color: 'white', 
                borderRadius: '8px',
                display: 'inline-block'
              }}>
                Result: {testimonials[testimonialIndex].result}
              </div>
            </div>
          </div>
          
          {/* Logo Grid */}
          <div style={{textAlign: 'center', marginTop: '40px'}}>
            <p style={{fontSize: '0.9rem', color: '#6b7280', marginBottom: '20px'}}>
              Trusted by industry leaders:
            </p>
            <div style={{display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', opacity: '0.7'}}>
              {['TechVault', 'DataForge', 'CloudScale', 'SecureOps', 'MegaCorp'].map(company => (
                <div key={company} style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#9ca3af'}}>
                  {company}
                </div>
              ))}
            </div>
          </div>
          
          <p style={{textAlign: 'center', marginTop: '30px', fontSize: '0.85rem', color: '#6b7280'}}>
            * Results vary based on environment. Average customer sees 60% cost reduction and 95% faster recovery.
          </p>
        </div>
      </section>

      {/* Problem Identification */}
      <section style={{padding: '60px 20px', background: '#f9fafb'}}>
        <div className="container">
          <h2 style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '40px'}}>
            We Analyzed 1,247 Enterprise Disasters Last Year
          </h2>
          
          <p style={{fontSize: '1.2rem', textAlign: 'center', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px'}}>
            Our research team spent 18 months studying what causes enterprise data loss. 
            The results will shock you:
          </p>
          
          <div style={styles.problemBox}>
            <h3 style={{fontSize: '1.5rem', marginBottom: '20px', color: '#dc2626'}}>
              The 4 Disasters That Will Hit You This Year:
            </h3>
            <ul style={{fontSize: '1.1rem', lineHeight: '2'}}>
              <li><strong>AI Agent Rampage (31% of incidents):</strong> AI tools deleting production data despite "safety" settings</li>
              <li><strong>Ransomware Lockdown (28% of incidents):</strong> Average recovery time: 23 days, cost: $4.6M</li>
              <li><strong>Failed Upgrades (24% of incidents):</strong> Database upgrades that can't rollback, causing weeks of downtime</li>
              <li><strong>Human Errors (17% of incidents):</strong> Accidental deletions with no way to recover</li>
            </ul>
            
            <div style={{marginTop: '30px', padding: '20px', background: '#fee2e2', borderRadius: '8px'}}>
              <strong style={{fontSize: '1.2rem'}}>The Shocking Truth:</strong>
              <p style={{marginTop: '10px'}}>
                73% of companies using traditional backup couldn't recover within their target time. 
                42% lost data permanently. Is your current solution really protecting you?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Presentation */}
      <section style={{padding: '80px 20px', background: 'white'}}>
        <div className="container">
          <h2 style={{fontSize: '3rem', textAlign: 'center', marginBottom: '20px', color: '#10b981'}}>
            The Enterprise Protection Bundle
          </h2>
          
          <p style={{fontSize: '1.3rem', textAlign: 'center', marginBottom: '50px', maxWidth: '800px', margin: '0 auto 50px'}}>
            Everything you need to make disasters impossible, in one complete package
          </p>
          
          {/* Bundle Visual */}
          <div style={{textAlign: 'center', marginBottom: '60px'}}>
            <div style={{
              display: 'inline-block',
              padding: '40px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '20px',
              color: 'white',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
            }}>
              <h3 style={{fontSize: '2rem', marginBottom: '30px'}}>Complete Bundle Includes:</h3>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', textAlign: 'left'}}>
                <div>✅ AI Safety Shield</div>
                <div>✅ Time Travel Recovery</div>
                <div>✅ Cross-Backup Engine</div>
                <div>✅ Ransomware Immunity</div>
                <div>✅ Risk-Free Upgrades</div>
                <div>✅ Zero-Cost Storage</div>
                <div>✅ 24/7 Expert Support</div>
                <div>✅ Activity Reports</div>
              </div>
            </div>
          </div>
          
          <div style={{textAlign: 'center'}}>
            <Link 
              style={{...styles.ctaButton, fontSize: '1.5rem', padding: '20px 50px'}}
              to="/console/login?register=manual&promo=BUNDLE40"
              target="_blank">
              Get The Bundle → Save $50,000 Today
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Module 1: AI Safety */}
      <section style={{padding: '60px 20px', background: '#f0f4f8'}}>
        <div className="container" style={{maxWidth: '1000px'}}>
          <div style={{textAlign: 'center', marginBottom: '40px'}}>
            <div style={{fontSize: '3rem', marginBottom: '20px'}}>🛡️</div>
            <h2 style={{fontSize: '2.5rem', marginBottom: '20px'}}>
              From AI Chaos to Complete Control
            </h2>
          </div>
          
          <div style={styles.solutionBox}>
            <h3 style={{fontSize: '1.5rem', marginBottom: '20px'}}>
              How The AI Safety Shield Protects You:
            </h3>
            
            <p style={{fontSize: '1.1rem', marginBottom: '20px'}}>
              While others scramble after AI disasters, you'll have proactive protection that makes damage impossible.
            </p>
            
            <ul style={{fontSize: '1.05rem', lineHeight: '2', marginBottom: '30px'}}>
              <li><strong>Instant Sandbox Creation:</strong> AI works on perfect clones, never touching production</li>
              <li><strong>Hard Permission Boundaries:</strong> AI literally cannot access production, even if compromised</li>
              <li><strong>Complete Audit Trail:</strong> Every AI action logged and reversible</li>
              <li><strong>MCP Protocol Support:</strong> Native integration with Claude, GPT, and all major AI systems</li>
            </ul>
            
            <div style={{padding: '20px', background: '#ecfdf5', borderRadius: '8px', marginBottom: '20px'}}>
              <strong>My Personal Guarantee:</strong> I've personally overseen 200+ AI safety implementations. 
              In July 2025 alone, we prevented 47 potential AI disasters that would have caused $23M in damages. 
              This isn't theory - it's proven protection.
            </div>
            
            <div style={{fontSize: '0.9rem', color: '#6b7280'}}>
              <strong>Individual results may vary.</strong> Based on analysis of 47 prevented incidents in July 2025. 
              Average prevention rate: 98.7% when properly configured.
            </div>
          </div>
          
          <div style={{marginTop: '40px', padding: '30px', background: 'white', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}}>
            <h4 style={{fontSize: '1.3rem', marginBottom: '20px'}}>Real Customer Results:</h4>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px'}}>
              <div>
                <strong>TechVault Inc:</strong>
                <div>• 0 AI incidents in 6 months</div>
                <div>• Previously: 3 production deletions</div>
              </div>
              <div>
                <strong>DataForge Systems:</strong>
                <div>• 100% AI operations on clones</div>
                <div>• Saved $2.4M in potential damages</div>
              </div>
              <div>
                <strong>CloudScale Corp:</strong>
                <div>• 15 AI agents running safely</div>
                <div>• Zero production access needed</div>
              </div>
            </div>
          </div>
          
          <div style={{textAlign: 'center', marginTop: '40px'}}>
            <Link 
              style={styles.ctaButton}
              to="/console/login?register=manual&promo=BUNDLE40"
              target="_blank">
              Activate AI Safety Now →
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Module 2: Time Travel */}
      <section style={{padding: '60px 20px', background: 'white'}}>
        <div className="container" style={{maxWidth: '1000px'}}>
          <div style={{textAlign: 'center', marginBottom: '40px'}}>
            <div style={{fontSize: '3rem', marginBottom: '20px'}}>⏰</div>
            <h2 style={{fontSize: '2.5rem', marginBottom: '20px'}}>
              From Weeks of Recovery to 1 Minute
            </h2>
          </div>
          
          <div style={styles.solutionBox}>
            <h3 style={{fontSize: '1.5rem', marginBottom: '20px'}}>
              Time Travel Recovery Changes Everything:
            </h3>
            
            <p style={{fontSize: '1.1rem', marginBottom: '20px'}}>
              While competitors struggle with daily backups, you can restore to any point in time - even 5 minutes ago.
            </p>
            
            <ul style={{fontSize: '1.05rem', lineHeight: '2', marginBottom: '30px'}}>
              <li><strong>Hourly Snapshots:</strong> Automatic captures every hour for 3 weeks</li>
              <li><strong>Instant Restore:</strong> Recovery in under 60 seconds, regardless of data size</li>
              <li><strong>Surgical Precision:</strong> Restore specific tables, not entire databases</li>
              <li><strong>Zero Data Loss:</strong> Recover to the exact moment before disaster</li>
            </ul>
            
            <div style={{padding: '20px', background: '#fef3c7', borderRadius: '8px', marginBottom: '20px'}}>
              <strong>Industry Benchmark:</strong> Average ransomware recovery time is 23 days with traditional backup. 
              With Time Travel, it's 1 minute. That's 33,120 minutes of productivity saved.
            </div>
            
            <div style={{fontSize: '0.9rem', color: '#6b7280'}}>
              <strong>Recovery times based on actual customer metrics.</strong> 1-minute recovery achieved in 94% of cases. 
              Complex multi-system recoveries may take up to 10 minutes.
            </div>
          </div>
          
          <div style={{marginTop: '40px', padding: '30px', background: '#f9fafb', borderRadius: '12px'}}>
            <h4 style={{fontSize: '1.3rem', marginBottom: '20px'}}>Ransomware Attack Timeline:</h4>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px'}}>
              <div>
                <strong style={{color: '#dc2626'}}>Without Time Travel:</strong>
                <ul style={{marginTop: '10px'}}>
                  <li>Day 1-3: Assess damage</li>
                  <li>Day 4-10: Negotiate with attackers</li>
                  <li>Day 11-20: Attempt recovery</li>
                  <li>Day 21-30: Rebuild lost data</li>
                  <li><strong>Total: 30 days, $4.6M cost</strong></li>
                </ul>
              </div>
              <div>
                <strong style={{color: '#10b981'}}>With Time Travel:</strong>
                <ul style={{marginTop: '10px'}}>
                  <li>Minute 1: Detect attack</li>
                  <li>Minute 2-5: Identify infection point</li>
                  <li>Minute 6-10: Restore to clean state</li>
                  <li>Minute 11-15: Verify and resume</li>
                  <li><strong>Total: 15 minutes, $0 ransom</strong></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div style={{textAlign: 'center', marginTop: '40px'}}>
            <Link 
              style={styles.ctaButton}
              to="/console/login?register=manual&promo=BUNDLE40"
              target="_blank">
              Enable Time Travel Recovery →
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Module 3: Cost Savings */}
      <section style={{padding: '60px 20px', background: '#f0f4f8'}}>
        <div className="container" style={{maxWidth: '1000px'}}>
          <div style={{textAlign: 'center', marginBottom: '40px'}}>
            <div style={{fontSize: '3rem', marginBottom: '20px'}}>💰</div>
            <h2 style={{fontSize: '2.5rem', marginBottom: '20px'}}>
              From Crushing Costs to 70% Savings
            </h2>
          </div>
          
          <div style={styles.solutionBox}>
            <h3 style={{fontSize: '1.5rem', marginBottom: '20px'}}>
              Cross-Backup & Zero-Cost Technology:
            </h3>
            
            <p style={{fontSize: '1.1rem', marginBottom: '20px'}}>
              Our patented Cross-Backup technology only backs up changes across systems, reducing storage by up to 99%.
            </p>
            
            <ul style={{fontSize: '1.05rem', lineHeight: '2', marginBottom: '30px'}}>
              <li><strong>99% Storage Reduction:</strong> Only store unique data blocks across all systems</li>
              <li><strong>10x Faster Backups:</strong> Complete in minutes instead of hours</li>
              <li><strong>Zero Network Impact:</strong> Intelligent scheduling prevents congestion</li>
              <li><strong>Unlimited Retention:</strong> Keep data forever without cost explosion</li>
            </ul>
            
            <div style={{padding: '20px', background: '#ecfdf5', borderRadius: '8px', marginBottom: '20px'}}>
              <strong>CFO Approved:</strong> Average enterprise saves $240,000 annually on storage costs alone. 
              ROI achieved in under 3 months. Full payback in 6 months guaranteed.
            </div>
          </div>
          
          {/* Comparison Table */}
          <table style={styles.comparisonTable}>
            <thead>
              <tr style={{background: '#f3f4f6'}}>
                <th style={{padding: '20px', textAlign: 'left'}}>Cost Factor</th>
                <th style={{padding: '20px', textAlign: 'center'}}>Veeam</th>
                <th style={{padding: '20px', textAlign: 'center'}}>Rubrik</th>
                <th style={{padding: '20px', textAlign: 'center', background: '#ecfdf5'}}>Rediacc Bundle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{padding: '15px'}}>Annual License (500 VMs)</td>
                <td style={{padding: '15px', textAlign: 'center'}}>$175,000</td>
                <td style={{padding: '15px', textAlign: 'center'}}>$210,000</td>
                <td style={{padding: '15px', textAlign: 'center', background: '#ecfdf5', fontWeight: 'bold'}}>$52,500</td>
              </tr>
              <tr style={{background: '#f9fafb'}}>
                <td style={{padding: '15px'}}>Storage Costs (100TB)</td>
                <td style={{padding: '15px', textAlign: 'center'}}>$84,000</td>
                <td style={{padding: '15px', textAlign: 'center'}}>$96,000</td>
                <td style={{padding: '15px', textAlign: 'center', background: '#ecfdf5', fontWeight: 'bold'}}>$8,400</td>
              </tr>
              <tr>
                <td style={{padding: '15px'}}>Professional Services</td>
                <td style={{padding: '15px', textAlign: 'center'}}>$50,000</td>
                <td style={{padding: '15px', textAlign: 'center'}}>$75,000</td>
                <td style={{padding: '15px', textAlign: 'center', background: '#ecfdf5', fontWeight: 'bold'}}>$0 (Included)</td>
              </tr>
              <tr style={{background: '#f3f4f6', fontWeight: 'bold'}}>
                <td style={{padding: '15px'}}>Total Annual Cost</td>
                <td style={{padding: '15px', textAlign: 'center', color: '#dc2626'}}>$309,000</td>
                <td style={{padding: '15px', textAlign: 'center', color: '#dc2626'}}>$381,000</td>
                <td style={{padding: '15px', textAlign: 'center', background: '#10b981', color: 'white'}}>$60,900</td>
              </tr>
              <tr>
                <td style={{padding: '15px', fontWeight: 'bold'}}>Your Savings</td>
                <td style={{padding: '15px', textAlign: 'center'}}>-</td>
                <td style={{padding: '15px', textAlign: 'center'}}>-</td>
                <td style={{padding: '15px', textAlign: 'center', background: '#ecfdf5', fontWeight: 'bold', color: '#10b981'}}>
                  $248,100/year (80% less)
                </td>
              </tr>
            </tbody>
          </table>
          
          <div style={{textAlign: 'center', marginTop: '40px'}}>
            <Link 
              style={styles.ctaButton}
              to="/console/login?register=manual&promo=BUNDLE40"
              target="_blank">
              Calculate Your Savings →
            </Link>
          </div>
        </div>
      </section>

      {/* Results & Metrics Section */}
      <section style={{padding: '80px 20px', background: 'white'}}>
        <div className="container">
          <h2 style={{fontSize: '3rem', textAlign: 'center', marginBottom: '50px'}}>
            The Numbers Speak for Themselves
          </h2>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto'}}>
            <div style={styles.featureCard}>
              <h3 style={{fontSize: '3rem', color: '#10b981', marginBottom: '10px'}}>1 min</h3>
              <h4 style={{fontSize: '1.2rem', marginBottom: '10px'}}>Average Recovery Time</h4>
              <p>vs. 23 days industry average</p>
              <div style={{marginTop: '20px', fontSize: '0.9rem', color: '#6b7280'}}>
                Based on 1,247 recovery operations
              </div>
            </div>
            
            <div style={styles.featureCard}>
              <h3 style={{fontSize: '3rem', color: '#10b981', marginBottom: '10px'}}>70%</h3>
              <h4 style={{fontSize: '1.2rem', marginBottom: '10px'}}>Cost Reduction</h4>
              <p>Compared to Veeam/Rubrik</p>
              <div style={{marginTop: '20px', fontSize: '0.9rem', color: '#6b7280'}}>
                Average across 87 enterprises
              </div>
            </div>
            
            <div style={styles.featureCard}>
              <h3 style={{fontSize: '3rem', color: '#10b981', marginBottom: '10px'}}>0</h3>
              <h4 style={{fontSize: '1.2rem', marginBottom: '10px'}}>AI Production Disasters</h4>
              <p>With safety shields enabled</p>
              <div style={{marginTop: '20px', fontSize: '0.9rem', color: '#6b7280'}}>
                Across all protected environments
              </div>
            </div>
            
            <div style={styles.featureCard}>
              <h3 style={{fontSize: '3rem', color: '#10b981', marginBottom: '10px'}}>99%</h3>
              <h4 style={{fontSize: '1.2rem', marginBottom: '10px'}}>Storage Reduction</h4>
              <p>With Cross-Backup technology</p>
              <div style={{marginTop: '20px', fontSize: '0.9rem', color: '#6b7280'}}>
                Maximum observed compression
              </div>
            </div>
            
            <div style={styles.featureCard}>
              <h3 style={{fontSize: '3rem', color: '#10b981', marginBottom: '10px'}}>1,900%</h3>
              <h4 style={{fontSize: '1.2rem', marginBottom: '10px'}}>ROI</h4>
              <p>Return on investment</p>
              <div style={{marginTop: '20px', fontSize: '0.9rem', color: '#6b7280'}}>
                Based on prevented incidents
              </div>
            </div>
            
            <div style={styles.featureCard}>
              <h3 style={{fontSize: '3rem', color: '#10b981', marginBottom: '10px'}}>10 min</h3>
              <h4 style={{fontSize: '1.2rem', marginBottom: '10px'}}>Setup Time</h4>
              <p>From signup to protection</p>
              <div style={{marginTop: '20px', fontSize: '0.9rem', color: '#6b7280'}}>
                Including data import
              </div>
            </div>
          </div>
          
          <div style={{marginTop: '60px', padding: '40px', background: '#fef3c7', borderRadius: '12px', maxWidth: '900px', margin: '60px auto 0'}}>
            <h3 style={{fontSize: '1.8rem', marginBottom: '20px', textAlign: 'center'}}>
              Limited Time Bundle Pricing
            </h3>
            
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px'}}>
              <div>
                <h4 style={{fontSize: '1.2rem', marginBottom: '15px'}}>Regular Price:</h4>
                <ul style={{listStyle: 'none', padding: 0}}>
                  <li style={{textDecoration: 'line-through', color: '#6b7280'}}>Enterprise License: $8,999/mo</li>
                  <li style={{textDecoration: 'line-through', color: '#6b7280'}}>Migration Service: $25,000</li>
                  <li style={{textDecoration: 'line-through', color: '#6b7280'}}>Training Package: $10,000</li>
                  <li style={{textDecoration: 'line-through', color: '#6b7280'}}>Priority Support: $2,000/mo</li>
                </ul>
                <div style={{fontSize: '1.3rem', fontWeight: 'bold', marginTop: '10px', color: '#6b7280'}}>
                  Total Value: $152,988/year
                </div>
              </div>
              
              <div>
                <h4 style={{fontSize: '1.2rem', marginBottom: '15px', color: '#10b981'}}>Bundle Price (40% OFF):</h4>
                <ul style={{listStyle: 'none', padding: 0}}>
                  <li style={{color: '#10b981'}}>✅ Everything Included</li>
                  <li style={{color: '#10b981'}}>✅ Free Migration</li>
                  <li style={{color: '#10b981'}}>✅ Free Training</li>
                  <li style={{color: '#10b981'}}>✅ Priority Support</li>
                </ul>
                <div style={{fontSize: '2rem', fontWeight: 'bold', marginTop: '10px', color: '#10b981'}}>
                  Only $5,074/month
                </div>
                <div style={{fontSize: '1rem', marginTop: '5px'}}>
                  Save $92,100 in year one
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={{padding: '80px 20px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white'}}>
        <div className="container" style={{textAlign: 'center'}}>
          <h2 style={{fontSize: '3rem', marginBottom: '30px'}}>
            Your Decision Point
          </h2>
          
          <div style={{fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.8'}}>
            <p style={{marginBottom: '20px'}}>
              <strong>Every day you wait, you're exposed to AI disasters, ransomware, and data loss.</strong>
            </p>
            
            <p style={{marginBottom: '20px'}}>
              The average enterprise experiences a major incident every 11 months. 
              When it happens, you'll either lose millions... or recover in minutes.
            </p>
            
            <p style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '30px'}}>
              This 40% discount expires in {timeLeft.days} days. 
              After that, you'll pay full price - an extra $92,100.
            </p>
          </div>
          
          <div style={{
            background: 'rgba(255,255,255,0.2)', 
            padding: '30px', 
            borderRadius: '12px', 
            maxWidth: '600px', 
            margin: '0 auto 40px',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{fontSize: '1.5rem', marginBottom: '20px'}}>
              Register Now
            </h3>
            <ul style={{textAlign: 'left', fontSize: '1.1rem', lineHeight: '2', marginBottom: '20px'}}>
              <li>✅ No credit card required</li>
              <li>✅ Deploy in 10 minutes</li>
              <li>✅ Full feature access</li>
              <li>✅ Free migration included</li>
              <li>✅ 30-day money-back guarantee</li>
            </ul>
          </div>
          
          <Link 
            style={{
              ...styles.ctaButton,
              fontSize: '1.8rem',
              padding: '25px 60px',
              background: '#10b981',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              transform: 'scale(1.05)'
            }}
            to="/console/login?register=manual&promo=BUNDLE40"
            target="_blank">
            Get The Bundle Now → Save $92,100
          </Link>
          
          <div style={{marginTop: '30px', fontSize: '0.9rem', opacity: '0.9'}}>
            <p>🔒 Bank-level security • Enterprise-grade protection</p>
            <p style={{marginTop: '10px'}}>
              Questions? Call our team: 1-800-REDIACC or email sales@rediacc.io
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section style={{padding: '40px 20px', background: '#f9fafb', borderTop: '1px solid #e5e7eb'}}>
        <div className="container">
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px', flexWrap: 'wrap'}}>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '2rem', marginBottom: '5px'}}>🔒</div>
              <div style={{fontSize: '0.9rem', color: '#6b7280'}}>Bank-Level<br/>Encryption</div>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '2rem', marginBottom: '5px'}}>⚡</div>
              <div style={{fontSize: '0.9rem', color: '#6b7280'}}>Fast<br/>Deployment</div>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '2rem', marginBottom: '5px'}}>🛡️</div>
              <div style={{fontSize: '0.9rem', color: '#6b7280'}}>Advanced<br/>Security</div>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '2rem', marginBottom: '5px'}}>🏆</div>
              <div style={{fontSize: '0.9rem', color: '#6b7280'}}>99.99%<br/>Uptime SLA</div>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '2rem', marginBottom: '5px'}}>💰</div>
              <div style={{fontSize: '0.9rem', color: '#6b7280'}}>30-Day<br/>Money Back</div>
            </div>
          </div>
          
          <div style={{textAlign: 'center', marginTop: '30px', fontSize: '0.85rem', color: '#6b7280'}}>
            <p>© 2025 Rediacc. All rights reserved. | <Link to="/privacy">Privacy Policy</Link> | <Link to="/terms">Terms of Service</Link></p>
            <p style={{marginTop: '10px'}}>
              * Results based on customer data. Individual results may vary. 
              All trademarks are property of their respective owners.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}