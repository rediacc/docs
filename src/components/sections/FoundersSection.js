import React from 'react';
import Link from '@docusaurus/Link';
import styles from './FoundersSection.module.css';

const FoundersSection = () => {
  return (
    <section id="founders" className={styles.foundersSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>ABOUT THE FOUNDER</h2>
          <div className={styles.divider}></div>
        </div>
        
        <div className={styles.founderCard}>
          <div className={styles.founderContent}>
            <div className={styles.founderAvatar}>
              <span className={styles.initials}>MF</span>
            </div>
            
            <div className={styles.founderInfo}>
              <h3 className={styles.founderTitle}>From Setback to Innovation</h3>
              <p className={styles.founderDescription}>
                Born from personal adversity, Rediacc was created by Muhammed Fatih Bayraktar after his high-tech 
                equipment was seized for 20 months. Without backups and forced to return to salaried work, this 
                experience inspired him to develop a solution to prevent similar data disasters.
              </p>
              <p className={styles.founderJourney}>
                After discovering containerization in 2021, Muhammed built what Docker alone couldn't provide — 
                a system enabling migration with under a minute downtime, regardless of data size. Rediacc evolved 
                to include portable file systems, intelligent backups, and enhanced security features.
              </p>
              <div className={styles.readMore}>
                <Link to="/about" className={styles.readMoreLink}>
                  Read the full journey
                  <svg className={styles.arrow} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.tagline}>
          <p>A product forged through life's toughest moments, now available to everyone.</p>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;