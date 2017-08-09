/* eslint import/prefer-default-export:0 */

export const loadGrantData = () => window.fetch('/data/all.json')
	.then(response => response.json())
	.then(data => data)
	.catch((error) => {
		throw new Error(error);
	});
