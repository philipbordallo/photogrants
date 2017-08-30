import React from 'react';
import ReactDOM from 'react-dom';

import 'polyfills';

import 'assets/base/styles';

import ProvidedApp from './ProvidedApp';

// Remove stylesheets for development
const stylesheets = document.querySelectorAll('link[rel=stylesheet]');

stylesheets.forEach((stylesheet) => {
	stylesheet.parentNode.removeChild(stylesheet);
});

const onDOMReady = () => {
	const applicationElement = document.getElementById('application');

	document.removeEventListener('DOMContentLoaded', onDOMReady);

	if (applicationElement) {
		const component = React.createElement(ProvidedApp);
		ReactDOM.render(component, applicationElement);
	}
};

document.addEventListener('DOMContentLoaded', onDOMReady);
