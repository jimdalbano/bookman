import { connect } from 'react-redux';

import { addBookmark } from 'state';
import InboxItem from './inbox-item';

const mapDispatchToProps = (dispatch) => {
  return {
    addBookmark: data => dispatch(addBookmark(data)),
  };
};

const AddInboxItem = connect(
  null,
  mapDispatchToProps,
)(InboxItem);

export default AddInboxItem;
