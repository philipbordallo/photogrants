import React, { Component } from 'react';
import T from 'prop-types';

import { SHAPE_CONFIG_PROPTYPES, SORT_DIRECTION_PROPTYPES } from '../propTypes';

import Classes from './styles';


class TableHeaderCell extends Component {
	static propTypes = {
		...SHAPE_CONFIG_PROPTYPES,
		onTableSort: T.func.isRequired,
		currentSort: T.string.isRequired,
		sortDirection: SORT_DIRECTION_PROPTYPES.isRequired,
		tabIndex: T.number.isRequired
	};

	constructor() {
		super();

		this.handleClick = this.handleClick.bind(this);
	}

	shouldComponentUpdate(nextProps) {
		const wasPreviousCurrentSort = (this.props.name === this.props.currentSort);
		const isNextCurrentSort = (nextProps.name === nextProps.currentSort);

		return (wasPreviousCurrentSort || isNextCurrentSort);
	}

	handleClick(event) {
		const { name, currentSort, sortDirection, sortable } = this.props;

		const isSorted = (currentSort === name);
		const descOnly = sortable.every(sort => sort === 'desc');

		let direction = 'desc';

		if (isSorted && !descOnly) {
			direction = (sortDirection === 'asc') ? 'desc' : 'asc';
		}

		event.target.blur(); // Prevents :focus from being shown onClick
		this.props.onTableSort(name, direction);
	}

	render() {
		const { currentSort, sortDirection, title, name, tabIndex } = this.props;

		const isSorted = (currentSort === name);
		const isAscending = (sortDirection === 'asc');
		const isDescending = (sortDirection === 'desc');

		let contentClassName = Classes.content;

		if (isSorted && isAscending) contentClassName = Classes.contentAsc;
		else if (isSorted && isDescending) contentClassName = Classes.contentDesc;

		return (
			<th className={ Classes.root }>
				<div
					className={ contentClassName }
					onClick={ this.handleClick }
					title={ `Sort by ${title}` }
					tabIndex={ tabIndex }
					role="columnheader"
				>
					{ title }
				</div>
			</th>
		);
	}
}

export default TableHeaderCell;
