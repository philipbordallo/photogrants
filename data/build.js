/* eslint-disable no-console */
import path from 'path';
import finder from './finder';
import createMarkdownOrgList from './createMarkdownOrgList';

const ROOT_PATH = path.resolve(__dirname, '..');
const DATA_PATH = path.resolve(ROOT_PATH, 'data')
const OPP_PATH = path.resolve(DATA_PATH, 'opportunities');
const DIST_PATH = path.resolve(ROOT_PATH, 'dist');
const DIST_DATA_PATH = path.resolve(DIST_PATH, 'data');
const DIST_DATA_FILE = path.resolve(DIST_DATA_PATH, 'all.json');
const DATA_MD_FILE = path.resolve(DATA_PATH, 'README.md');

(async function() {
  const data = await finder.read(OPP_PATH);
  const sortedData = await finder.sort(data);

  await finder.mkdir(DIST_PATH);
  await finder.mkdir(DIST_DATA_PATH);

  const stringifiedData = JSON.stringify(sortedData);
  finder.write(stringifiedData, DIST_DATA_FILE)
    .then(results => {
      console.log(results);
    })
    .catch((error) => {
      console.error('Error!', error);
    });

  const markdownData = await createMarkdownOrgList('Grants', sortedData);
  finder.write(markdownData, DATA_MD_FILE)
    .then(results => {
      console.log(results);
    })
    .catch((error) => {
      console.error('Error!', error);
    });
})();
