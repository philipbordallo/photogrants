import React, { PureComponent } from 'react';
import T from 'prop-types';

import Table from 'components/Table';

import { SORT_DIRECTION_PROPTYPES } from 'components/Table/propTypes';
import { COLLECTION_PROPTYPES } from './propTypes';

import GrantsDetailsRow from './GrantsDetailsRow';
import AwardRowCell from './AwardRowCell';
import TitleRowCell from './TitleRowCell';


const TABLE_CONFIG = [
	{
		name: 'Name',
		width: 70,
		align: 'left',
		renderer: TitleRowCell
	},
	{
		name: 'Fee',
		width: 8,
		align: 'left',
		renderer: null
	},
	{
		name: 'Award',
		width: 14,
		align: 'left',
		renderer: AwardRowCell
	},
	{
		name: 'Deadline',
		width: 8,
		align: 'right',
		renderer: null
	}
];

class Grants extends PureComponent {
	static propTypes = {
		collection: COLLECTION_PROPTYPES.isRequired,
		loadData: T.func.isRequired,
		sortTable: T.func.isRequired,
		toggleRow: T.func.isRequired,
		currentSort: T.string.isRequired,
		sortDirection: SORT_DIRECTION_PROPTYPES.isRequired
	};

	constructor(props) {
		super(props);

		this.onTableSort = this.onTableSort.bind(this);
		this.onRowClick = this.onRowClick.bind(this);
	}

	componentWillMount() {
		this.props.loadData();
	}

	onTableSort(event) {
		const name = event.target.textContent.toLowerCase();
		this.props.sortTable(name);
	}

	onRowClick(slug) {
		this.props.toggleRow(slug);
	}

	render() {
		const { currentSort, sortDirection, collection } = this.props;

		return (
			<Table
				collection={ collection }
				config={ TABLE_CONFIG }
				currentSort={ currentSort }
				detailsRenderer={ GrantsDetailsRow }
				onRowClick={ this.onRowClick }
				onTableSort={ this.onTableSort }
				sortDirection={ sortDirection }
			/>
		);
	}
}

export default Grants;
