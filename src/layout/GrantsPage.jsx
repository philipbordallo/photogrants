import React, { Component } from 'react';

import ApplicationHeader from 'components/ApplicationHeader';
import ConnectedGrants from 'containers/Grants';


class GrantsPage extends Component {
	render() {
		return (
			<section>
				<ApplicationHeader />
				<ConnectedGrants />
			</section>
		);
	}
}

export default GrantsPage;
