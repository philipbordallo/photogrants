import React, { PureComponent } from 'react';

import listify from 'listify';
import getCurrencySymbol from 'currency-symbol-map';

import { COLLECTION_PROPTYPES } from 'containers/Grants/propTypes';


class GrantAward extends PureComponent {
	static propTypes = COLLECTION_PROPTYPES.isRequired;

	render() {
		const { given, amount, amountType, currency, mentorship, show, residency } = this.props;
		const grant = (given > 1) ? 'grants' : 'grant';
		const upto = (amountType === 'upto') ? `up to` : '';
		const awardAmount = `${getCurrencySymbol(currency)}${amount.toLocaleString()}`;
		const additionalList = [];

		if (mentorship) additionalList.push('mentorship');
		if (show) additionalList.push('show');
		if (residency) additionalList.push('residency');

		const additional = (additionalList.length > 0) ? `plus ${listify(additionalList)} opportunities` : '';

		return (
			<li>
				{ `${given} ${grant} worth ${upto} ${awardAmount} ${additional}` }
			</li>
		);
	}
}

export default GrantAward;
