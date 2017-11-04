import React from 'react';
import { mount, shallow } from 'enzyme';

import FullListIconLink from '../index';

describe('FullListIconLink - ', () => {
  let link;
  const handleClick = jest.fn();

  describe('Renders - ', () => {
    beforeAll(() => {
      const component = shallow(
        <FullListIconLink
          onClickHandler={handleClick}
        />
      );

      link = component.find('a');
    });

    it('renders the proper input', () => {
      expect(link.length).toEqual(1);
      expect(link.find('i').length).toEqual(1);
    });
  });

  describe('Clicks - ', () => {
    beforeAll(() => {
      const component = mount(
        <FullListIconLink
          onClickHandler={handleClick}
        />
      );

      link = component.find('a');
    });

    it('bubbles click', done => {
      link.simulate('click');
      done();

      expect(handleClick).toBeCalled();
    });
  });
});

