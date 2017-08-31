import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import { mount, shallow } from 'enzyme';

import BookmarkList from '../index';

describe('BookmarkList - ', () => {
  const middlewares = [];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore([{
    id: 'an-id',
  }]);

  const component = mount(
    <Provider store={store}>
      <BookmarkList />
    </Provider>
  );

  it('destroys a bookmark', done => {
    const expectedAction = {
      type: 'DESTROY_BOOKMARK',
      id: 'an-id',
    };

    component.find('button').first().simulate('click');
    done();
    expect(store.getActions()).toEqual([expectedAction]);
  });
});
