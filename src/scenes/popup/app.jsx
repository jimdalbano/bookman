import React from 'react';

import { getCurrentTabUrl, openNewWindow } from 'lib/browser-utils';
import AddInboxItem from 'components/inbox-item/add-inbox-item';

import './app.scss';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      url: '',
    };
  }

  componentDidMount() {
    getCurrentTabUrl((url) => {
      this.setState({ url });
    });
  }

  fullListUrl = 'list.html';

  openFullList = () => {
    openNewWindow(this.fullListUrl);
  }

  render() {
    return (
      <div className="inbox-item-new">
        <button
          className="btn btn-primary btn-xs full-list"
          onClick={this.openFullList}
          tabIndex="0"
        >
          Full List
        </button>
        <AddInboxItem
          url={this.state.url}
        />
      </div>
    );
  }
}
