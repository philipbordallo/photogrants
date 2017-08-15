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

	constructor() {
		super();

		this.setDetailsRef = this.setDetailsRef.bind(this);
	}

	componentDidMount() {
		const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		const detailsPosition = this.detailsRef.getBoundingClientRect();
		const rowPosition = this.detailsRef.previousSibling.getBoundingClientRect();
		const bothHeights = detailsPosition.height + rowPosition.height;

		const shouldScrollBottom = (detailsPosition.bottom > viewportHeight);
		const shouldScrollTop = (rowPosition.top < 0 || bothHeights > viewportHeight);

		const offset = {
			bottom: 24,
			top: 6
		};

		let top = 0;
		if (shouldScrollBottom) top = (detailsPosition.bottom + offset.bottom) - viewportHeight;
		if (shouldScrollTop) top = rowPosition.top - offset.top;

		if (shouldScrollBottom || shouldScrollTop) window.scrollBy({ top, behavior: 'smooth' });
	}

	setDetailsRef(ref) {
		this.detailsRef = ref;
	}

	render() {
		const { data, renderer } = this.props;
		const content = React.createElement(renderer, { data });

		return (
			<tr className={ Classes.detailsRow } ref={ this.setDetailsRef }>
				<td className={ Classes.detailsRowCell } colSpan={ 5 }>
					<hr className={ Classes.detailsLine } />
					{ content }
				</td>
			</tr>
		);
	}
}

export default TableDetailsRow;
