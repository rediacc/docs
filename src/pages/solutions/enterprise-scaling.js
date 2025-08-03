import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function EnterpriseScalingSolution() {
  return (
    <Layout
      title="Enterprise Scaling Solutions - Legacy to Modern Infrastructure | Rediacc"
      description="Scale legacy databases and infrastructure without rewrites. Achieve up to 8x performance improvements while reducing costs.">
      <div className="container" style={{padding: '4rem 1rem'}}>
        <h1>Enterprise Scaling Solutions</h1>
        <p style={{fontSize: '1.2rem', marginBottom: '2rem'}}>
          Scale your infrastructure intelligently. From legacy databases to modern cloud architectures.
        </p>
        
        <div style={{marginBottom: '3rem'}}>
          <h2>Scaling Solutions</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
              <h3>Legacy Database Scaling</h3>
              <p>Scale legacy systems up to 8x without rewrites</p>
              <Link to="/solutions/legacy-database-scaling">Learn more ’</Link>
            </div>
            <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
              <h3>Dynamic Resource Scaling</h3>
              <p>Hybrid cloud scaling with up to 60% cost reduction</p>
              <Link to="/features/dynamic-scaling">Learn more ’</Link>
            </div>
            <div style={{padding: '1.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '8px'}}>
              <h3>Global Distribution</h3>
              <p>Deploy across regions with automatic failover</p>
              <Link to="/solutions/enterprise">Learn more ’</Link>
            </div>
          </div>
        </div>

        <div style={{marginBottom: '3rem'}}>
          <h2>Typical Improvements</h2>
          <ul style={{fontSize: '1.1rem', lineHeight: '2'}}>
            <li>Performance: Up to 8x faster query times</li>
            <li>Cost reduction: Typically 40-60% savings</li>
            <li>Implementation: Weeks instead of years</li>
            <li>Zero downtime during scaling</li>
          </ul>
        </div>

        <div style={{textAlign: 'center', marginTop: '3rem'}}>
          <Link className="button button--primary button--lg" to="/contact">
            Discuss Your Scaling Needs
          </Link>
          <Link className="button button--secondary button--lg" to="/solutions/legacy-database-scaling" style={{marginLeft: '1rem'}}>
            View Case Studies
          </Link>
        </div>
      </div>
    </Layout>
  );
}