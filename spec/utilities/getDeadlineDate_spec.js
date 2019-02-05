import test from 'ava';
import moment from 'moment';

import getDeadlineDate from 'utilities/getDeadlineDate';


test('Date with time', t => {
  const date = 'July 14 2017 23:59 -0400';
  const expect = 'July 14 11:59 pm';

  t.is(getDeadlineDate(date), expect);
});

test('Date without time', t => {
  const date = 'December 14 2017';
  const expect = 'December 14';

  t.is(getDeadlineDate(date), expect);
});

test('Localized date with time', t => {
  const date = moment().format('MMMM D YYYY HH:mm Z');
  const expect = moment().format('MMMM D h:mm a');

  t.is(getDeadlineDate(date, true), expect);
});

test('Localized date without time', t => {
  const date = moment().format('MMMM D YYYY');
  const expect = moment().format('MMMM D');

  t.is(getDeadlineDate(date, true), expect);
});
