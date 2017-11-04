import React, { Component } from 'react';
import T from 'prop-types';

import setFilterData from 'utilities/setFilterData';

import FilterList from './FilterList';

import { FILTERS_PROPTYPES } from './propTypes';
import { FILTERS_LIST } from './meta';


class Filters extends Component {
	static propTypes = {
		filterTable: T.func.isRequired,
		filters: FILTERS_PROPTYPES.isRequired
	};

	constructor() {
		super();

		this.handleFilterAction = this.handleFilterAction.bind(this);
		this.renderFilterList = this.renderFilterList.bind(this);
	}

	handleFilterAction(filter) {
		this.props.filterTable(filter);
	}

	renderFilterList(data, index) {
		const filterListProps = setFilterData(data, this.props.filters);

		return (
			<FilterList
				key={ index }
				{ ...filterListProps }
				onFilterAction={ this.handleFilterAction }
			/>
		);
	}

	render() {
		return (
			<div>
				{ FILTERS_LIST.map(this.renderFilterList) }
			</div>
		);
	}
}

export default Filters;
