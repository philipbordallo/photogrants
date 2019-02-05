import test from 'ava';

import toggleFilters from 'reducers/grants/toggleFilters';

test('Add new filters', t => {
  const state = {
    filters: []
  };
  const action = {
    update: {
      "maxLength": 3,
      "name": "type",
      "value": "grant"
    }
  };

  const actual = toggleFilters(state, action);
  const expected = [
    {
      "name": "type",
      "values": [
        "grant",
      ]
    }
  ];

  t.deepEqual(actual, expected);
});

test('Add more filters', t => {
  const state = {
    filters: [
      {
        "name": "student",
        "values": [
          true
        ]
      },
      {
        "name": "type",
        "values": [
          "grant"
        ]
      }
    ]
  };
  const action = {
    update: {
      "maxLength": 3,
      "name": "type",
      "value": "award"
    }
  };

  const actual = toggleFilters(state, action);
  const expected = [
    {
      "name": "student",
      "values": [
        true
      ]
    },
    {
      "name": "type",
      "values": [
        "grant",
        "award"
      ]
    }
  ];

  t.deepEqual(actual, expected);
});

test('Remove filter', t => {
  const state = {
    filters: [
      {
        "name": "student",
        "values": [
          true
        ]
      },
      {
        "name": "type",
        "values": [
          "grant",
          "award"
        ]
      }
    ]
  };
  const action = {
    update: {
      "maxLength": 2,
      "name": "student",
      "value": true
    }
  };

  const actual = toggleFilters(state, action);
  const expected = [
    {
      "name": "type",
      "values": [
        "grant",
        "award"
      ]
    }
  ];

  t.deepEqual(actual, expected);
});
