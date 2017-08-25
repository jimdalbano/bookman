import v4 from 'node-uuid';

import {
  ADD_BOOKMARK,
  DESTROY_BOOKMARK,
} from './action-types';

export const addBookmark = (bookmark) => {
  const type = ADD_BOOKMARK;

  const { url, name, notes } = bookmark;
  const id = v4();
  const action = { type, id, url, name, notes };

  return action;
};

export const destroyBookmark = (id) => {
  const type = DESTROY_BOOKMARK;
  const action = { type, id };
  return action;
};

