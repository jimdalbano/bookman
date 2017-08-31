import React from 'react';

import { connector } from '../inbox-item';
import { shallow } from 'enzyme';

describe('AddInboxItem - ', () => {
  it('creates correct dispatch mappings', () => {
    const mockDispatch = jest.fn();
    const store = {
      getState: () => ({}),
      dispatch: mockDispatch,
      subscribe: () => {},
    };

    const action = 'dummy';
    const actionCreators = {
      addBookmark: () => action,
    };

    const theItem = () => { return ( <div>empty</div> ) };
    const TheAddInboxItem = connector(theItem, actionCreators);
    const wrapper = shallow(<TheAddInboxItem store={store} />);

    wrapper.prop('addBookmark')();

    expect(mockDispatch).toHaveBeenCalledWith(action);
  });
});

