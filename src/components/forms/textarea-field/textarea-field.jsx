import React from 'react';
import PropTypes from 'prop-types';

export default class TextAreaField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fieldValue: this.props.fieldValue,
    };
  }

  containerClass = 'textarea-field';

  handleChange = (e) => {
    this.setState({
      fieldValue: e.target.value,
    });

    this.props.onChange(e);
  }

  render() {
    return (
      <div
        className={this.containerClass}
      >
        <label
          htmlFor={this.props.labelFor}
        >
          {this.props.labelText}
        </label>
        <textarea
          type="text"
          rows={this.props.rows}
          cols={this.props.cols}
          name={this.props.fieldName}
          value={this.state.fieldValue}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

TextAreaField.propTypes = {
  labelFor: PropTypes.string,
  labelText: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
  fieldName: PropTypes.string,
  fieldValue: PropTypes.string,
  onChange: PropTypes.func,
};

TextAreaField.defaultProps = {
  labelFor: '',
  labelText: '',
  rows: 1,
  cols: 1,
  fieldName: '',
  fieldValue: '',
  onChange: () => { console.log('empty/default handleChange called'); },
};

