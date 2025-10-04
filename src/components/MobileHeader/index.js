import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import SearchBar from '@theme/SearchBar';
import { useColorMode } from '@docusaurus/theme-common';
import './styles.css';

export default function MobileHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { navbar } = siteConfig.themeConfig;
  const { colorMode, setColorMode } = useColorMode();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
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
              {item.type === 'dropdown' ? (
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
