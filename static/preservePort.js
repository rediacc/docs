/**
 * Preserve Port Navigation Script
 * 
 * This script modifies all internal links to include the current port number
 * when the site is served on a non-standard port.
 */

(function() {
  'use strict';

  // Only run if we're on a non-standard port
  const currentPort = window.location.port;
  if (!currentPort || currentPort === '80' || currentPort === '443') {
    return; // Standard ports, no need to modify
  }


  // Helper function to check if URL is internal
  function isInternalUrl(url) {
    if (!url) return false;
    
    // Skip special URLs
    if (url.startsWith('javascript:') || 
        url.startsWith('mailto:') || 
        url.startsWith('tel:') || 
        url.startsWith('#') ||
        url.startsWith('data:') ||
        url.startsWith('blob:')) {
      return false;
    }
    
    // Relative URLs are internal
    if (url.startsWith('/')) {
      return true;
    }
    
    // Check absolute URLs
    try {
      const urlObj = new URL(url, window.location.origin);
      return urlObj.hostname === window.location.hostname;
    } catch {
      return false;
    }
  }

  // Function to fix a single URL
  function fixUrlWithPort(url) {
    if (!url || !isInternalUrl(url)) return url;
    
    // For relative URLs starting with /
    if (url.startsWith('/') && !url.startsWith('//')) {
      return `http://localhost:${currentPort}${url}`;
    }
    
    // For absolute URLs to same host
    try {
      const urlObj = new URL(url, window.location.origin);
      if (urlObj.hostname === window.location.hostname && !urlObj.port) {
        urlObj.port = currentPort;
        return urlObj.toString();
      }
    } catch {
      // Invalid URL
    }
    
    return url;
  }

  // Function to fix all links on the page
  function fixAllLinks() {
    // Fix all anchor tags
    const anchors = document.querySelectorAll('a[href]');
    let fixedCount = 0;
    
    anchors.forEach(anchor => {
      const href = anchor.getAttribute('href');
      if (isInternalUrl(href)) {
        const newHref = fixUrlWithPort(href);
        if (newHref !== href) {
          anchor.setAttribute('href', newHref);
          anchor.setAttribute('data-original-href', href);
          fixedCount++;
        }
      }
    });
    
    // Fix all forms
    const forms = document.querySelectorAll('form[action]');
    forms.forEach(form => {
      const action = form.getAttribute('action');
      if (isInternalUrl(action)) {
        const newAction = fixUrlWithPort(action);
        if (newAction !== action) {
          form.setAttribute('action', newAction);
          form.setAttribute('data-original-action', action);
        }
      }
    });
    
    if (fixedCount > 0) {
    }
  }

  // Override history methods to fix URLs
  const originalPushState = history.pushState;
  const originalReplaceState = history.replaceState;
  
  history.pushState = function(state, title, url) {
    if (url && isInternalUrl(url)) {
      url = fixUrlWithPort(url);
    }
    return originalPushState.call(this, state, title, url);
  };
  
  history.replaceState = function(state, title, url) {
    if (url && isInternalUrl(url)) {
      url = fixUrlWithPort(url);
    }
    return originalReplaceState.call(this, state, title, url);
  };

  // Override location setters
  const locationDescriptor = Object.getOwnPropertyDescriptor(window, 'location');
  if (locationDescriptor && locationDescriptor.set) {
    const originalLocationSetter = locationDescriptor.set;
    Object.defineProperty(window, 'location', {
      get: locationDescriptor.get,
      set: function(value) {
        if (typeof value === 'string' && isInternalUrl(value)) {
          value = fixUrlWithPort(value);
        }
        return originalLocationSetter.call(this, value);
      },
      enumerable: true,
      configurable: true
    });
  }

  // Override location.href setter
  const hrefDescriptor = Object.getOwnPropertyDescriptor(Location.prototype, 'href');
  if (hrefDescriptor && hrefDescriptor.set) {
    const originalHrefSetter = hrefDescriptor.set;
    Object.defineProperty(Location.prototype, 'href', {
      get: hrefDescriptor.get,
      set: function(value) {
        if (typeof value === 'string' && isInternalUrl(value)) {
          value = fixUrlWithPort(value);
        }
        return originalHrefSetter.call(this, value);
      },
      enumerable: true,
      configurable: true
    });
  }

  // Override location.assign
  const originalAssign = Location.prototype.assign;
  Location.prototype.assign = function(url) {
    if (typeof url === 'string' && isInternalUrl(url)) {
      url = fixUrlWithPort(url);
    }
    return originalAssign.call(this, url);
  };

  // Override location.replace
  const originalReplace = Location.prototype.replace;
  Location.prototype.replace = function(url) {
    if (typeof url === 'string' && isInternalUrl(url)) {
      url = fixUrlWithPort(url);
    }
    return originalReplace.call(this, url);
  };

  // Monitor for new elements added to the DOM
  const observer = new MutationObserver(function(mutations) {
    let hasNewLinks = false;
    
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach(function(node) {
          if (node.nodeType === 1) { // Element node
            if (node.tagName === 'A' && node.hasAttribute('href')) {
              hasNewLinks = true;
            } else if (node.querySelectorAll) {
              const links = node.querySelectorAll('a[href]');
              if (links.length > 0) {
                hasNewLinks = true;
              }
            }
          }
        });
      } else if (mutation.type === 'attributes' && mutation.attributeName === 'href') {
        hasNewLinks = true;
      }
    });
    
    if (hasNewLinks) {
      fixAllLinks();
    }
  });

  // Run when DOM is ready
  function init() {
    fixAllLinks();
    
    // Start observing for changes
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['href', 'action']
    });
    
  }

  // Initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Also run after a short delay to catch any late modifications
  setTimeout(init, 100);
  setTimeout(init, 500);

})();