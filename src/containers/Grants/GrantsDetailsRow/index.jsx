import React, { PureComponent } from 'react';
// import T from 'prop-types';

import listify from 'listify';
import getCurrencySymbol from 'currency-symbol-map';
import getYearsActive from 'utilities/getYearsActive';

import { DATA_PROPTYPES } from 'containers/Grants/propTypes';


import Classes from './styles';

class GrantsDetailsRow extends PureComponent {
	static propTypes = {
		data: DATA_PROPTYPES.isRequired
	};

	constructor() {
		super();

		this.renderAwards = this.renderAwards.bind(this);
	}

	renderAwards(data, index) {
		const { given, amount, amountType, currency, mentorship, show, residency } = data;
		const grant = (given > 1) ? 'grants' : 'grant';
		const upto = (amountType === 'upto') ? `up to` : '';
		const awardAmount = `${getCurrencySymbol(currency)}${amount.toLocaleString()}`;
		const additionalList = [];

		if (mentorship) additionalList.push('mentorship');
		if (show) additionalList.push('show');
		if (residency) additionalList.push('residency');

		const additional = (additionalList.length > 0) ? `plus ${listify(additionalList)} opportunities` : '';

		return (
			<li key={ index }>
				{ `${given} ${grant} worth ${upto} ${awardAmount} ${additional}` }
			</li>
		);
	}

	render() {
		const { description, yearsActive, awards } = this.props.data;
		const years = getYearsActive(yearsActive);

		return (
			<div className={ Classes.root }>
				<section className={ Classes.section }>
					<h3 className={ Classes.title }>Description</h3>
					<p className={ Classes.content }>
						{ description }
					</p>

					<h3 className={ Classes.title }>Years Active</h3>
					<p className={ Classes.content }>
						{ years }
					</p>

					<h3 className={ Classes.title }>Awards List</h3>
					<ul className={ Classes.list }>
						{ awards.map(this.renderAwards) }
					</ul>
				</section>
				<section className={ Classes.section }>
					<h3 className={ Classes.title }>Ages</h3>
					<p className={ Classes.content }>
						18 years & older
					</p>

					<h3 className={ Classes.title }>Gender</h3>
					<p className={ Classes.content }>
						Women only
					</p>
				</section>
			</div>
		);
	}
}

export default GrantsDetailsRow;
