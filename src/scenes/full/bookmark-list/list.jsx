import React from 'react';
import PropTypes from 'prop-types';

import Bookmark from '../bookmark';

import './list.scss';

export default function List({ bookmarks, destroyBookmark }) {
  return (
    <div className="bookmark-list">
      { bookmarks.map((bookmark) => {
        return (<Bookmark
          key={bookmark.id}
          bookmark={bookmark}
          destroyBookmark={destroyBookmark}
        />);
      })}
    </div>
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
