import React, { useState, useEffect } from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timeouts = [1000, 1200, 1400, 1000];
    if (step >= 0 && step < timeouts.length) {
      const timer = setTimeout(() => setStep(step + 1), timeouts[step]);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const lines = [
    "3 AM.",
    "Phone Rings.",
    "Your System Is Down."
  ];

  return (
    <section className={styles.heroSection}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.mainHeadline}>
              <span className={step >= 0 ? styles.fadeIn : styles.invisible}>{lines[0]}</span>
              <br />
              <span className={step >= 1 ? styles.fadeIn : styles.invisible}>{lines[1]}</span>
              <br />
              <span className={step >= 2 ? `${styles.fadeIn} ${styles.highlight}` : styles.invisible}>{lines[2]}</span>
            </h1>
            
            {step >= 3 && (
              <p className={`${styles.subline} ${styles.fadeIn}`}>
                With Rediacc, it never has to ring again.
              </p>
            )}
            
            {step >= 4 && (
              <p className={`${styles.explanation} ${styles.fadeIn}`}>
                Every IT disaster follows the same pattern: surprise, panic, damage control. 
                Break the pattern. Rediacc prevents disasters before they start, scales without 
                breaking, and recovers in seconds—not days.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;