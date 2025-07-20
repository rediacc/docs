import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './pricing.module.css';
import SpeedPricingTable from '../components/ui/SpeedPricingTable';
import FAQ from '../components/ui/FAQ';
import PricingComparisonTable from '../components/ui/PricingComparisonTable';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  
  // Calculate prices with annual discount
  const calculatePrice = (monthlyPrice, discount = 0.17) => {
    if (!monthlyPrice || monthlyPrice === 'Free') return monthlyPrice;
    const price = parseInt(monthlyPrice.replace(/[^0-9]/g, ''));
    const annualPrice = Math.round(price * 12 * (1 - discount));
    const annualMonthly = Math.round(annualPrice / 12);
    return isAnnual ? `$${annualMonthly.toLocaleString()}` : `$${price.toLocaleString()}`;
  };

  const faqData = [
    {
      question: "Can I change my plan at any time?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, we'll credit your account for future use."
    },
    {
      question: "What happens if I exceed my plan limits?",
      answer: "We'll notify you when you're approaching your limits. You can either upgrade your plan or purchase additional resources. We never shut down your services without warning."
    },
    {
      question: "Do you offer custom enterprise plans?",
      answer: "Absolutely! Our Elite plan includes custom configurations, and we can create bespoke solutions for large enterprises. Contact our sales team to discuss your specific needs."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees! All plans include free onboarding assistance. Premium and Elite customers also get dedicated migration support to ensure a smooth transition."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, ACH transfers, and wire transfers for annual contracts. Enterprise customers can also request invoicing with NET 30 terms."
    },
    {
      question: "Can I get a demo before committing?",
      answer: "Of course! We offer personalized demos for all potential customers. Book a demo through our website, and our team will show you exactly how Rediacc can solve your specific challenges."
    }
  ];

  return (
    <Layout
      title="Pricing"
      description="Choose the plan that's right for your business">
      <main className={styles.pricingPage}>
        <section className={styles.heroSection}>
          <div className="container">
            <h1 className={styles.heroTitle}>Simple, Transparent Pricing</h1>
            <p className={styles.heroSubtitle}>
              Choose the plan that's right for your business, whether you're a startup or an enterprise.
            </p>
          </div>
        </section>

        <section className={styles.pricingSection}>
          <div className="container">
            {/* Billing Toggle */}
            <div className={styles.billingToggle}>
              <span className={isAnnual ? '' : styles.active}>Monthly</span>
              <label className={styles.switch}>
                <input 
                  type="checkbox" 
                  checked={isAnnual}
                  onChange={(e) => setIsAnnual(e.target.checked)}
                />
                <span className={styles.slider}></span>
              </label>
              <span className={isAnnual ? styles.active : ''}>
                Annual
                <span className={styles.discount}>Save up to 29%</span>
              </span>
            </div>

            <div className={styles.pricingGrid}>
              {/* Community Plan */}
              <div className={styles.pricingCard}>
                <h3 className={styles.planName}>Community</h3>
                <div className={styles.price}>
                  <span className={styles.priceAmount}>Free</span>
                  <span className={styles.originalPrice}>$499/month</span>
                </div>
                {isAnnual && <p className={styles.yearlyPrice}>$0/year</p>}
                <p className={styles.planDescription}>Perfect for individual developers and small teams</p>
                <ul className={styles.features}>
                  <li>1 Machine</li>
                  <li>25 Repositories</li>
                  <li>1 TB Storage</li>
                  <li>5 Team Members</li>
                  <li>Basic snapshots</li>
                  <li>Standard support</li>
                </ul>
                <a href="/docs/console/quick-start" className={`button button--primary button--block ${styles.ctaButton}`}>
                  Get Started
                </a>
              </div>

              {/* Advanced Plan */}
              <div className={styles.pricingCard}>
                <h3 className={styles.planName}>Advanced</h3>
                <div className={styles.price}>
                  <span className={styles.priceAmount}>{calculatePrice('$2,399')}</span>
                  <span className={styles.pricePeriod}>/month</span>
                </div>
                {isAnnual && <p className={styles.yearlyPrice}>$23,870/year (17% off)</p>}
                <p className={styles.planDescription}>Ideal for growing businesses</p>
                <ul className={styles.features}>
                  <li>5 Machines</li>
                  <li>250 Repositories</li>
                  <li>25 TB Storage</li>
                  <li>50 Team Members</li>
                  <li>Automated snapshots every 4 hours</li>
                  <li>Priority support</li>
                </ul>
                <a href="/docs/console/quick-start" className={`button button--primary button--block ${styles.ctaButton}`}>
                  Start Free Trial
                </a>
              </div>

              {/* Premium Plan */}
              <div className={`${styles.pricingCard} ${styles.popular}`}>
                <div className={styles.popularBadge}>Most Popular</div>
                <h3 className={styles.planName}>Premium</h3>
                <div className={styles.price}>
                  <span className={styles.priceAmount}>{calculatePrice('$3,899', 0.23)}</span>
                  <span className={styles.pricePeriod}>/month</span>
                </div>
                {isAnnual && <p className={styles.yearlyPrice}>$36,047/year (23% off)</p>}
                <p className={styles.planDescription}>Built for enterprises</p>
                <ul className={styles.features}>
                  <li>25 Machines</li>
                  <li>2,500 Repositories</li>
                  <li>250 TB Storage</li>
                  <li>500 Team Members</li>
                  <li>Automated snapshots every hour</li>
                  <li>24/7 support</li>
                </ul>
                <a href="/docs/console/quick-start" className={`button button--primary button--block ${styles.ctaButton}`}>
                  Start Free Trial
                </a>
              </div>

              {/* Elite Plan */}
              <div className={styles.pricingCard}>
                <h3 className={styles.planName}>Elite</h3>
                <div className={styles.price}>
                  <span className={styles.priceAmount}>{calculatePrice('$6,999', 0.29)}</span>
                  <span className={styles.pricePeriod}>/month</span>
                </div>
                {isAnnual && <p className={styles.yearlyPrice}>$59,630/year (29% off)</p>}
                <p className={styles.planDescription}>Unlimited scale and customization</p>
                <ul className={styles.features}>
                  <li>Unlimited Machines</li>
                  <li>Unlimited Repositories</li>
                  <li>Unlimited Storage</li>
                  <li>Unlimited Team Members</li>
                  <li>Real-time continuous snapshots</li>
                  <li>Dedicated account manager</li>
                </ul>
                <a 
                  href="https://outlook.office365.com/book/WalidBenzineRediacccaLtd1@rediacc.ca/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`button button--secondary button--block ${styles.ctaButton}`}>
                  Get Custom Roadmap
                </a>
              </div>
            </div>

            <div className={styles.customSection}>
              <h3>Need a custom solution?</h3>
              <p>We offer tailored plans for enterprises with specific requirements.</p>
              <a 
                href="https://outlook.office.com/owa/calendar/RediaccConsultationServices@rediacc.com/bookings/"
                target="_blank"
                rel="noopener noreferrer"
                className="button button--primary button--lg">
                Schedule a Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className={styles.comparisonSection}>
          <div className={styles.comparisonContainer}>
            <PricingComparisonTable />
          </div>
        </section>

        {/* Speed Pricing Section */}
        <section className={styles.speedPricingSection}>
          <div className="container">
            <SpeedPricingTable />
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <div className="container">
            <FAQ faqData={faqData} />
          </div>
        </section>
      </main>
    </Layout>
  );
}