import React, { PureComponent } from 'react';
import T from 'prop-types';
import { HEADER_PROPTYPES } from './propTypes';

import Classes from './styles';


class TableHeader extends PureComponent {
	static propTypes = {
		data: HEADER_PROPTYPES.isRequired,
		onTableSort: T.func.isRequired
	};

	constructor(props) {
		super(props);

		this.renderCell = this.renderCell.bind(this);
	}

	renderCell({ name, align }, index) {
		const { onTableSort } = this.props;
		const style = {
			textAlign: align
		};

		return (
			<th className={ Classes.headerCell } style={ style } onClick={ onTableSort } key={ index }>
				{ name }
			</th>
		);
	}

	render() {
		const { data } = this.props;
		return (
			<thead className={ Classes.header }>
				<tr>
					{ data.map(this.renderCell) }
				</tr>
			</thead>
		);
	}
}

export default TableHeader;
