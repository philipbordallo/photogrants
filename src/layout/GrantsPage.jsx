import React, { Component } from 'react';

import ApplicationHeader from 'components/ApplicationHeader';
import ConnectedFilters from 'containers/Filters';
import ConnectedGrants from 'containers/Grants';

import Classes from './styles';

class GrantsPage extends Component {
  render() {
    return (
      <main className={ Classes.content }>
        <ApplicationHeader />
        <ConnectedFilters />
        <ConnectedGrants />
      </main>
    );
  }
}

export default GrantsPage;
