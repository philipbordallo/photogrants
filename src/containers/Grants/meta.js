/* eslint import/prefer-default-export:0 */
import AwardRowCell from './AwardRowCell';
import TitleRowCell from './TitleRowCell';


export const TABLE_CONFIG = [
	{
		name: 'name',
		title: 'Name',
		width: 70,
		renderer: TitleRowCell,
		sortable: ['desc', 'asc']
	},
	{
		name: 'fee',
		title: 'Fee',
		width: 8,
		renderer: null,
		sortable: ['desc', 'asc']
	},
	{
		name: 'award',
		title: 'Award',
		width: 14,
		renderer: AwardRowCell,
		sortable: ['desc', 'asc']
	},
	{
		name: 'deadline',
		title: 'Deadline',
		width: 8,
		renderer: null,
		sortable: ['desc']
	}
];
