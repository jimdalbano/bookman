import React from 'react';
import { render } from 'enzyme';

import List from '../list';

describe('List - ', () => {
  const bookmarks = [{
    id: 'an-id',
    url: 'a-url',
    name: 'a-name',
    notes: 'some-notes',
  }];

  const destroyBookmark = jest.fn();

  const component = render(
    <List
      bookmarks={bookmarks}
      destroyBookmark={destroyBookmark}
    />
  );

  /*
   * Yup. Not much of test. Really just want to be sure that attempting
   * to render a List won't rip a hole in our couch.
   *
   */
  it('renders the list', () => {
    expect(component.find('.bookmarkList').length).toEqual(1);
  });
});
