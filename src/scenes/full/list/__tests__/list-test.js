import React from 'react';
import List from '../list';
import { render, shallow } from 'enzyme';

import Button from 'components/button/button';

describe('List - ', () => {
  const bookmarks = [{
    id: 'an-id',
    url: 'a-url',
    name: 'a-name',
    notes: 'some-notes',
  }];

  const destroyBookmark = jest.fn();

  const component = render(<List bookmarks={bookmarks} destroyBookmark={destroyBookmark} />);

  it('renders the list', () => {
    expect(component.find('.bookmark-list').length).toEqual(1);
  });

  it('renders items', () => {
    expect(component.find('li').length).toEqual(1);
  });
});
