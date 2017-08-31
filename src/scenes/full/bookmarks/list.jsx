import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './list-item';

import './list.scss';

export default function List({ bookmarks, destroyBookmark }) {
  return (
    <ul className="bookmark-list">
      { bookmarks.map((bookmark) => {
        return (<ListItem
          key={bookmark.id}
          bookmark={bookmark}
          destroyBookmark={destroyBookmark}
        />);
      })}
    </ul>
  );
}


List.propTypes = {
  bookmarks: PropTypes.arrayOf(Object),
  destroyBookmark: PropTypes.func,
};

List.defaultProps = {
  bookmarks: [],
  destroyBookmark: () => false,
};
