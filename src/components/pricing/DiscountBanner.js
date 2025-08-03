import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag,
  Monitor,
  Calendar,
  Sun,
  Bird,
  Heart,
  Gift,
  Clock,
} from 'lucide-react';

const DiscountBanner = ({ discount, previewMode = null }) => {
  const [timeLeft, setTimeLeft] = useState(null);
  const [isExpired, setIsExpired] = useState(false);
  
  // Get the appropriate icon based on discount name
  const getDiscountIcon = () => {
    if (!discount) return <Gift size={24} color="white" />;
    
    const name = discount.name?.toLowerCase() || '';
    if (name.includes('black friday')) return <ShoppingBag size={24} color="white" />;
    if (name.includes('cyber monday')) return <Monitor size={24} color="white" />;
    if (name.includes('new year')) return <Calendar size={24} color="white" />;
    if (name.includes('summer')) return <Sun size={24} color="white" />;
    if (name.includes('early bird')) return <Bird size={24} color="white" />;
    if (name.includes('valentine')) return <Heart size={24} color="white" />;
    
    return <Gift size={24} color="white" />;
  };

  useEffect(() => {
    if (!discount) return;

    const calculateTimeLeft = () => {
      const now = new Date();
      const endDate = new Date(discount.endDate);
      endDate.setHours(23, 59, 59, 999);
      
      const difference = endDate - now;
      
      if (difference <= 0) {
        setIsExpired(true);
        return null;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      return { days, hours, minutes, seconds };
    };
    
    // Calculate immediately
    setTimeLeft(calculateTimeLeft());
    
    // Update every second
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      
      if (!newTimeLeft) {
        clearInterval(timer);
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, [discount]);

  if (!discount || isExpired) return null;

  const discountPercent = Math.round(discount.discount * 100);
  const message = discount.message || `${discountPercent}% OFF Limited Time!`;
  
  // Dynamic styles based on discount configuration
  const bannerStyle = {
    background: `linear-gradient(135deg, ${discount.backgroundColor || '#FFA500'}, ${discount.bannerColor || '#FF6347'})`,
    boxShadow: `0 10px 40px -10px ${discount.backgroundColor || '#FFA500'}80`,
  };

  const formatTimeUnit = (value, unit) => {
    return `${value} ${unit}${value !== 1 ? 's' : ''}`;
  };

  const getCountdownText = () => {
    if (!timeLeft) return '';
    
    const parts = [];
    if (timeLeft.days > 0) parts.push(formatTimeUnit(timeLeft.days, 'day'));
    if (timeLeft.hours > 0) parts.push(formatTimeUnit(timeLeft.hours, 'hour'));
    if (timeLeft.minutes > 0 && timeLeft.days === 0) parts.push(formatTimeUnit(timeLeft.minutes, 'minute'));
    if (timeLeft.seconds > 0 && timeLeft.days === 0 && timeLeft.hours === 0) {
      parts.push(formatTimeUnit(timeLeft.seconds, 'second'));
    }
    
    return parts.slice(0, 2).join(', ') + ' left!';
  };

  const getUrgencyLevel = () => {
    if (!timeLeft) return 'normal';
    if (timeLeft.days === 0 && timeLeft.hours < 1) return 'critical';
    if (timeLeft.days === 0) return 'urgent';
    if (timeLeft.days <= 2) return 'warning';
    return 'normal';
  };

  const urgencyClass = `discount-banner-${getUrgencyLevel()}`;

  return (
    <div className="discount-banner-container">
      <div className={`discount-banner ${urgencyClass}`} style={bannerStyle}>
        <div className="discount-banner-content">
          <div className="discount-banner-main">
            <span className="discount-icon">{getDiscountIcon()}</span>
            <span className="discount-message">{message}</span>
            {previewMode && (
              <span className="preview-badge">PREVIEW</span>
            )}
          </div>
          {timeLeft && (
            <div className="discount-countdown">
              <span className="countdown-icon"><Clock size={16} color="white" /></span>
              <span className="countdown-text">{getCountdownText()}</span>
            </div>
          )}
        </div>
        <div className="discount-sparkles">
          <span className="sparkle">✨</span>
          <span className="sparkle">✨</span>
          <span className="sparkle">✨</span>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;