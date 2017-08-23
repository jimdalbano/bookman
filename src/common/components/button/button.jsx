import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor(props) {
    super(props);

    const buttonType = this.props.label.toLowerCase();
    this.state = { buttonType };
  }

  handleOnClick = () => {
    this.props.onClick();
  }

  render() {
    const classes = ['btn', 'btn-primary', ...this.props.classes].join(' ');

    return (
      <button
        type="button"
        className={classes}
        onClick={this.handleOnClick}
      >
        {this.props.label}
      </button>
    );
  }
}

Button.propTypes = {
  classes: PropTypes.arrayOf(String),
  label: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  classes: [],
  label: '<button>',
  onClick: () => { /* no-op */ return false; },
};
