function toggleFilters({ filters }, { update }) {
  // Check to see if filter already exists
  const hasFilter = filters.some(filter => filter.name === update.name);

  if (hasFilter) {
    return filters.reduce((collection, filter) => {
      // Filter is new
      if (filter.name !== update.name) {
        return collection.concat([filter]);
      }

      let newValues = [update.value];

      if (update.maxLength > 1) {
        const containsValue = filter.values.some(value => value === update.value);

        // Remove the value if it already exists
        newValues = filter.values.filter(value => value !== update.value);

        // Add the value if it isn't already part of the collection
        if (!containsValue) newValues.push(update.value);

        if (update.maxLength === newValues.length) {
          return collection;
        }
      }

      if (update.value === '' || newValues.length === 0) {
        return collection;
      }

      return collection.concat([{
        name: filter.name,
        values: newValues,
      }]);
    }, []);
  }

  return filters.concat([{
    name: update.name,
    values: [update.value],
  }]);
}

export default toggleFilters;
