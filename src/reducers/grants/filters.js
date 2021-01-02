// Filter collection by types
// Takes a `collection` and an array `types` of strings
// Returns a filtered `collection`
export function filterTypes(collection, types) {
  if (types.length > 0) {
    return collection.filter(item => types.some(type => item.type === type));
  }

  return collection;
}

// Filter collection by student yes ['accepted', 'only'] or no ['accepted', 'ineligible']
// Takes a `collection` and a boolean `studentsBool`
// Returns a filtered `collection`
export function filterStudents(collection, studentsBool) {
  if (studentsBool.length > 0) {
    return collection.filter((item) => {
      const { eligibility: { students } } = item;
      if (studentsBool[0]) {
        return students === 'accepted' || students === 'only';
      }

      return students === 'accepted' || students === 'ineligible';
    });
  }

  return collection;
}

// Filter collection by age
// Takes a `collection ` and a string `value`
// Returns a filtered `collection`
export function filterAge(collection, value) {
  const age = Number(value);
  if (age > 0) {
    return collection.filter((item) => {
      const { eligibility } = item;
      const from = Number(eligibility.age.from);
      const to = eligibility.age.to ? Number(eligibility.age.to) : Infinity;

      return age >= from && age <= to;
    });
  }

  return collection;
}

// Filter collection by gender
// Takes a `collection` and an array `genders` of strings
// Returns a filtered `collection`
export function filterGenders(collection, genders) {
  if (genders.length > 0) {
    const genderList = ['all'].concat(genders);
    return collection.filter(item => genderList.some(gender => item.eligibility.gender === gender));
  }

  return collection;
}

// Filter collection by organizations
// Takes a `collection` and an array `organizations` of strings
// Returns a filtered `collection`
export function filterOrganizations(collection, organizations) {
  return collection.filter(
    item => organizations.some(organzation => item.organization.name === organzation),
  );
}

// Filter collection by awards
// Takes a `collection` and an array `awards` of strings
// Returns a filtered `collection`
export function filterAwards(collection, awards) {
  if (awards.length > 0) {
    return collection.filter(item => item.awards.some(
      itemAward => awards.some(award => itemAward[award]),
    ));
  }

  return collection;
}

export function filterCollection(collection, filters) {
  return filters.reduce((array, { name, values }) => {
    if (name === 'type') {
      return filterTypes(array, values);
    }
    if (name === 'student') {
      return filterStudents(array, values);
    }
    if (name === 'gender') {
      return filterGenders(array, values);
    }
    if (name === 'age') {
      return filterAge(array, values);
    }
    if (name === 'awards') {
      return filterAwards(array, values);
    }

    return array;
  }, collection);
}
