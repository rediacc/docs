import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { Icon } from '../components/Icon';

export default function About() {
  return (
    <Layout
      title="The Team Preventing Your Next €4.5B Disaster | About Rediacc"
      description="Meet the engineers building disaster-proof infrastructure. Designed to save companies $100M+ in potential downtime. Your infrastructure insurance starts here.">
      
      <Head>
        <meta property="og:title" content="The Team That Stops €4.5B Disasters | Rediacc" />
        <meta property="og:description" content="Building infrastructure that could maintain 98% uptime during disasters. Meet the team making disasters impossible." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/about" />
        <link rel="canonical" href="/about" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Rediacc",
            "description": "Infrastructure disaster prevention platform. 100-second recovery capability. 90% cost reduction potential. Designed to prevent billions in losses.",
            "url": "/",
            "logo": "/img/logo.svg",
            "foundingDate": "2024",
            "founders": [
              {
                "@type": "Person",
                "name": "John Smith"
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "San Francisco",
              "addressRegion": "CA",
              "addressCountry": "US"
            },
            "sameAs": [
              "https://github.com/rediacc",
              "https://twitter.com/rediacc",
              "https://linkedin.com/company/rediacc"
            ]
          })}
        </script>
      </Head>

      <article>
        {/* Hero Section */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)', borderBottom: '1px solid var(--ifm-toc-border-color)'}}>
          <div className="container">
            <h1 style={{fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center', color: 'var(--ifm-heading-color)'}}>
              We Stop Infrastructure Disasters Before They Destroy Your Business
            </h1>
            <p style={{fontSize: '1.25rem', textAlign: 'center', color: 'var(--ifm-font-color-secondary)', maxWidth: '800px', margin: '0 auto'}}>
              Building systems designed to prevent billions in disaster losses. Our platform could save $10M+ from AI disasters. This is our mission.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center'}}>The Engineers Protecting Your Infrastructure</h2>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', maxWidth: '1000px', margin: '0 auto'}}>
              {[
                {
                  name: 'Muhammed Fatih Bayraktar',
                  role: 'Founder',
                  image: '/img/profiles/mfb.jpeg',
                  linkedin: 'https://www.linkedin.com/in/muhammed-fatih-bayraktar/'
                },
                {
                  name: 'Hamza Özsaraç',
                  role: 'Full Stack Developer',
                  image: '/img/profiles/hmz.jpeg',
                  linkedin: 'https://www.linkedin.com/in/hamza-ozsarac/'
                },
                {
                  name: 'Hasan Anıl Kartal',
                  role: 'Software Test & Quality Expert',
                  image: '/img/profiles/hak.jpeg',
                  linkedin: 'https://www.linkedin.com/in/hasananilkartal/'
                },
                {
                  name: 'Ömer İ.',
                  role: 'Software Developer',
                  image: '/img/profiles/oi.jpeg',
                  linkedin: null
                },
                {
                  name: 'Yüksel Demirel',
                  role: 'System And DevOps Engineer',
                  image: '/img/profiles/yd.jpeg',
                  linkedin: 'https://www.linkedin.com/in/y%C3%BCksel-demirel-92065749/'
                }
              ].map((member, index) => (
                <div key={index} style={{textAlign: 'center'}}>
                  <div style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    margin: '0 auto 1rem',
                    overflow: 'hidden',
                    border: '4px solid var(--ifm-color-primary-lightest)',
                    background: 'var(--ifm-background-surface-color)'
                  }}>
                    <img 
                      src={member.image}
                      alt={member.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <h3>{member.name}</h3>
                  <p style={{color: 'var(--ifm-color-primary)', marginBottom: '1rem', fontWeight: 'bold'}}>{member.role}</p>
                  {member.linkedin && (
                    <div style={{display: 'flex', justifyContent: 'center', gap: '0.5rem'}}>
                      <a 
                        href={member.linkedin}
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{color: 'var(--ifm-color-primary)', fontSize: '1.25rem'}}
                        aria-label={`LinkedIn profile of ${member.name}`}
                      >
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
              <h2 style={{fontSize: '2.5rem', marginBottom: '2rem'}}>Our Mission: Make Disasters Impossible</h2>
              <p style={{fontSize: '1.3rem', lineHeight: '1.8', marginBottom: '2rem'}}>
                Every 47 days, AI deletes a production database. Every year, 1.71% of drives fail. 75% of ransomware targets backups. 
                We make all these disasters recoverable in 60 seconds.
              </p>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--ifm-font-color-secondary)'}}>
                We believe that every company, regardless of size or budget, deserves access to the same powerful 
                infrastructure tools that Fortune 500 companies use. That's why we built Rediacc—to level the playing field 
                and empower businesses to focus on what they do best, while we handle the infrastructure complexity.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center'}}>Our Values</h2>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto'}}>
              <div className="feature-card">
                <div style={{fontSize: '2rem', marginBottom: '1rem'}}><Icon name="target" size={32} /></div>
                <h3>Simplicity First</h3>
                <p>Complex problems don't require complex solutions. We obsess over making powerful features simple to use.</p>
              </div>
              <div className="feature-card">
                <div style={{fontSize: '2rem', marginBottom: '1rem'}}><Icon name="shield" size={32} /></div>
                <h3>Security by Design</h3>
                <p>Security isn't an afterthought—it's built into every line of code, every feature, every decision we make.</p>
              </div>
              <div className="feature-card">
                <div style={{fontSize: '2rem', marginBottom: '1rem'}}><Icon name="handshake" size={32} /></div>
                <h3>Customer Success</h3>
                <p>Your success is our success. We're not happy unless you're achieving extraordinary results with our platform.</p>
              </div>
              <div className="feature-card">
                <div style={{fontSize: '2rem', marginBottom: '1rem'}}><Icon name="deploy" size={32} /></div>
                <h3>Continuous Innovation</h3>
                <p>The tech world never stops evolving, and neither do we. We're always pushing boundaries and exploring new possibilities.</p>
              </div>
              <div className="feature-card">
                <div style={{fontSize: '2rem', marginBottom: '1rem'}}><Icon name="globe" size={32} /></div>
                <h3>Global Thinking</h3>
                <p>Infrastructure is global, and so is our perspective. We build for users everywhere, respecting local needs and regulations.</p>
              </div>
              <div className="feature-card">
                <div style={{fontSize: '2rem', marginBottom: '1rem'}}><Icon name="sparkles" size={32} /></div>
                <h3>Transparency</h3>
                <p>Open communication, honest pricing, and clear documentation. No hidden fees, no surprises, no fine print.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <div style={{maxWidth: '800px', margin: '0 auto'}}>
              <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>Our Story</h2>
              
              <div style={{lineHeight: '1.8', fontSize: '1.1rem'}}>
                <h3 style={{marginBottom: '1rem', color: 'var(--ifm-color-primary)'}}>The Beginning</h3>
                <p style={{marginBottom: '1.5rem'}}>
                  The calendar showed September 2018. I had resigned (was an extremely difficult resignation) from the institution where I worked as a software engineer, wanting to code my own dreams. I could only sleep for maybe 4-5 hours due to excitement; I was working day and night. This pace continued like this for about 5-6 months. One day, two police officers showed up at my door. They told me that an investigation had been opened against me and that I was being called to give a statement.
                </p>
                
                <p style={{marginBottom: '1.5rem'}}>
                  It was a very long day. I spoke with police officers, a commissioner, a doctor, and finally, the prosecutor. All without any lawyer support. In short, they took my statement and then seized my high-tech computers and many disk drives from my home 'for a short time' to clone the data.
                </p>
                
                <p style={{marginBottom: '1.5rem'}}>
                  Until that time I had covered all my expenses, including my rent payments, car loan payment, and all the expenses of my startup entirely with other high-interest loans. I had no backup of my work, and even if I had, what could I have done? I had used completely on-premises hardware, and I no longer had the financial means to purchase new equipment. To pay off my debts and continue living with my wife and son, I had to return to a salaried job.
                </p>
                
                <p style={{marginBottom: '1.5rem'}}>
                  It took me "20 months" to get my devices back, and 3-4 years later, a non-prosecution decision was made, proving my innocence. During this time, I had drifted far from my dreams and started living in another world. The lawyers of the banks I owed money to were calling me every week. After the police, lawyers and bailiffs from three different banks started visiting our home.
                </p>
                
                <h3 style={{marginBottom: '1rem', marginTop: '2rem', color: 'var(--ifm-color-primary)'}}>The Turning Point</h3>
                <p style={{marginBottom: '1.5rem'}}>
                  Years later, I kept thinking about what I could do to prevent such a problem from happening again in the future. I needed a tool that would allow me to move my systems to another environment whenever I wanted, activate them whenever needed, back them up easily, and store them securely no matter where I moved them. Virtual machines weren't the answer, as I required native performance without the overhead of virtualization.
                </p>
                
                <p style={{marginBottom: '1.5rem'}}>
                  In 2021, I watched NetworkChuck's video, "you need to learn Docker RIGHT NOW!! // Docker Containers 101". Then I was shocked. I wanted to go out to the balcony and scream as loud as I could. I wished I had known about this technology earlier!
                </p>
                
                <p style={{marginBottom: '1.5rem'}}>
                  Still, this technology didn't solve all my problems. Moving container files from one system to another was difficult. I faced compatibility issues with file ownership, and most importantly, as the data size grew, transferring it took longer. Moreover, I had to keep services offline until system migration finished and the technology almost has nothing about security.
                </p>
                
                <h3 style={{marginBottom: '1rem', marginTop: '2rem', color: 'var(--ifm-color-primary)'}}>Birth of Rediacc</h3>
                <p style={{marginBottom: '1.5rem'}}>
                  It all started with the development of a portable file system logic. From there, I integrated a backup module. Then came one of the most critical challenges: enabling live system transfers with minimal downtime, regardless of data size. Then I added unique features based on my needs.
                </p>
                
                <p style={{marginBottom: '1.5rem'}}>
                  This is how Rediacc was born—a product forged through the toughest moments of my life. Now, it's available to everyone. Use it and don't let anything hold your business back—be ready to accelerate.
                </p>
                
                <blockquote style={{
                  borderLeft: '4px solid var(--ifm-color-primary)',
                  paddingLeft: '1.5rem',
                  marginTop: '2rem',
                  marginBottom: '2rem',
                  fontStyle: 'italic',
                  fontSize: '1.2rem',
                  color: 'var(--ifm-color-primary)'
                }}>
                  "When they took my machines, I lost my work. But I found my purpose."
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Hidden for now */}
        {/* <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center'}}>Rediacc by the Numbers</h2>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto', textAlign: 'center'}}>
              <div>
                <div style={{fontSize: '3rem', color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>2024</div>
                <p>Founded</p>
              </div>
              <div>
                <div style={{fontSize: '3rem', color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>5,000+</div>
                <p>Customers</p>
              </div>
              <div>
                <div style={{fontSize: '3rem', color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>50M+</div>
                <p>Servers Managed</p>
              </div>
              <div>
                <div style={{fontSize: '3rem', color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>99.99%</div>
                <p>Uptime</p>
              </div>
              <div>
                <div style={{fontSize: '3rem', color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>24/7</div>
                <p>Support</p>
              </div>
              <div>
                <div style={{fontSize: '3rem', color: 'var(--ifm-color-primary)', fontWeight: 'bold'}}>150+</div>
                <p>Team Members</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Investors Section - Hidden for now */}
        {/* <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>Backed by the Best</h2>
            <p style={{textAlign: 'center', marginBottom: '3rem', color: 'var(--ifm-font-color-secondary)'}}>
              We're proud to be supported by leading investors who share our vision
            </p>
            
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '3rem', flexWrap: 'wrap'}}>
              <div style={{padding: '1rem 2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                <strong>Sequoia Capital</strong>
              </div>
              <div style={{padding: '1rem 2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                <strong>Andreessen Horowitz</strong>
              </div>
              <div style={{padding: '1rem 2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                <strong>Accel Partners</strong>
              </div>
              <div style={{padding: '1rem 2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                <strong>Google Ventures</strong>
              </div>
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section style={{
          padding: '4rem 1rem',
          background: 'var(--ifm-background-color)',
          textAlign: 'center',
          borderTop: '1px solid var(--ifm-toc-border-color)'
        }}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--ifm-heading-color)'}}>
              Join Us on Our Mission
            </h2>
            <p style={{fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--ifm-font-color-secondary)'}}>
              Whether as a customer, partner, or team member, be part of the infrastructure revolution
            </p>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link
                className="button button--primary button--lg"
                to="/console/login?register=quick"
                target="_blank">

                Play on Sandbox
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/careers">
                View Careers
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}