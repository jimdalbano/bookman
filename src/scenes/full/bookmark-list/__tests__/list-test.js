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

  it('renders the list', () => {
    expect(component.find('.bookmark-list').length).toEqual(1);
  });

  it('renders items', () => {
    expect(component.find('.bookmark').length).toEqual(1);
  });
});
