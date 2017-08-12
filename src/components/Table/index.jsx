import React, { PureComponent } from 'react';
import T from 'prop-types';

import { DATA_PROPTYPES } from 'containers/Grants/propTypes';
import {
	CONFIG_PROPTYPES,
	SORT_DIRECTION_PROPTYPES
} from './propTypes';

import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableDetailsRow from './TableDetailsRow';

import Classes from './styles';


class Table extends PureComponent {
	static propTypes = {
		config: CONFIG_PROPTYPES.isRequired,
		collection: DATA_PROPTYPES.isRequired,
		onTableSort: T.func.isRequired,
		onRowClick: T.func.isRequired,
		currentSort: T.string.isRequired,
		sortDirection: SORT_DIRECTION_PROPTYPES.isRequired
	};

	constructor(props) {
		super(props);

		this.renderCol = this.renderCol.bind(this);
		this.renderRow = this.renderRow.bind(this);
	}

	renderCol({ width }, index) {
		return (
			<col width={ `${width}%` } key={ index } />
		);
	}

	renderRow({ active, slug, row, expanded, show }) {
		const { onRowClick, config } = this.props;

		if (active && show === 'overview') {
			return (
				<TableRow
					config={ config }
					data={ row }
					key={ slug }
					slug={ slug }
					onRowClick={ onRowClick }
					expanded={ expanded }
				/>
			);
		}
		else if (active && show === 'details') {
			return (
				<TableDetailsRow key={ slug } />
			);
		}

		return null;
	}

	render() {
		const { collection, config, onTableSort, currentSort, sortDirection } = this.props;

		return (
			<table className={ Classes.root }>
				<colgroup>
					{ config.map(this.renderCol) }
				</colgroup>
				<TableHeader
					config={ config }
					onTableSort={ onTableSort }
					currentSort={ currentSort }
					sortDirection={ sortDirection }
				/>
				<tbody>
					{ collection.map(this.renderRow) }
				</tbody>
			</table>
		);
	}
}

export default Table;
