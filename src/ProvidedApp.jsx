import React from 'react';
import { Provider } from 'react-redux';

import store from 'reducers/createStore';
import App from './App';

function ProvidedApp() {
  return (
    <Provider store={ store }>
      <App />
    </Provider>
  );
}

export default ProvidedApp;
