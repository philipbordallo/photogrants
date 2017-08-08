import React, { PureComponent } from 'react';
import T from 'prop-types';

import Classes from './styles';


class TableRow extends PureComponent {
	static propTypes = {
		expanded: T.bool
	};

	static defaultProps ={
		expanded: false
	}

	render() {
		const { expanded } = this.props;

		const title = expanded ? 'Close expanded details' : 'Expand for more information';

		return (
			<tr className={ Classes.row } title={ title }>
				<td className={ Classes.rowCell }>
					<div className={ Classes.rowCellContent }>
						Women in Photography (WIPNYC) Grant & Mentor Program
					</div>
				</td>
				<td className={ Classes.rowCell }>
					<div className={ Classes.rowCellContent }>
						$0
					</div>
				</td>
				<td className={ Classes.rowCell }>
					<div className={ Classes.rowCellContent }>
						$5000
					</div>
				</td>
				<td className={ Classes.rowCell }>
					<div className={ Classes.rowCellContent }>
						May 30
					</div>
				</td>
			</tr>
		);
	}
}

export default TableRow;
