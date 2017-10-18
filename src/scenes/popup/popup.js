import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { getStore } from 'state';
import App from './app';
// import styles from './app.scss';

const store = getStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
