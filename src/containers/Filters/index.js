import { connect } from 'react-redux';

import { filterTable } from 'actions/grants';
import Filters from './Filters';

const mapStateToProps = ({ grants }) => ({
	filters: grants.filters
});

const mapDispatchToProps = dispatch => ({
	filterTable: (update) => { dispatch(filterTable(update)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
