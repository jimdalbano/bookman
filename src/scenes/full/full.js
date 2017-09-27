import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { getStore } from 'state';

import BookmarkList from './bookmark-list';

const store = getStore();

ReactDOM.render(
  <Provider store={store}>
    <BookmarkList />
  </Provider>,
  document.getElementById('list'),
);
