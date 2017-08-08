import { connect } from 'react-redux';

import { sortTable } from 'actions/grants';
import Grants from './Grants';

const mapStateToProps = state => ({
	currentSort: state.grants.currentSort,
	sortDirection: state.grants.sortDirection
});

const mapDispatchToProps = dispatch => ({
	sortTable: (currentSort) => { dispatch(sortTable(currentSort)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(Grants);
