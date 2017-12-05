import { connect } from 'react-redux';

import { filterTable } from 'actions/grants';
import { fireAnalyticsEvent } from 'actions/analytics';
import Filters from './Filters';

const mapStateToProps = ({ grants }) => ({
	filters: grants.filters
});

const mapDispatchToProps = dispatch => ({
	filterTable: (update) => { dispatch(filterTable(update)); },
	fireAnalyticsEvent: (update) => { dispatch(fireAnalyticsEvent(update)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
