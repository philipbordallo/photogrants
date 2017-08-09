import React, { PureComponent } from 'react';
import T from 'prop-types';

import { SORT_DIRECTION_PROPTYPES } from 'components/Table/propTypes';


import Table from 'components/Table';


const HEADER_META = [
	{
		name: 'Name',
		width: 70,
		align: 'left'
	},
	{
		name: 'Fee',
		width: 8,
		align: 'left'
	},
	{
		name: 'Award',
		width: 14,
		align: 'left'
	},
	{
		name: 'Deadline',
		width: 8,
		align: 'right'
	}
];

class Grants extends PureComponent {
	static propTypes = {
		loadData: T.func.isRequired,
		sortTable: T.func.isRequired,
		currentSort: T.string.isRequired,
		sortDirection: SORT_DIRECTION_PROPTYPES.isRequired
	};

	constructor(props) {
		super(props);

		this.onTableSort = this.onTableSort.bind(this);
	}

	componentWillMount() {
		this.props.loadData();
	}

	onTableSort(event) {
		const name = event.target.textContent.toLowerCase();
		this.props.sortTable(name);
	}

	render() {
		const { currentSort, sortDirection } = this.props;
		return (
			<Table
				headerData={ HEADER_META }
				onTableSort={ this.onTableSort }
				currentSort={ currentSort }
				sortDirection={ sortDirection }
			/>
		);
	}
}

export default Grants;
