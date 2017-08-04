import React, { PureComponent } from 'react';
import T from 'prop-types';
import { HEADER_PROPTYPES } from './propTypes';

import TableHeader from './TableHeader';

import Classes from './styles';


class Table extends PureComponent {
	static propTypes = {
		headerData: HEADER_PROPTYPES.isRequired,
		onTableSort: T.func.isRequired
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
		const { headerData, onTableSort } = this.props;

		return (
			<table className={ Classes.root }>
				<colgroup>
					{ headerData.map(this.renderCol) }
				</colgroup>
				<TableHeader data={ headerData } onTableSort={ onTableSort } />
			</table>
		);
	}
}

export default Table;
