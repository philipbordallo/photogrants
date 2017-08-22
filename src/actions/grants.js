/* eslint import/prefer-default-export:0 */
import Constants from 'api/constants';
import { loadGrantData } from 'api';


// Sort Table
export const sortTable = (currentSort, sortDirection) =>
	(dispatch) => {
		dispatch({
			type: Constants.grants.SORT_TABLE,
			currentSort,
			sortDirection
		});
	};

// Toggle Row
export const toggleRow = expandedRow =>
	(dispatch) => {
		dispatch({
			type: Constants.grants.TOGGLE_ROW,
			expandedRow
		});
	};

// Load Data
const startLoadingData = () => ({
	type: Constants.grants.LOAD_DATA
});

const loadDataSuccess = data => ({
	type: Constants.grants.LOAD_DATA_SUCCESS,
	data
});

const loadDataFailure = error => ({
	type: Constants.grants.LOAD_DATA_FAILURE,
	error
});

export const loadData = () =>
	(dispatch) => {
		dispatch(startLoadingData);

		loadGrantData()
			.then((data) => {
				dispatch(loadDataSuccess(data));
			})
			.catch((error) => {
				dispatch(loadDataFailure(error));
			});
	};

