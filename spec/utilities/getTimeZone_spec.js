import test from 'ava';

import getTimeZone, { US_TIME_ZONES } from 'utilities/getTimeZone';

test('No time zone', t => {

  t.deepEqual(getTimeZone('January 1 2017'), null);
});

test('Greenwich Mean Time', t => {
  const greenwichTime = {
    offset: '+0000',
    abbr: 'GMT',
    name: 'Greenwich',
    type: 'Mean'
  };

  t.deepEqual(getTimeZone('January 1 2017 23:59 +0000'), greenwichTime);
});

US_TIME_ZONES.forEach((zone) => {
  const { name, standard, daylight, abbr } = zone;
  const standardTime = {
    ...standard,
    name,
    type: 'Standard'
  };
  const daylightTime = {
    ...daylight,
    name,
    type: 'Daylight'
  };

  test(`${name} Time Zone`, t => {
    let year = 2017;
    let beginDate = 12;
    let endDate = 5
    t.deepEqual(getTimeZone(`February 1 ${year} 23:59 ${standard.offset}`), standardTime);
    t.deepEqual(getTimeZone(`March ${beginDate - 1} ${year} 23:59 ${standard.offset}`), standardTime);
    t.deepEqual(getTimeZone(`March ${beginDate} ${year} 01:59 ${standard.offset}`), standardTime);
    t.deepEqual(getTimeZone(`March ${beginDate} ${year} 03:00 ${daylight.offset}`), daylightTime);
    t.deepEqual(getTimeZone(`July 14 ${year} 23:59 ${daylight.offset}`), daylightTime);
    t.deepEqual(getTimeZone(`October 14 ${year} 23:59 ${daylight.offset}`), daylightTime);
    t.deepEqual(getTimeZone(`November ${endDate - 1} ${year} 23:59 ${daylight.offset}`), daylightTime);
    t.deepEqual(getTimeZone(`November ${endDate} ${year} 01:00 ${daylight.offset}`), daylightTime);
    t.deepEqual(getTimeZone(`November ${endDate} ${year} 03:00 ${standard.offset}`), standardTime);
    t.deepEqual(getTimeZone(`December 31 ${year} 23:59 ${standard.offset}`), standardTime);

    year = 2018;
    beginDate = 11;
    endDate = 4;
    t.deepEqual(getTimeZone(`March ${beginDate} ${year} 01:59 ${standard.offset}`), standardTime);
    t.deepEqual(getTimeZone(`March ${beginDate} ${year} 03:00 ${daylight.offset}`), daylightTime);
    t.deepEqual(getTimeZone(`November ${endDate} ${year} 01:00 ${daylight.offset}`), daylightTime);
    t.deepEqual(getTimeZone(`November ${endDate} ${year} 03:00 ${standard.offset}`), standardTime);

    year = 2019;
    beginDate = 10;
    endDate = 3;
    t.deepEqual(getTimeZone(`March ${beginDate} ${year} 01:59 ${standard.offset}`), standardTime);
    t.deepEqual(getTimeZone(`March ${beginDate} ${year} 03:00 ${daylight.offset}`), daylightTime);
    t.deepEqual(getTimeZone(`November ${endDate} ${year} 01:00 ${daylight.offset}`), daylightTime);
    t.deepEqual(getTimeZone(`November ${endDate} ${year} 03:00 ${standard.offset}`), standardTime);

    year = 2020;
    beginDate = 8;
    endDate = 1;
    t.deepEqual(getTimeZone(`March ${beginDate} ${year} 01:59 ${standard.offset}`), standardTime);
    t.deepEqual(getTimeZone(`March ${beginDate} ${year} 03:00 ${daylight.offset}`), daylightTime);
    t.deepEqual(getTimeZone(`November ${endDate} ${year} 01:00 ${daylight.offset}`), daylightTime);
    t.deepEqual(getTimeZone(`November ${endDate} ${year} 03:00 ${standard.offset}`), standardTime);

    year = 2021;
    beginDate = 14;
    endDate = 7;
    t.deepEqual(getTimeZone(`March ${beginDate} ${year} 01:59 ${standard.offset}`), standardTime);
    t.deepEqual(getTimeZone(`March ${beginDate} ${year} 03:00 ${daylight.offset}`), daylightTime);
    t.deepEqual(getTimeZone(`November ${endDate} ${year} 01:00 ${daylight.offset}`), daylightTime);
    t.deepEqual(getTimeZone(`November ${endDate} ${year} 03:00 ${standard.offset}`), standardTime);

    year = 2022;
    beginDate = 13;
    endDate = 6;
    t.deepEqual(getTimeZone(`March ${beginDate} ${year} 01:59 ${standard.offset}`), standardTime);
    t.deepEqual(getTimeZone(`March ${beginDate} ${year} 03:00 ${daylight.offset}`), daylightTime);
    t.deepEqual(getTimeZone(`November ${endDate} ${year} 01:00 ${daylight.offset}`), daylightTime);
    t.deepEqual(getTimeZone(`November ${endDate} ${year} 03:00 ${standard.offset}`), standardTime);
  });
});
