import React, { useState, useEffect } from 'react';
import InfoTooltip from './InfoTooltip';
import { fetchServicesConfig, fetchAvailabilityConfig } from '../../services/servicesService';
import { 
  SpeedIcon, 
  LightbulbIcon,
  DataMigrationIcon,
  RansomwareRecoveryIcon,
  ComplianceAuditIcon,
  InfrastructureScalingIcon,
  TeamTrainingIcon,
  PerformanceOptimizationIcon,
  CustomIntegrationIcon,
} from '../FeatureIcons';

const SpeedPricingTable = () => {
  const [servicesConfig, setServicesConfig] = useState(null);
  const [availabilityConfig, setAvailabilityConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Map service keys to icon components
  const getServiceIcon = (serviceKey) => {
    const iconMap = {
      'migration': DataMigrationIcon,
      'ransomware': RansomwareRecoveryIcon,
      'compliance': ComplianceAuditIcon,
      'scaling': InfrastructureScalingIcon,
      'training': TeamTrainingIcon,
      'optimization': PerformanceOptimizationIcon,
      'integration': CustomIntegrationIcon,
    };
    
    const IconComponent = iconMap[serviceKey];
    return IconComponent ? <IconComponent size={24} /> : null;
  };
  
  // Fetch services and availability configuration
  useEffect(() => {
    const loadData = async () => {
      try {
        const [services, availability] = await Promise.all([
          fetchServicesConfig(),
          fetchAvailabilityConfig()
        ]);
        setServicesConfig(services);
        setAvailabilityConfig(availability);
      } catch (error) {
        console.error('Failed to load services config:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, []);

  const getAvailabilityBadge = (tierKey) => {
    if (!availabilityConfig) return null;
    
    const availability = availabilityConfig.servicePackageAvailability[tierKey];
    const statusConfig = availabilityConfig.availabilityConfig.statusLabels[availability?.status];
    
    if (!availability || !statusConfig?.showBadge) return null;
    
    if (availability.status === 'limited') {
      return {
        label: statusConfig.label,
        sublabel: availability.spotsRemaining ? `${availability.spotsRemaining} spots left` : null,
        color: statusConfig.color,
        pulse: statusConfig.pulseAnimation
      };
    }
    
    if (availability.status === 'soldOut') {
      return {
        label: statusConfig.label,
        sublabel: null,
        color: statusConfig.color,
        pulse: false
      };
    }
    
    return null;
  };

  // Build speed tiers from config
  const speedTiers = servicesConfig ? 
    Object.entries(servicesConfig.professionalServices.packages).map(([key, pkg]) => ({
      key,
      name: pkg.name,
      speed: pkg.speed,
      price: `${pkg.pricePrefix}${pkg.price.toLocaleString()}`,
      priceRange: pkg.description,
      highlight: pkg.highlight,
      availability: availabilityConfig?.servicePackageAvailability[key],
      badge: getAvailabilityBadge(key)
    })) :
    [];

  // Build service types from config
  const serviceTypes = servicesConfig ?
    Object.entries(servicesConfig.professionalServices.services).map(([key, service]) => ({
      key,
      icon: service.icon,
      label: service.name,
      tooltip: service.description,
      timelines: service.timelines
    })) :
    [];

  if (loading) {
    return (
      <div style={{padding: '3rem', textAlign: 'center'}}>
        <p style={{fontSize: '1.25rem'}}>Loading professional services...</p>
      </div>
    );
  }

  if (!servicesConfig) {
    return null;
  }

  return (
    <div style={{width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '3rem 1rem'}}>
      <div style={{textAlign: 'center', marginBottom: '3rem'}}>
        <h2 style={{fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--ifm-heading-color)'}}>
          Professional Service Packages
        </h2>
        <p style={{fontSize: '1.25rem', color: 'var(--ifm-font-color-secondary)', marginBottom: '1rem'}}>
          Get expert help when you need it most
        </p>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '1.125rem',
          fontWeight: '600',
          color: '#556b2f',
          marginBottom: '1rem'
        }}>
          <SpeedIcon size={24} />
          <span>Fast-track your success with professional assistance</span>
        </div>
        <div style={{
          background: 'rgba(85, 107, 47, 0.1)',
          borderRadius: '0.5rem',
          padding: '1rem',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <p style={{fontSize: '0.875rem', color: 'var(--ifm-font-color-secondary)', margin: 0}}>
            <span style={{fontWeight: '600'}}>{servicesConfig.professionalServices.eligibility.label}</span> {servicesConfig.professionalServices.eligibility.description}
          </p>
        </div>
      </div>

      <div style={{
        background: 'var(--ifm-background-surface-color)',
        borderRadius: '1rem',
        border: '1px solid var(--ifm-toc-border-color)',
        boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden'
      }}>
        {/* Desktop View */}
        <div className="hide-on-mobile" style={{display: 'block'}}>
          <table style={{width: '100%', borderCollapse: 'collapse'}}>
            <thead>
              <tr style={{background: 'var(--ifm-background-color)', borderBottom: '1px solid var(--ifm-toc-border-color)'}}>
                <th style={{padding: '1.5rem', textAlign: 'left'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <span style={{fontSize: '1.125rem', fontWeight: '600', color: 'var(--ifm-heading-color)'}}>Service Type</span>
                    <InfoTooltip content="Choose the service you need assistance with" />
                  </div>
                </th>
                {speedTiers.map((tier, index) => (
                  <th key={index} style={{
                    padding: '1.5rem',
                    textAlign: 'center',
                    background: tier.highlight ? 'rgba(85, 107, 47, 0.1)' : 'transparent'
                  }}>
                    <div style={{marginBottom: '0.5rem'}}>
                      <h3 style={{fontSize: '1.25rem', fontWeight: '700', color: 'var(--ifm-heading-color)', margin: 0}}>
                        {tier.name}
                      </h3>
                    </div>
                    <p style={{fontSize: '0.875rem', color: 'var(--ifm-font-color-secondary)', margin: '0.5rem 0'}}>
                      {tier.speed}
                    </p>
                    <div style={{marginTop: '0.5rem'}}>
                      <div style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        color: tier.availability?.status === 'soldOut' ? '#9ca3af' : '#556b2f',
                        textDecoration: tier.availability?.status === 'soldOut' ? 'line-through' : 'none'
                      }}>
                        {tier.price}
                      </div>
                      <div style={{fontSize: '0.75rem', color: 'var(--ifm-font-color-secondary)'}}>
                        {tier.priceRange}
                      </div>
                      {tier.badge && (
                        <div style={{marginTop: '0.5rem'}}>
                          <span style={{
                            padding: '0.25rem 0.75rem',
                            fontSize: '0.75rem',
                            fontWeight: '700',
                            color: 'white',
                            backgroundColor: tier.badge.color,
                            borderRadius: '9999px',
                            display: 'inline-block',
                            animation: tier.badge.pulse ? 'pulse 2s infinite' : 'none'
                          }}>
                            {tier.badge.label}
                          </span>
                          {tier.badge.sublabel && (
                            <div style={{fontSize: '0.75rem', color: 'var(--ifm-font-color-secondary)', marginTop: '0.25rem'}}>
                              {tier.badge.sublabel}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {serviceTypes.map((service, serviceIndex) => (
                <tr key={serviceIndex} style={{
                  borderBottom: '1px solid var(--ifm-toc-border-color)',
                  transition: 'background-color 0.2s'
                }}>
                  <td style={{padding: '1.5rem'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                      <span>{getServiceIcon(service.key)}</span>
                      <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                        <p style={{fontWeight: '600', color: 'var(--ifm-heading-color)', margin: 0}}>
                          {service.label}
                        </p>
                        <InfoTooltip content={service.tooltip} />
                      </div>
                    </div>
                  </td>
                  {speedTiers.map((tier, tierIndex) => (
                    <td key={tierIndex} style={{
                      padding: '1.5rem',
                      textAlign: 'center',
                      background: tier.highlight ? 'rgba(85, 107, 47, 0.05)' : 'transparent',
                      opacity: tier.availability?.status === 'soldOut' ? 0.5 : 1
                    }}>
                      <p style={{
                        fontSize: '0.875rem',
                        color: tier.availability?.status === 'soldOut' ? '#9ca3af' : 'var(--ifm-font-color-secondary)',
                        margin: 0
                      }}>
                        {service.timelines[tier.key]}
                      </p>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="show-on-mobile" style={{display: 'none'}}>
          {speedTiers.map((tier, index) => (
            <div key={index} style={{
              padding: '1.5rem',
              borderBottom: '1px solid var(--ifm-toc-border-color)',
              background: tier.highlight ? 'rgba(85, 107, 47, 0.1)' : 'transparent'
            }}>
              <div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
                <h3 style={{fontSize: '1.25rem', fontWeight: '700', color: 'var(--ifm-heading-color)', margin: 0}}>
                  {tier.name}
                </h3>
                <p style={{fontSize: '0.875rem', color: 'var(--ifm-font-color-secondary)', margin: '0.5rem 0'}}>
                  {tier.speed}
                </p>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: tier.availability?.status === 'soldOut' ? '#9ca3af' : '#556b2f',
                  textDecoration: tier.availability?.status === 'soldOut' ? 'line-through' : 'none'
                }}>
                  {tier.price}
                </div>
                <div style={{fontSize: '0.75rem', color: 'var(--ifm-font-color-secondary)'}}>
                  {tier.priceRange}
                </div>
                {tier.badge && (
                  <div style={{marginTop: '0.5rem'}}>
                    <span style={{
                      padding: '0.25rem 0.75rem',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      color: 'white',
                      backgroundColor: tier.badge.color,
                      borderRadius: '9999px',
                      display: 'inline-block'
                    }}>
                      {tier.badge.label}
                    </span>
                    {tier.badge.sublabel && (
                      <div style={{fontSize: '0.75rem', color: 'var(--ifm-font-color-secondary)', marginTop: '0.25rem'}}>
                        {tier.badge.sublabel}
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                {serviceTypes.map((service, serviceIndex) => (
                  <div key={serviceIndex} style={{display: 'flex', alignItems: 'flex-start', gap: '0.75rem'}}>
                    <span style={{marginTop: '0.125rem'}}>{getServiceIcon(service.key)}</span>
                    <div style={{flex: 1}}>
                      <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem'}}>
                        <p style={{fontWeight: '600', color: 'var(--ifm-heading-color)', fontSize: '0.875rem', margin: 0}}>
                          {service.label}
                        </p>
                        <InfoTooltip content={service.tooltip} />
                      </div>
                      <p style={{fontSize: '0.875rem', color: 'var(--ifm-font-color-secondary)', margin: 0}}>
                        {service.timelines[tier.key]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Information */}
      <div style={{
        marginTop: '2rem',
        background: 'rgba(85, 107, 47, 0.1)',
        borderRadius: '0.5rem',
        padding: '1.5rem',
        border: '1px solid rgba(85, 107, 47, 0.2)'
      }}>
        <div style={{display: 'flex', alignItems: 'flex-start', gap: '0.75rem'}}>
          <LightbulbIcon size={24} />
          <div>
            <h4 style={{fontWeight: '600', color: 'var(--ifm-heading-color)', marginBottom: '0.5rem'}}>
              {servicesConfig.professionalServices.benefits.title}
            </h4>
            <p style={{color: 'var(--ifm-font-color-secondary)', fontSize: '0.875rem', marginBottom: '0.5rem'}}>
              <strong>{servicesConfig.professionalServices.benefits.costFact}</strong>
            </p>
            <p style={{color: 'var(--ifm-font-color-secondary)', fontSize: '0.875rem', marginBottom: '0.5rem'}}>
              <strong>{servicesConfig.professionalServices.benefits.downtimeFact}</strong>
            </p>
            <p style={{color: 'var(--ifm-font-color-secondary)', fontSize: '0.875rem', marginBottom: '0.75rem'}}>
              {servicesConfig.professionalServices.benefits.description}
            </p>
            <ul style={{margin: 0, paddingLeft: '1.5rem'}}>
              {servicesConfig.professionalServices.benefits.features.map((feature, index) => (
                <li key={index} style={{color: 'var(--ifm-font-color-secondary)', fontSize: '0.875rem'}}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div style={{marginTop: '2rem', textAlign: 'center'}}>
        <p style={{fontSize: '1.125rem', fontWeight: '600', color: 'var(--ifm-heading-color)', marginBottom: '0.5rem'}}>
          {servicesConfig.professionalServices.cta.title}
        </p>
        <p style={{fontSize: '1rem', color: 'var(--ifm-font-color-secondary)', marginBottom: '1rem'}}>
          {servicesConfig.professionalServices.cta.subtitle}
        </p>
        <a 
          href="https://outlook.office.com/owa/calendar/RediaccConsultationServices@rediacc.com/bookings/?ismsaljsauthenabled"
          target="_blank"
          rel="noopener noreferrer"
          className="button button--primary button--lg"
          style={{
            background: 'linear-gradient(to right, #556b2f, #808000)',
            border: 'none',
            color: 'white'
          }}
        >
          {servicesConfig.professionalServices.cta.button}
        </a>
        {speedTiers.some(tier => tier.availability?.status === 'soldOut') && (
          <p style={{fontSize: '0.875rem', color: 'var(--ifm-font-color-secondary)', marginTop: '1rem'}}>
            <span style={{color: '#ef4444', fontWeight: '600'}}>
              {servicesConfig.professionalServices.soldOut.note}:
            </span> {servicesConfig.professionalServices.soldOut.message}
          </p>
        )}
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        @media (max-width: 768px) {
          .hide-on-mobile {
            display: none !important;
          }
          .show-on-mobile {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
};

export default SpeedPricingTable;