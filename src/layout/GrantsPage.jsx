import React, { Component } from 'react';

import ApplicationHeader from 'components/ApplicationHeader';
import Table from 'components/Table';

const HEADER_DATA = [
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


class GrantsPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			columnSort: 'name',
			sortDirection: 'asc'
		};

		this.onTableSort = this.onTableSort.bind(this);
	}

	onTableSort(event) {
		this.setState({
			columnSort: event.target.textContent.toLowerCase()
		});
	}

	render() {
		return (
			<section>
				<ApplicationHeader />
				<Table headerData={ HEADER_DATA } onTableSort={ this.onTableSort } />
			</section>
		);
	}
}

export default GrantsPage;
