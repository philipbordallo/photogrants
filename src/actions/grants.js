/* eslint import/prefer-default-export:0 */
import Constants from 'api/constants';
import { loadGrantData } from 'api';

export const sortTable = currentSort =>
	(dispatch) => {
		dispatch({
			type: Constants.Grants.SORT_TABLE,
			currentSort
		});
	};

const startLoadingData = () => ({
	type: Constants.Grants.LOAD_DATA
});

const loadDataSuccess = data => ({
	type: Constants.Grants.LOAD_DATA_SUCCESS,
	data
});

const loadDataFailure = error => ({
	type: Constants.Grants.LOAD_DATA_FAILURE,
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

