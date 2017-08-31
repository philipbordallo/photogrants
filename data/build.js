/* eslint-disable no-console */
import path from 'path';
import finder from './finder';

const ROOT_PATH = path.resolve(__dirname, '..');
const DATA_PATH = path.resolve(ROOT_PATH, 'data')
const OPP_PATH = path.resolve(DATA_PATH, 'opportunities');
const DIST_PATH = path.resolve(ROOT_PATH, 'dist');
const DIST_DATA_PATH = path.resolve(DIST_PATH, 'data');

finder.read(OPP_PATH)
	.then(data => finder.sort(data))
	.then(data => finder.mkdir(DIST_PATH, data))
	.then(data => finder.mkdir(DIST_DATA_PATH, data))
	.then(data => finder.write(data, path.resolve(DIST_DATA_PATH, 'all.json')))
	.then((results) => {
		console.log(results);
	})
	.catch((error) => {
		console.error('Error!', error);
	});
