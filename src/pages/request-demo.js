import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './request-demo.module.css';
import clsx from 'clsx';

export default function RequestDemo() {
  const {siteConfig} = useDocusaurusContext();
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you would send form data to your backend
    setFormSubmitted(true);
  };
  
  return (
    <Layout
      title={`Request Your FREE System Assessment | ${siteConfig.title}`}
      description="Get your free system assessment and cost-saving analysis worth $2,500. Find out how much you could save with Rediacc.">
      <main className={styles.demoPage}>
        <div className={styles.heroSection}>
          <div className="container">
            <Heading as="h1" className={styles.mainHeadline}>
              Request Your FREE System Assessment & Cost-Saving Analysis (Worth $2,500)
            </Heading>
            
            <p className={styles.subheadline}>
              Complete the form below to secure your spot. Remember, this offer is limited to the first 10 businesses that apply this month!
            </p>
          </div>
        </div>
        
        <div className={styles.formSection}>
          <div className="container">
            <div className={styles.formWrapper}>
              {!formSubmitted ? (
                <>
                  <div className={styles.formIntro}>
                    <Heading as="h2">
                      Let Us Show You How To Cut Your System Costs By Up To 90%
                    </Heading>
                    
                    <p>
                      Fill out the form below and one of our system optimization experts will contact you within 24 hours to schedule your FREE assessment.
                    </p>
                    
                    <div className={styles.scarcityBadge}>
                      <span>⚠️ Only 10 spots available this month!</span>
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Full Name*</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="John Smith" 
                        required
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="company">Company Name*</label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company" 
                        placeholder="Acme, Inc." 
                        required
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Business Email*</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="john@company.com" 
                        required
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number*</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        placeholder="(555) 123-4567" 
                        required
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="employees">Number of Employees</label>
                      <select id="employees" name="employees">
                        <option value="">Select an option</option>
                        <option value="1-10">1-10</option>
                        <option value="11-50">11-50</option>
                        <option value="51-200">51-200</option>
                        <option value="201-500">201-500</option>
                        <option value="501+">501+</option>
                      </select>
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="challenge">Your Biggest IT Challenge</label>
                      <textarea 
                        id="challenge" 
                        name="challenge" 
                        placeholder="What's your biggest pain point with your current IT systems?"
                        rows="4"
                      ></textarea>
                    </div>
                    
                    <div className={styles.guarantee}>
                      <p>
                        <strong>Our Guarantee:</strong> If our assessment doesn't identify at least $10,000 in potential annual savings for your business, we'll pay you $500 for wasting your time.
                      </p>
                    </div>
                    
                    <button type="submit" className={styles.submitButton}>
                      Yes! Reserve My FREE Assessment Now →
                    </button>
                    
                    <p className={styles.formDisclaimer}>
                      By submitting this form, you agree to our <Link to="/privacy">privacy policy</Link>. We respect your privacy and will never share your information.
                    </p>
                  </form>
                </>
              ) : (
                <div className={styles.thankYouMessage}>
                  <div className={styles.successIcon}>✓</div>
                  <Heading as="h2">Thank You for Your Request!</Heading>
                  <p>
                    Your application for a FREE System Assessment has been received. One of our system optimization experts will contact you within 24 hours to schedule your assessment.
                  </p>
                  <p>
                    <strong>Next Steps:</strong>
                  </p>
                  <ol>
                    <li>Check your email for a confirmation message</li>
                    <li>Our expert will call you within 24 hours</li>
                    <li>Schedule your FREE assessment at a time that works for you</li>
                    <li>Receive your custom analysis with potential cost savings</li>
                  </ol>
                  <p>
                    In the meantime, you might want to explore our:
                  </p>
                  <div className={styles.nextStepsLinks}>
                    <Link to="/docs/features" className={styles.nextStepLink}>
                      Explore Features
                    </Link>
                    <Link to="/docs/case-examples/backup/zero-cost" className={styles.nextStepLink}>
                      View Case Examples
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <div className={styles.bonusSection}>
              <Heading as="h3">You'll Also Receive These Exclusive Bonuses:</Heading>
              
              <div className={styles.bonusGrid}>
                <div className={styles.bonusCard}>
                  <div className={styles.bonusHeader}>
                    <span className={styles.bonusLabel}>BONUS #1</span>
                    <span className={styles.bonusValue}>$997 Value</span>
                  </div>
                  <Heading as="h4">Disaster Recovery Playbook</Heading>
                  <p>Our step-by-step guide to creating a foolproof disaster recovery plan for your business.</p>
                </div>
                
                <div className={styles.bonusCard}>
                  <div className={styles.bonusHeader}>
                    <span className={styles.bonusLabel}>BONUS #2</span>
                    <span className={styles.bonusValue}>$1,200 Value</span>
                  </div>
                  <Heading as="h4">Security Threat Assessment</Heading>
                  <p>A comprehensive scan of your systems to identify and prioritize security vulnerabilities.</p>
                </div>
                
                <div className={styles.bonusCard}>
                  <div className={styles.bonusHeader}>
                    <span className={styles.bonusLabel}>BONUS #3</span>
                    <span className={styles.bonusValue}>$850 Value</span>
                  </div>
                  <Heading as="h4">Cloud Cost Optimization Guide</Heading>
                  <p>Insider strategies to reduce your cloud spending regardless of which provider you use.</p>
                </div>
              </div>
              
              <div className={styles.totalValue}>
                <p><strong>Total Value: $5,547</strong></p>
                <p className={styles.yourPrice}>Your Investment Today: $0</p>
              </div>
            </div>
            
            <div className={styles.testimonialQuote}>
              <div className={styles.quoteContent}>
                <p>"After implementing Rediacc, we cut our IT costs by 78% while improving our recovery time from 24 hours to just 20 minutes. It's been a game-changer for our business."</p>
                <div className={styles.quoteAuthor}>
                  <strong>Sarah Johnson</strong>, CEO, TechFirst Solutions
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
} 