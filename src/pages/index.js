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
const RiskFreeUpgradesIcon = require('@site/static/img/risk-free-upgrades.svg').default;
const TimeTravelIcon = require('@site/static/img/time-travel.svg').default;
const CrossBackupIcon = require('@site/static/img/cross-backup.svg').default;
const CompanyLogo1 = require('@site/static/img/company-logo1.svg').default;
const CompanyLogo2 = require('@site/static/img/company-logo2.svg').default;
const CompanyLogo3 = require('@site/static/img/company-logo3.svg').default;

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <Heading as="h1" className={styles.mainHeadline}>
              Run Any Software, Anywhere
            </Heading>
            
            <p className={styles.subheadline}>
              Rediacc is a revolutionary platform for running applications and managing data across different machines without installation, featuring instant cloning, intelligent backups, and seamless scaling.
            </p>
            
            <div className={styles.ctaButtons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                Learn More
              </Link>
              <Link
                className="button button--outline button--lg button--secondary"
                to="/request-demo">
                Request a Demo
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

function KeyFeaturesSection() {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>Key Features</Heading>
        
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <IntelligentBackupIcon />
            </div>
            <h3>Intelligent Backup</h3>
            <p>Save up to 90% on storage costs with differential backup technology that stores only changed data while maintaining full backup functionality.</p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <AdvancedSecurityIcon />
            </div>
            <h3>Advanced Security</h3>
            <p>Keep your data secure with end-to-end encryption, real-time defense against suspicious activities, and multi-factor authentication.</p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <SeamlessScalingIcon />
            </div>
            <h3>Seamless Scaling</h3>
            <p>Instantly clone environments to handle peak demand and synchronize changes back when demand decreases, optimizing resource usage.</p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <TimeTravelIcon />
            </div>
            <h3>Time Travel</h3>
            <p>Restore your systems to any point in time with automated snapshots, providing peace of mind and robust disaster recovery.</p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <CrossBackupIcon />
            </div>
            <h3>Cross Backup</h3>
            <p>Securely back up data to remote servers with minimal bandwidth usage, reducing backup times from weeks to minutes.</p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <RiskFreeUpgradesIcon />
            </div>
            <h3>Risk-Free Upgrades</h3>
            <p>Test changes on instant clones without affecting production systems, eliminating downtime and reducing deployment risks.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className={styles.howItWorksSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>How It Works</Heading>
        
        <div className={styles.howItWorksContent}>
          <p className={styles.introText}>
            Rediacc intelligently uses the capabilities of the operating system kernel to clone services within seconds, keep backups efficiently, store data securely, and run software seamlessly in different environments.
          </p>
          
          <div className={styles.stepsContainer}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Create a Repository</h3>
              <p>Set up a virtual environment that contains all files and configurations for your services, with sizes ranging from 4GB to thousands of TB.</p>
            </div>
            
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Deploy Your Services</h3>
              <p>Add databases, web servers, applications, or custom software to your repository without installation requirements.</p>
            </div>
            
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Scale As Needed</h3>
              <p>Instantly clone your repository to handle increased demand, run tests, or create development environments with zero performance impact.</p>
            </div>
            
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h3>Backup Automatically</h3>
              <p>Leverage Copy-on-Write technology to create efficient backups that only store changed data, saving time and storage costs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  return (
    <section className={styles.useCasesSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>Who Uses Rediacc</Heading>
        
        <div className={styles.useCasesGrid}>
          <div className={styles.useCase}>
            <h3>System Administrators</h3>
            <ul>
              <li>Implement cost-effective backup strategies</li>
              <li>Perform risk-free system upgrades</li>
              <li>Ensure business continuity during outages</li>
            </ul>
          </div>
          
          <div className={styles.useCase}>
            <h3>DevOps Teams</h3>
            <ul>
              <li>Create consistent development environments</li>
              <li>Automate testing and deployment</li>
              <li>Reduce infrastructure costs with dynamic scaling</li>
            </ul>
          </div>
          
          <div className={styles.useCase}>
            <h3>Security Teams</h3>
            <ul>
              <li>Enhance threat detection capabilities</li>
              <li>Implement real-time defense mechanisms</li>
              <li>Maintain comprehensive audit trails</li>
            </ul>
          </div>
          
          <div className={styles.useCase}>
            <h3>Cloud Architects</h3>
            <ul>
              <li>Design hybrid cloud solutions</li>
              <li>Optimize resource allocation</li>
              <li>Reduce overall cloud spending</li>
            </ul>
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
        <Heading as="h2" className={styles.sectionTitle}>What Our Clients Say</Heading>
        
        <div className={styles.testimonialGrid}>
          <div className={styles.testimonial}>
            <p>"Rediacc has transformed how we manage our infrastructure. We've reduced our IT costs significantly while improving our recovery time from hours to minutes."</p>
            <div className={styles.testimonialAuthor}>
              <strong>Sarah Johnson</strong>
              <span>CTO, TechFirst Solutions</span>
            </div>
          </div>
          
          <div className={styles.testimonial}>
            <p>"The ability to instantly clone environments for testing has eliminated deployment risks and improved our development workflow dramatically."</p>
            <div className={styles.testimonialAuthor}>
              <strong>Michael Chen</strong>
              <span>Lead DevOps Engineer, GrowthMaster</span>
            </div>
          </div>
          
          <div className={styles.testimonial}>
            <p>"With Rediacc's seamless scaling, we easily handled 3x our normal traffic during seasonal peaks without any performance issues or extra infrastructure costs."</p>
            <div className={styles.testimonialAuthor}>
              <strong>Jennifer Rodriguez</strong>
              <span>Founder, StyleHub Marketplace</span>
            </div>
          </div>
        </div>
        
        <div className={styles.trustedBy}>
          <p>Trusted by leading companies:</p>
          <div className={styles.logoGrid}>
            <CompanyLogo1 className={styles.companyLogo} />
            <CompanyLogo2 className={styles.companyLogo} />
            <CompanyLogo3 className={styles.companyLogo} />
          </div>
        </div>
      </div>
    </section>
  );
}

function GetStartedSection() {
  return (
    <section className={styles.getStartedSection}>
      <div className="container">
        <div className={styles.getStartedContent}>
          <Heading as="h2">Ready to Transform Your Infrastructure?</Heading>
          <p>Discover how Rediacc can help your organization improve resilience, flexibility, and security while reducing costs.</p>
          
          <div className={styles.getStartedButtons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro">
              Explore Documentation
            </Link>
            <Link
              className="button button--outline button--lg button--primary"
              to="/request-demo">
              Request a Demo
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
      title={`${siteConfig.title} - Run Any Software, Anywhere`}
      description="Rediacc is a revolutionary platform for running applications and managing data across different machines without installation, featuring instant cloning, intelligent backups, and seamless scaling.">
      <HomepageHeader />
      <main>
        <KeyFeaturesSection />
        <HowItWorksSection />
        <UseCasesSection />
        <TestimonialsSection />
        <GetStartedSection />
      </main>
    </Layout>
  );
}