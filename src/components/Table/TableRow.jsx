import React, { PureComponent } from 'react';
import T from 'prop-types';

import noop from 'utilities/noop';

import { CONFIG_PROPTYPES } from './propTypes';

import Classes from './styles';


class TableRow extends PureComponent {
	static propTypes = {
		data: T.arrayOf(
			T.oneOfType([
				T.string,
				T.object
			])
		).isRequired,
		slug: T.string.isRequired,
		config: CONFIG_PROPTYPES.isRequired,
		onRowClick: T.func,
		expanded: T.bool
	};

	static defaultProps ={
		expanded: false,
		onRowClick: noop
	};

	constructor() {
		super();

		this.onRowClick = this.onRowClick.bind(this);
		this.renderCell = this.renderCell.bind(this);
	}

	onRowClick() {
		this.props.onRowClick(this.props.slug);
	}

	renderCell(data, index) {
		const { config } = this.props;
		let content = (typeof data !== 'object') ? data : '';

		if (config[index].renderer) {
			content = React.createElement(config[index].renderer, data);
		}

		return (
			<td className={ Classes.rowCell } key={ index }>
				{ content }
			</td>
		);
	}

	render() {
		const { expanded, data } = this.props;
		const title = expanded ? 'Close expanded details' : 'Expand for more information';

		return (
			<tr
				className={ Classes.row }
				title={ title }
				onClick={ this.onRowClick }
			>
				{ data.map(this.renderCell) }
			</tr>
		);
	}
}

export default TableRow;
