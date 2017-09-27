import React from 'react';
import PropTypes from 'prop-types';

export default class TextField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fieldValue: this.props.fieldValue,
    };
  }

  containerClass = 'text-field';
  inputType = 'text';


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
        <input
          type={this.inputType}
          name={this.props.fieldName}
          value={this.state.fieldValue}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

TextField.propTypes = {
  labelFor: PropTypes.string,
  labelText: PropTypes.string,
  fieldName: PropTypes.string,
  fieldValue: PropTypes.string,
  onChange: PropTypes.func,
};

TextField.defaultProps = {
  labelFor: '',
  labelText: '',
  fieldName: '',
  fieldValue: '',
  onChange: () => { console.log('empty/default handleChange called'); },
};
