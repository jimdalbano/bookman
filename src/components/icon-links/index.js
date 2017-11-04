import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { ICON_NEW_WINDOW } from 'app-constants';

import styles from './index.scss';

function FullListIconLink(props) {
  const className = props.className;
  const classList = ClassNames(styles.fullListIconLink, className);

  return (
    <a
      className={classList}
      href=";;"
      onClick={props.onClickHandler}
      tabIndex="0"
    >
      <i className={ICON_NEW_WINDOW} />
    </a>
  );
}

FullListIconLink.propTypes = {
  onClickHandler: PropTypes.func,
  className: PropTypes.string,
};

FullListIconLink.defaultProps = {
  onClickHandler: () => { return false; },
  className: '',
};

export default FullListIconLink;
