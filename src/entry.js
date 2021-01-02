import React from 'react';
import ReactDOM from 'react-dom';

import 'polyfills';

import 'assets/base/styles';
import 'assets/variables';

import Analytics from 'api/Analytics';
import ProvidedApp from './ProvidedApp';


const handleDOMReady = () => {
  const applicationElement = document.getElementById('application');

  document.removeEventListener('DOMContentLoaded', handleDOMReady);

  if (applicationElement) {
    const component = React.createElement(ProvidedApp);
    ReactDOM.render(component, applicationElement);
  }
};

const analytics = new Analytics();
analytics.init();

document.addEventListener('DOMContentLoaded', handleDOMReady);
