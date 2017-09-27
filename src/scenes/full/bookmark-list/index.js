import { connect } from 'react-redux';
import { destroyBookmark } from 'state';

import List from './list';

const mapStateToProps = (state) => {
  return {
    bookmarks: state,
  };
};


const connector = (target, actionCreators) => {
  const mapDispatchToProps = (dispatch) => {
    return {
      destroyBookmark: id => dispatch(actionCreators.destroyBookmark(id)),
    };
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(List);
};

export { connector, List };
export default connector(List, { destroyBookmark });
