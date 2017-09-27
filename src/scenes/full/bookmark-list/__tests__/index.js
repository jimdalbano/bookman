import React from 'react';
import { shallow } from 'enzyme';

import { connector } from '../index';

describe('BookmarkList - ', () => {
  const dummyState = [ { id: '1' } ];
  const mockDispatch = jest.fn();
  const store = {
    getState: () => dummyState,
    dispatch: mockDispatch,
    subscribe: () => {},
  };

  const action = 'dummy';
  const actionCreators = {
    destroyBookmark: () => action,
  };

  const theItem = () => { return ( <div>empty</div> ) };
  const TheList = connector(theItem, actionCreators);
  const wrapper = shallow(<TheList store={store} />);

  it('creates correct state to prop mappings', () => {
    const bookmarks = wrapper.prop('bookmarks');

    expect(bookmarks).toEqual(dummyState);
  });

  it('creates correct dispatch to prop mappings', () => {
    wrapper.prop('destroyBookmark')();

    expect(mockDispatch).toHaveBeenCalledWith(action);
  });
});
