import React from 'react';
import { Provider } from 'react-redux';

import store from 'reducers/createStore';
import App from './App';

const ProvidedApp = () => (
  <Provider store={ store }>
    <App />
  </Provider>
);

export default ProvidedApp;
