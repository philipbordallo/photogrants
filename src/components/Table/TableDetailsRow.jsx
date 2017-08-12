import React, { PureComponent } from 'react';
import T from 'prop-types';

import noop from 'utilities/noop';

import { DATA_PROPTYPES } from 'containers/Grants/propTypes';

import Classes from './styles';

class TableDetailsRow extends PureComponent {
	static propTypes = {
		data: DATA_PROPTYPES.isRequired,
		renderer: T.func
	};

	static defaultProps = {
		renderer: noop
	};

	render() {
		const { data, renderer } = this.props;
		const content = React.createElement(renderer, { data });

		return (
			<tr className={ Classes.detailsRow }>
				<td className={ Classes.detailsRowCell } colSpan={ 5 }>
					<hr className={ Classes.detailsLine } />
					{ content }
				</td>
			</tr>
		);
	}
}

export default TableDetailsRow;
