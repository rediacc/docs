import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: 'general',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We\'ll get back to you within 24 hours.');
  };

  return (
    <Layout
      title="Contact Us - Get in Touch with Rediacc Infrastructure Experts"
      description="Contact Rediacc for enterprise infrastructure solutions. Get expert help, request a demo, or discuss your infrastructure automation needs.">
      
      <Head>
        <meta property="og:title" content="Contact Rediacc - Infrastructure Automation Experts" />
        <meta property="og:description" content="Get in touch with our infrastructure experts. Request a demo, get support, or discuss enterprise solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/contact" />
        <link rel="canonical" href="/contact" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "url": "/contact",
            "contactType": "sales",
            "areaServed": "Worldwide",
            "availableLanguage": ["English"],
            "contactOption": ["TollFree", "Email"],
            "telephone": "+1-800-REDIACC"
          })}
        </script>
      </Head>

      <article>
        {/* Hero Section */}
        <section className="hero-section" style={{padding: '4rem 1rem'}}>
          <div className="container">
            <h1 className="hero-title animate-fade-in-up">
              Let's Talk Infrastructure
            </h1>
            <p className="hero-subtitle animate-fade-in-up animate-delay-100">
              Our experts are ready to help you transform your infrastructure
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto 4rem'}}>
              <div className="feature-card" style={{textAlign: 'center'}}>
                <div style={{fontSize: '2rem', marginBottom: '1rem'}}>💬</div>
                <h3>Sales Inquiries</h3>
                <p>Ready to see how Rediacc can transform your infrastructure?</p>
                <p style={{fontWeight: 'bold', color: 'var(--ifm-color-primary)'}}>sales@rediacc.com</p>
                <p>+1-800-REDIACC</p>
              </div>
              
              <div className="feature-card" style={{textAlign: 'center'}}>
                <div style={{fontSize: '2rem', marginBottom: '1rem'}}>🛠️</div>
                <h3>Technical Support</h3>
                <p>Need help with your Rediacc deployment?</p>
                <p style={{fontWeight: 'bold', color: 'var(--ifm-color-primary)'}}>support@rediacc.com</p>
                <Link to="/intro">Documentation →</Link>
              </div>
              
              <div className="feature-card" style={{textAlign: 'center'}}>
                <div style={{fontSize: '2rem', marginBottom: '1rem'}}>🤝</div>
                <h3>Partnerships</h3>
                <p>Interested in partnering with Rediacc?</p>
                <p style={{fontWeight: 'bold', color: 'var(--ifm-color-primary)'}}>partners@rediacc.com</p>
                <p>Let's grow together</p>
              </div>
            </div>

            {/* Contact Form */}
            <div style={{maxWidth: '800px', margin: '0 auto'}}>
              <h2 style={{fontSize: '2rem', marginBottom: '2rem', textAlign: 'center'}}>Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} style={{
                background: 'var(--ifm-background-surface-color)',
                padding: '2rem',
                borderRadius: '8px'
              }}>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem'}}>
                  <div>
                    <label htmlFor="name" style={{display: 'block', marginBottom: '0.5rem', fontWeight: '500'}}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid var(--ifm-color-emphasis-300)',
                        borderRadius: '4px',
                        background: 'var(--ifm-background-color)',
                        color: 'var(--ifm-font-color-base)'
                      }}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" style={{display: 'block', marginBottom: '0.5rem', fontWeight: '500'}}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid var(--ifm-color-emphasis-300)',
                        borderRadius: '4px',
                        background: 'var(--ifm-background-color)',
                        color: 'var(--ifm-font-color-base)'
                      }}
                    />
                  </div>
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem'}}>
                  <div>
                    <label htmlFor="company" style={{display: 'block', marginBottom: '0.5rem', fontWeight: '500'}}>
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid var(--ifm-color-emphasis-300)',
                        borderRadius: '4px',
                        background: 'var(--ifm-background-color)',
                        color: 'var(--ifm-font-color-base)'
                      }}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" style={{display: 'block', marginBottom: '0.5rem', fontWeight: '500'}}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid var(--ifm-color-emphasis-300)',
                        borderRadius: '4px',
                        background: 'var(--ifm-background-color)',
                        color: 'var(--ifm-font-color-base)'
                      }}
                    />
                  </div>
                </div>

                <div style={{marginBottom: '1.5rem'}}>
                  <label htmlFor="subject" style={{display: 'block', marginBottom: '0.5rem', fontWeight: '500'}}>
                    How can we help? *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--ifm-color-emphasis-300)',
                      borderRadius: '4px',
                      background: 'var(--ifm-background-color)',
                      color: 'var(--ifm-font-color-base)'
                    }}>
                    <option value="general">General Inquiry</option>
                    <option value="demo">Request a Demo</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="enterprise">Enterprise Solutions</option>
                  </select>
                </div>

                <div style={{marginBottom: '1.5rem'}}>
                  <label htmlFor="message" style={{display: 'block', marginBottom: '0.5rem', fontWeight: '500'}}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--ifm-color-emphasis-300)',
                      borderRadius: '4px',
                      background: 'var(--ifm-background-color)',
                      color: 'var(--ifm-font-color-base)',
                      resize: 'vertical'
                    }}
                    placeholder="Tell us about your infrastructure needs..."
                  />
                </div>

                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <p style={{fontSize: '0.9rem', color: 'var(--ifm-font-color-secondary)'}}>
                    * Required fields
                  </p>
                  <button
                    type="submit"
                    className="button button--primary button--lg">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center'}}>Global Offices</h2>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto'}}>
              <div className="feature-card">
                <h3>🇺🇸 San Francisco (HQ)</h3>
                <p>
                  100 Market Street<br />
                  Suite 500<br />
                  San Francisco, CA 94111<br />
                  United States
                </p>
                <p style={{color: 'var(--ifm-color-primary)'}}>+1 (415) 555-0100</p>
              </div>
              
              <div className="feature-card">
                <h3>🇬🇧 London</h3>
                <p>
                  25 Old Broad Street<br />
                  Level 12<br />
                  London EC2N 1HN<br />
                  United Kingdom
                </p>
                <p style={{color: 'var(--ifm-color-primary)'}}>+44 20 7946 0100</p>
              </div>
              
              <div className="feature-card">
                <h3>🇸🇬 Singapore</h3>
                <p>
                  1 Raffles Place<br />
                  Tower 2, Level 20<br />
                  Singapore 048616<br />
                  Singapore
                </p>
                <p style={{color: 'var(--ifm-color-primary)'}}>+65 6808 5000</p>
              </div>
              
              <div className="feature-card">
                <h3>🇩🇪 Frankfurt</h3>
                <p>
                  Neue Mainzer Str. 52<br />
                  60311 Frankfurt am Main<br />
                  Germany
                </p>
                <p style={{color: 'var(--ifm-color-primary)'}}>+49 69 7104 0</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Frequently Asked Questions
            </h2>
            
            <div style={{maxWidth: '800px', margin: '0 auto'}}>
              <details style={{marginBottom: '1rem', padding: '1rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                <summary style={{cursor: 'pointer', fontWeight: 'bold', fontSize: '1.2rem'}}>
                  What's the best way to reach you?
                </summary>
                <p style={{marginTop: '1rem', lineHeight: '1.6'}}>
                  For sales inquiries, email sales@rediacc.com or call +1-800-REDIACC. For technical support, 
                  our support portal at support.rediacc.com is the fastest way to get help. Enterprise customers 
                  have access to dedicated Slack channels and phone support.
                </p>
              </details>

              <details style={{marginBottom: '1rem', padding: '1rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                <summary style={{cursor: 'pointer', fontWeight: 'bold', fontSize: '1.2rem'}}>
                  How quickly do you respond?
                </summary>
                <p style={{marginTop: '1rem', lineHeight: '1.6'}}>
                  We aim to respond to all inquiries within 24 hours. Enterprise customers with SLAs receive 
                  guaranteed response times as low as 15 minutes for critical issues. Sales inquiries typically 
                  receive responses within 2-4 business hours.
                </p>
              </details>

              <details style={{marginBottom: '1rem', padding: '1rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                <summary style={{cursor: 'pointer', fontWeight: 'bold', fontSize: '1.2rem'}}>
                  Do you offer on-site consultations?
                </summary>
                <p style={{marginTop: '1rem', lineHeight: '1.6'}}>
                  Yes, for enterprise customers we offer on-site consultations, training, and implementation support. 
                  Our solution architects can work with your team to design the optimal infrastructure setup for 
                  your specific needs.
                </p>
              </details>

              <details style={{marginBottom: '1rem', padding: '1rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
                <summary style={{cursor: 'pointer', fontWeight: 'bold', fontSize: '1.2rem'}}>
                  What languages do you support?
                </summary>
                <p style={{marginTop: '1rem', lineHeight: '1.6'}}>
                  Our support team provides assistance in English, Spanish, French, German, Japanese, and Mandarin. 
                  Documentation is available in English with translations coming soon for other major languages.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          padding: '4rem 1rem',
          background: 'var(--ifm-background-surface-color)',
          borderTop: '1px solid var(--ifm-toc-border-color)',
          textAlign: 'center',
        }}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--ifm-heading-color)'}}>
              Ready to Transform Your Infrastructure?
            </h2>
            <p style={{fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--ifm-font-color-secondary)'}}>
              Our experts are standing by to help you get started
            </p>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link
                className="button button--primary button--lg"
                to="/intro">
                Start Free Trial
              </Link>
              <a
                className="button button--secondary button--lg"
                href="tel:+1-800-REDIACC">
                Call Us Now
              </a>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}