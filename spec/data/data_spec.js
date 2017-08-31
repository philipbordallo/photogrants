import test from 'ava';
import path from 'path'

import { Validator } from 'jsonschema';
import schema from './schema';

import finder from '../../data/finder';


const ROOT_PATH = path.resolve(__dirname, '..', '..');
const OPP_PATH = path.resolve(ROOT_PATH, 'data', 'opportunities');

const jsonSchema = new Validator();

finder.read(OPP_PATH)
	.then(data => {
		data.forEach(item => {
			test(item.name, t => {
				const schemaCheck = jsonSchema.validate(item, schema);
				const message = schemaCheck.errors.map((error, index) => `${index + 1}. ${error.stack}`).join('\n');

				t.true(schemaCheck.valid, message);
			})
		});
	})
	.catch(error => {
		console.error(error)
	});
