import React, { PureComponent } from 'react';
import T from 'prop-types';

import Table from 'components/Table';

import { SORT_DIRECTION_PROPTYPES } from 'components/Table/propTypes';
import { DATA_PROPTYPES } from './propTypes';

import AwardRowCell from './AwardRowCell';


const TABLE_CONFIG = [
	{
		name: 'Name',
		width: 70,
		align: 'left',
		renderer: null
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
		collection: DATA_PROPTYPES.isRequired,
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
		const { currentSort, sortDirection, collection } = this.props;

		return (
			<Table
				collection={ collection }
				config={ TABLE_CONFIG }
				onTableSort={ this.onTableSort }
				currentSort={ currentSort }
				sortDirection={ sortDirection }
			/>
		);
	}
}

export default Grants;
