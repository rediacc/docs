import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { Icon } from '../components/Icon';

export default function Careers() {
  return (
    <Layout
      title="Careers - Join the Rediacc Team"
      description="Join our mission to revolutionize infrastructure management. We're looking for talented individuals who want to make a difference.">
      
      <article>
        {/* Hero Section */}
        <section className="hero-section" style={{padding: '4rem 1rem'}}>
          <div className="container">
            <h1 className="hero-title animate-fade-in-up">
              Build the Future of Infrastructure
            </h1>
            <p className="hero-subtitle animate-fade-in-up animate-delay-100">
              Join our team and help thousands of companies manage their infrastructure better
            </p>
          </div>
        </section>

        {/* Why Join Section */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Why Join Rediacc?
            </h2>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto'}}>
              <div className="feature-card">
                <h3><Icon name="deploy" size={20} style={{marginRight: '8px'}} />Impactful Work</h3>
                <p>Work on technology that powers critical infrastructure for thousands of companies worldwide.</p>
              </div>
              <div className="feature-card">
                <h3><Icon name="trending-up" size={20} style={{marginRight: '8px'}} />Growth Opportunities</h3>
                <p>Learn from the best in the industry and grow your career with mentorship and training.</p>
              </div>
              <div className="feature-card">
                <h3><Icon name="award" size={20} style={{marginRight: '8px'}} />Competitive Benefits</h3>
                <p>Excellent compensation, equity, healthcare, and unlimited PTO.</p>
              </div>
              <div className="feature-card">
                <h3><Icon name="globe" size={20} style={{marginRight: '8px'}} />Remote First</h3>
                <p>Work from anywhere in the world with flexible hours that suit your lifestyle.</p>
              </div>
              <div className="feature-card">
                <h3><Icon name="users" size={20} style={{marginRight: '8px'}} />Amazing Team</h3>
                <p>Collaborate with talented engineers, designers, and product experts.</p>
              </div>
              <div className="feature-card">
                <h3><Icon name="lightbulb" size={20} style={{marginRight: '8px'}} />Innovation Culture</h3>
                <p>We encourage experimentation, learning, and pushing boundaries.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Open Positions
            </h2>
            
            <div style={{maxWidth: '800px', margin: '0 auto'}}>
              <div style={{marginBottom: '2rem', padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px', border: '2px solid var(--ifm-color-primary)'}}>
                <h3>Senior Backend Engineer</h3>
                <p style={{color: 'var(--ifm-font-color-secondary)', marginBottom: '1rem'}}>Remote • Full-time</p>
                <p>Build scalable infrastructure automation systems using Go, Python, and C++.</p>
                <Link className="button button--primary" to="/contact">Apply Now</Link>
              </div>

              <div style={{marginBottom: '2rem', padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                <h3>Frontend Engineer</h3>
                <p style={{color: 'var(--ifm-font-color-secondary)', marginBottom: '1rem'}}>Remote • Full-time</p>
                <p>Create beautiful, intuitive interfaces using React, TypeScript, and modern web technologies.</p>
                <Link className="button button--primary" to="/contact">Apply Now</Link>
              </div>

              <div style={{marginBottom: '2rem', padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                <h3>DevOps Engineer</h3>
                <p style={{color: 'var(--ifm-font-color-secondary)', marginBottom: '1rem'}}>Remote • Full-time</p>
                <p>Design and maintain our cloud infrastructure using Kubernetes, Terraform, and AWS.</p>
                <Link className="button button--primary" to="/contact">Apply Now</Link>
              </div>

              <div style={{marginBottom: '2rem', padding: '2rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                <h3>Technical Writer</h3>
                <p style={{color: 'var(--ifm-font-color-secondary)', marginBottom: '1rem'}}>Remote • Full-time</p>
                <p>Create clear, comprehensive documentation and tutorials for our platform.</p>
                <Link className="button button--primary" to="/contact">Apply Now</Link>
              </div>
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
              Don't See Your Role?
            </h2>
            <p style={{fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--ifm-font-color-secondary)'}}>
              We're always looking for exceptional talent. Send us your resume!
            </p>
            <Link
              className="button button--primary button--lg"
              to="/contact">
              Get in Touch
            </Link>
          </div>
        </section>
      </article>
    </Layout>
  );
}