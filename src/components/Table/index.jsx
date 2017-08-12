import React, { PureComponent } from 'react';
import T from 'prop-types';

import { COLLECTION_PROPTYPES } from 'containers/Grants/propTypes';
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
		collection: COLLECTION_PROPTYPES.isRequired,
		config: CONFIG_PROPTYPES.isRequired,
		currentSort: T.string.isRequired,
		onRowClick: T.func.isRequired,
		onTableSort: T.func.isRequired,
		sortDirection: SORT_DIRECTION_PROPTYPES.isRequired,
		detailsRenderer: T.func
	};

	static defaultProps = {
		detailsRenderer: null
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

	renderRow(data) {
		const { active, slug, row, expanded, show } = data;
		const { onRowClick, config, detailsRenderer } = this.props;

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
				<TableDetailsRow
					key={ slug }
					data={ data }
					renderer={ detailsRenderer }
				/>
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
