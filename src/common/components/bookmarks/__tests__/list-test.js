import React from 'react';
import List from '../list';
import { shallow } from 'enzyme';

import Button from 'common/components/button/button';

describe('List - ', () => {
  const bookmarks = [{
    id: 'an-id',
    url: 'a-url',
    name: 'a-name',
    notes: 'some-notes',
  }];

  const destroyBookmark = jest.fn();

  const component = shallow(<List bookmarks={bookmarks} destroyBookmark={destroyBookmark} />);
  console.log(component.html());

  it('renders the list', () => {
    expect(component.find('.bookmark-list').length).toEqual(1);
  });

  it('renders items', () => {
    expect(component.find('li').length).toEqual(1);
  });
});
