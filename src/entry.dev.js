import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import 'polyfills';
import 'react-hot-loader/patch';

import 'assets/base/styles';

import ProvidedApp from './ProvidedApp';


const renderApp = () => {
  const applicationElement = document.getElementById('application');
  if (applicationElement) {
    const App = React.createElement(ProvidedApp);
    const Container = React.createElement(AppContainer, {}, App);
    ReactDOM.render(Container, applicationElement);
  }
};

const onDOMReady = () => {
  renderApp();

  if (module.hot) module.hot.accept('./ProvidedApp', renderApp);
};

document.addEventListener('DOMContentLoaded', onDOMReady);
