import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import FoundersSection from '../components/sections/FoundersSection';
import TeamSection from '../components/sections/TeamSection';
import SimpleCTASection from '../components/sections/SimpleCTASection';

import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title={`${siteConfig.title} - Enterprise Ready Backup & Recovery`}
      description="Break the pattern of IT disasters. Rediacc prevents disasters before they start, scales without breaking, and recovers in seconds—not days.">
      <main className={styles.main}>
        <HeroSection />
        <FeaturesSection />
        <SimpleCTASection />
        <FoundersSection />
        <TeamSection />
      </main>
    </Layout>
  );
}