jest.mock('../inbox-item');

/*
  Meh. Oof meh. Kinda sucks that we have to do it this way.
  We want to ensure that App presents a way to open the full
  list without actually trying to open a new browser window.

  A few things:
    1. jest.spyOn(...) requires a jest.fn to actually spy on.
    2. jest.mock() gets hoisted all the way the top

  Doesn't make much sense to spy on App.openFullList because
  that's an implementation detail of App and there's no
  guarentee that it will actually call into lib/browser-utils.

  So we need to spy on a mocked implementation of openNewWindow
  in lib/browser-utils. Because of #2 (above) we can't keep a
  reference to the jest.fn (that is the mocked implementation)
  here. We need to import lib/browser-utils - which is mocked -
  and then later we can spyOn it.
*/
jest.mock('lib/browser-utils', () => {
  return {
    getCurrentTabUrl: jest.fn((fn) => {
      fn('http://www.google.com');
    }),
    openNewWindow: jest.fn(() => {})
  };
});
import Bu from 'lib/browser-utils';

import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import App from '../app';
import { mount } from 'enzyme';

describe('App - ', () => {
  const middlewares = [];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore([{}]);

  const containerClassSelector = '.inbox-item-new';

  const component = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  const container = component.find(App);

  it('renders the container', () => {
    expect(container.length).toBe(1);
  });

  it('has a url in state', () => {
    expect(container.node.state['url']).toBe('http://www.google.com');
  });

  it('can open a full listing', () => {
    const newWindowSpy = jest.spyOn(Bu, 'openNewWindow');
    const fullListUrl = container.node.fullListUrl;

    // TODO Yup. not too cool relying on a font-awesome class here.
    const button = container.find('i');

    expect(button.length).toBe(1);
    button.first().simulate('click');

    expect(newWindowSpy).toHaveBeenCalledWith(fullListUrl);
  });
});
