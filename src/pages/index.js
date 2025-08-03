import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Head from '@docusaurus/Head';
import VideoShowcase from '../components/VideoShowcase';
import Citations from '../components/Citations';
import { FeatureIcon } from '../components/Icon';

function HomepageHero() {
  return (
    <section className="hero-section">
      <div className="container">
        <h1 className="hero-title animate-fade-in-up">
          Infrastructure Automation Platform
        </h1>
        <p className="hero-subtitle animate-fade-in-up animate-delay-100">
          Deploy Fearlessly. Sleep Peacefully. AI-Proof Your Production.
        </p>
        <div className="hero-buttons animate-fade-in-up animate-delay-200">
          <Link
            className="button button--primary button--lg"
            to="/console/login?register=true"
            target="_blank">
            Play on Sandbox →
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/cli/quick-start">
            View Documentation
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/features/backup">
            Explore Features
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({icon, iconName, title, description, link}) {
  return (
    <Link to={link} className="feature-card hover-lift">
      <div className="feature-icon">
        <FeatureIcon 
          name={iconName} 
          size={48}
          bgColor="var(--ifm-color-primary-lighter)"
          iconColor="var(--ifm-color-primary-darkest)"
        />
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
      <span style={{color: 'var(--ifm-color-primary)', fontWeight: 500}}>
        Learn more →
      </span>
    </Link>
  );
}

function HomepageFeatures() {
  const features = [
    {
      iconName: 'ai-safety',
      title: 'AI Safety Shield',
      description: 'Prevent AI disasters with instant cloning. Your AI agents work on perfect copies while production stays untouchable.',
      link: '/features/ai-safety',
    },
    {
      iconName: 'backup',
      title: 'Zero-Cost Backup',
      description: 'Achieve up to 90% storage reduction with our smart differential backup technology<sup>[1]</sup>.',
      link: '/features/zero-cost-backup',
    },
    {
      iconName: 'security',
      title: 'Advanced Security',
      description: 'Enterprise-grade security with encryption, MFA, and comprehensive audit trails.',
      link: '/features/security',
    },
    {
      iconName: 'scaling',
      title: 'Dynamic Scaling',
      description: 'Seamlessly scale between on-premise and cloud with up to 60% cost reduction.',
      link: '/features/dynamic-scaling',
    },
    {
      iconName: 'disaster-recovery',
      title: 'Cross-Backup',
      description: 'Multi-site protection that reduces backup time from weeks to minutes.',
      link: '/features/cross-backup',
    },
    {
      iconName: 'time-travel',
      title: 'Time Travel',
      description: 'Roll back your entire system to any previous state instantly.',
      link: '/features/time-travel',
    },
    {
      iconName: 'multi-cloud',
      title: 'Multi-Cloud',
      description: 'Deploy across AWS, Azure, GCP, and on-premise infrastructure.',
      link: '/solutions/cloud-migration',
    },
  ];

  return (
    <section style={{padding: '4rem 0', background: 'var(--ifm-background-color)'}}>
      <div className="container">
        <h2 style={{textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem'}}>
          Everything You Need for Modern Infrastructure
        </h2>
        <div className="features-grid">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AISafetySection() {
  return (
    <section style={{padding: '4rem 0', background: 'var(--ifm-background-surface-color)'}}>
      <div className="container">
        <div style={{maxWidth: '900px', margin: '0 auto', textAlign: 'center'}}>
          <h2 style={{fontSize: '2.5rem', marginBottom: '1.5rem'}}>
            The AI Agent Crisis is Real
          </h2>
          <p style={{fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--ifm-font-color-secondary)'}}>
            In July 2025, an AI agent deleted an entire production database saying 
            "I destroyed months of your work in seconds." With Rediacc, AI disasters become impossible.
          </p>
          <div style={{
            background: 'var(--ifm-background-color)',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '2rem',
            border: '1px solid var(--ifm-toc-border-color)'
          }}>
            <h3 style={{fontSize: '1.8rem', marginBottom: '1.5rem'}}>
              How Rediacc Stops AI Disasters
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              textAlign: 'left'
            }}>
              <div className="feature-card" style={{padding: '1.5rem'}}>
                <h4 style={{fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--ifm-color-primary)'}}>
                  Instant Cloning
                </h4>
                <p style={{margin: 0, fontSize: '0.95rem'}}>
                  AI works on perfect copies created in seconds, never touching production
                </p>
              </div>
              <div className="feature-card" style={{padding: '1.5rem'}}>
                <h4 style={{fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--ifm-color-primary)'}}>
                  1-Minute Recovery
                </h4>
                <p style={{margin: 0, fontSize: '0.95rem'}}>
                  Even if AI deletes everything, restore from any point in time instantly
                </p>
              </div>
              <div className="feature-card" style={{padding: '1.5rem'}}>
                <h4 style={{fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--ifm-color-primary)'}}>
                  MCP Protocol
                </h4>
                <p style={{margin: 0, fontSize: '0.95rem'}}>
                  Native integration with Claude and other AI systems with hard boundaries
                </p>
              </div>
            </div>
          </div>
          <div>
            <Link
              className="button button--primary button--lg"
              to="/solutions/ai-safety"
              style={{
                marginRight: '1rem'
              }}>
              Explore AI Safety Solution
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/features/ai-safety">
              View Features →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function SearchSection() {
  const handleSearchClick = () => {
    // Directly trigger the search modal on the current page
    const searchButton = document.querySelector('.DocSearch-Button');
    if (searchButton) {
      searchButton.click();
    } else {
      // Fallback: try to find and click the search input in the navbar
      const navbarSearch = document.querySelector('.navbar__search button');
      if (navbarSearch) {
        navbarSearch.click();
      } else {
        // Final fallback: try to focus the search input directly
        const searchInput = document.querySelector('[type="search"]');
        if (searchInput) {
          searchInput.focus();
          searchInput.click();
        }
      }
    }
  };

  return (
    <section className="search-section">
      <div className="container">
        <h2 style={{marginBottom: '2rem', fontSize: '2rem'}}>
          Search Documentation
        </h2>
        <div className="search-container">
          <p style={{marginBottom: '2rem', color: 'var(--ifm-font-color-secondary)'}}>
            Find answers quickly in our comprehensive documentation
          </p>
          <div style={{marginBottom: '2rem'}}>
            <button 
              onClick={handleSearchClick}
              className="button button--primary button--lg"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
              Search Documentation
            </button>
            <p style={{marginTop: '0.5rem', fontSize: '0.875rem', color: 'var(--ifm-font-color-secondary)'}}>
              Press '/' to quickly search from anywhere
            </p>
          </div>
        </div>
        <div className="quick-links">
          <Link to="/intro" className="quick-link">
            Getting Started
          </Link>
          <Link to="/cli/api-reference" className="quick-link">
            API Reference
          </Link>
          <Link to="/cli/quick-start" className="quick-link">
            CLI Guide
          </Link>
          <Link to="/console-guide/quick-start" className="quick-link">
            Console Guide
          </Link>
          <Link to="/solutions/zero-cost" className="quick-link">
            Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Rediacc reduced our backup storage costs by 90% while improving recovery times. It's been a game-changer for our infrastructure.",
      author: "Sarah Chen",
      role: "CTO, TechCorp",
    },
    {
      quote: "The ability to instantly clone our entire production environment for testing has accelerated our development cycle by 3x.",
      author: "Michael Rodriguez",
      role: "DevOps Lead, StartupXYZ",
    },
    {
      quote: "Zero-downtime deployments are now a reality. Rediacc's time-travel feature saved us during a critical production issue.",
      author: "Emma Thompson",
      role: "Infrastructure Manager, Enterprise Inc",
    },
  ];

  return (
    <section style={{padding: '4rem 0', background: 'var(--ifm-background-surface-color)'}}>
      <div className="container">
        <h2 style={{textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem'}}>
          Trusted by Engineering Teams Worldwide
        </h2>
        <div style={{textAlign: 'center', marginBottom: '2rem', fontSize: '1.1rem', color: 'var(--ifm-font-color-secondary)'}}>
          Organizations using Rediacc report 90% backup storage cost reduction<sup>[1]</sup> and 10x faster deployment cycles<sup>[2]</sup>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="testimonial-card" style={{
              padding: '2rem',
              background: 'var(--ifm-card-background-color)',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            }}>
              <p style={{
                fontStyle: 'italic',
                marginBottom: '1.5rem',
                lineHeight: '1.6',
              }}>
                "{testimonial.quote}"
              </p>
              <div>
                <strong>{testimonial.author}</strong>
                <br />
                <span style={{color: 'var(--ifm-font-color-secondary)', fontSize: '0.9rem'}}>
                  {testimonial.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section style={{
      padding: '4rem 0',
      background: 'var(--ifm-background-surface-color)',
      textAlign: 'center',
      borderTop: '1px solid var(--ifm-toc-border-color)'
    }}>
      <div className="container">
        <h2 style={{fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--ifm-heading-color)'}}>
          Ready to Transform Your Infrastructure?
        </h2>
        <p style={{fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--ifm-font-color-secondary)'}}>
          Join thousands of teams using Rediacc to automate their infrastructure
        </p>
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
          <Link
            className="button button--primary button--lg"
            to="/console/login?register=true"
            target="_blank">
            Play on Sandbox
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/contact">
            Let's Connect
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title="Infrastructure Automation Platform"
      description="Deploy fearlessly with Rediacc's infrastructure automation platform. Reduce backup costs by 90%, enable instant disaster recovery, and achieve zero-downtime deployments.">
      <Head>
        <meta property="og:title" content="Rediacc - Infrastructure Automation Platform" />
        <meta property="og:description" content="Deploy fearlessly with intelligent backup, auto-scaling, and instant disaster recovery. Save 90% on storage costs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Rediacc",
            "description": "Infrastructure automation platform for modern enterprises",
            "url": "/",
            "logo": "/img/logo.svg",
            "sameAs": [
              "https://github.com/rediacc",
              "https://twitter.com/rediacc"
            ]
          })}
        </script>
      </Head>
      <HomepageHero />
      <AISafetySection />
      <HomepageFeatures />
      <VideoShowcase />
      <SearchSection />
      <TestimonialsSection />
      <CTASection />
      <Citations citations={[
        {
          text: "Enterprise deduplication solutions typically achieve ratios ranging from 5:1 to 20:1, with 48% of organizations reporting 10:1 to 20:1 reduction in capacity requirements.",
          source: "Enterprise Strategy Group (ESG) Research on Data Deduplication",
          url: "https://www.techtarget.com/searchdatabackup/tip/Understanding-data-deduplication-ratios-in-backup-systems"
        },
        {
          text: "Elite DevOps performers deploy 973x more frequently than low performers, with recovery times under 1 hour (2021 data). Only 19% of teams achieved elite performer status in 2024.",
          source: "DORA State of DevOps Report 2024",
          url: "https://cloud.google.com/devops/state-of-devops"
        }
      ]} />
    </Layout>
  );
}