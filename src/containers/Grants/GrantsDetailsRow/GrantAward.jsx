import React, { PureComponent } from 'react';

import getCurrencySymbol from 'currency-symbol-map';

import { COLLECTION_PROPTYPES } from 'containers/Grants/propTypes';
import { OPPORTUNITY_TYPE, AMOUNT_TYPE } from 'containers/Grants/meta';

import Classes from './styles';


const ADDITIONAL_CLASSNAMES = {
	mentorship: Classes.mentorshipSymbol,
	show: Classes.showSymbol,
	residency: Classes.residencySymbol
};

class GrantAward extends PureComponent {
	static propTypes = COLLECTION_PROPTYPES.isRequired;

	constructor() {
		super();

		this.renderAdditional = this.renderAdditional.bind();
	}

	renderAdditional(item, index, array) {
		let prefix = '';
		let seperator = ', ';

		if (array.length < 3) {
			seperator = ' ';
		}

		if (index === array.length - 1) {
			prefix = 'and ';
			seperator = ' opportunities';
		}

		if (index === 0) {
			prefix = ' plus ';
		}

		return [
			prefix,
			<div
				key={ `${index}-icon` }
				className={ ADDITIONAL_CLASSNAMES[item] }
				title={ OPPORTUNITY_TYPE[item] }
			/>,
			<span key={ index } >
				{ item }
			</span>,
			seperator
		];
	}

	render() {
		const { given, amount, amountType, currency, mentorship, show, residency } = this.props;
		const grant = (given > 1) ? 'grants each' : 'grant';
		const amountModifier = (amountType === 'exact') ? '' : AMOUNT_TYPE[amountType];
		const awardAmount = `${getCurrencySymbol(currency)}${amount.toLocaleString()}`;

		const additionalList = [];
		if (mentorship) additionalList.push('mentorship');
		if (show) additionalList.push('show');
		if (residency) additionalList.push('residency');

		return (
			<li>
				{ `${given} ${grant} worth ${amountModifier} ${awardAmount}` }
				{ additionalList.length > 0 ? additionalList.map(this.renderAdditional) : '' }
			</li>
		);
	}
}

export default GrantAward;
