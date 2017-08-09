import { connect } from 'react-redux';

import { sortTable, loadData } from 'actions/grants';
import Grants from './Grants';

const mapStateToProps = ({ grants }) => ({
	currentSort: grants.currentSort,
	sortDirection: grants.sortDirection,
	collection: grants.collection
});

const mapDispatchToProps = dispatch => ({
	sortTable: (currentSort) => { dispatch(sortTable(currentSort)); },
	loadData: () => { dispatch(loadData()); }
});

export default connect(mapStateToProps, mapDispatchToProps)(Grants);
