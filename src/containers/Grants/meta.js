/* eslint import/prefer-default-export:0 */
import AwardRowCell from './AwardRowCell';
import TitleRowCell from './TitleRowCell';


export const TABLE_CONFIG = [
	{
		name: 'Name',
		width: 70,
		renderer: TitleRowCell,
		sortable: ['desc', 'asc']
	},
	{
		name: 'Fee',
		width: 8,
		renderer: null,
		sortable: ['desc', 'asc']
	},
	{
		name: 'Award',
		width: 14,
		renderer: AwardRowCell,
		sortable: ['desc', 'asc']
	},
	{
		name: 'Deadline',
		width: 8,
		renderer: null,
		sortable: ['desc']
	}
];
