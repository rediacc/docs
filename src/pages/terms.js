import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

export default function Terms() {
  const lastUpdated = 'January 23, 2025';
  const effectiveDate = 'February 1, 2025';

  return (
    <Layout
      title="Terms of Service - Rediacc"
      description="Rediacc's Terms of Service govern your use of our infrastructure automation platform and related services.">
      
      <Head>
        <meta property="og:title" content="Terms of Service - Rediacc" />
        <meta property="og:description" content="Read Rediacc's Terms of Service for using our infrastructure automation platform." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/terms" />
      </Head>

      <article className="legal-document">
        <div className="container" style={{maxWidth: '900px', padding: '2rem 1rem'}}>
          <h1 style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>Terms of Service</h1>
          <p style={{color: 'var(--ifm-font-color-secondary)', marginBottom: '2rem'}}>
            Last Updated: {lastUpdated} | Effective Date: {effectiveDate}
          </p>

          <section style={{marginBottom: '3rem'}}>
            <h2>1. Agreement to Terms</h2>
            <p>
              These Terms of Service ("Terms") constitute a legally binding agreement between you and Rediacc, Inc. 
              ("Rediacc," "we," "us," or "our") governing your use of our infrastructure automation platform, 
              including our web application, APIs, command-line tools, and related services (collectively, the "Service").
            </p>
            <p>
              By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these Terms, 
              you do not have permission to access the Service.
            </p>
          </section>

          <section style={{marginBottom: '3rem'}}>
            <h2>2. Description of Service</h2>
            <p>
              Rediacc provides an infrastructure automation platform that enables:
            </p>
            <ul>
              <li>Automated infrastructure management and orchestration</li>
              <li>Backup and disaster recovery solutions</li>
              <li>Distributed storage management</li>
              <li>Machine and repository management</li>
              <li>Queue-based task execution</li>
              <li>Security vault for credential management</li>
            </ul>
            <p>
              We reserve the right to modify, suspend, or discontinue any part of the Service at any time with reasonable notice.
            </p>
          </section>

          <section style={{marginBottom: '3rem'}}>
            <h2>3. Account Terms</h2>
            
            <h3>3.1 Account Creation</h3>
            <p>To use certain features of the Service, you must create an account. You agree to:</p>
            <ul>
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your information to keep it accurate</li>
              <li>Maintain the security of your account credentials</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Immediately notify us of any unauthorized use</li>
            </ul>

            <h3>3.2 Account Requirements</h3>
            <ul>
              <li>You must be at least 13 years old to use the Service</li>
              <li>You must be a human (accounts registered by bots or automated methods are not permitted)</li>
              <li>You must provide a valid email address</li>
              <li>One person or legal entity may maintain no more than one free account</li>
            </ul>

            <h3>3.3 Account Security</h3>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials, including your master password. 
              Rediacc cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.
            </p>
          </section>

          <section style={{marginBottom: '3rem'}}>
            <h2>4. Acceptable Use Policy</h2>
            
            <h3>4.1 Permitted Use</h3>
            <p>You may use our Service only for lawful purposes and in accordance with these Terms.</p>

            <h3>4.2 Prohibited Uses</h3>
            <p>You agree not to use the Service to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Transmit any malicious code, viruses, or destructive content</li>
              <li>Infringe upon intellectual property rights</li>
              <li>Harass, abuse, or harm another person or entity</li>
              <li>Impersonate or misrepresent your affiliation with any person or entity</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Attempt to gain unauthorized access to any part of the Service</li>
              <li>Use the Service for cryptocurrency mining without explicit permission</li>
              <li>Resell or redistribute the Service without authorization</li>
              <li>Use the Service to store or transmit illegal content</li>
              <li>Exceed usage limits or abuse resource allocations</li>
            </ul>

            <h3>4.3 Resource Usage</h3>
            <p>
              We reserve the right to impose limits on storage, bandwidth, API calls, and other resources. 
              Excessive use may result in throttling, suspension, or termination of your account.
            </p>
          </section>

          <section style={{marginBottom: '3rem'}}>
            <h2>5. Payment Terms</h2>
            
            <h3>5.1 Pricing</h3>
            <p>
              Our current pricing is available at <Link to="/pricing">rediacc.com/pricing</Link>. 
              We reserve the right to modify pricing with 30 days' notice for existing customers.
            </p>

            <h3>5.2 Billing</h3>
            <ul>
              <li>Subscription fees are billed in advance on a monthly or annual basis</li>
              <li>All fees are non-refundable except as required by law</li>
              <li>You are responsible for all applicable taxes</li>
              <li>We use third-party payment processors and do not store payment card details</li>
            </ul>

            <h3>5.3 Free Trial and Beta Features</h3>
            <p>
              We may offer free trials or beta features. These are provided "as is" without warranties. 
              We may discontinue or modify these offerings at any time.
            </p>

            <h3>5.4 Overdue Payments</h3>
            <p>
              If payment is not received within 7 days of the due date, we may suspend your account. 
              Accounts suspended for more than 30 days may be terminated with data deletion.
            </p>
          </section>

          <section style={{marginBottom: '3rem'}}>
            <h2>6. Intellectual Property Rights</h2>
            
            <h3>6.1 Our Property</h3>
            <p>
              The Service, including its original content, features, and functionality, is owned by Rediacc 
              and is protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>

            <h3>6.2 Your Content</h3>
            <p>
              You retain all rights to content you upload or create using the Service ("Your Content"). 
              By using the Service, you grant us a limited license to:
            </p>
            <ul>
              <li>Store, backup, and archive Your Content</li>
              <li>Process Your Content to provide the Service</li>
              <li>Display Your Content to you and authorized users</li>
            </ul>

            <h3>6.3 Feedback</h3>
            <p>
              Any feedback, suggestions, or ideas you provide about the Service become our property and may be used 
              without compensation or attribution.
            </p>

            <h3>6.4 Open Source Components</h3>
            <p>
              The Service may include open source software components. These components are licensed under their respective licenses, 
              which are available in our documentation.
            </p>
          </section>

          <section style={{marginBottom: '3rem'}}>
            <h2>7. Privacy and Data Protection</h2>
            <p>
              Your use of the Service is also governed by our <Link to="/privacy">Privacy Policy</Link>, 
              which describes how we collect, use, and protect your information.
            </p>
            
            <h3>7.1 Zero-Knowledge Security Model</h3>
            <p>
              Our Service uses a zero-knowledge architecture where:
            </p>
            <ul>
              <li>Your vault data is encrypted with passphrases that only you possess</li>
              <li>We cannot decrypt or access your vault contents</li>
              <li>All sensitive operations occur in runtime-only isolated environments</li>
              <li>You retain full control over your encryption keys</li>
            </ul>

            <h3>7.2 Shared Responsibility</h3>
            <p>
              You acknowledge and agree that:
            </p>
            <ul>
              <li>You are solely responsible for maintaining your master password and credentials</li>
              <li>We cannot recover data if you lose your encryption passphrases</li>
              <li>You are responsible for the legality of data you process using our Service</li>
              <li>You will obtain necessary consents for data you collect through the Service</li>
              <li>While we implement advanced security measures, no system is completely immune to all threats</li>
            </ul>

            <h3>7.3 Data Sovereignty</h3>
            <p>
              Due to our zero-knowledge architecture, you maintain sovereignty over your data. 
              This means we cannot comply with requests to decrypt your vault data, as we do not have the capability to do so.
            </p>
          </section>

          <section style={{marginBottom: '3rem'}}>
            <h2>8. Service Level Agreement</h2>
            
            <h3>8.1 Availability</h3>
            <p>
              We strive to maintain 99.9% uptime for paid accounts, excluding scheduled maintenance. 
              Service credits may be available for extended downtime as detailed in our SLA documentation.
            </p>

            <h3>8.2 Support</h3>
            <ul>
              <li>Free accounts: Community support via documentation and forums</li>
              <li>Paid accounts: Email support with response times based on tier</li>
              <li>Enterprise accounts: Priority support with dedicated channels</li>
            </ul>

            <h3>8.3 Data Backup</h3>
            <p>
              While we maintain backups of Service infrastructure, you are responsible for maintaining backups of Your Content. 
              We recommend using our backup features and maintaining external backups for critical data.
            </p>
          </section>

          <section style={{marginBottom: '3rem'}}>
            <h2>9. API Terms</h2>
            <p>If you access the Service via API, you agree to:</p>
            <ul>
              <li>Use the API only as documented</li>
              <li>Respect rate limits and quotas</li>
              <li>Not attempt to circumvent API limitations</li>
              <li>Keep API credentials secure and confidential</li>
              <li>Monitor your API usage to prevent abuse</li>
            </ul>
          </section>

          <section style={{marginBottom: '3rem'}}>
            <h2>10. Disclaimers and Limitations of Liability</h2>
            
            <h3>10.1 Disclaimers</h3>
            <p style={{textTransform: 'uppercase', fontWeight: 'bold'}}>
              The Service is provided on an "as is" and "as available" basis without warranties of any kind, 
              either express or implied, including but not limited to warranties of merchantability, 
              fitness for a particular purpose, or non-infringement.
            </p>

            <h3>10.2 Limitation of Liability</h3>
            <p style={{textTransform: 'uppercase', fontWeight: 'bold'}}>
              To the maximum extent permitted by law, Rediacc shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly 
              or indirectly, or any loss of data, use, goodwill, or other intangible losses.
            </p>

            <h3>10.3 Maximum Liability</h3>
            <p>
              Our total liability for any claims under these Terms shall not exceed the amount you paid us 
              in the twelve months preceding the claim.
            </p>

            <h3>10.4 Exceptions</h3>
            <p>
              Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability, 
              so some of the above may not apply to you.
            </p>
          </section>

          <section style={{marginBottom: '3rem'}}>
            <h2>11. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Rediacc, its affiliates, and their respective officers, 
              directors, employees, and agents from any claims, damages, losses, liabilities, costs, and expenses 
              (including reasonable attorneys' fees) arising from:
            </p>
            <ul>
              <li>Your use of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Your Content or data processed through the Service</li>
            </ul>
          </section>

          <section style={{marginBottom: '3rem'}}>
            <h2>12. Termination</h2>
            
            <h3>12.1 Termination by You</h3>
            <p>
              You may terminate your account at any time through the account settings or by contacting support. 
              Termination does not entitle you to refunds for fees already paid.
            </p>

            <h3>12.2 Termination by Us</h3>
            <p>
              We may suspend or terminate your account immediately for:
            </p>
            <ul>
              <li>Violation of these Terms</li>
              <li>Non-payment of fees</li>
              <li>Suspected fraudulent or illegal activity</li>
              <li>Extended period of inactivity</li>
              <li>Request by law enforcement</li>
            </ul>

            <h3>12.3 Effect of Termination</h3>
            <p>
              Upon termination:
            </p>
            <ul>
              <li>Your right to use the Service immediately ceases</li>
              <li>We may delete Your Content after 30 days</li>
              <li>Provisions that should survive termination will remain in effect</li>
            </ul>
          </section>

          <section style={{marginBottom: '3rem'}}>
            <h2>13. Dispute Resolution</h2>
            
            <h3>13.1 Governing Law</h3>
            <p>
              These Terms are governed by the laws of the State of California, United States, 
              without regard to its conflict of law provisions.
            </p>

            <h3>13.2 Arbitration</h3>
            <p>
              Any dispute arising from these Terms shall be resolved through binding arbitration in accordance 
              with the rules of the American Arbitration Association. The arbitration shall be conducted in 
              San Francisco, California.
            </p>

            <h3>13.3 Class Action Waiver</h3>
            <p style={{textTransform: 'uppercase', fontWeight: 'bold'}}>
              You agree to resolve disputes with us on an individual basis and waive your right to participate 
              in class actions, class arbitrations, or representative actions.
            </p>

            <h3>13.4 Exceptions</h3>
            <p>
              Either party may seek injunctive relief in court for violations of intellectual property rights 
              or confidentiality obligations.
            </p>
          </section>

          <section style={{marginBottom: '3rem'}}>
            <h2>14. Export Controls</h2>
            <p>
              You agree to comply with all applicable export and import laws and regulations. 
              You may not use the Service if you are subject to U.S. sanctions or located in a country 
              subject to U.S. embargo.
            </p>
          </section>

          <section style={{marginBottom: '3rem'}}>
            <h2>15. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of material changes by:
            </p>
            <ul>
              <li>Posting the new Terms on this page</li>
              <li>Updating the "Last Updated" date</li>
              <li>Sending email notification for significant changes</li>
            </ul>
            <p>
              Continued use of the Service after changes become effective constitutes acceptance of the new Terms.
            </p>
          </section>

          <section style={{marginBottom: '3rem'}}>
            <h2>16. General Provisions</h2>
            
            <h3>16.1 Entire Agreement</h3>
            <p>
              These Terms, together with our Privacy Policy and any other agreements expressly incorporated by reference, 
              constitute the entire agreement between you and Rediacc regarding the Service.
            </p>

            <h3>16.2 Severability</h3>
            <p>
              If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force.
            </p>

            <h3>16.3 Waiver</h3>
            <p>
              Our failure to enforce any provision of these Terms shall not constitute a waiver of that provision.
            </p>

            <h3>16.4 Assignment</h3>
            <p>
              You may not assign or transfer these Terms without our prior written consent. 
              We may assign our rights and obligations without restriction.
            </p>

            <h3>16.5 Force Majeure</h3>
            <p>
              Neither party shall be liable for delays or failures in performance due to circumstances beyond 
              their reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, 
              riots, embargoes, acts of civil or military authorities, fire, floods, accidents, strikes, 
              or shortages of transportation facilities, fuel, energy, labor, or materials.
            </p>
          </section>

          <section style={{marginBottom: '3rem'}}>
            <h2>17. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at:
            </p>
            <address style={{fontStyle: 'normal', marginTop: '1rem'}}>
              <strong>Rediacc, Inc.</strong><br />
              Legal Department<br />
              Email: legal@rediacc.com<br />
              Address: San Francisco, CA, United States<br />
            </address>
          </section>

          <section style={{marginBottom: '3rem', padding: '1.5rem', background: 'var(--ifm-color-emphasis-100)', borderRadius: '8px'}}>
            <h3>Agreement Acknowledgment</h3>
            <p style={{margin: 0}}>
              By using Rediacc's Service, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. 
              If you are using the Service on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
            </p>
          </section>
        </div>
      </article>
    </Layout>
  );
}