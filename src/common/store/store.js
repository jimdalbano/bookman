import { createStore } from 'redux';

import { loadState, saveState } from './localStorageState';
import { bookmarkReducer } from './bookmarks.js';

export default function getStore() {
  const persistedState = loadState();
  const store = createStore(
    bookmarkReducer,
    persistedState,
  );

  store.subscribe(() => {
    saveState(store.getState());
  });

  return store;
}
