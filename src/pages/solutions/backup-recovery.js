import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function BackupRecoverySolution() {
  return (
    <Layout
      title="Backup & Recovery Solutions - Enterprise Data Protection | Rediacc"
      description="Comprehensive backup and recovery solutions. Reduce storage costs by up to 90% while improving recovery times.">
      <div className="container" style={{padding: '4rem 1rem'}}>
        <h1>Backup & Recovery Solutions</h1>
        <p style={{fontSize: '1.2rem', marginBottom: '2rem'}}>
          Enterprise-grade data protection that can reduce costs by up to 90% while improving recovery times by 10x.
        </p>
        
        <div style={{marginBottom: '3rem'}}>
          <h2>Our Backup Solutions</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
              <h3>Zero-Cost Backup</h3>
              <p>Reduce storage costs by up to 90% with intelligent deduplication</p>
              <Link to="/features/zero-cost-backup">Learn more ’</Link>
            </div>
            <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
              <h3>Time Travel Recovery</h3>
              <p>Restore to any point in time, even months in the past</p>
              <Link to="/features/time-travel">Learn more ’</Link>
            </div>
            <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
              <h3>Cross-Backup Strategy</h3>
              <p>Multi-site protection with minimal bandwidth usage</p>
              <Link to="/features/cross-backup">Learn more ’</Link>
            </div>
          </div>
        </div>

        <div style={{marginBottom: '3rem'}}>
          <h2>Typical Results</h2>
          <ul style={{fontSize: '1.1rem', lineHeight: '2'}}>
            <li>Storage reduction: Up to 90%</li>
            <li>Backup time: From hours to minutes</li>
            <li>Recovery time: Typically under 10 minutes</li>
            <li>Retention period: Months to years affordably</li>
          </ul>
        </div>

        <div style={{textAlign: 'center', marginTop: '3rem'}}>
          <Link className="button button--primary button--lg" to="/contact">
            Get a Quote
          </Link>
          <Link className="button button--secondary button--lg" to="/console/login?register=true" target="_blank" style={{marginLeft: '1rem'}}>
            Try Free Sandbox
          </Link>
        </div>
      </div>
    </Layout>
  );
}