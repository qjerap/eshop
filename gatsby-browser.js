// gatsby-browser.js
// Import the component at the top of the file
import React from 'react'
import GlobalWrapper from './src/components/globalWrapper';

export const wrapPageElement = ({ element, props }) => (
  <GlobalWrapper {...props}>{element}</GlobalWrapper>
);