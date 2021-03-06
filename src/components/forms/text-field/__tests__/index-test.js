import React from 'react';
import TextField from '../index';
import { mount, render } from 'enzyme';

describe('Text Field - ', () => {
  let component;
  let container;
  let label;
  let field;

  const labelText = 'label text';
  const fieldName = 'field-name';
  const fieldValue = 'field-value';
  const handleChange = jest.fn();

  const newValue = 'a new value';
  const containerClass = 'form-group';

  describe('Renders - ', () => {
    beforeAll(() => {
      const component = render(
        <TextField
          labelText={labelText}
          fieldName={fieldName}
          fieldValue={fieldValue}
          onChange={handleChange}
        />
      );

      container = component.find('div');
      label = component.find('label');
      field = component.find('input[type="text"]');
    });

    it('a container', () => {
      expect(container.length).toEqual(1);
      expect(container.hasClass(containerClass)).toBe(true);
    });

    it('a label', () => {
      expect(label.length).toEqual(1);
      expect(label.attr('for')).toEqual(fieldName);
      expect(label.text()).toEqual(labelText);
    });

    it('the proper input', () => {
      expect(field.length).toEqual(1);
      expect(field.attr('name')).toEqual(fieldName);
      expect(field.attr('value')).toEqual(fieldValue);
    });
  });

  describe('Behavior - ', () => {
    beforeAll(() => {
      component = mount(
        <TextField
          labelText={labelText}
          fieldName={fieldName}
          fieldValue={fieldValue}
          onChange={handleChange}
        />
      );

      container = component.find('div');
      label = component.find('label');
      field = component.find('input[type="text"]');
    });

    it('bubbles changes', done => {
      field.first().simulate('change', { target: { value: newValue } });
      done();

      expect(field.getDOMNode().getAttribute('value')).toBe(newValue);
      expect(handleChange).toBeCalled();
    });
  });
});
