/**
 * Used by addBookmark to generate id values
*/
jest.mock('node-uuid', () => {
  return jest.fn(() => 'generated-uuid');
});

import {
  ADD_BOOKMARK,
  DESTROY_BOOKMARK,
} from '../action-types';

import { addBookmark, destroyBookmark } from '../actions';

function bookmarkData() {
  return {
    url: 'a-url',
    name: 'a-name',
    notes: 'some-notes',
  };
};

describe('Actions - ', () => {

  describe('addBookmark - ', () => {
    it('provides correct action', () => {
      const bookmark = {
        url: 'a-url',
        name: 'a-name',
        notes: 'some-notes',
      };

      const action = addBookmark(bookmark);

      const expectedAction = Object.assign(
        {},
        bookmark,
        {
          type: ADD_BOOKMARK,
          id: 'generated-uuid',
        }
      );
      expect(action).toEqual(expectedAction);
    });
  });

  describe('destroyBookmark - ', () => {
    it('provides correct action', () => {
      const id = 'an-id';
      const action = destroyBookmark(id);

      const expectedAction = {id: id, type: DESTROY_BOOKMARK};
      expect(action).toEqual(expectedAction);
    });
  });
});
