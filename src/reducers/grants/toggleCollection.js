function toggleCollection({ collection }, { expandedRow }) {
  const newCollection = [...collection];

  // Find the row that was expanded
  const currentIndex = newCollection.findIndex(item => item.slug === expandedRow);
  const currentItem = collection[currentIndex];

  const hasIndex = currentIndex !== -1;
  const hasDetailsExpanded = collection[currentIndex + 1] && collection[currentIndex + 1].show === 'details';

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
      expanded: false,
    });
  }

  // Toggle whether it's `expanded`
  return newCollection.map(item => ({
    ...item,
    expanded: item.slug === expandedRow ? !item.expanded : item.expanded,
  }));
}

export default toggleCollection;
