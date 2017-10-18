import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/button';

import styles from './bookmark.scss';

export default function Bookmark(props) {
  const { bookmark, destroyBookmark } = props;

  return (
    <div className={styles.bookmark}>
      <a
        className={styles.name}
        target="_blank"
        href={bookmark.url}
      >
        {bookmark.name}
      </a>
      <a
        className={styles.url}
        target="_blank"
        href={bookmark.url}
      >
        {bookmark.url}
      </a>
      <p
        className={styles.notes}
      >
        {bookmark.notes}
      </p>
      <Button
        label="Remove"
        classes={'remove btn btn-xs btn-primary'.split(' ')}
        onClick={() => { destroyBookmark(bookmark.id); }}
      />
    </div>
  );
}

Bookmark.propTypes = {
  bookmark: PropTypes.object,
  destroyBookmark: PropTypes.func,
};

Bookmark.defaultProps = {
  bookmark: {},
  destroyBookmark: () => false,
};
