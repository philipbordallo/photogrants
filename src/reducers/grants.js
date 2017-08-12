import getCurrencySymbol from 'currency-symbol-map';
import moment from 'moment';

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
	show: 'overview',
	expanded: false,
	row: setRow(item)
}));

const sortCollection = ({ collection }, action) => {
	const newCollection = [...collection];
	const currentIndex = newCollection.findIndex(item => item.slug === action.expandedRow);
	const currentItem = collection[currentIndex];

	newCollection.splice(currentIndex + 1, 0, {
		...currentItem,
		slug: `${currentItem.slug}-expanded`,
		show: 'details',
		expanded: false
	});

	return newCollection.map(item => ({
		...item,
		expanded: (item.slug === action.expandedRow) ? !item.expanded : item.expanded
	}));
};

// const setExpandedRows = (state, action) => {
// 	const newArray = [...state.expandedRows];
// 	const isExpanded = (newArray.some(item => item === action.expandedRow));
// 	const index = newArray.indexOf(action.expandedRow);

// 	if (isExpanded && index !== -1) newArray.splice(index, 1);
// 	else newArray.push(action.expandedRow);

// 	return newArray;
// };


const grants = createReducer(DEFAULT_STATE, {
	[Constants.grants.SORT_TABLE]: (state, action) => ({
		...state,
		currentSort: action.currentSort,
		sortDirection: setDirection(state, action)
	}),

	[Constants.grants.TOGGLE_ROW]: (state, action) => ({
		...state,
		collection: sortCollection(state, action)
		// expandedRows: setExpandedRows(state, action)
	}),

	[Constants.grants.LOAD_DATA_SUCCESS]: (state, action) => ({
		...state,
		collection: setCollection(action.data)
	})
});

export default grants;
