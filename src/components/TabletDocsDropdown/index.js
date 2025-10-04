import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Link from '@docusaurus/Link';
import sidebarsConfig from '@site/sidebars';
import './styles.css';

export default function TabletDocsDropdown() {
  const [portalContainer, setPortalContainer] = useState(null);
  const docsSidebar = sidebarsConfig.tutorialSidebar || [];

  // Find navbar container and hide original Documentation link
  useEffect(() => {
    const findContainer = () => {
      // Find the Documentation link in the main navbar (not top bar)
      const docLink = document.querySelector('nav.navbar .navbar__items .navbar__link[href="/docs/intro"]');
      const parentLi = docLink?.closest('.navbar__item');
      
      if (parentLi && window.innerWidth >= 768 && window.innerWidth <= 996) {
        // Hide original link
        parentLi.style.setProperty('display', 'none', 'important');
        // Set portal container to the parent li (will replace it)
        setPortalContainer(parentLi.parentNode);
      } else if (parentLi) {
        // Show original link on desktop/mobile
        parentLi.style.removeProperty('display');
        setPortalContainer(null);
      }
    };

    // Run on mount and window resize
    findContainer();
    window.addEventListener('resize', findContainer);

    return () => {
      window.removeEventListener('resize', findContainer);
    };
  }, []);

  const closeDropdown = () => {
    // Dropdown closes automatically on navigation
  };

  // Format doc ID to title
  const formatTitle = (docId) => {
    const parts = docId.split('/');
    const filename = parts[parts.length - 1];
    return filename
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Render sidebar items recursively
  const renderDocItem = (item, level = 0) => {
    // Handle doc items (with type: 'doc')
    if (item.type === 'doc') {
      const docPath = `/docs/${item.id.endsWith('/index') ? item.id.slice(0, -6) : item.id}`;
      const isActive = typeof window !== 'undefined' && window.location.pathname === docPath;

      return (
        <Link
          key={item.id}
          to={docPath}
          className={`tablet-docs-dropdown__link ${isActive ? 'tablet-docs-dropdown__link--active' : ''}`}
          style={{ paddingLeft: `${level * 1.5 + 1}rem` }}
          onClick={closeDropdown}
        >
          {item.label}
        </Link>
      );
    }

    // Handle string items (doc IDs) - fallback
    if (typeof item === 'string') {
      const docPath = `/docs/${item.endsWith('/index') ? item.slice(0, -6) : item}`;
      const isActive = typeof window !== 'undefined' && window.location.pathname === docPath;

      return (
        <Link
          key={item}
          to={docPath}
          className={`tablet-docs-dropdown__link ${isActive ? 'tablet-docs-dropdown__link--active' : ''}`}
          style={{ paddingLeft: `${level * 1.5 + 1}rem` }}
          onClick={closeDropdown}
        >
          {formatTitle(item)}
        </Link>
      );
    }

    // Handle category items
    if (item.type === 'category') {
      return (
        <details key={item.label} className="tablet-docs-dropdown__category">
          <summary 
            className="tablet-docs-dropdown__category-header"
            style={{ paddingLeft: `${level * 1.5 + 1}rem` }}
          >
            {item.label}
          </summary>
          <div className="tablet-docs-dropdown__submenu">
            {item.items.map(subItem => renderDocItem(subItem, level + 1))}
          </div>
        </details>
      );
    }

    return null;
  };

  const dropdownContent = (
    <li className="tablet-docs-dropdown navbar__item dropdown dropdown--hoverable">
      <a
        className="navbar__link"
        href="#"
        onClick={(e) => {
          e.preventDefault();
        }}
        aria-haspopup="true"
      >
        Documentation
      </a>

      <ul className="dropdown__menu">
        {docsSidebar.map(docItem => renderDocItem(docItem))}
      </ul>
    </li>
  );

  // Use portal to render inside navbar on tablet
  if (portalContainer) {
    return ReactDOM.createPortal(dropdownContent, portalContainer);
  }

  // Return null on desktop/mobile
  return null;
}
