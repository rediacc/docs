// Services configuration service
export const fetchServicesConfig = async () => {
  try {
    const response = await fetch('/data/services.json');
    if (!response.ok) throw new Error('Failed to fetch services config');
    return await response.json();
  } catch (error) {
    console.error('Error fetching services config:', error);
    // Return fallback data
    return {
      professionalServices: {
        packages: {
          standard: {
            name: "Standard",
            speed: "3-5 Business Days",
            price: 9999,
            pricePrefix: "From $",
            description: "Standard turnaround time",
            highlight: false
          },
          priority: {
            name: "Priority",
            speed: "24-48 Hours",
            price: 19999,
            pricePrefix: "From $",
            description: "Fast-track your project",
            highlight: true
          },
          emergency: {
            name: "Emergency",
            speed: "Same Day",
            price: 29999,
            pricePrefix: "From $",
            description: "Immediate response",
            highlight: false
          }
        },
        services: {
          migration: {
            name: "Data Migration",
            icon: "🚚",
            description: "Complete migration of your repositories and infrastructure to Rediacc",
            timelines: {
              standard: "5 business days for up to 100GB",
              priority: "48 hours for any size",
              emergency: "12 hours guaranteed"
            }
          },
          ransomware: {
            name: "Ransomware Recovery",
            icon: "🛡️",
            description: "Emergency ransomware recovery and system restoration",
            timelines: {
              standard: "3-5 days assessment",
              priority: "24 hours to begin recovery",
              emergency: "Immediate response team"
            }
          },
          security: {
            name: "Security Assessment",
            icon: "📋",
            description: "Comprehensive security assessment and hardening assistance",
            timelines: {
              standard: "2 weeks full assessment",
              priority: "5 days expedited",
              emergency: "24 hours preliminary"
            }
          },
          scaling: {
            name: "Infrastructure Scaling",
            icon: "📈",
            description: "Scale your infrastructure to handle increased load",
            timelines: {
              standard: "1 week planning + execution",
              priority: "2-3 days rapid scaling",
              emergency: "Same day emergency scaling"
            }
          },
          training: {
            name: "Team Training",
            icon: "🎓",
            description: "Comprehensive training for your team on Rediacc platform",
            timelines: {
              standard: "Schedule within 2 weeks",
              priority: "Schedule within 3 days",
              emergency: "Next day training session"
            }
          },
          optimization: {
            name: "Performance Optimization",
            icon: "⚡",
            description: "Optimize your backup and recovery performance",
            timelines: {
              standard: "1 week analysis + tuning",
              priority: "2 days quick optimization",
              emergency: "Immediate performance fix"
            }
          },
          integration: {
            name: "Custom Integration",
            icon: "🔧",
            description: "Integrate Rediacc with your existing tools and workflows",
            timelines: {
              standard: "2-3 weeks development",
              priority: "1 week fast-track",
              emergency: "48 hours critical integration"
            }
          }
        }
      }
    };
  }
};

export const fetchAvailabilityConfig = async () => {
  try {
    const response = await fetch('/data/availability.json');
    if (!response.ok) throw new Error('Failed to fetch availability config');
    return await response.json();
  } catch (error) {
    console.error('Error fetching availability config:', error);
    // Return fallback data
    return {
      servicePackageAvailability: {
        standard: {
          status: "available",
          spotsRemaining: null,
          message: null
        },
        priority: {
          status: "limited",
          spotsRemaining: 5,
          message: "Only 5 spots remaining!"
        },
        emergency: {
          status: "soldOut",
          spotsRemaining: 0,
          message: "Sold Out"
        }
      },
      availabilityConfig: {
        statusLabels: {
          available: {
            label: "Available",
            color: "#10B981",
            showBadge: false
          },
          limited: {
            label: "LIMITED SPOTS",
            color: "#F59E0B",
            showBadge: true,
            pulseAnimation: true
          },
          soldOut: {
            label: "SOLD OUT",
            color: "#EF4444",
            showBadge: true,
            showWaitlist: false
          }
        }
      }
    };
  }
};