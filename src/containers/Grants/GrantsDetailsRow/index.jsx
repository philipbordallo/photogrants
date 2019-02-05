import React, { PureComponent } from 'react';
import T from 'prop-types';
import moment from 'moment';

import getYearsActive from 'utilities/getYearsActive';
import getDeadlineDate from 'utilities/getDeadlineDate';
import getTimeZone from 'utilities/getTimeZone';

import { DATA_PROPTYPES } from 'containers/Grants/propTypes';

import TimeZoneAbbr from 'components/TimeZoneAbbr';

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
    accepted: 'Accepted',
    ineligible: 'Ineligible',
    only: 'Only'
  }
};

class GrantsDetailsRow extends PureComponent {
  static propTypes = {
    data: DATA_PROPTYPES.isRequired,
    fireAnalyticsEvent: T.func.isRequired
  };

  renderAwards(data, index) {
    return (
      <GrantAward key={ index } { ...data } />
    );
  }

  render() {
    const {
      data: {
        description,
        organization: { url: orgURL, name: orgName },
        yearsActive,
        awards,
        eligibility: { age, gender, students, other },
        url,
        applicationUrl,
        date: { callToSubmit, deadline }
      },
      fireAnalyticsEvent
    } = this.props;

    const years = getYearsActive(yearsActive);
    const callDate = moment(callToSubmit, 'MMMM D YYYY').format('MMMM D');
    const deadlineDate = `${getDeadlineDate(deadline)} `;
    const timeZone = getTimeZone(deadline);

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

          <GrantDetail title="Awards List" type="list">
            { awards.map(this.renderAwards) }
          </GrantDetail>

          <GrantDetail title="Organization">
            <a href={ orgURL } target="_blank" className={ Classes.link }>{ orgName }</a>
          </GrantDetail>

          <h3 className={ Classes.sectionTitle }>Dates</h3>

          <GrantDetail title="Call To Submit" visible={ !!callToSubmit }>
            { callDate }
          </GrantDetail>

          <GrantDetail title="Deadline">
            { deadlineDate }
            { timeZone && <TimeZoneAbbr { ...timeZone } /> }
          </GrantDetail>
        </section>

        <section className={ Classes.eligibility }>
          <h3 className={ Classes.sectionTitle }>Eligibility</h3>

          <GrantDetail title="Age" visible={ !!age.from || !!age.to }>
            { ageText }
          </GrantDetail>

          <GrantDetail title="Gender" visible={ gender !== 'all' }>
            { ELIGIBILITY_META.gender[gender] }
          </GrantDetail>

          <GrantDetail title="Students">
            { ELIGIBILITY_META.students[students] }
          </GrantDetail>

          <GrantDetail title="Other" visible={ !!other }>
            { other }
          </GrantDetail>
        </section>

        <section className={ Classes.links }>
          <GrantLink fireAnalyticsEvent={ fireAnalyticsEvent } href={ url } type="website" />
          <GrantLink fireAnalyticsEvent={ fireAnalyticsEvent } href={ applicationUrl } type="application" />
        </section>
      </div>
    );
  }
}

export default GrantsDetailsRow;
