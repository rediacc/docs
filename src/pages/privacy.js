import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

export default function Privacy() {
  const lastUpdated = 'January 23, 2025';
  const effectiveDate = 'February 1, 2025';

  return (
    <Layout
      title="Privacy Policy - Rediacc"
      description="Rediacc's Privacy Policy explains how we collect, use, and protect your information when you use our infrastructure automation platform.">
      
      <Head>
        <meta property="og:title" content="Privacy Policy - Rediacc" />
        <meta property="og:description" content="Learn how Rediacc collects, uses, and protects your data." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/privacy" />
      </Head>

      <article className="legal-document">
        <div className="container" style={{maxWidth: '900px', padding: '2rem 1rem'}}>
          <h1 style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>Privacy Policy</h1>
          <p style={{color: 'var(--ifm-font-color-secondary)', marginBottom: '2rem'}}>
            Last Updated: {lastUpdated} | Effective Date: {effectiveDate}
          </p>

          <section style={{marginBottom: '3rem'}}>
            <h2>1. Introduction</h2>
            <p>
              Rediacc, Inc. ("Rediacc," "we," "us," or "our") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you use our infrastructure automation platform and related services (collectively, the "Service").
            </p>
            <p>
              By using our Service, you agree to the collection and use of information in accordance with this Privacy Policy. 
              If you do not agree with the terms of this Privacy Policy, please do not access the Service.
            </p>
          </section>

          <section style={{marginBottom: '3rem'}}>
            <h2>2. Information We Collect</h2>
            
            <h3>2.1 Personal Information</h3>
            <p>We collect information you provide directly to us, including:</p>
            <ul>
              <li>Account information (name, email address, company name)</li>
              <li>Authentication credentials (encrypted passwords, API tokens)</li>
              <li>Billing information (processed securely through third-party payment processors)</li>
              <li>Communication preferences and contact information</li>
            </ul>

            <h3>2.2 Technical Information</h3>
            <p>When you use our Service, we automatically collect:</p>
            <ul>
              <li>Infrastructure configuration data and metadata</li>
              <li>Usage logs and activity data</li>
              <li>Performance metrics and system diagnostics</li>
              <li>IP addresses and device information</li>
              <li>Browser type and operating system</li>
            </ul>

            <h3>2.3 Infrastructure Data</h3>
            <p>To provide our Service, we process:</p>
            <ul>
              <li>Machine configurations and specifications</li>
              <li>Repository and backup data (encrypted)</li>
              <li>Queue items and task execution logs</li>
              <li>Vault data (encrypted with your master password)</li>
            </ul>
          </section>

          <section style={{marginBottom: '3rem'}}>
            <h2>3. How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul>
              <li>Provide, maintain, and improve our Service</li>
              <li>Process transactions and manage your account</li>
              <li>Send administrative information and service updates</li>
              <li>Respond to customer service requests and support needs</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Comply with legal obligations and enforce our terms</li>
              <li>Protect against fraudulent or illegal activity</li>
            </ul>
          </section>

          <section style={{marginBottom: '3rem'}}>
            <h2>4. Data Security</h2>
            
            <h3>4.1 Zero-Knowledge Architecture</h3>
            <p>
              Rediacc employs a zero-knowledge security architecture where:
            </p>
            <ul>
              <li>All sensitive vault data is encrypted with passphrases that only you control</li>
              <li>We do not store or have access to your encryption passphrases</li>
              <li>Decryption occurs only at runtime in isolated environments and is never persisted</li>
              <li>Each company, team, and infrastructure component has separate encrypted vaults</li>
            </ul>

            <h3>4.2 Technical Security Measures</h3>
            <ul>
              <li>Multi-layer encryption with user-specific passphrases</li>
              <li>Automatic token rotation on every API request</li>
              <li>TLS 1.3 encryption for all data in transit</li>
              <li>AES-256 encryption for data at rest</li>
              <li>Vault versioning and chunked storage for enhanced security</li>
              <li>Time-based token expiration with sliding windows</li>
              <li>Anti-replay protection through token chaining</li>
            </ul>

            <h3>4.3 What This Means for You</h3>
            <p>
              With our zero-knowledge architecture:
            </p>
            <ul>
              <li>Your infrastructure credentials and sensitive data remain private to you</li>
              <li>We cannot access your vault contents, even if required by legal process</li>
              <li>If you use a master password, even our runtime systems cannot decrypt your data</li>
              <li>You maintain complete control and ownership of your data</li>
            </ul>
            <p>
              <strong>Important:</strong> Because we cannot access your passphrases, we cannot recover your data if you lose your master password. 
              Please store your credentials securely.
            </p>
          </section>

          <section style={{marginBottom: '3rem'}}>
            <h2>5. Data Sharing and Disclosure</h2>
            <p>We do not sell, trade, or rent your personal information. We may share your information only in the following circumstances:</p>
            
            <h3>5.1 Service Providers</h3>
            <p>
              We may share information with third-party service providers who perform services on our behalf, such as:
            </p>
            <ul>
              <li>Cloud infrastructure providers (AWS, Google Cloud)</li>
              <li>Payment processors</li>
              <li>Analytics services</li>
              <li>Customer support tools</li>
            </ul>

            <h3>5.2 Legal Requirements and Limitations</h3>
            <p>
              While we comply with valid legal requests, our zero-knowledge architecture means:
            </p>
            <ul>
              <li>We can only provide metadata and non-encrypted information</li>
              <li>We cannot decrypt your vault data as we don't possess the encryption keys</li>
              <li>Infrastructure credentials and sensitive configurations remain inaccessible to us</li>
            </ul>
            <p>
              We will disclose what information we can access if required by law, but encrypted vault contents 
              are mathematically protected and cannot be decrypted without your passphrase.
            </p>

            <h3>5.3 Business Transfers</h3>
            <p>
              In the event of a merger, acquisition, or sale of assets, your information may be transferred. 
              We will provide notice before your information is transferred and becomes subject to a different privacy policy.
            </p>
          </section>

          <section style={{marginBottom: '3rem'}}>
            <h2>6. Your Privacy Rights</h2>
            
            <h3>6.1 Access and Control</h3>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your information</li>
              <li>Export your data in a portable format</li>
              <li>Opt-out of marketing communications</li>
              <li>Restrict processing of your information</li>
            </ul>

            <h3>6.2 California Privacy Rights (CCPA)</h3>
            <p>
              California residents have additional rights under the California Consumer Privacy Act (CCPA), including:
            </p>
            <ul>
              <li>The right to know what personal information is collected</li>
              <li>The right to know whether personal information is sold or disclosed</li>
              <li>The right to opt-out of the sale of personal information</li>
              <li>The right to non-discrimination for exercising privacy rights</li>
            </ul>

            <h3>6.3 European Privacy Rights (GDPR)</h3>
            <p>
              If you are in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR), including:
            </p>
            <ul>
              <li>The right to be informed about data processing</li>
              <li>The right to data portability</li>
              <li>The right to object to processing</li>
              <li>Rights related to automated decision-making</li>
              <li>The right to lodge a complaint with supervisory authorities</li>
            </ul>
          </section>

          <section style={{marginBottom: '3rem'}}>
            <h2>7. Data Retention</h2>
            <p>
              We retain your information for as long as necessary to provide our Service and fulfill the purposes outlined in this Privacy Policy. 
              Retention periods vary based on the type of information and legal requirements:
            </p>
            <ul>
              <li>Account information: Retained while your account is active</li>
              <li>Infrastructure data: Retained according to your backup and retention policies</li>
              <li>Usage logs: Retained for 90 days for operational purposes</li>
              <li>Billing records: Retained for 7 years for tax and accounting purposes</li>
            </ul>
            <p>
              Upon account termination, we will delete or anonymize your information within 30 days, 
              except where retention is required by law.
            </p>
          </section>

          <section style={{marginBottom: '3rem'}}>
            <h2>8. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of residence. 
              These countries may have data protection laws different from those in your country.
            </p>
            <p>
              We ensure appropriate safeguards are in place for international transfers, including:
            </p>
            <ul>
              <li>Standard Contractual Clauses approved by the European Commission</li>
              <li>Adequacy decisions where applicable</li>
              <li>Your explicit consent where required</li>
            </ul>
          </section>

          <section style={{marginBottom: '3rem'}}>
            <h2>9. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to:
            </p>
            <ul>
              <li>Maintain user sessions and authentication</li>
              <li>Remember user preferences and settings</li>
              <li>Analyze usage patterns and improve our Service</li>
              <li>Provide security features</li>
            </ul>
            <p>
              You can control cookies through your browser settings. Note that disabling cookies may affect Service functionality.
            </p>
          </section>

          <section style={{marginBottom: '3rem'}}>
            <h2>10. Children's Privacy</h2>
            <p>
              Our Service is not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. 
              If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
            </p>
          </section>

          <section style={{marginBottom: '3rem'}}>
            <h2>11. Third-Party Links</h2>
            <p>
              Our Service may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. 
              We encourage you to review their privacy policies before providing any information.
            </p>
          </section>

          <section style={{marginBottom: '3rem'}}>
            <h2>12. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by:
            </p>
            <ul>
              <li>Posting the new Privacy Policy on this page</li>
              <li>Updating the "Last Updated" date</li>
              <li>Sending email notification for material changes</li>
              <li>Displaying a prominent notice in the Service</li>
            </ul>
            <p>
              Your continued use of the Service after changes become effective constitutes acceptance of the revised Privacy Policy.
            </p>
          </section>

          <section style={{marginBottom: '3rem'}}>
            <h2>13. Contact Information</h2>
            <p>
              If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <address style={{fontStyle: 'normal', marginTop: '1rem'}}>
              <strong>Rediacc, Inc.</strong><br />
              Privacy Officer<br />
              Email: privacy@rediacc.com<br />
              Address: San Francisco, CA, United States<br />
            </address>
            <p style={{marginTop: '1rem'}}>
              For data protection inquiries in the European Union, you may also contact our EU representative at: eu-privacy@rediacc.com
            </p>
          </section>

          <section style={{marginBottom: '3rem', padding: '1.5rem', background: 'var(--ifm-color-emphasis-100)', borderRadius: '8px'}}>
            <h3>Your Privacy Matters</h3>
            <p style={{margin: 0}}>
              At Rediacc, we are committed to maintaining the trust and confidence of our users. 
              We continuously review and update our privacy practices to ensure your information is protected 
              while providing you with the best possible infrastructure automation experience.
            </p>
          </section>
        </div>
      </article>
    </Layout>
  );
}