import React from 'react';
import FooterOriginal from '@theme-original/Footer';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';

export default function FooterWrapper(props) {
  const {siteConfig} = useDocusaurusContext();
  const {navbar} = siteConfig.themeConfig;
  const {logo} = navbar;

  return (
    <>
      <div className="footer-bar">
        <div className="footer-bar__inner">
          {logo && (
            <Link to={logo.href || '/'} className="footer-bar__brand">
              <ThemedImage
                className="footer-bar__logo"
                alt={logo.alt}
                sources={{
                  light: logo.src,
                  dark: logo.srcDark || logo.src,
                }}
              />
            </Link>
          )}
          <div className="footer-bar__tagline">
            Be Ready to Accelerate
          </div>
        </div>
      </div>
      <FooterOriginal {...props} />
    </>
  );
}