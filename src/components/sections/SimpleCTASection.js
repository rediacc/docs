import React from 'react';
import Link from '@docusaurus/Link';
import styles from './SimpleCTASection.module.css';

const SimpleCTASection = () => {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            Ready to <span className={styles.highlight}>Accelerate Your Business?</span>
          </h2>
          <p className={styles.ctaSubtitle}>
            Instant Recovery. Endless Scale.
          </p>
          <p className={styles.ctaDescription}>
            Enhance system flexibility and resilience with our enterprise guarantees
          </p>
          <div className={styles.ctaButtons}>
            <Link
              className={`button button--primary button--lg ${styles.ctaButton}`}
              to="/pricing">
              View Pricing
            </Link>
            <a
              className={`button button--secondary button--lg ${styles.ctaButton}`}
              href="https://outlook.office365.com/book/WalidBenzineRediacccaLtd1@rediacc.ca/"
              target="_blank"
              rel="noopener noreferrer">
              Schedule Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleCTASection;