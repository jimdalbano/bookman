import React from 'react';
import Button from '../button';
import { mount, shallow } from 'enzyme';

describe('Button - ', () => {
  let button;

  const buttonType = 'save';
  const labelText = 'label text';
  const buttonClass  = 'btn';
  const buttonClass1  = 'btn-primary';
  const buttonClass2 = 'class-1';
  const buttonClass3 = 'class-2';
  const handleClick = jest.fn();


  describe('Renders - ', () => {
    beforeAll(() => {
      const buttonClasses = [ buttonClass2, buttonClass3 ];
      const component = shallow(
        <Button
          buttonType={buttonType}
          label={labelText}
          classes={buttonClasses}
          onClick={handleClick}
        />
      );

      button = component.find('button');
    });

    it('renders the proper input', () => {
      expect(button.length).toEqual(1);
    });

    it('has the right class names', () => {
      expect(button.hasClass(buttonClass)).toEqual(true);
      expect(button.hasClass(buttonClass1)).toEqual(true);
      expect(button.hasClass(buttonClass2)).toEqual(true);
      expect(button.hasClass(buttonClass3)).toEqual(true);

      const classes = button.prop('className').split(' ');
      expect(classes.length).toEqual(4);
    });

    it('populates the value attr', () => {
      expect(button.text()).toEqual(labelText);
    });
  });

  describe('Renders - ', () => {
    beforeAll(() => {
      const buttonClasses = [ buttonClass2, buttonClass3 ];
      const component = mount(
        <Button
          buttonType={buttonType}
          label={labelText}
          classes={buttonClasses}
          onClick={handleClick}
        />
      );

      button = component.find('button');
    });

    it('bubbles click', done => {
      button.simulate('click');
      done();

      expect(handleClick).toBeCalled();
    });
  });
});
