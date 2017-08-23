import React from 'react';
import PropTypes from 'prop-types';
import { addBookmark } from 'store/bookmarks';

import Button from '../button/button';
import TextField from '../forms/text-field/text-field';
import TextAreaField from '../forms/textarea-field/textarea-field';


export default class InboxItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: props.url,
      name: '',
      notes: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.url !== nextProps.url) {
      this.setState({
        url: nextProps.url,
      });
    }
  }

  save = () => {
    const data = {
      url: this.state.url,
      name: this.state.name,
      notes: this.state.notes,
    };

    const act = addBookmark(data);

    this.props.dispatch(act);
  }

  handleChangeUrl = (e) => {
    this.setState({
      url: e.target.value,
    });
  }

  handleChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  }

  handleChangeNotes = (e) => {
    this.setState({
      notes: e.target.value,
    });
  }

  render() {
    const notesInputRows = 5;

    if (this.state.url.length > 0) {
      return (
        <div
          className="inbox-item"
        >
          <TextField
            labelFor="url"
            labelText="Url"
            fieldName="url"
            fieldValue={this.state.url}
            onChange={this.handleChangeUrl}
          />
          <TextField
            labelFor="name"
            labelText="Name"
            fieldName="name"
            fieldValue={this.state.name}
            onChange={this.handleChangeName}
          />

          <TextAreaField
            labelFor="notes"
            labelText="Notes"
            rows={notesInputRows}
            fieldName="notes"
            fieldValue={this.state.notes}
            onChange={this.handleChangeNotes}
          />

          <Button
            label="Save"
            onClick={this.save}
          />
        </div>
      );
    }

    return (
      <div className="inbox-item-loading"> .... Loading ... </div>
    );
  }
}

InboxItem.propTypes = {
  url: PropTypes.string,
  dispatch: PropTypes.func,      // injected by react-redux.connect()
};

InboxItem.defaultProps = {
  url: '',
  dispatch: () => { console.log('empty/default dispatch called'); },
};

