/*eslint-disable*/
// Only reason for this import is to get webpack to grab 3rd party libs
import bs from 'global.scss';
/*eslint-enable*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { getStore } from 'state';
import App from './app';

const store = getStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
