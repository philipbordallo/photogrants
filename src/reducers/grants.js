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

const toggleCollection = ({ collection }, { expandedRow }) => {
	const newCollection = [...collection];

	// Find the row that was expanded
	const currentIndex = newCollection.findIndex(item => item.slug === expandedRow);
	const currentItem = collection[currentIndex];

	const hasIndex = currentIndex !== -1;
	const hasDetailsExpanded = (collection[currentIndex + 1] && collection[currentIndex + 1].show === 'details');

	if (hasDetailsExpanded && hasIndex) {
		// Remove the row if it's already expanded
		newCollection.splice(currentIndex + 1, 1);
	}
	else if (hasIndex) {
		// Add the row if it hasn't
		newCollection.splice(currentIndex + 1, 0, {
			...currentItem,
			slug: `${currentItem.slug}-expanded`,
			show: 'details',
			scrollable: true,
			expanded: false
		});
	}

	// Toggle whether it's `expanded`
	return newCollection.map(item => ({
		...item,
		expanded: (item.slug === expandedRow) ? !item.expanded : item.expanded
	}));
};

const sortCollection = ({ collection }, { currentSort, sortDirection }) => {
	// Remove expanded rows from collection
	const newCollection = collection.filter(item => item.show === 'overview');

	// Sort by
	if (currentSort === 'name') {
		newCollection.sort(nameSort);
	}
	else if (currentSort === 'fee') {
		newCollection.sort(feeSort);
	}
	else if (currentSort === 'award') {
		newCollection.sort(awardSort);
	}
	else if (currentSort === 'deadline') {
		newCollection.sort(deadlineSort);
	}

	// Sort direction
	if (sortDirection === 'asc') {
		newCollection.reverse();
	}

	// return the collection with the expanded rows added back
	return newCollection.reduce((reducedCollection, item) => {
		if (item.expanded) {
			return reducedCollection.concat([
				item,
				{
					...item,
					slug: `${item.slug}-expanded`,
					show: 'details',
					scrollable: false,
					expanded: false
				}
			]);
		}

		return reducedCollection.concat(item);
	}, []);
};

const grants = createReducer(DEFAULT_STATE, {
	[Constants.grants.SORT_TABLE]: (state, action) => ({
		...state,
		collection: sortCollection(state, action),
		currentSort: action.currentSort,
		sortDirection: action.sortDirection
	}),

	[Constants.grants.TOGGLE_ROW]: (state, action) => ({
		...state,
		collection: toggleCollection(state, action)
	}),

	[Constants.grants.LOAD_DATA_SUCCESS]: (state, action) => ({
		...state,
		collection: setCollection(action.data)
	})
});

export default grants;
