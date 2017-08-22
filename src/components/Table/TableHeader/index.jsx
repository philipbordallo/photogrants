import React, { PureComponent } from 'react';
import T from 'prop-types';
import { CONFIG_PROPTYPES, SORT_DIRECTION_PROPTYPES } from '../propTypes';

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

	handleClick(name, direction) {
		return (event) => {
			event.target.blur(); // Prevents :focus from being shown onClick
			this.props.onTableSort(name, direction);
		};
	}

	renderCell({ name, sortable }, index) {
		const { currentSort, sortDirection } = this.props;
		const sortName = name.toLowerCase();

		const descOnly = sortable.every(sort => sort === 'desc');
		const isSorted = (currentSort === sortName);
		const isAscending = (sortDirection === 'asc');
		const isDescending = (sortDirection === 'desc');

		let nextDirection = 'desc';
		let contentClassName = Classes.cellContent;

		if (isSorted && !descOnly) {
			nextDirection = (sortDirection === 'asc') ? 'desc' : 'asc';
		}

		if (isSorted && isAscending) contentClassName = Classes.cellContentAsc;
		else if (isSorted && isDescending) contentClassName = Classes.cellContentDesc;

		return (
			<th className={ Classes.cell } key={ index }>
				<div
					className={ contentClassName }
					onClick={ this.handleClick(sortName, nextDirection) }
					title={ `Sort by ${name}` }
					tabIndex={ index + 1 }
					role="columnheader"
				>
					{ name }
				</div>
			</th>
		);
	}

	render() {
		const { config } = this.props;
		return (
			<thead className={ Classes.root }>
				<tr>
					{ config.map(this.renderCell) }
				</tr>
			</thead>
		);
	}
}

export default TableHeader;
