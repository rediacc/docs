import React from 'react';
import NavbarOriginal from '@theme-original/Navbar';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';
import {useColorMode} from '@docusaurus/theme-common';
import SearchBar from '@theme/SearchBar';

export default function NavbarWrapper(props) {
  const {siteConfig} = useDocusaurusContext();
  const {navbar} = siteConfig.themeConfig;
  const {logo} = navbar;
  const {colorMode, setColorMode} = useColorMode();

  return (
    <>
      <div className="navbar-top-bar">
        <div className="navbar__inner">
          {logo && (
            <Link to={logo.href || '/'} className="navbar__brand">
              <ThemedImage
                className="navbar__logo"
                alt={logo.alt}
                sources={{
                  light: logo.src,
                  dark: logo.srcDark || logo.src,
                }}
              />
            </Link>
          )}
          <div className="navbar__items navbar__items--right">
            <SearchBar />
            <button
              className="clean-btn navbar__theme-toggle"
              type="button"
              onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
              title={`Switch to ${colorMode === 'dark' ? 'light' : 'dark'} mode`}
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
            <Link
              href="/console"
              target="_blank"
              className="navbar-signin-link navbar-top-bar-signin"
            >
              Sign In
            </Link>
            <Link
              href="/console/login?register=true"
              target="_blank"
              className="navbar-cta-link navbar-top-bar-cta"
            >
              Start Free Trial →
            </Link>
          </div>
        </div>
      </div>
      <NavbarOriginal {...props} />
    </>
  );
}