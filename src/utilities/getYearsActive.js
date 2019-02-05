// Takes an array of years and returns a string of concurrent years
function getYearsActive(years) {
  const yearsSorted = years.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  let message = '';

  yearsSorted.forEach((year, index) => {
    const noYearBefore = yearsSorted[index - 1] !== year - 1;
    const noYearAfter = yearsSorted[index + 1] !== year + 1;
    const comma = yearsSorted.length !== index + 1 ? ', ' : '';

    if (noYearBefore && noYearAfter) message += `${year}${comma}`;
    else if (noYearBefore) message += `${year}`;
    else if (noYearAfter) message += `–${year}${comma}`;
  });

  return message;
}

export default getYearsActive;
