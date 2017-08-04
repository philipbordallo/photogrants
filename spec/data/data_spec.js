import test from 'ava';
import { Validator } from 'jsonschema';

import schema from './schema';
import data from '../../data/all.json';


const jsonSchema = new Validator();

data.forEach(item => {
	test(item.name, t => {
		const schemaCheck = jsonSchema.validate(item, schema);
		const message = schemaCheck.errors.map((error, index) => `${index + 1}. ${error.stack}`).join('\n');

		t.true(schemaCheck.valid, message);
	})
});
