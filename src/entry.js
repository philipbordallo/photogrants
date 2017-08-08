import React from 'react';
import ReactDOM from 'react-dom';

import 'assets/base/styles';

import ProvidedApp from './ProvidedApp';


const onDOMReady = () => {
	const applicationElement = document.getElementById('application');

	document.removeEventListener('DOMContentLoaded', onDOMReady);

	if (applicationElement) {
		const component = React.createElement(ProvidedApp);
		ReactDOM.render(component, applicationElement);
	}
};

document.addEventListener('DOMContentLoaded', onDOMReady);
