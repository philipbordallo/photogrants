import React, { PureComponent } from 'react';
import T from 'prop-types';
import { HEADER_PROPTYPES, SORT_DIRECTION_PROPTYPES } from './propTypes';

import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableDetailsRow from './TableDetailsRow';

import Classes from './styles';


class Table extends PureComponent {
	static propTypes = {
		headerData: HEADER_PROPTYPES.isRequired,
		onTableSort: T.func.isRequired,
		currentSort: T.string.isRequired,
		sortDirection: SORT_DIRECTION_PROPTYPES.isRequired
	};

	constructor(props) {
		super(props);

		this.renderCol = this.renderCol.bind(this);
	}

	renderCol({ width }, index) {
		return (
			<col width={ `${width}%` } key={ index } />
		);
	}

	render() {
		const { headerData, onTableSort, currentSort, sortDirection } = this.props;

		return (
			<table className={ Classes.root }>
				<colgroup>
					{ headerData.map(this.renderCol) }
				</colgroup>
				<TableHeader
					data={ headerData }
					onTableSort={ onTableSort }
					currentSort={ currentSort }
					sortDirection={ sortDirection }
				/>
				<tbody>
					<TableRow expanded />
					<TableDetailsRow />
					<TableRow />
					<TableRow />
				</tbody>
			</table>
		);
	}
}

export default Table;
