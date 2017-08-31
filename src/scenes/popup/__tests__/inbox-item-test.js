import React from 'react';
import { InboxItem } from '../inbox-item';
import { mount } from 'enzyme';

describe('InboxItem - ', () => {
  const containerSelector = '.inbox-item'
  let url = 'some-url';

  describe('Renders with known url - ', () => {
    let component;

    beforeAll(() =>{
      component = mount(<InboxItem url={url} />);
    });

    it('renders the container', () => {
      expect(component.find(containerSelector).length).toBe(1);
    });

    it('knows the url', () => {
      expect(component.node.state['url']).toBe(url);
    });

    it('reacts to changed url', () => {
      expect(component.node.state['url']).toBe(url);

      component.setProps({url: 'other-url'});
      expect(component.node.state['url']).toBe('other-url');
    });

    it('collects form changes', done => {
      const urlField = component.find("[name='url']");
      const nameField = component.find("[name='name']");
      const notesField = component.find("[name='notes']");

      const newUrl = 'new-url';
      const newName = 'new-name';
      const newNotes = 'new-notes';

      urlField.first().simulate('change', { target: { value: newUrl } });
      nameField.first().simulate('change', { target: { value: newName } });
      notesField.first().simulate('change', { target: { value: newNotes } });
      done();

      const state = component.node.state;
      expect(state['url']).toBe(newUrl);
      expect(state['name']).toBe(newName);
      expect(state['notes']).toBe(newNotes);
    });
  });

  describe('Renders with no url - ', () => {
    it('is loading', () => {
      const url = '';
      const component = mount(<InboxItem url={url} />);

      expect(component.find('.inbox-item-loading').length).toBe(1);
    });
  });

  it('Saves - adds a bookmark', () => {
    let action;
    const addBookmark = jest.fn((act) => {
      action = act;
    });

    const component = mount(<InboxItem url={url} addBookmark={addBookmark}/>);

    component.find('Button').simulate('click');

    expect(addBookmark).toHaveBeenCalled();
  });

});
