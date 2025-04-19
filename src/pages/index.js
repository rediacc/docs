import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

// Import SVG images
const HeroGraphic = require('@site/static/img/hero-graphic.svg').default;
const IntelligentBackupIcon = require('@site/static/img/intelligent-backup.svg').default;
const AdvancedSecurityIcon = require('@site/static/img/advanced-security.svg').default;
const SeamlessScalingIcon = require('@site/static/img/seamless-scaling.svg').default;
const CompanyLogo1 = require('@site/static/img/company-logo1.svg').default;
const CompanyLogo2 = require('@site/static/img/company-logo2.svg').default;
const CompanyLogo3 = require('@site/static/img/company-logo3.svg').default;

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <Heading as="h2" className={styles.audienceCallout}>
              ATTENTION BUSINESS OWNERS AND ENTREPRENEURS
            </Heading>
            
            <Heading as="h1" className={styles.mainHeadline}>
              Discover How To Cut Your System Costs By Up To 90% While Making Your Business More Resilient, Flexible, And Secure — GUARANTEED!
            </Heading>
            
            <p className={styles.subheadline}>
              Our Revolutionary Platform Has Helped Over 500+ Businesses Save Thousands On IT Costs While Boosting Performance And Security
            </p>
            
            <div className={styles.bulletPoints}>
              <ul>
                <li>The "Set-and-Forget" backup system that protects your business from catastrophic data loss</li>
                <li>Why 90% of companies are overpaying for their system infrastructure (and how to fix it)</li>
                <li>The little-known scaling secret that big tech companies don't want you to discover</li>
                <li>How to implement enterprise-grade security without breaking the bank</li>
                <li>The 3-step formula for instant system recovery that works even during major outages</li>
                <li>Why traditional backup solutions fail when you need them most (and our guaranteed solution)</li>
              </ul>
            </div>
            
            <div className={styles.ctaButton}>
              <Link
                className="button button--secondary button--lg"
                to="/request-demo">
                Get Your FREE System Assessment Today →
              </Link>
            </div>
          </div>
          
          <div className={styles.heroGraphic}>
            <HeroGraphic className={styles.heroImage} />
          </div>
        </div>
      </div>
    </header>
  );
}

function ProblemSection() {
  return (
    <section className={styles.problemSection}>
      <div className="container">
        <Heading as="h2">Are You Frustrated With Expensive, Unreliable, And Complex IT Systems?</Heading>
        
        <div className={styles.problemContent}>
          <p>
            If you're like most business owners we talk to, you're probably sick and tired of dealing with:
          </p>
          
          <ul>
            <li>
              <strong>Skyrocketing costs</strong> for backup systems that seem to grow exponentially with your data
            </li>
            <li>
              <strong>Terrifying moments</strong> when you realize your backups have failed right when you need them most
            </li>
            <li>
              <strong>Technical complexity</strong> that requires specialists and consultants just to maintain basic operations
            </li>
            <li>
              <strong>Rigid infrastructure</strong> that can't scale up during busy periods without massive overprovisioning
            </li>
            <li>
              <strong>Security vulnerabilities</strong> that keep you up at night worrying about data breaches
            </li>
          </ul>
          
          <p>
            You've probably tried everything - from traditional backup services to cloud storage solutions, from security consultants to DIY approaches. And yet, the problems persist, costs continue to rise, and the peace of mind you deserve remains elusive.
          </p>
          
          <p>
            The worst part? Most vendors are selling you solutions that are fundamentally flawed and outdated, designed more for their recurring revenue than for your actual business needs.
          </p>
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section className={styles.solutionSection}>
      <div className="container">
        <Heading as="h2">Introducing Rediacc: The Revolutionary Platform That Transforms How Businesses Handle Their Critical Systems</Heading>
        
        <div className={styles.solutionContent}>
          <p>
            Rediacc isn't just another IT solution - it's a complete reimagining of how your business systems should work. Our platform combines intelligent backup technology, advanced security, and seamless scaling to create a system that's not only more reliable but actually costs <strong>up to 90% less</strong> than traditional approaches.
          </p>
          
          <p>
            Unlike other solutions that force you to choose between cost, reliability, and ease of use, Rediacc delivers all three:
          </p>
          
          <div className={styles.solutionGrid}>
            <div className={styles.solutionItem}>
              <div className={styles.solutionIcon}>
                <IntelligentBackupIcon />
              </div>
              <h3>Intelligent Backup</h3>
              <p>Our differential backup technology stores only what changes, reducing storage costs by up to 90% while making restores lightning-fast.</p>
            </div>
            
            <div className={styles.solutionItem}>
              <div className={styles.solutionIcon}>
                <AdvancedSecurityIcon />
              </div>
              <h3>Advanced Security</h3>
              <p>Enterprise-grade protection with automated threat detection, repository encryption, and multi-factor authentication across all tiers.</p>
            </div>
            
            <div className={styles.solutionItem}>
              <div className={styles.solutionIcon}>
                <SeamlessScalingIcon />
              </div>
              <h3>Seamless Scaling</h3>
              <p>Instantly clone your environment to the cloud during peak hours and synchronize changes back when demand decreases.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CredentialsSection() {
  return (
    <section className={styles.credentialsSection}>
      <div className="container">
        <Heading as="h2">Why You Can Trust Rediacc</Heading>
        
        <div className={styles.credentialsContent}>
          <div className={styles.credentialsStats}>
            <div className={styles.stat}>
              <h3>500+</h3>
              <p>Clients Served</p>
            </div>
            
            <div className={styles.stat}>
              <h3>99.99%</h3>
              <p>Uptime Guarantee</p>
            </div>
            
            <div className={styles.stat}>
              <h3>$10M+</h3>
              <p>Client Savings</p>
            </div>
          </div>
          
          <div className={styles.logos}>
            <p>Trusted by leading companies:</p>
            <div className={styles.logoGrid}>
              <CompanyLogo1 className={styles.companyLogo} />
              <CompanyLogo2 className={styles.companyLogo} />
              <CompanyLogo3 className={styles.companyLogo} />
            </div>
          </div>
          
          <div className={styles.awards}>
            <p>Industry Recognition:</p>
            <ul>
              <li>2023 Technology Innovation Award</li>
              <li>Top 10 Cloud Solutions Provider</li>
              <li>Best Enterprise Backup Solution</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className={styles.benefitsSection}>
      <div className="container">
        <Heading as="h2">How Rediacc Will Transform Your Business</Heading>
        
        <div className={styles.benefitsList}>
          <div className={styles.benefit}>
            <h3>Save Up To 90% On Storage Costs</h3>
            <p>Our intelligent differential backup technology means you only pay for the storage you actually need, not redundant copies of unchanged data.</p>
          </div>
          
          <div className={styles.benefit}>
            <h3>Recover From Disasters In Minutes, Not Days</h3>
            <p>Restore your entire system to any point in time with just a few clicks, ensuring business continuity even during major outages.</p>
          </div>
          
          <div className={styles.benefit}>
            <h3>Scale Instantly During Peak Demand</h3>
            <p>Never worry about capacity planning again - Rediacc automatically scales up during high traffic periods and scales down when demand decreases.</p>
          </div>
          
          <div className={styles.benefit}>
            <h3>Sleep Better With Enterprise-Grade Security</h3>
            <p>Rest easy knowing your systems are protected by the same security technology used by banks and government agencies.</p>
          </div>
          
          <div className={styles.benefit}>
            <h3>Eliminate IT Management Headaches</h3>
            <p>Our intuitive interface makes system management simple enough for anyone to handle, no specialized IT staff required.</p>
          </div>
          
          <div className={styles.benefit}>
            <h3>Future-Proof Your Business</h3>
            <p>As your business grows, Rediacc grows with you seamlessly, eliminating painful migrations and upgrades.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <Heading as="h2">What Our Clients Say</Heading>
        
        <div className={styles.testimonialGrid}>
          <div className={styles.testimonial}>
            <p>"After implementing Rediacc, we cut our IT costs by 78% while improving our recovery time from 24 hours to just 20 minutes. It's been a game-changer for our business."</p>
            <div className={styles.testimonialAuthor}>
              <strong>Sarah Johnson</strong>
              <span>CEO, TechFirst Solutions</span>
            </div>
          </div>
          
          <div className={styles.testimonial}>
            <p>"We were skeptical at first, but Rediacc delivered on every promise. Our systems are more secure, more reliable, and we're saving over $15,000 per month on infrastructure costs."</p>
            <div className={styles.testimonialAuthor}>
              <strong>Michael Chen</strong>
              <span>CTO, GrowthMaster eCommerce</span>
            </div>
          </div>
          
          <div className={styles.testimonial}>
            <p>"During our busiest season, our website would crash under high traffic. With Rediacc's seamless scaling, we handled 3x our normal volume without a hitch and saw a 42% increase in sales."</p>
            <div className={styles.testimonialAuthor}>
              <strong>Jennifer Rodriguez</strong>
              <span>Founder, StyleHub Marketplace</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OfferSection() {
  return (
    <section className={styles.offerSection}>
      <div className="container">
        <Heading as="h2">Get A FREE System Assessment & Cost-Saving Analysis (Worth $2,500)</Heading>
        
        <div className={styles.offerContent}>
          <p>
            For a limited time, we're offering qualified businesses a comprehensive System Assessment and Cost-Saving Analysis absolutely FREE (normally valued at $2,500).
          </p>
          
          <p>
            During this assessment, our experts will:
          </p>
          
          <ul>
            <li>Analyze your current infrastructure and identify inefficiencies</li>
            <li>Calculate your potential cost savings with Rediacc implementation</li>
            <li>Identify security vulnerabilities in your current setup</li>
            <li>Create a custom roadmap for optimizing your systems</li>
            <li>Provide actionable recommendations you can implement immediately</li>
          </ul>
          
          <div className={styles.bonuses}>
            <h3>Plus, You'll Also Receive These Exclusive Bonuses:</h3>
            
            <div className={styles.bonus}>
              <h4>BONUS #1: Disaster Recovery Playbook ($997 Value)</h4>
              <p>Our step-by-step guide to creating a foolproof disaster recovery plan for your business.</p>
            </div>
            
            <div className={styles.bonus}>
              <h4>BONUS #2: Security Threat Assessment ($1,200 Value)</h4>
              <p>A comprehensive scan of your systems to identify and prioritize security vulnerabilities.</p>
            </div>
            
            <div className={styles.bonus}>
              <h4>BONUS #3: Cloud Cost Optimization Guide ($850 Value)</h4>
              <p>Insider strategies to reduce your cloud spending regardless of which provider you use.</p>
            </div>
          </div>
          
          <div className={styles.valueStack}>
            <h3>Total Value: $5,547</h3>
            <h4>Your Investment Today: $0</h4>
          </div>
          
          <div className={styles.scarcity}>
            <p><strong>⚠️ WARNING: This offer is strictly limited to the first 10 businesses that apply this month. We can only perform a limited number of these in-depth assessments due to the extensive resources required.</strong></p>
          </div>
          
          <div className={styles.guarantee}>
            <h3>Our Unbeatable Guarantee</h3>
            <p>If our assessment doesn't identify at least $10,000 in potential annual savings for your business, we'll pay you $500 for wasting your time. That's how confident we are in our ability to find substantial savings opportunities for virtually any business.</p>
          </div>
          
          <div className={styles.offerCta}>
            <Link
              className="button button--secondary button--lg"
              to="/request-demo">
              Yes! I Want My FREE System Assessment →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClosingSection() {
  return (
    <section className={styles.closingSection}>
      <div className="container">
        <div className={styles.closingContent}>
          <p><strong>P.S.</strong> Remember, this offer is limited to the first 10 businesses that apply this month. The longer you wait, the more money you're leaving on the table with inefficient, expensive systems. Every day of delay is costing you money and putting your business at risk. Secure your FREE System Assessment now before all spots are filled.</p>
          
          <div className={styles.finalCta}>
            <Link
              className="button button--secondary button--lg"
              to="/request-demo">
              Get Your FREE System Assessment Now →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Cut System Costs By Up To 90%`}
      description="Discover how Rediacc can help you cut system costs by up to 90% while making your business more resilient, flexible, and secure with intelligent backup solutions, advanced security, and seamless scaling.">
      <HomepageHeader />
      <main>
        <ProblemSection />
        <SolutionSection />
        <CredentialsSection />
        <BenefitsSection />
        <TestimonialsSection />
        <OfferSection />
        <ClosingSection />
      </main>
    </Layout>
  );
}
