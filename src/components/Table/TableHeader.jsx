import React, { PureComponent } from 'react';
import T from 'prop-types';

import { CONFIG_PROPTYPES, SORT_DIRECTION_PROPTYPES } from './propTypes';

import TableHeaderCell from './TableHeaderCell';

import Classes from './styles';


class TableHeader extends PureComponent {
	static propTypes = {
		config: CONFIG_PROPTYPES.isRequired,
		onTableSort: T.func.isRequired,
		currentSort: T.string.isRequired,
		sortDirection: SORT_DIRECTION_PROPTYPES.isRequired
	};

	constructor(props) {
		super(props);

		this.renderCell = this.renderCell.bind(this);
	}

	renderCell(data, index) {
		const { onTableSort, currentSort, sortDirection } = this.props;
		return (
			<TableHeaderCell
				key={ index }
				{ ...data }
				onTableSort={ onTableSort }
				currentSort={ currentSort }
				sortDirection={ sortDirection }
			/>
		);
	}

	render() {
		const { config } = this.props;
		return (
			<thead className={ Classes.header }>
				<tr>
					{ config.map(this.renderCell) }
				</tr>
			</thead>
		);
	}
}

export default TableHeader;
