/* eslint import/prefer-default-export:0 */
const loadGrantData = () => window.fetch('/data/all.json')
	.then(response => response.json())
	.then(data => data)
	.catch((error) => {
		throw new Error(error);
	});

export {
	loadGrantData
};
