import test from 'ava';
import path from 'path';

import schema from 'data/schema';
import finder from 'data/finder';

import { Validator } from 'jsonschema';

const ROOT_PATH = path.resolve(__dirname, '..', '..');
const OPP_PATH = path.resolve(ROOT_PATH, 'data', 'opportunities');

const jsonSchema = new Validator();

finder
  .read(OPP_PATH)
  .then((data) => {
    data.forEach((item) => {
      const name = `${item.organization.nickname} ${item.name}`.trim();

      test(name, (t) => {
        const schemaCheck = jsonSchema.validate(item, schema);
        const message = schemaCheck.errors
          .map((error, index) => `${index + 1}. ${error.stack}`)
          .join('\n');

        t.true(schemaCheck.valid, message);
      });
    });
  })
  .catch(console.error); // eslint-disable-line no-console
