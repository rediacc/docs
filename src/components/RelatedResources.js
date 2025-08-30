import React from 'react';
import Link from '@docusaurus/Link';
import relatedResources from '@site/src/config/relatedResources';

/**
 * RelatedResources Component
 * 
 * A reusable component that displays related resources for any page.
 * Fetches the appropriate resources from the centralized configuration.
 * 
 * @param {string} currentPage - The identifier of the current page
 * @param {string} title - Optional custom title (defaults to "Related Resources")
 * @param {number} maxItems - Optional maximum number of items to display (defaults to all)
 */
function RelatedResources({ currentPage, title = 'Related Resources', maxItems }) {
  // Get the resources for the current page from the config
  const resources = relatedResources[currentPage];
  
  // If no resources are defined for this page, don't render anything
  if (!resources || resources.length === 0) {
    return null;
  }
  
  // Apply maxItems limit if specified
  const displayResources = maxItems ? resources.slice(0, maxItems) : resources;
  
  return (
    <section style={{
      padding: '3rem 1rem',
      background: 'var(--ifm-background-color)'
    }}>
      <div className="container">
        <h3 style={{
          textAlign: 'center',
          marginBottom: '2rem',
          color: 'var(--ifm-heading-color)',
          fontSize: '1.8rem',
          fontWeight: '600'
        }}>
          {title}
        </h3>
        
        <div style={{
          display: 'flex',
          gap: '2rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {displayResources.map((resource, index) => (
            <Link
              key={index}
              to={resource.to}
              className="quick-link"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.75rem 1.5rem',
                backgroundColor: 'var(--ifm-card-background-color)',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'var(--ifm-color-primary)',
                border: '1px solid var(--ifm-color-primary-lightest)',
                transition: 'all 0.3s ease',
                fontSize: '1rem',
                fontWeight: '500',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                ':hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                  backgroundColor: 'var(--ifm-color-primary)',
                  color: 'white'
                }
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
                e.currentTarget.style.backgroundColor = 'var(--ifm-color-primary)';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                e.currentTarget.style.backgroundColor = 'var(--ifm-card-background-color)';
                e.currentTarget.style.color = 'var(--ifm-color-primary)';
              }}
            >
              {resource.label} →
            </Link>
          ))}
        </div>
        
        {/* Optional: Show view all link if items are limited */}
        {maxItems && resources.length > maxItems && (
          <div style={{
            textAlign: 'center',
            marginTop: '2rem'
          }}>
            <Link
              to="/docs/intro"
              style={{
                color: 'var(--ifm-color-primary)',
                textDecoration: 'underline'
              }}
            >
              View all resources →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default RelatedResources;