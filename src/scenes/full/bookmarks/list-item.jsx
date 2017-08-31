import React from 'react';
import PropTypes from 'prop-types';

import './list-item.scss';

export default function ListItem(props) {
  const { bookmark, destroyBookmark } = props;

  return (
    <li className="list-item-item">
      <a href={bookmark.url}>{bookmark.url}</a>
       | {bookmark.name}
      <button
        className="btn btn-xs btn-primary"
        onClick={() => { destroyBookmark(bookmark.id); }}
      >
        Remove
      </button>
    </li>
  );
}

ListItem.propTypes = {
  bookmark: PropTypes.object,
  destroyBookmark: PropTypes.func,
};

ListItem.defaultProps = {
  bookmark: {},
  destroyBookmark: () => false,
};
