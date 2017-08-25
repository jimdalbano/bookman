import { connect } from 'react-redux';
import { destroyBookmark } from 'state';

import List from './list';

const mapStateToProps = (state) => {
  return {
    bookmarks: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    destroyBookmark: id => dispatch(destroyBookmark(id)),
  };
};

const BookmarkList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);

export default BookmarkList;
