import React from 'react';

const CitationLink = ({ numbers, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const citationsElement = document.getElementById('citations');
    if (citationsElement) {
      citationsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Handle both single numbers and ranges
  const formatNumbers = () => {
    if (typeof numbers === 'number') {
      return `[${numbers}]`;
    } else if (typeof numbers === 'string') {
      return `[${numbers}]`;
    } else if (Array.isArray(numbers)) {
      return `[${numbers.join(', ')}]`;
    }
    return `[${numbers}]`;
  };

  return (
    <>
      {children}
      <sup>
        <a 
          href="#citations" 
          onClick={handleClick}
          style={{
            textDecoration: 'none',
            color: 'var(--ifm-color-primary)',
            fontWeight: 'normal'
          }}
        >
          {formatNumbers()}
        </a>
      </sup>
    </>
  );
};

export default CitationLink;