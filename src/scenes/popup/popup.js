import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import getStore from 'store/store';
import App from './app';

const store = getStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
