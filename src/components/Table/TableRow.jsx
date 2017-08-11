import React, { PureComponent } from 'react';
import T from 'prop-types';

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
		config: CONFIG_PROPTYPES.isRequired,
		expanded: T.bool
	};

	static defaultProps ={
		expanded: false
	};

	constructor() {
		super();

		this.renderCell = this.renderCell.bind(this);
	}

	renderCell(data, index) {
		const { config } = this.props;
		let content = (typeof data !== 'object') ? data : '';

		if (config[index].renderer) {
			content = React.createElement(config[index].renderer, data);
		}

		return (
			<td className={ Classes.rowCell } key={ index }>
				<div className={ Classes.rowCellContent }>
					{ content }
				</div>
			</td>
		);
	}

	render() {
		const { expanded, data } = this.props;
		const title = expanded ? 'Close expanded details' : 'Expand for more information';

		return (
			<tr className={ Classes.row } title={ title }>
				{ data.map(this.renderCell) }
			</tr>
		);
	}
}

export default TableRow;
