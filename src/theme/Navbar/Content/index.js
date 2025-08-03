import React, {useEffect} from 'react';
import NavbarContent from '@theme-original/Navbar/Content';

export default function NavbarContentWrapper(props) {
  useEffect(() => {
    // Fix the Back to Home link to go to the root
    const backHomeLink = document.querySelector('.navbar-back-home');
    if (backHomeLink) {
      backHomeLink.addEventListener('click', (e) => {
        e.preventDefault();
        // Get the current URL and extract the base domain
        const currentUrl = window.location.href;
        const baseUrl = currentUrl.split('/docs')[0] + '/';
        window.location.href = baseUrl;
      });
    }

    // Fix the Login button to preserve host and port
    const loginLink = document.querySelector('.navbar-login-link');
    if (loginLink) {
      loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        // Use window.location.origin to preserve protocol, host, and port
        const consoleUrl = window.location.origin + '/console/login';
        window.open(consoleUrl, '_blank');
      });
    }
  }, []);

  return <NavbarContent {...props} />;
}