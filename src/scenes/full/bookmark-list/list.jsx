import React from 'react';
import PropTypes from 'prop-types';

import Bookmark from '../bookmark';

export default function List({ bookmarks, destroyBookmark }) {
  // TODO Ick! .bookmarkList only exists for testing. Nasty.
  return (
    <div className="bookmarkList">
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
