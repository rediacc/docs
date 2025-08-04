import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function InfrastructureProtectionSolution() {
  return (
    <Layout
      title="Infrastructure Protection - Enterprise Security & Continuity | Rediacc"
      description="Complete infrastructure protection against cyber threats, disasters, and operational failures. Maintain business continuity in any scenario.">
      <div className="container" style={{padding: '4rem 1rem'}}>
        <h1>Infrastructure Protection Solutions</h1>
        <p style={{fontSize: '1.2rem', marginBottom: '2rem'}}>
          Comprehensive protection against cyber threats, natural disasters, and operational failures.
        </p>
        
        <div style={{marginBottom: '3rem'}}>
          <h2>Protection Capabilities</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
              <h3>Advanced Security</h3>
              <p>Enterprise-grade security and threat protection</p>
              <Link to="/features/security">Learn more �</Link>
            </div>
            <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
              <h3>Business Continuity</h3>
              <p>Maintain operations during regional disasters</p>
              <Link to="/docs/operations/blackout">Learn more →</Link>
            </div>
            <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
              <h3>Risk-Free Operations</h3>
              <p>Test changes without production impact</p>
              <Link to="/features/risk-free-upgrades">Learn more �</Link>
            </div>
          </div>
        </div>

        <div style={{marginBottom: '3rem'}}>
          <h2>Protection Against</h2>
          <ul style={{fontSize: '1.1rem', lineHeight: '2'}}>
            <li>Ransomware and cyber attacks</li>
            <li>Natural disasters and power outages</li>
            <li>Human errors and accidental deletions</li>
            <li>Hardware failures and corruptions</li>
          </ul>
        </div>

        <div style={{textAlign: 'center', marginTop: '3rem'}}>
          <Link className="button button--primary button--lg" to="/contact">
            Request Security Assessment
          </Link>
          <Link className="button button--secondary button--lg" to="/pricing" style={{marginLeft: '1rem'}}>
            View Pricing
          </Link>
        </div>
      </div>
    </Layout>
  );
}