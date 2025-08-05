import React from 'react';
import { Icon } from './Icon';

const Citations = ({ citations }) => {
  if (!citations || citations.length === 0) return null;

  return (
    <div id="citations" style={{
      marginTop: '4rem',
      padding: '2rem',
      background: 'var(--ifm-background-surface-color)',
      borderTop: '2px solid var(--ifm-color-primary)',
      borderRadius: '8px'
    }}>
      <h3 style={{
        fontSize: '1.2rem',
        marginBottom: '1rem',
        color: 'var(--ifm-heading-color)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <Icon name="docs" size={20} />
        References & Citations
      </h3>
      <ol style={{
        fontSize: '0.9rem',
        lineHeight: '1.8',
        color: 'var(--ifm-font-color-secondary)',
        paddingLeft: '1.5rem'
      }}>
        {citations.map((citation, index) => (
          <li key={index} style={{ marginBottom: '0.5rem' }}>
            {citation.text}{' '}
            {citation.url && (
              <a 
                href={citation.url} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'var(--ifm-color-primary)' }}
              >
                {citation.source}
              </a>
            )}
            {!citation.url && <span>{citation.source}</span>}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Citations;