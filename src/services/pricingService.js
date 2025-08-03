// Pricing configuration service
export const fetchPricingConfig = async () => {
  try {
    // Try to fetch localized version first
    const enResponse = await fetch('/config/pricing.en.json');
    if (enResponse.ok) {
      return await enResponse.json();
    }
    
    // Fall back to base pricing config
    const response = await fetch('/config/pricing.json');
    if (!response.ok) {
      throw new Error(`Failed to fetch pricing config: ${response.status}`);
    }
    
    const config = await response.json();
    
    // Transform translation keys to actual text for discounts
    if (config.specialDayDiscounts) {
      Object.values(config.specialDayDiscounts).forEach(discount => {
        if (discount.message && discount.message.startsWith('pricing.')) {
          // Simple transformation for now
          const key = discount.message.replace('pricing.', '');
          const messages = {
            blackFridayMessage: '🔥 BLACK FRIDAY: Save 25% on all plans!',
            cyberMondayMessage: '💻 CYBER MONDAY: 30% OFF - Today Only!',
            newYearMessage: '🎊 NEW YEAR SPECIAL: Get 20% off and start fresh!',
            summerSaleMessage: '☀️ SUMMER SALE: Cool 15% off all plans!',
            earlyBirdMessage: '🌅 EARLY BIRD: 10% off for quick decision makers!',
            valentinesDayMessage: '❤️ VALENTINE\'S SPECIAL: Show your data some love - 14% off!'
          };
          discount.message = messages[key] || discount.message;
        }
      });
    }
    
    return config;
  } catch (error) {
    console.error('Error fetching pricing config:', error);
    // Return fallback pricing if fetch fails
    return {
      baseMonthlyPrices: {
        community: { price: "Free", originalPrice: 799, period: null },
        advanced: { price: 2399, period: "perMonth" },
        premium: { price: 3899, period: "perMonth" },
        elite: { price: 6999, period: "perMonth" }
      },
      yearlyMultipliers: {
        community: { multiplier: 1.0, savePercent: "0%" },
        advanced: { multiplier: 0.833, savePercent: "17%" },
        premium: { multiplier: 0.770, savePercent: "23%" },
        elite: { multiplier: 0.714, savePercent: "29%" }
      },
      specialDayDiscounts: {},
      plans: {
        community: {
          name: "Community",
          ctaText: "Get Started",
          ctaLink: "/intro",
          ctaVariant: "secondary"
        },
        advanced: {
          name: "Advanced",
          ctaText: "Start Free Trial",
          ctaLink: "/intro",
          ctaVariant: "primary"
        },
        premium: {
          name: "Premium",
          ctaText: "Start Free Trial",
          ctaLink: "/intro",
          ctaVariant: "primary"
        },
        elite: {
          name: "Elite",
          ctaText: "Let's Talk",
          ctaLink: "/contact",
          ctaVariant: "secondary"
        }
      }
    };
  }
};

// Fetch localized pricing config
export const fetchLocalizedPricingConfig = async (language = 'en') => {
  try {
    const response = await fetch(`/config/pricing.${language}.json`);
    if (!response.ok) {
      // Fallback to base pricing config
      return fetchPricingConfig();
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching localized pricing config:', error);
    return fetchPricingConfig();
  }
};