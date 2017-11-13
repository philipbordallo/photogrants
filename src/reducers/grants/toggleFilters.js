function toggleFilters({ filters }, { update }) {
	// Check to see if filter already exists
	const hasFilter = filters.some(filter => filter.name === update.name);

	if (hasFilter) {
		return filters.map((filter) => {
			// Find the filter to update
			if (filter.name === update.name) {
				let newValues = [update.value];

				if (update.maxLength > 1) {
					const containsValue = filter.values.some(value => value === update.value);

					// Remove the value if it already exists
					newValues = filter.values.filter(value => value !== update.value);

					// Add the value if it does not
					if (!containsValue) newValues.push(update.value);

					if (update.maxLength === newValues.length) {
						newValues = [];
					}
				}

				return {
					name: filter.name,
					values: newValues
				};
			}

			return filter;
		});
	}

	return filters.concat([{
		name: update.name,
		values: [update.value]
	}]);
}

export default toggleFilters;
