/* eslint import/prefer-default-export:0 */
import Constants from 'api/constants';

export const sortTable = currentSort =>
	(dispatch) => {
		dispatch({
			type: Constants.Grants.SORT_TABLE,
			currentSort
		});
	};
