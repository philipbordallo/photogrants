import React, { PureComponent } from 'react';

import getYearsActive from 'utilities/getYearsActive';

import { DATA_PROPTYPES } from 'containers/Grants/propTypes';

import GrantAward from './GrantAward';
import GrantDetail from './GrantDetail';
import GrantLink from './GrantLink';

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
		return (
			<GrantAward key={ index } { ...data } />
		);
	}

	render() {
		const {
			description,
			organization: { url: orgURL, name: orgName },
			yearsActive,
			awards,
			eligibility: { age, gender, students },
			url,
			applicationUrl
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

					<GrantLink href={ url } type="website" />
					<GrantLink href={ applicationUrl } type="application" />
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
