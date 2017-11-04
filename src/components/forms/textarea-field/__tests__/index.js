import React from 'react';
import { mount, render } from 'enzyme';

import TextAreaField from '../index';

describe('Textarea Field - ', () => {
  let container;
  let label;
  let field;

  const labelText = 'label text';
  const fieldName = 'field-name';
  const fieldValue = 'field-value';
  const handleChange = jest.fn();

  const newValue = 'a new value';
  const containerClass = 'textarea-field';

  describe('Renders - ', () => {
    beforeAll(() => {
      const component = render(
        <TextAreaField
          labelText={labelText}
          fieldName={fieldName}
          fieldValue={fieldValue}
          onChange={handleChange}
        />
      );

      container = component.find('div');
      label = component.find('label');
      field = component.find('textarea');
    });

    it('renders a container', () => {
      expect(container.length).toEqual(1);
      expect(container.hasClass(containerClass)).toBe(true);
    });

    it('renders a label', () => {
      expect(label.length).toEqual(1);
      expect(label.attr('for')).toEqual(fieldName);
      expect(label.text()).toEqual(labelText);
    });

    it('renders the proper input', () => {
      expect(field.length).toEqual(1);
      expect(field.attr('name')).toEqual(fieldName);
      expect(field.text()).toEqual(fieldValue);
    });
  });

  describe('Behavior - ', () => {
    beforeAll(() => {
      const component = mount(
        <TextAreaField
          labelText={labelText}
          fieldName={fieldName}
          fieldValue={fieldValue}
          onChange={handleChange}
        />
      );

      container = component.find('div');
      label = component.find('label');
      field = component.find('textarea');
    });

    it('bubbles changes', done => {
      field.first().simulate('change', { target: { value: newValue } });
      done();

      expect(field.text()).toBe(newValue);
      expect(handleChange).toBeCalled();
    });
  });
});

