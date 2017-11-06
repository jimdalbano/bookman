import ClassNames from 'classnames';
import React from 'react';

import { getCurrentTabUrl, openNewWindow } from 'lib/browser-utils';
import FullListIconLink from 'components/icon-links';

import AddInboxItem from './inbox-item';
import styles from './app.scss';

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
    const linkRowClass = ClassNames('d-flex', 'justify-content-end', styles.linkRow);

    return (
      <div>
        <div className={linkRowClass}>
          <FullListIconLink
            onClickHandler={this.openFullList}
          />
        </div>
        <div className={styles.inboxItemNew}>
          <AddInboxItem
            url={this.state.url}
          />
        </div>
      </div>
    );
  }
}
