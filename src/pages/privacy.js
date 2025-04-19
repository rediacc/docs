import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './privacy.module.css';

export default function PrivacyPolicy() {
  return (
    <Layout
      title="Privacy Policy"
      description="Our commitment to protecting your privacy and personal information">
      <main className={styles.privacyPage}>
        <div className="container">
          <div className={styles.privacyContent}>
            <Heading as="h1">Privacy Policy</Heading>
            
            <section className={styles.section}>
              <Heading as="h2">1. Introduction</Heading>
              <p>
                At Rediacc, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.
              </p>
            </section>

            <section className={styles.section}>
              <Heading as="h2">2. Information We Collect</Heading>
              <p>We collect information that you provide directly to us, including:</p>
              <ul>
                <li>Contact information (name, email, phone number)</li>
                <li>Company information (name, size, industry)</li>
                <li>IT system details and challenges</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section className={styles.section}>
              <Heading as="h2">3. How We Use Your Information</Heading>
              <p>We use the collected information to:</p>
              <ul>
                <li>Provide and improve our services</li>
                <li>Communicate with you about your system assessment</li>
                <li>Send you relevant information about our services</li>
                <li>Analyze and improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className={styles.section}>
              <Heading as="h2">4. Information Sharing</Heading>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul>
                <li>To trusted third parties who assist us in operating our website and conducting our business</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </section>

            <section className={styles.section}>
              <Heading as="h2">5. Data Security</Heading>
              <p>
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className={styles.section}>
              <Heading as="h2">6. Your Rights</Heading>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to processing of your information</li>
              </ul>
            </section>

            <section className={styles.section}>
              <Heading as="h2">7. Cookies and Tracking</Heading>
              <p>
                We use cookies and similar tracking technologies to improve your browsing experience and analyze website traffic. You can control cookies through your browser settings.
              </p>
            </section>

            <section className={styles.section}>
              <Heading as="h2">8. Changes to This Policy</Heading>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the effective date.
              </p>
            </section>

            <section className={styles.section}>
              <Heading as="h2">9. Contact Us</Heading>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p>
                Email: privacy@rediacc.com<br />
                Phone: (555) 123-4567<br />
                Address: [Your Company Address]
              </p>
            </section>

            <p className={styles.lastUpdated}>
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
} 