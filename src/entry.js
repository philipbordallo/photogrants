import React from 'react';
import ReactDOM from 'react-dom';

import 'polyfills';

import 'assets/base/styles';
import 'assets/variables';

import Analytics from 'api/Analytics';
import ProvidedApp from './ProvidedApp';


function renderApp() {
  const applicationElement = document.getElementById('application');

  if (applicationElement) {
    const component = React.createElement(ProvidedApp);
    ReactDOM.render(component, applicationElement);
  }
}


function handleDOMReady() {
  renderApp();

  if (module.hot) module.hot.accept('./ProvidedApp', renderApp);
}

if (process.env.NODE_ENV === 'production') {
  const analytics = new Analytics();
  analytics.init();
}

document.addEventListener('DOMContentLoaded', handleDOMReady, { once: true });
