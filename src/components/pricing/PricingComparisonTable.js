import React, { useState } from 'react';
import InfoTooltip from './InfoTooltip';
import { Check, X, ChevronDown, ChevronUp } from 'lucide-react';

const PricingComparisonTable = ({ plans, features, billingType, activeDiscount, featureGroups }) => {
  // State to manage collapsed groups
  const [collapsedGroups, setCollapsedGroups] = useState(new Set(['advanced', 'enterprise', 'support']));
  
  // Toggle group collapse state
  const toggleGroup = (groupId) => {
    setCollapsedGroups(prev => {
      const newSet = new Set(prev);
      newSet.has(groupId) ? newSet.delete(groupId) : newSet.add(groupId);
      return newSet;
    });
  };
  // Extract tier names from plans
  const tiers = plans.map(({ name, price, originalPrice, period, savePercent, discountPercent, isPopular, ctaText, ctaLink, ctaVariant }) => ({
    name, price, originalPrice, period, savePercent, discountPercent, isPopular, ctaText, ctaLink, ctaVariant
  }));

  // Group features by category if groups are provided
  const groupedFeatures = React.useMemo(() => {
    if (!featureGroups || !features) return null;
    
    const groups = {};
    features.forEach(feature => {
      const category = feature.category || 'other';
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(feature);
    });
    
    // Sort groups by order
    const sortedGroups = featureGroups
      .sort((a, b) => a.order - b.order)
      .map(group => ({
        ...group,
        features: groups[group.id] || []
      }))
      .filter(group => group.features.length > 0);
    
    return sortedGroups;
  }, [features, featureGroups]);

  // Render cell value with proper icons
  const renderCellValue = (value) => {
    if (value === true || value === 'Yes') return <Check size={20} className="pricing-check-icon" />;
    if (value === false || value === 'No' || value === '-') return <X size={20} className="pricing-x-icon" />;
    return <span className="pricing-cell-value">{value}</span>;
  };

  return (
    <div className="pricing-comparison-table">
      <div className="pricing-comparison-container">
        {/* Table header - pricing tiers */}
        <div className="pricing-comparison-header">
          <div className="pricing-comparison-header-cell"></div>
          
          {tiers.map((tier, index) => (
            <div key={index} className="pricing-comparison-header-cell">
              <div className="pricing-tier-name">
                {tier.name}
              </div>
              
              {/* Price display */}
              <div className="pricing-tier-price">
                {tier.originalPrice && (
                  <div className="pricing-original-price">
                    {tier.originalPrice}
                  </div>
                )}
                <div className="pricing-current-price">
                  {tier.price}
                  {tier.period && (
                    <span className="pricing-period">/{tier.period}</span>
                  )}
                </div>
                {tier.savePercent && (
                  <div className="pricing-save-badge">
                    Save {tier.savePercent}
                  </div>
                )}
                {tier.discountPercent && (
                  <div className="pricing-discount-badge">
                    {tier.discountPercent}
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <a 
                href={tier.ctaLink} 
                className={`button button--${tier.ctaVariant} button--md pricing-tier-button`}
              >
                {tier.ctaText}
              </a>
            </div>
          ))}
        </div>
        
        {/* Table body - features grouped by category */}
        {groupedFeatures ? (
          groupedFeatures.map((group, groupIndex) => (
            <React.Fragment key={group.id}>
              {/* Group header - clickable for toggle */}
              <div 
                className="pricing-comparison-group-header clickable"
                onClick={() => toggleGroup(group.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className="pricing-comparison-group-title">
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {collapsedGroups.has(group.id) ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
                    {group.name}
                    <span style={{ opacity: 0.6, fontSize: '0.9em', marginLeft: '8px' }}>
                      ({group.features.length} features)
                    </span>
                  </span>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              
              {/* Group features - show only if not collapsed */}
              {!collapsedGroups.has(group.id) && group.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="pricing-comparison-row">
                  <div className="pricing-comparison-feature-cell">
                    <span className="pricing-feature-name">
                      {feature.feature}
                      {feature.description && (
                        <InfoTooltip content={feature.description} position="right" />
                      )}
                    </span>
                  </div>
                  <div className="pricing-comparison-value-cell">
                    {renderCellValue(feature.community)}
                  </div>
                  <div className="pricing-comparison-value-cell highlighted">
                    {renderCellValue(feature.advanced)}
                  </div>
                  <div className="pricing-comparison-value-cell">
                    {renderCellValue(feature.premium)}
                  </div>
                  <div className="pricing-comparison-value-cell">
                    {renderCellValue(feature.elite)}
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))
        ) : (
          /* Simple feature list if no grouping */
          features && features.map((feature, index) => (
            <div key={index} className="pricing-comparison-row">
              <div className="pricing-comparison-feature-cell">
                <span className="pricing-feature-name">
                  {feature.feature}
                  {feature.description && (
                    <InfoTooltip content={feature.description} position="right" />
                  )}
                </span>
              </div>
              <div className="pricing-comparison-value-cell">
                {renderCellValue(feature.community)}
              </div>
              <div className="pricing-comparison-value-cell highlighted">
                {renderCellValue(feature.advanced)}
              </div>
              <div className="pricing-comparison-value-cell">
                {renderCellValue(feature.premium)}
              </div>
              <div className="pricing-comparison-value-cell">
                {renderCellValue(feature.elite)}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PricingComparisonTable;