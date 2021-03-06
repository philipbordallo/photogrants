import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import 'polyfills';

import 'assets/base/styles';
import 'assets/variables';

import ProvidedApp from './ProvidedApp';


const renderApp = () => {
  const applicationElement = document.getElementById('application');
  if (applicationElement) {
    const App = React.createElement(ProvidedApp);
    const Container = React.createElement(AppContainer, {}, App);
    ReactDOM.render(Container, applicationElement);
  }
};

const handleDOMReady = () => {
  renderApp();

  if (module.hot) module.hot.accept('./ProvidedApp', renderApp);
};

document.addEventListener('DOMContentLoaded', handleDOMReady);
