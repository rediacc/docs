// Tiers configuration service
export const fetchBaseTiersConfig = async () => {
  try {
    const response = await fetch('/data/tiers.json');
    if (!response.ok) {
      throw new Error(`Failed to fetch tiers config: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching tiers config:', error);
    // Return null to use fallback features
    return null;
  }
};

// Fetch localized tiers translations
export const fetchTiersConfig = async (language = 'en') => {
  try {
    const response = await fetch(`/data/tiers.${language}.json`);
    if (!response.ok) {
      throw new Error(`Failed to fetch tiers translations: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching tiers translations:', error);
    // Return fallback translations
    return {
      tier: {
        community: { name: "Community" },
        advanced: { name: "Advanced" },
        premium: { name: "Premium" },
        elite: { name: "Elite" },
        feature: {},
        values: {
          unlimited: "Unlimited",
          community: "Community",
          priority: "Priority Email",
          dedicated_account: "Dedicated Manager",
          web: "Web Console",
          cli: "Web + CLI + API",
          basic: "Basic",
          full: "Full"
        },
        units: {
          users: "Users",
          repos: "Repositories",
          machines: "Machines",
          jobs: "Jobs",
          items: "Items",
          hours: "Hours",
          minutes: "Minutes"
        }
      }
    };
  }
};