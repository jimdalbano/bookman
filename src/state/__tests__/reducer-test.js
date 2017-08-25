import {
  ADD_BOOKMARK,
  DESTROY_BOOKMARK,
} from '../action-types';

import bookmarkReducer from '../reducer';

function bookmarkData() {
  return {
    url: 'a-url',
    name: 'a-name',
    notes: 'some-notes',
  };
};

describe('bookmarkReducer - ', () => {

  const bookmark = bookmarkData();

  it('saves a bookmark', () => {
    const actionType = ADD_BOOKMARK;
    const action = Object.assign({}, bookmark, {type: actionType, id: 'uniq-val'});

    const state = bookmarkReducer([], action);

    expect(state.length).toBe(1);
    expect(state[0].name).toBe(bookmark.name);
  });

  it('destroys a bookmark', () => {
    const action = {
      type: DESTROY_BOOKMARK,
      id: 'uniq-val',
    };
    const currentState = [];
    const state = bookmarkReducer(currentState, action);

    expect(state).toEqual(currentState);
  });

  it('returns undefined state for unknown action', () => {
    const actionType = 'NONESUCH';
    const action = Object.assign({}, bookmark, {type: actionType, id: 'uniq-val'});

    const state = bookmarkReducer([], action);

    expect(state.length).toBe(0);
  });
});
