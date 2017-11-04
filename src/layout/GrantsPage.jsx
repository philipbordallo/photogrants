import React, { Component } from 'react';

import ApplicationHeader from 'components/ApplicationHeader';
import ConnectedFilters from 'containers/Filters';
import ConnectedGrants from 'containers/Grants';


class GrantsPage extends Component {
	render() {
		return (
			<section>
				<ApplicationHeader />
				<ConnectedFilters />
				<ConnectedGrants />
			</section>
		);
	}
}

export default GrantsPage;
