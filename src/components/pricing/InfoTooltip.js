import React, { useState } from 'react';
import { Info } from 'lucide-react';

const InfoTooltip = ({ content, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);

  if (!content) return null;

  return (
    <div className="info-tooltip-container">
      <button
        className="info-tooltip-trigger"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={(e) => { e.preventDefault(); setIsVisible(!isVisible); }}
        aria-label="More information"
      >
        <Info size={16} />
      </button>
      
      {isVisible && (
        <div className={`info-tooltip-content info-tooltip-${position}`}>
          {content}
        </div>
      )}
    </div>
  );
};

export default InfoTooltip;