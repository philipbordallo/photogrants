import { connect } from 'react-redux';

import { sortTable, loadData, toggleRow } from 'actions/grants';
import Grants from './Grants';

const mapStateToProps = ({ grants }) => ({
	currentSort: grants.currentSort,
	sortDirection: grants.sortDirection,
	collection: grants.collection,
	expandedRows: grants.expandedRows
});

const mapDispatchToProps = dispatch => ({
	sortTable: (currentSort) => { dispatch(sortTable(currentSort)); },
	toggleRow: (expandedRow) => { dispatch(toggleRow(expandedRow)); },
	loadData: () => { dispatch(loadData()); }
});

export default connect(mapStateToProps, mapDispatchToProps)(Grants);
