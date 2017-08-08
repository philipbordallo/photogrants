import Constants from 'api/constants';
import createReducer from './createReducer';

const DEFAULT_STATE = {
	currentSort: 'deadline',
	sortDirection: 'desc'
};

const setDirection = (state, action) => {
	if (state.currentSort === action.currentSort) {
		return (state.sortDirection === 'asc') ? 'desc' : 'asc';
	}

	return DEFAULT_STATE.sortDirection;
};

const grants = createReducer(DEFAULT_STATE, {
	[Constants.Grants.SORT_TABLE]: (state, action) => ({
		...state,
		currentSort: action.currentSort,
		sortDirection: setDirection(state, action)
	})
});

export default grants;
