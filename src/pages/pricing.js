import React, { useState, useEffect, useMemo } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { useLocation } from '@docusaurus/router';
import PricingComparisonTable from '../components/pricing/PricingComparisonTable';
import PricingToggle from '../components/pricing/PricingToggle';
import InfoTooltip from '../components/pricing/InfoTooltip';
import SpeedPricingTable from '../components/pricing/SpeedPricingTable';
import DiscountBanner from '../components/pricing/DiscountBanner';
import { fetchPricingConfig } from '../services/pricingService';
import { fetchBaseTiersConfig, fetchTiersConfig } from '../services/tiersService';
import '../css/pricing.css';
import '../css/pricing-comparison-table.css';

export default function Pricing() {
  const location = useLocation();
  const [billingType, setBillingType] = useState('monthly');
  const [pricingConfig, setPricingConfig] = useState(null);
  const [tiersData, setTiersData] = useState(null);
  const [tiersTranslations, setTiersTranslations] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Check for preview mode from URL parameters
  const searchParams = new URLSearchParams(location.search);
  const previewDiscount = searchParams.get('preview');

  // Dynamic formatting function
  const formatFeatureValue = (value, feature, formatRules, forDisplay = true) => {
    if (value === false || value === null || value === undefined) {
      return forDisplay ? null : '-';
    }
    
    if (!formatRules) {
      return forDisplay ? `${value} ${feature.name}` : value;
    }
    
    const featureName = tiersTranslations?.tier?.feature?.[feature.id] || feature.name || feature.id;
    
    if (feature.displayType === 'boolean') {
      if (forDisplay) {
        return value === true && formatRules.true?.display === 'name' ? featureName : null;
      }
      return value;
    }
    
    if (feature.displayType === 'number') {
      if (forDisplay) {
        return formatRules.display
          .replace('{value}', value)
          .replace('{name}', featureName);
      }
      return value;
    }
    
    if (feature.displayType === 'number_with_unit') {
      const unitKey = feature.unit;
      const unit = tiersTranslations?.tier?.units?.[unitKey] || feature.unit;
      
      if (forDisplay) {
        if (value === 'unlimited' && formatRules.unlimited) {
          const unlimitedText = tiersTranslations?.tier?.values?.unlimited || 'Unlimited';
          return formatRules.unlimited
            .replace('{unlimited}', unlimitedText)
            .replace('{name}', featureName);
        }
        return formatRules.display
          .replace('{value}', value)
          .replace('{unit}', unit)
          .replace('{name}', featureName);
      } else {
        if (value === 'unlimited') {
          return tiersTranslations?.tier?.values?.unlimited || 'Unlimited';
        }
        return `${value} ${unit}`;
      }
    }
    
    if (feature.displayType === 'value') {
      const translatedValue = tiersTranslations?.tier?.values?.[value] || value;
      
      if (forDisplay) {
        const shouldIncludeName = formatRules.displayNameFor?.includes(feature.id);
        
        if (shouldIncludeName) {
          return `${translatedValue} ${featureName}`;
        }
        return formatRules.display.replace('{translated_value}', translatedValue);
      }
      return translatedValue;
    }
    
    return forDisplay ? `${value} ${featureName}` : value;
  };

  // Fetch pricing and tiers configuration
  useEffect(() => {
    const loadData = async () => {
      try {
        const [config, baseData, translationData] = await Promise.all([
          fetchPricingConfig(),
          fetchBaseTiersConfig(),
          fetchTiersConfig('en')
        ]);
        setPricingConfig(config);
        setTiersData(baseData);
        setTiersTranslations(translationData);
        setError(null);
      } catch (error) {
        console.error('Failed to load data:', error);
        setError('Unable to load pricing information. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, []);
  
  // Check for active discounts or preview mode
  const activeDiscount = useMemo(() => {
    if (!pricingConfig) return null;
    
    // Preview mode - show specific discount for testing
    if (previewDiscount && pricingConfig.specialDayDiscounts[previewDiscount]) {
      const discount = pricingConfig.specialDayDiscounts[previewDiscount];
      // Convert message from key to actual text if needed
      const message = discount.message.startsWith('pricing.') 
        ? discount.message.replace('pricing.', '').replace(/([A-Z])/g, ' $1').trim()
        : discount.message;
      return { ...discount, message, isPreview: true };
    }
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (const [key, discount] of Object.entries(pricingConfig.specialDayDiscounts)) {
      const startDate = new Date(discount.startDate);
      const endDate = new Date(discount.endDate);
      endDate.setHours(23, 59, 59, 999);

      if (today >= startDate && today <= endDate) {
        // Convert message from key to actual text if needed
        const message = discount.message.startsWith('pricing.') 
          ? discount.message.replace('pricing.', '').replace(/([A-Z])/g, ' $1').trim()
          : discount.message;
        return { ...discount, message };
      }
    }
    return null;
  }, [pricingConfig, previewDiscount]);

  // Generate features from tiers data
  const generatePlanFeatures = (planId) => {
    if (!tiersData || !tiersData.features || !tiersTranslations) {
      // Fallback features
      const fallbackFeatures = {
        community: [
          '1 Active repository',
          'Up to 10 GB repo size',
          'Public Servers',
          'Community support',
          'Hourly snapshots',
          'Basic restore options'
        ],
        advanced: [
          'Everything in Community plus:',
          'Unlimited repositories',
          'Up to 100 GB repo size',
          'Public & Dedicated Servers',
          'Priority email support',
          'Ransomware protection',
          'Time Travel recovery',
          'Basic API access'
        ],
        premium: [
          'Everything in Advanced plus:',
          'Up to 1 TB repo size',
          'On-premise Servers',
          '24/7 phone support',
          'Cross-region replication',
          'Advanced security features',
          'Custom backup schedules',
          'Full API access'
        ],
        elite: [
          'Everything in Premium plus:',
          'Unlimited storage',
          'Dedicated account manager',
          'Tailored service agreements (coming soon)',
          'Feature request consideration',
          'Personalized onboarding support (planned)',
          'Custom integrations',
          'Executive reporting'
        ]
      };
      
      return {
        features: fallbackFeatures[planId] || [],
        negativeFeatures: planId === 'community' ? ['No backup automation'] : []
      };
    }

    const features = [];
    
    // Add introduction line for non-community plans
    if (planId !== 'community') {
      const prevTier = ['community', 'advanced', 'premium', 'elite'];
      const currentIndex = prevTier.indexOf(planId);
      if (currentIndex > 0) {
        const prevTierName = tiersTranslations.tier[prevTier[currentIndex - 1]]?.name || prevTier[currentIndex - 1];
        features.push(`Everything in ${prevTierName} plus:`);
      }
    }

    // Add features from tiers data
    tiersData.features.forEach(feature => {
      const value = feature.values[planId];
      const formatRules = tiersData.formatting?.[feature.displayType];
      
      const featureText = formatFeatureValue(value, feature, formatRules, true);
      
      if (!featureText) return;
      
      features.push({
        text: featureText,
        tooltip: feature.tooltip || ''
      });
    });

    return {
      features,
      negativeFeatures: planId === 'community' ? ['No backup automation'] : []
    };
  };

  // Generate plans based on config
  const generatePlans = (isYearly) => {
    if (!pricingConfig) return [];
    
    const plans = [];
    
    for (const [planId, planConfig] of Object.entries(pricingConfig.plans)) {
      const basePriceInfo = pricingConfig.baseMonthlyPrices[planId];
      let price = basePriceInfo.price;
      let displayPrice = price;
      let savePercent = null;
      
      // For yearly pricing, apply multiplier
      if (isYearly && typeof price === 'number') {
        const yearlyInfo = pricingConfig.yearlyMultipliers[planId];
        displayPrice = Math.round(price * yearlyInfo.multiplier);
        savePercent = yearlyInfo.savePercent;
      }
      
      // Calculate combined discount if both annual and special day discount apply
      let combinedDiscountPercent = null;
      let finalSavePercent = isYearly ? savePercent : null;
      
      // Apply discount if active
      let discountedPrice = null;
      if (activeDiscount && typeof price === 'number') {
        const discountAmount = displayPrice * activeDiscount.discount;
        discountedPrice = Math.round(displayPrice - discountAmount);
        
        if (isYearly && typeof price === 'number') {
          const yearlyMultiplier = pricingConfig.yearlyMultipliers[planId].multiplier;
          const combinedMultiplier = yearlyMultiplier * (1 - activeDiscount.discount);
          const yearlyPercentage = Math.round((1 - yearlyMultiplier) * 100);
          const dailyPercentage = Math.round(activeDiscount.discount * 100);
          combinedDiscountPercent = `${yearlyPercentage}% + ${dailyPercentage}% OFF`;
          finalSavePercent = null;
        } else {
          combinedDiscountPercent = `🔥 ${Math.round(activeDiscount.discount * 100)}% OFF`;
        }
      }
      
      // Handle special case for Community plan with original price
      let originalPrice = null;
      if (planId === 'community' && basePriceInfo.originalPrice) {
        originalPrice = `$${basePriceInfo.originalPrice}`;
      } else if (discountedPrice && typeof price === 'number') {
        originalPrice = `$${displayPrice.toLocaleString()}`;
      }

      // Get plan name
      const planName = planConfig.name.startsWith('pricing.') 
        ? planConfig.name.split('.').pop().charAt(0).toUpperCase() + planConfig.name.split('.').pop().slice(1)
        : planConfig.name;

      // Get CTA text
      const ctaText = planConfig.ctaText.startsWith('common.') 
        ? planConfig.ctaText.replace('common.', '').replace(/([A-Z])/g, ' $1').trim()
        : planConfig.ctaText;

      const plan = {
        name: planName,
        price: typeof price === 'string' ? price : (discountedPrice ? `$${discountedPrice.toLocaleString()}` : `$${displayPrice.toLocaleString()}`),
        originalPrice: originalPrice,
        period: basePriceInfo.period ? basePriceInfo.period.replace('per', '').toLowerCase() : null,
        savePercent: finalSavePercent,
        discountPercent: combinedDiscountPercent,
        isPopular: false,
        features: generatePlanFeatures(planId).features,
        negativeFeatures: generatePlanFeatures(planId).negativeFeatures,
        ctaText: ctaText,
        ctaLink: planConfig.ctaLink,
        ctaVariant: planConfig.ctaVariant
      };
      
      plans.push(plan);
    }
    
    return plans;
  };

  const plans = billingType === 'monthly' ? generatePlans(false) : generatePlans(true);

  // Build comparison features for the table
  const buildComparisonFeatures = () => {
    if (!tiersData || !tiersData.features || !tiersTranslations) {
      // Fallback comparison features
      return [
        {
          feature: 'Repositories',
          description: 'Number of active repositories',
          category: 'capacity',
          community: '1 Active',
          advanced: 'Unlimited',
          premium: 'Unlimited',
          elite: 'Unlimited'
        },
        {
          feature: 'Repository Size',
          description: 'Maximum storage per repository',
          category: 'capacity',
          community: '10 GB',
          advanced: '100 GB',
          premium: '1 TB',
          elite: 'Unlimited'
        },
        {
          feature: 'Server Types',
          description: 'Available infrastructure options',
          category: 'essentials',
          community: 'Public Only',
          advanced: 'Public & Dedicated',
          premium: 'On-premise',
          elite: 'All Types'
        },
        {
          feature: 'Support',
          description: 'Level of support provided',
          category: 'essentials',
          community: 'Community',
          advanced: 'Priority Email',
          premium: '24/7 Phone',
          elite: 'Dedicated Manager'
        }
      ];
    }

    return tiersData.features.map(feature => {
      const featureName = tiersTranslations.tier.feature[feature.id] || feature.id;
      const formatRules = tiersData.formatting?.[feature.displayType];
      
      return {
        feature: featureName,
        description: feature.tooltip || '',
        category: feature.category,
        community: formatFeatureValue(feature.values.community, feature, formatRules, false),
        advanced: formatFeatureValue(feature.values.advanced, feature, formatRules, false),
        premium: formatFeatureValue(feature.values.premium, feature, formatRules, false),
        elite: formatFeatureValue(feature.values.elite, feature, formatRules, false)
      };
    });
  };

  if (loading) {
    return (
      <Layout
        title="Pricing - Rediacc"
        description="Choose the perfect plan for your infrastructure needs">
        <div className="container" style={{padding: '4rem 1rem', textAlign: 'center'}}>
          <p style={{fontSize: '1.25rem'}}>Loading pricing information...</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout
        title="Pricing - Rediacc"
        description="Choose the perfect plan for your infrastructure needs">
        <div className="container" style={{padding: '4rem 1rem', textAlign: 'center'}}>
          <p style={{fontSize: '1.25rem', color: 'var(--ifm-color-danger)'}}>{error}</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      title="Pricing - Simple, Transparent Infrastructure Automation Pricing | Rediacc"
      description="Choose the perfect plan for your infrastructure needs. Transparent pricing with no hidden fees. Start free, scale as you grow.">
      
      <Head>
        <meta property="og:title" content="Rediacc Pricing - Infrastructure Automation Plans" />
        <meta property="og:description" content="Simple, transparent pricing for infrastructure automation. Start free, scale as you grow. No hidden fees." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/pricing" />
        <link rel="canonical" href="/pricing" />
      </Head>

      <article>
        {/* Hero Section */}
        <section className="pricing-hero">
          <div className="container">
            <h1>Simple, Transparent Pricing</h1>
            <p>
              Choose the right plan for your business. No hidden fees, no surprises.
            </p>
            {activeDiscount && (
              <DiscountBanner 
                discount={activeDiscount} 
                previewMode={activeDiscount.isPreview}
              />
            )}
          </div>
        </section>

        {/* Main Pricing Section */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            {/* Billing Toggle */}
            <PricingToggle 
              billingType={billingType} 
              onChange={setBillingType} 
            />
            
            {/* Pricing Comparison Table */}
            <PricingComparisonTable 
              plans={plans}
              features={tiersData && tiersTranslations ? buildComparisonFeatures() : []}
              featureGroups={tiersData?.featureGroups}
              billingType={billingType}
              activeDiscount={activeDiscount}
            />
            
            {billingType === 'yearly' && (
              <p className="pricing-annual-note">
                <InfoTooltip 
                  content="Annual billing is charged upfront for the full year" 
                  position="bottom-right" 
                />
                Annual plans are billed yearly and offer significant savings
              </p>
            )}
            
            {/* Custom Solutions Section */}
            <div className="pricing-custom-section">
              <div className="pricing-custom-content">
                <div className="pricing-custom-text">
                  <h3>Enterprise Disaster Protection?</h3>
                  <p>Prevent millions in losses with custom disaster recovery solutions</p>
                </div>
                <Link 
                  href="/contact" 
                  className="button button--primary button--lg"
                >
                  Get Custom Roadmap
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Service Packages Section */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <SpeedPricingTable />
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Frequently Asked Questions
            </h2>
            
            <div style={{maxWidth: '800px', margin: '0 auto'}}>
              <details style={{marginBottom: '1rem', padding: '1rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                <summary style={{cursor: 'pointer', fontWeight: 'bold', fontSize: '1.2rem'}}>
                  What's included in the Community (Free) plan?
                </summary>
                <p style={{marginTop: '1rem', lineHeight: '1.6'}}>
                  The Community plan is designed for personal projects and testing. As we're in early access, 
                  feature availability may vary. This plan helps us test our infrastructure while giving you free access 
                  to experiment with our platform.
                </p>
              </details>

              <details style={{marginBottom: '1rem', padding: '1rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                <summary style={{cursor: 'pointer', fontWeight: 'bold', fontSize: '1.2rem'}}>
                  How much can I save with annual billing?
                </summary>
                <p style={{marginTop: '1rem', lineHeight: '1.6'}}>
                  Annual billing offers significant savings: 17% off Advanced, 23% off Premium, and 29% off Elite plans. 
                  You pay for 10-8.5 months and get 12 months of service. Annual plans are billed upfront.
                </p>
              </details>

              <details style={{marginBottom: '1rem', padding: '1rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                <summary style={{cursor: 'pointer', fontWeight: 'bold', fontSize: '1.2rem'}}>
                  Are you production-ready?
                </summary>
                <p style={{marginTop: '1rem', lineHeight: '1.6'}}>
                  We're in early access! Core components (web, desktop, backend) are complete with automated tests. 
                  Our cloud environment is live with early access users actively testing. Full platform with AI integration 
                  and enhanced CLI capabilities planned for Q2 2026.
                </p>
              </details>

              <details style={{marginBottom: '1rem', padding: '1rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                <summary style={{cursor: 'pointer', fontWeight: 'bold', fontSize: '1.2rem'}}>
                  Do you offer special discounts?
                </summary>
                <p style={{marginTop: '1rem', lineHeight: '1.6'}}>
                  As an early-stage startup, we're offering founding member pricing which is already heavily discounted. 
                  Early adopters who join now will lock in these rates for life. We may offer special programs for 
                  non-profits and educational institutions in the future.
                </p>
              </details>

              <details style={{marginBottom: '1rem', padding: '1rem', background: 'var(--ifm-background-color)', borderRadius: '8px'}}>
                <summary style={{cursor: 'pointer', fontWeight: 'bold', fontSize: '1.2rem'}}>
                  Do you have any customers yet?
                </summary>
                <p style={{marginTop: '1rem', lineHeight: '1.6'}}>
                  We're in early access with active users testing the platform. The examples and case studies shown are 
                  hypothetical scenarios demonstrating potential use cases. We're gathering feedback from early access users 
                  to improve the platform before general availability. 
                  <Link to="/transparency" style={{marginLeft: '0.5rem'}}>Learn more about our journey →</Link>
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          padding: '4rem 1rem',
          background: 'var(--ifm-background-color)',
          borderTop: '1px solid var(--ifm-toc-border-color)',
          textAlign: 'center',
        }}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--ifm-heading-color)'}}>
              Every Hour Without Protection Could Cost You Significantly
            </h2>
            <p style={{fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--ifm-font-color-secondary)'}}>
              Join as an early adopter and help shape the future of infrastructure protection.
            </p>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link
                className="button button--primary button--lg"
                to="/console/login?register=quick"
                target="_blank">

                Start Protection Now
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/contact">
                Calculate Your Risk
              </Link>
            </div>
          </div>
        </section>
        
        {/* Pricing Disclaimer Section */}
        <section style={{
          padding: '2rem 1rem',
          background: 'var(--ifm-background-surface-color)',
          borderTop: '1px solid var(--ifm-color-emphasis-200)'
        }}>
          <div className="container" style={{maxWidth: '800px', margin: '0 auto'}}>
            <div style={{
              padding: '1.5rem',
              background: 'var(--ifm-background-color)',
              borderRadius: '8px',
              border: '1px solid var(--ifm-color-emphasis-300)',
              fontSize: '0.9rem',
              lineHeight: '1.6'
            }}>
              <h3 style={{fontSize: '1.2rem', marginBottom: '1rem'}}>Pricing Information</h3>
              <p style={{marginBottom: '0.75rem'}}>
                <strong>Early Access Pricing:</strong> As an early-stage startup, we're offering special founding member rates. Prices shown are subject to change as we scale our infrastructure and add features.
              </p>
              <p style={{marginBottom: '0.75rem'}}>
                <strong>Early Access Features:</strong> Some features listed are in early access or planned development. Early adopters get lifetime access to all features as they become available.
              </p>
              <p style={{marginBottom: '0.75rem'}}>
                <strong>Custom Enterprise Plans:</strong> Enterprise pricing is tailored to your specific needs and scale. Contact us for a custom quote based on your infrastructure requirements.
              </p>
              <p style={{fontStyle: 'italic', color: 'var(--ifm-color-emphasis-600)', marginBottom: 0}}>
                Join as a founding member and lock in these rates before general availability.
              </p>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}