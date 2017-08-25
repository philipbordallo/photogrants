import React, { PureComponent } from 'react';
import T from 'prop-types';

import noop from 'utilities/noop';

import { DATA_PROPTYPES } from 'containers/Grants/propTypes';

import Classes from './styles';

class TableDetailsRow extends PureComponent {
	static propTypes = {
		data: DATA_PROPTYPES.isRequired,
		scrollable: T.bool.isRequired,
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
		if (this.props.scrollable) {
			const detailsPosition = this.detailsRef.getBoundingClientRect();
			const rowPosition = this.detailsRef.previousSibling.getBoundingClientRect();

			const offset = { bottom: 24, top: 44 };
			const bothHeights = detailsPosition.height + rowPosition.height + offset.top;
			const fromTop = rowPosition.top - offset.top;

			const shouldScrollBottom = (detailsPosition.bottom > window.innerHeight);
			const shouldScrollTop = (fromTop < 0 || bothHeights > window.innerHeight);

			let top = 0;
			if (shouldScrollBottom) top = (detailsPosition.bottom + offset.bottom) - window.innerHeight;
			if (shouldScrollTop) top = rowPosition.top - offset.top;

			if (shouldScrollBottom || shouldScrollTop) window.scrollBy({ top, behavior: 'smooth' });
		}
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
