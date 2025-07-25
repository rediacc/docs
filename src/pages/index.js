import React from 'react';
import {Redirect} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';







export default function Home() {
  // Redirect to docs intro page with correct path
  return <Redirect to={useBaseUrl('/docs/intro')} />;
}