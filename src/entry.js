import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const onDOMReady = () => {
	const applicationElement = document.getElementById('application');

	document.removeEventListener('DOMContentLoaded', onDOMReady)

	if (applicationElement) {
		const component = React.createElement(App)
		ReactDOM.render(component, applicationElement);
	}
}

document.addEventListener('DOMContentLoaded', onDOMReady);
