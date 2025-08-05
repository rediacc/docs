import React, { useEffect } from 'react';

// Default implementation
export default function Root({children}) {
  useEffect(() => {
    // Function to make citation superscripts clickable
    const makeCitationsClickable = () => {
      // Find all sup elements that contain citation patterns
      const sups = document.querySelectorAll('sup');
      
      sups.forEach(sup => {
        const text = sup.textContent;
        // Check if it matches citation pattern [number] or [number-number]
        if (/^\[\d+(-\d+)?(,\s*\d+(-\d+)?)*\]$/.test(text)) {
          // If it's not already wrapped in a link
          if (!sup.querySelector('a') && sup.parentElement.tagName !== 'A') {
            sup.style.cursor = 'pointer';
            sup.style.color = 'var(--ifm-color-primary)';
            sup.classList.add('citation-sup');
            
            sup.addEventListener('click', (e) => {
              e.preventDefault();
              e.stopPropagation();
              const citationsElement = document.getElementById('citations');
              if (citationsElement) {
                citationsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            });
          }
        }
      });
    };

    // Run on initial load
    makeCitationsClickable();

    // Run on route changes (for client-side navigation)
    const observer = new MutationObserver(() => {
      makeCitationsClickable();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
}