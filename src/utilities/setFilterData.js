function setFilterData(data, selectedFilters) {
  const {
    title, meta, type, filters,
  } = data;

  // Of the selected filters find the ones that relate to this filter
  const selectedValues = selectedFilters.reduce((array, filter) => {
    if (filter.name === meta) {
      return array.concat(filter.values);
    }
    return array;
  }, []);

  return {
    title,
    meta,
    type,
    filters,
    selectedValues,
  };
}

export default setFilterData;
