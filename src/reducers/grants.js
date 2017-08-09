import Constants from 'api/constants';
import createReducer from './createReducer';

const DEFAULT_STATE = {
	currentSort: 'deadline',
	sortDirection: 'desc',
	collection: []
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
	}),

	[Constants.Grants.LOAD_DATA_SUCCESS]: (state, action) => ({
		...state,
		collection: action.data
	})
});

export default grants;
