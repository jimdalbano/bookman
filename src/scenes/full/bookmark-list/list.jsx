import React from 'react';
import PropTypes from 'prop-types';

import Bookmark from '../bookmark';

export default function List({ bookmarks, destroyBookmark }) {
  return (
    <div>
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
