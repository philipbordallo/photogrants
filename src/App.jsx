import React, { PureComponent } from 'react';

import GrantsPage from 'layout/GrantsPage';

import Classes from 'layout/styles';

class App extends PureComponent {
	render() {
		return (
			<div className={ Classes.root }>
				<div className={ Classes.contentContainer }>
					<GrantsPage />
				</div>
			</div>
		);
	}
}

export default App;
