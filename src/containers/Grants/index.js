import { connect } from 'react-redux';

import { sortTable, loadData, toggleRow } from 'actions/grants';
import { fireAnalyticsEvent } from 'actions/analytics';
import Grants from './Grants';

const mapStateToProps = ({ grants }) => ({
  currentSort: grants.currentSort,
  sortDirection: grants.sortDirection,
  collection: grants.collection,
  expandedRows: grants.expandedRows,
});

const mapDispatchToProps = dispatch => ({
  sortTable(currentSort, sortDirection) { dispatch(sortTable(currentSort, sortDirection)); },
  toggleRow(expandedRow) { dispatch(toggleRow(expandedRow)); },
  loadData() { dispatch(loadData()); },
  fireAnalyticsEvent(update) { dispatch(fireAnalyticsEvent(update)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Grants);
