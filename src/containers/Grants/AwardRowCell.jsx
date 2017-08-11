import React, { PureComponent } from 'react';
import T from 'prop-types';

class AwardRowCell extends PureComponent {
	static propTypes = {
		amount: T.string,
		mentorship: T.bool,
		show: T.bool,
		residency: T.bool
	};

	static defaultProps = {
		amount: '',
		mentorship: null,
		show: null,
		residency: null
	};

	render() {
		const { amount, mentorship, show, residency } = this.props;

		return (
			<div>
				{ amount }
				{ mentorship ? '!' : null }
				{ show ? '!' : null }
				{ residency ? '!' : null }
			</div>
		);
	}
}

export default AwardRowCell;
