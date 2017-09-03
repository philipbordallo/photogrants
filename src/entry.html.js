import template from './template.html';

const html = template({
	title: 'photogrants',
	description: 'A collection of grants for photographers',
	analytics: process.env.NODE_ENV === 'production',
	stylesheet: process.env.NODE_ENV === 'production'
});

export default html;
