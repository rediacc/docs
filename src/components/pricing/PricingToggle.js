import React from 'react';

const PricingToggle = ({ billingType, onChange }) => {
  return (
    <div className="pricing-toggle-container">
      <div className="pricing-toggle-wrapper">
        <button
          className={`pricing-toggle-option ${billingType === 'monthly' ? 'active' : ''}`}
          onClick={() => onChange('monthly')}
        >
          Monthly
        </button>
        
        <button
          className={`pricing-toggle-option ${billingType === 'yearly' ? 'active' : ''}`}
          onClick={() => onChange('yearly')}
        >
          <span>Annual</span>
          <span className="pricing-toggle-save">Save up to 29%</span>
        </button>
      </div>
    </div>
  );
};

export default PricingToggle;