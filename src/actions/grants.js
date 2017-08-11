/* eslint import/prefer-default-export:0 */
import Constants from 'api/constants';
import { loadGrantData } from 'api';


// Sort Table
export const sortTable = currentSort =>
	(dispatch) => {
		dispatch({
			type: Constants.grants.SORT_TABLE,
			currentSort
		});
	};

// Toggle Row
export const toggleRow = expandRow =>
	(dispatch) => {
		dispatch({
			type: Constants.grants.TOGGLE_ROW,
			expandRow
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

