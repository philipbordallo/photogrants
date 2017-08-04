import React, { PureComponent } from 'react';

import Classes from './styles';

class ApplicationHeader extends PureComponent {
	render() {
		return (
			<header className={ Classes.root }>
				<h1 className={ Classes.title }>photogrants</h1>
			</header>
		);
	}
}

export default ApplicationHeader;
