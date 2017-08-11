import getCurrencySymbol from 'currency-symbol-map';
import moment from 'moment';

import Constants from 'api/constants';
import createReducer from './createReducer';


const DEFAULT_STATE = {
	currentSort: 'deadline',
	sortDirection: 'desc',
	collection: [],
	expandedRows: []
};

const setDirection = (state, action) => {
	if (state.currentSort === action.currentSort) {
		return (state.sortDirection === 'asc') ? 'desc' : 'asc';
	}

	return DEFAULT_STATE.sortDirection;
};

const setRow = ({ name, date, fee, awards }) => {
	const cost = `${getCurrencySymbol(fee.currency)}${fee.amount}`;
	const topAward = {
		amount: `${getCurrencySymbol(awards[0].currency)}${awards[0].amount}`,
		mentorship: awards[0].mentorship,
		show: awards[0].show,
		residency: awards[0].residency
	};
	const deadline = moment(date.deadline, 'MMMM D YYYY').format('MMM D');

	return [
		name,
		cost,
		topAward,
		deadline
	];
};

const setCollection = data => data.map(item => ({
	...item,
	expanded: false,
	row: setRow(item)
}));


const grants = createReducer(DEFAULT_STATE, {
	[Constants.grants.SORT_TABLE]: (state, action) => ({
		...state,
		currentSort: action.currentSort,
		sortDirection: setDirection(state, action)
	}),

	[Constants.grants.LOAD_DATA_SUCCESS]: (state, action) => ({
		...state,
		collection: setCollection(action.data)
	})
});

export default grants;
