import React, { PureComponent } from 'react';

import listify from 'listify';
import getCurrencySymbol from 'currency-symbol-map';
import getYearsActive from 'utilities/getYearsActive';

import { DATA_PROPTYPES } from 'containers/Grants/propTypes';

import Button from 'components/Button';
import GrantDetail from './GrantDetail';

import Classes from './styles';


const ELIGIBILITY_META = {
	gender: {
		women: 'Women Only',
		men: 'Men Only',
		all: 'Everyone'
	},
	students: {
		true: 'Eligible',
		false: 'Not Eligible'
	}
};

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

	renderUrl() {
		const { url } = this.props.data;

		if (url) {
			return (
				<div className={ Classes.buttonWrapper }>
					<Button
						type="secondary"
						href={ url }
						target="_blank"
					>
						Visit Website
					</Button>
				</div>
			);
		}

		return null;
	}

	renderAppUrl() {
		const { applicationUrl } = this.props.data;

		if (applicationUrl) {
			return (
				<div className={ Classes.buttonWrapper }>
					<Button
						type="primary"
						href={ applicationUrl }
						target="_blank"
					>
						Submit Application
					</Button>
				</div>
			);
		}

		return null;
	}

	render() {
		const {
			description,
			organization: { url: orgURL, name: orgName },
			yearsActive,
			awards,
			eligibility: { age, gender, students }
		} = this.props.data;
		const years = getYearsActive(yearsActive);

		let ageText = '';

		if (age.from && age.to === null) ageText = `${age.from} or older`;
		else if (age.from === null && age.to) ageText = `${age.to} or younger`;
		else if (age.from && age.to) ageText = `From ${age.from} to ${age.to}`;

		return (
			<div className={ Classes.root }>
				<section className={ Classes.information }>
					<GrantDetail title="Description">
						{ description }
					</GrantDetail>

					<GrantDetail title="Years Active">
						{ years }
					</GrantDetail>

					<GrantDetail type="list" title="Awards List">
						{ awards.map(this.renderAwards) }
					</GrantDetail>

					<GrantDetail title="Organization">
						<a href={ orgURL } target="_blank" className={ Classes.link }>{ orgName }</a>
					</GrantDetail>

					{ this.renderUrl() }
					{ this.renderAppUrl() }
				</section>

				<section className={ Classes.eligibility }>
					<h3 className={ Classes.sectionTitle }>Eligibility</h3>

					<GrantDetail title="Age" visible={ age.from !== null || age.to !== null }>
						{ ageText }
					</GrantDetail>

					<GrantDetail title="Gender" visible={ gender !== 'all' }>
						{ ELIGIBILITY_META.gender[gender] }
					</GrantDetail>

					<GrantDetail title="Students">
						{ ELIGIBILITY_META.students[students] }
					</GrantDetail>
				</section>
			</div>
		);
	}
}

export default GrantsDetailsRow;
