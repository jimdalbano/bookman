import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addBookmark } from 'state';

import Button from 'components/button';
import TextField from 'components/forms/text-field';
import TextAreaField from 'components/forms/textarea-field';

import styles from './inbox-item.scss';

class InboxItem extends React.Component {
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

    this.props.addBookmark(data);
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
    const formClass = ClassNames('d-flex', 'flex-column', styles.form);
    const buttonRowClass = ClassNames('d-flex', 'justify-content-end');

    if (this.state.url.length > 0) {
      return (
        <div className="add-inbox-item">
          <div className={formClass} >
            <TextField
              labelText="Name"
              fieldName="name"
              fieldValue={this.state.name}
              onChange={this.handleChangeName}
            />

            <TextAreaField
              labelText="Notes"
              rows={notesInputRows}
              fieldName="notes"
              fieldValue={this.state.notes}
              onChange={this.handleChangeNotes}
            />
          </div>

          <div className={buttonRowClass} >
            <Button
              label="Perfect!"
              onClick={this.save}
            />
          </div>
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
  addBookmark: PropTypes.func, // Injected via redux
};

InboxItem.defaultProps = {
  url: '',
  addBookmark: () => { return false; }, // Injected via redux
};

const connector = (target, actionCreators) => {
  const mdtop = (dispatch) => {
    return {
      addBookmark: data => dispatch(actionCreators.addBookmark(data)),
    };
  };

  return connect(
    null,
    mdtop,
  )(target);
};

export { connector, InboxItem };
export default connector(InboxItem, { addBookmark });
