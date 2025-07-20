import React, { useState } from 'react';
import styles from './FAQ.module.css';

const FAQ = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <h3 className={styles.faqTitle}>Frequently Asked Questions</h3>
      <div className={styles.faqList}>
        {faqData.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <button
              className={`${styles.faqQuestion} ${activeIndex === index ? styles.active : ''}`}
              onClick={() => handleQuestionClick(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className={styles.faqQuestionText}>{item.question}</span>
              <span className={styles.faqIcon}>
                <svg
                  className={`${styles.faqIconSvg} ${activeIndex === index ? styles.rotate : ''}`}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            <div
              id={`faq-answer-${index}`}
              className={`${styles.faqAnswer} ${activeIndex === index ? styles.active : ''}`}
            >
              <div className={styles.faqAnswerContent}>
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;