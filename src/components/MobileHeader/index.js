import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import SearchBar from '@theme/SearchBar';
import { useColorMode } from '@docusaurus/theme-common';
import './styles.css';

// Import sidebar structure  
import sidebarsConfig from '@site/sidebars';

export default function MobileHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { navbar } = siteConfig.themeConfig;
  const { colorMode, setColorMode } = useColorMode();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Use sidebar config
  const docsSidebar = sidebarsConfig.tutorialSidebar || [];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
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
          className={`mobile-sidebar__sublink ${isActive ? 'mobile-sidebar__sublink--active' : ''}`}
          style={{ paddingLeft: `${level * 1.5 + 1}rem`, marginLeft: 0 }}
          onClick={closeSidebar}
        >
          {item.label}
        </Link>
      );
    }
    
    // Handle string items (doc IDs) - fallback for old format
    if (typeof item === 'string') {
      const docPath = `/docs/${item.endsWith('/index') ? item.slice(0, -6) : item}`;
      const isActive = typeof window !== 'undefined' && window.location.pathname === docPath;
      
      return (
        <Link
          key={item}
          to={docPath}
          className={`mobile-sidebar__sublink ${isActive ? 'mobile-sidebar__sublink--active' : ''}`}
          style={{ paddingLeft: `${level * 1.5 + 1}rem`, marginLeft: 0 }}
          onClick={closeSidebar}
        >
          {formatTitle(item)}
        </Link>
      );
    }
    
    // Handle category items
    if (item.type === 'category') {
      const hasActiveChild = (items) => {
        if (typeof window === 'undefined') return false;
        return items.some(child => {
          if (child.type === 'doc') {
            const childPath = `/docs/${child.id.endsWith('/index') ? child.id.slice(0, -6) : child.id}`;
            return window.location.pathname === childPath;
          }
          if (typeof child === 'string') {
            const childPath = `/docs/${child.endsWith('/index') ? child.slice(0, -6) : child}`;
            return window.location.pathname === childPath;
          }
          if (child.type === 'category') {
            return hasActiveChild(child.items);
          }
          return false;
        });
      };
      
      const shouldBeOpen = hasActiveChild(item.items);
      
      return (
        <details 
          key={item.label} 
          className="mobile-sidebar__dropdown" 
          style={{ marginLeft: 0 }}
          open={shouldBeOpen}
        >
          <summary className="mobile-sidebar__sublink" style={{ paddingLeft: `${level * 1.5 + 1}rem` }}>{item.label}</summary>
          <div className="mobile-sidebar__submenu">
            {item.items.map(subItem => renderDocItem(subItem, level + 1))}
          </div>
        </details>
      );
    }
    
    return null;
  };

  return (
    <>
      <div className="mobile-header">
        <div className="mobile-header__inner">
          {/* Left: Hamburger */}
          <button
            className="mobile-header__hamburger"
            onClick={toggleSidebar}
            aria-label="Toggle navigation menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="mobile-header__actions">
            <SearchBar />
            <button
              className="mobile-header__theme-toggle"
              onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
              aria-label={`Switch to ${colorMode === 'dark' ? 'light' : 'dark'} mode`}
            >
              {colorMode === 'dark' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`mobile-sidebar ${sidebarOpen ? 'mobile-sidebar--open' : ''}`}>
        <div className="mobile-sidebar__header">
          <span className="mobile-sidebar__title">Menu</span>
          <button
            className="mobile-sidebar__close"
            onClick={closeSidebar}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="mobile-sidebar__nav">
          {navbar.items.map((item, index) => (
            <div key={index} className="mobile-sidebar__item">
              {item.label === 'Documentation' ? (
                // Special handling for Documentation - use Docusaurus sidebar
                <details 
                  className="mobile-sidebar__dropdown"
                  open={typeof window !== 'undefined' && window.location.pathname.startsWith('/docs')}
                >
                  <summary className="mobile-sidebar__link">Documentation</summary>
                  <div className="mobile-sidebar__submenu">
                    {docsSidebar.map(docItem => renderDocItem(docItem))}
                  </div>
                </details>
              ) : item.type === 'dropdown' ? (
                <details className="mobile-sidebar__dropdown">
                  <summary className="mobile-sidebar__link">{item.label}</summary>
                  <div className="mobile-sidebar__submenu">
                    {item.items.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.to}
                        className="mobile-sidebar__sublink"
                        onClick={closeSidebar}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  to={item.to || item.href}
                  className="mobile-sidebar__link"
                  onClick={closeSidebar}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>

      {sidebarOpen && (
        <div
          className="mobile-sidebar__backdrop"
          onClick={closeSidebar}
        />
      )}
    </>
  );
}
