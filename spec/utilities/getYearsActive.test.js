import test from 'ava';

import getYearsActive from 'utilities/getYearsActive';


test('Single year', (t) => {
  const years = [1994];
  const expected = '1994';

  t.is(getYearsActive(years), expected);
});

test('Multiple years', (t) => {
  const years = [1994, 1996, 1995, 1997];
  const expected = '1994–1997';

  t.is(getYearsActive(years), expected);
});

test('No years', (t) => {
  const years = [];
  const expected = '';

  t.is(getYearsActive(years), expected);
});

test('Years with breaks', (t) => {
  const years = [
    1990,
    1992,
    1994,
    1995,
    1996,
    1997,
    1998,
    2000,
    2001,
    2004,
    2005,
    2007,
    2008,
    2009,
    2010,
    2011,
    2017,
  ];
  const expected = '1990, 1992, 1994–1998, 2000–2001, 2004–2005, 2007–2011, 2017';

  t.is(getYearsActive(years), expected);
});
