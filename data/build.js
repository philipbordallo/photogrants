/* eslint-disable no-console */
import path from 'path';
import { DIST_PATH, DATA_PATH } from '../configs/helpers';
import finder from './finder';
import createMarkdownOrgList from './createMarkdownOrgList';

import schema from './schema';


const OPP_PATH = path.resolve(DATA_PATH, 'opportunities');
const DIST_DATA_PATH = path.resolve(DIST_PATH, 'data');

async function build() {
  const data = await finder.read(OPP_PATH);
  const sortedData = await finder.sort(data);

  await finder.mkdir(DIST_PATH);
  await finder.mkdir(DIST_DATA_PATH);

  const stringifiedData = JSON.stringify(sortedData);
  finder.write(stringifiedData, path.resolve(DIST_DATA_PATH, 'all.json'))
    .then(console.log)
    .catch(console.error);

  const markdownData = await createMarkdownOrgList('Grants', sortedData);
  finder.write(markdownData, path.resolve(DATA_PATH, 'README.md'))
    .then(console.log)
    .catch(console.error);

  const stringifiedSchema = JSON.stringify(schema);
  finder.write(stringifiedSchema, path.resolve(DIST_DATA_PATH, 'schema.json'))
    .then(console.log)
    .catch(console.error);
}

build().catch(console.error);
