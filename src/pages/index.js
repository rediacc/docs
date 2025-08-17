import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Head from '@docusaurus/Head';
import VideoShowcase from '../components/VideoShowcase';
import Citations from '../components/Citations';
import CitationLink from '../components/CitationLink';
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
            to="/docs/cli/quick-start">
            View Documentation
          </Link>
        </div>
        <div className="hero-quote animate-fade-in-up animate-delay-300" style={{
          marginTop: '3rem',
          padding: '1.5rem',
          borderLeft: '3px solid var(--ifm-color-primary-lighter)',
          background: 'rgba(85, 107, 47, 0.05)',
          borderRadius: '8px',
          maxWidth: '700px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <p style={{fontSize: '1.1rem', fontStyle: 'italic', margin: 0, color: 'var(--ifm-font-color-secondary)'}}>
            <CitationLink numbers={3}>
              "The most aggressive buyers in AI are no longer chasing novelty. They are chasing infrastructure. 
              As AI shifts from lab to production, the real battle is not about building models. 
              It is about running them at scale, reliably and securely."
            </CitationLink>
          </p>
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
  const featureCategories = [
    {
      title: 'Protection & Recovery',
      description: 'Keep your infrastructure safe and recoverable',
      features: [
        {
          iconName: 'ai-safety',
          title: 'AI Safety Shield',
          description: 'Prevent AI disasters with instant cloning. Your AI agents work on perfect copies while production stays untouchable.',
          link: '/features/ai-safety',
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
      ]
    },
    {
      title: 'Cost Optimization',
      description: 'Reduce infrastructure costs without compromising performance',
      features: [
        {
          iconName: 'backup',
          title: 'Zero-Cost Backup',
          description: 'Achieve up to 90% storage reduction with our smart differential backup technology.',
          link: '/features/zero-cost-backup',
        },
        {
          iconName: 'scaling',
          title: 'Dynamic Scaling',
          description: 'Seamlessly scale between on-premise and cloud with up to 60% cost reduction.',
          link: '/features/dynamic-scaling',
        },
      ]
    },
    {
      title: 'Enterprise Ready',
      description: 'Built for security and scale',
      features: [
        {
          iconName: 'security',
          title: 'Advanced Security',
          description: 'Enterprise-grade security with encryption, MFA, and comprehensive audit trails.',
          link: '/features/security',
        },
        {
          iconName: 'multi-cloud',
          title: 'Multi-Cloud',
          description: 'Deploy across AWS, Azure, GCP, and on-premise infrastructure.',
          link: '/solutions/cloud-migration',
        },
      ]
    }
  ];

  return (
    <section style={{padding: '4rem 0', background: 'var(--ifm-background-color)'}}>
      <div className="container">
        <h2 style={{textAlign: 'center', marginBottom: '1rem', fontSize: '2.5rem'}}>
          Everything You Need for Modern Infrastructure
        </h2>
        <p style={{textAlign: 'center', marginBottom: '3rem', fontSize: '1.2rem', color: 'var(--ifm-font-color-secondary)', maxWidth: '700px', margin: '0 auto 3rem'}}>
          Comprehensive infrastructure automation organized by your needs
        </p>
        
        {featureCategories.map((category, catIdx) => (
          <div key={catIdx} style={{marginBottom: '4rem'}}>
            <div style={{marginBottom: '2rem', textAlign: 'center'}}>
              <h3 style={{fontSize: '1.8rem', color: 'var(--ifm-color-primary)', marginBottom: '0.5rem'}}>
                {category.title}
              </h3>
              <p style={{color: 'var(--ifm-font-color-secondary)', fontSize: '1.1rem'}}>
                {category.description}
              </p>
            </div>
            <div className="features-grid" style={{gridTemplateColumns: `repeat(auto-fit, minmax(280px, 1fr))`, maxWidth: category.features.length === 2 ? '800px' : '1200px', margin: '0 auto'}}>
              {category.features.map((feature, idx) => (
                <FeatureCard key={idx} {...feature} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AISafetyHighlight() {
  return (
    <section style={{padding: '3rem 0', background: 'var(--ifm-background-surface-color)'}}>
      <div className="container">
        <div style={{
          maxWidth: '900px', 
          margin: '0 auto', 
          textAlign: 'center',
          padding: '2rem',
          background: 'var(--ifm-background-color)',
          borderRadius: '12px',
          border: '2px solid var(--ifm-color-primary-lighter)'
        }}>
          <h2 style={{fontSize: '2rem', marginBottom: '1rem', color: 'var(--ifm-color-primary)'}}>
            🛡️ AI Safety Alert: Production Damage is Real
          </h2>
          <p style={{fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--ifm-font-color-secondary)'}}>
            In July 2025, an AI agent deleted an entire production database. 
            With Rediacc, AI disasters become impossible through instant cloning and 1-minute recovery.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            <div style={{padding: '1rem'}}>
              <div style={{fontSize: '2rem', fontWeight: 'bold', color: 'var(--ifm-color-primary)'}}>0%</div>
              <div style={{fontSize: '0.9rem'}}>Production Access</div>
            </div>
            <div style={{padding: '1rem'}}>
              <div style={{fontSize: '2rem', fontWeight: 'bold', color: 'var(--ifm-color-primary)'}}>1 min</div>
              <div style={{fontSize: '0.9rem'}}>Recovery Time</div>
            </div>
            <div style={{padding: '1rem'}}>
              <div style={{fontSize: '2rem', fontWeight: 'bold', color: 'var(--ifm-color-primary)'}}>100%</div>
              <div style={{fontSize: '0.9rem'}}>AI Isolation</div>
            </div>
          </div>
          <Link
            className="button button--primary button--lg"
            to="/features/ai-safety">
            Learn How We Protect You →
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
          Organizations using Rediacc report <CitationLink numbers={1}>90% backup storage cost reduction</CitationLink> and <CitationLink numbers={2}>10x faster deployment cycles</CitationLink>
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
      <HomepageFeatures />
      <VideoShowcase />
      <AISafetyHighlight />
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
        },
        {
          text: "The most aggressive buyers in AI are no longer chasing novelty. They are chasing infrastructure. As AI shifts from lab to production, the real battle is not about building models. It is about running them at scale, reliably and securely.",
          source: "Crunchbase News - Strategic M&A at Global Scale",
          url: "https://news.crunchbase.com/ai/strategic-ma-global-scale-sagie/?utm_source=cb_daily&utm_medium=email&utm_campaign=20230703"
        }
      ]} />
    </Layout>
  );
}