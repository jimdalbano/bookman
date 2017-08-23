import { connect } from 'react-redux';

import InboxItem from './inbox-item';

const AddInboxItem = connect(
  null, // nothing in the store we want to merge with props
  null, // since url comes at us async, we don't have it with props in
        // the component. we'll handle it ourselves - null here means
        // we get dispatch injected into component props.
)(InboxItem);

export default AddInboxItem;
