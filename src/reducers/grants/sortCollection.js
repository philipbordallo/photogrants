import { nameSort, feeSort, awardSort, deadlineSort } from 'utilities/sorts';

function sortCollection(collection, { currentSort, sortDirection }) {
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

	// Return the collection with the expanded rows added back
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
}

export default sortCollection;
