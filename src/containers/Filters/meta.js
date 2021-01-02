/* eslint import/prefer-default-export:0 */
const FILTERS_LIST = [
  {
    title: 'Student',
    meta: 'student',
    type: 'select',
    filters: [
      {
        name: 'Active',
        value: true,
      },
      {
        name: 'Not Active',
        value: false,
      },
    ],
  },
  {
    title: 'Gender',
    meta: 'gender',
    type: 'select',
    filters: [
      {
        name: 'Men',
        value: 'men',
      },
      {
        name: 'Women',
        value: 'women',
      },
      {
        name: 'Nonbinary',
        value: 'nonbinary',
      },
    ],
  },
  {
    title: 'Age',
    meta: 'age',
    type: 'input',
    filters: [
      {
        name: 'Age',
        value: null,
      },
    ],
  },
  {
    title: 'Type',
    meta: 'type',
    type: 'select',
    filters: [
      {
        name: 'Grants',
        value: 'grant',
      },
      {
        name: 'Awards',
        value: 'award',
      },
      {
        name: 'Residencies',
        value: 'residency',
      },
    ],
  },
  {
    title: 'Awards',
    meta: 'awards',
    type: 'select',
    filters: [
      {
        name: 'Money',
        value: 'amount',
      },
      {
        name: 'Residency',
        value: 'residency',
      },
      {
        name: 'Mentorship',
        value: 'mentorship',
      },
      {
        name: 'Show',
        value: 'show',
      },
    ],
  },
];

export {
  FILTERS_LIST,
};
