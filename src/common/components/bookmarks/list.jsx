import React from 'react';
import PropTypes from 'prop-types';

import './list.scss';

function item(bookmark, destroyBookmark) {
  return (
    <li key={bookmark.id}>
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

export default function List({ bookmarks, destroyBookmark }) {
  return (
    <ul className="bookmark-list">
      { bookmarks.map(bookmark => item(bookmark, destroyBookmark)) }
    </ul>
  );
}


List.propTypes = {
  bookmarks: PropTypes.arrayOf(Object).isRequired,
  destroyBookmark: PropTypes.func,
};

List.defaultPropts = {
  bookmarks: [],
  destroyBookmark: () => false,
};
