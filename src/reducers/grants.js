import Constants from 'api/constants';
import createReducer from 'reducers/createReducer';

import getCurrencySymbol from 'currency-symbol-map';
import moment from 'moment';

import { nameSort, feeSort, awardSort, deadlineSort } from 'utilities/sorts';


const DEFAULT_STATE = {
	currentSort: 'deadline',
	sortDirection: 'desc',
	collection: []
};

const setDirection = (state, action) => {
	if (state.currentSort === action.currentSort && action.currentSort !== 'deadline') {
		return (state.sortDirection === 'asc') ? 'desc' : 'asc';
	}

	return DEFAULT_STATE.sortDirection;
};

const sortCollection = (state, action, direction) => {
	const newCollection = [...state.collection];

	if (action.currentSort === 'name') {
		newCollection.sort(nameSort);
	}
	else if (action.currentSort === 'fee') {
		newCollection.sort(feeSort);
	}
	else if (action.currentSort === 'award') {
		newCollection.sort(awardSort);
	}
	else if (action.currentSort === 'deadline') {
		newCollection.sort(deadlineSort);
	}

	if (direction === 'asc') {
		newCollection.reverse();
	}

	return newCollection;
};

const setRow = ({ organization: { nickname }, name, date, fee, awards }) => {
	const title = {
		orgName: nickname,
		name
	};
	const cost = `${getCurrencySymbol(fee.currency)}${fee.amount}`;
	const topAward = {
		amount: `${getCurrencySymbol(awards[0].currency)}${awards[0].amount.toLocaleString()}`,
		mentorship: awards[0].mentorship,
		show: awards[0].show,
		residency: awards[0].residency
	};
	const deadline = moment(date.deadline, 'MMMM D YYYY').format('MMM D');

	return [
		title,
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
})).sort(deadlineSort);

const expandedCollection = ({ collection }, action) => {
	const newCollection = [...collection];

	const currentIndex = newCollection.findIndex(item => item.slug === action.expandedRow);
	const currentItem = collection[currentIndex];

	const hasIndex = currentIndex !== -1;
	const hasDetailsExpanded = (collection[currentIndex + 1] && collection[currentIndex + 1].show === 'details');

	if (hasDetailsExpanded && hasIndex) {
		newCollection.splice(currentIndex + 1, 1);
	}
	else if (hasIndex) {
		newCollection.splice(currentIndex + 1, 0, {
			...currentItem,
			slug: `${currentItem.slug}-expanded`,
			show: 'details',
			expanded: false
		});
	}

	return newCollection.map(item => ({
		...item,
		expanded: (item.slug === action.expandedRow) ? !item.expanded : item.expanded
	}));
};

const grants = createReducer(DEFAULT_STATE, {
	[Constants.grants.SORT_TABLE]: (state, action) => {
		const direction = setDirection(state, action);

		return ({
			...state,
			collection: sortCollection(state, action, direction),
			currentSort: action.currentSort,
			sortDirection: direction
		});
	},

	[Constants.grants.TOGGLE_ROW]: (state, action) => ({
		...state,
		collection: expandedCollection(state, action)
	}),

	[Constants.grants.LOAD_DATA_SUCCESS]: (state, action) => ({
		...state,
		collection: setCollection(action.data)
	})
});

export default grants;
