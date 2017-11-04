/* eslint import/prefer-default-export:0 */
const FILTERS_LIST = [
	{
		title: 'Type',
		meta: 'type',
		type: 'select',
		filters: [
			{
				name: 'Grants',
				value: 'grant'
			},
			{
				name: 'Awards',
				value: 'award'
			},
			{
				name: 'Residencies',
				value: 'residency'
			}
		]
	},
	{
		title: 'Student',
		meta: 'student',
		type: 'select',
		filters: [
			{
				name: 'Active',
				value: true
			},
			{
				name: 'Not Active',
				value: false
			}
		]
	},
	{
		title: 'Gender',
		meta: 'gender',
		type: 'select',
		filters: [
			{
				name: 'Men',
				value: 'men'
			},
			{
				name: 'Women',
				value: 'women'
			},
			{
				name: 'Nonbinary',
				value: 'nonbinary'
			}
		]
	}
];

export {
	FILTERS_LIST
};
