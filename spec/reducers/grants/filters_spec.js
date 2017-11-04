import test from 'ava';

import {
	filterTypes,
	filterStudents,
	filterAge,
	filterGenders,
	filterOrganizations,
	filterAwards
} from 'reducers/grants/filters';

test('Filter by types', t => {
	const data = [
		{ type: 'award' },
		{ type: 'residency' },
		{ type: 'award' },
		{ type: 'award' },
		{ type: 'residency' },
		{ type: 'residency' },
		{ type: 'award' },
		{ type: 'residency' },
		{ type: 'grant' },
		{ type: 'grant' },
	];

	const expectedAwards = [
		{ type: 'award' },
		{ type: 'award' },
		{ type: 'award' },
		{ type: 'award' }
	];

	const expectedResidencies = [
		{ type: 'residency' },
		{ type: 'residency' },
		{ type: 'residency' },
		{ type: 'residency' }
	];

	const expectedGrants = [
		{ type: 'grant' },
		{ type: 'grant' }
	];

	const expectedAwardsResidencies = [
		{ type: 'award' },
		{ type: 'residency' },
		{ type: 'award' },
		{ type: 'award' },
		{ type: 'residency' },
		{ type: 'residency' },
		{ type: 'award' },
		{ type: 'residency' }
	];

	const expectedNoFilters = [...data];

	t.deepEqual(filterTypes(data, ['award']), expectedAwards);
	t.deepEqual(filterTypes(data, ['residency']), expectedResidencies);
	t.deepEqual(filterTypes(data, ['grant']), expectedGrants);
	t.deepEqual(filterTypes(data, ['award', 'residency']), expectedAwardsResidencies);
	t.deepEqual(filterTypes(data, []), expectedNoFilters);
});

test('Filter by students', t => {
	const data = [
		{ eligibility: { students: 'ineligible' } },
		{ eligibility: { students: 'accepted' } },
		{ eligibility: { students: 'only' } },
		{ eligibility: { students: 'accepted' } },
		{ eligibility: { students: 'accepted' } },
		{ eligibility: { students: 'ineligible' } },
		{ eligibility: { students: 'ineligible' } },
		{ eligibility: { students: 'accepted' } },
		{ eligibility: { students: 'ineligible' } },
		{ eligibility: { students: 'only' } }
	];

	const expectedStudentsTrue = [
		{ eligibility: { students: 'accepted' } },
		{ eligibility: { students: 'only' } },
		{ eligibility: { students: 'accepted' } },
		{ eligibility: { students: 'accepted' } },
		{ eligibility: { students: 'accepted' } },
		{ eligibility: { students: 'only' } }
	];

	const expectedStudentsFalse = [
		{ eligibility: { students: 'ineligible' } },
		{ eligibility: { students: 'accepted' } },
		{ eligibility: { students: 'accepted' } },
		{ eligibility: { students: 'accepted' } },
		{ eligibility: { students: 'ineligible' } },
		{ eligibility: { students: 'ineligible' } },
		{ eligibility: { students: 'accepted' } },
		{ eligibility: { students: 'ineligible' } }
	];

	t.deepEqual(filterStudents(data, [true]), expectedStudentsTrue);
	t.deepEqual(filterStudents(data, [false]), expectedStudentsFalse);
});

test('Filter by age', t => {
	const data = [
		{ eligibility: { age: { from: null, to: null } } },
		{ eligibility: { age: { from: 18, to: null } } },
		{ eligibility: { age: { from: 21, to: null } } },
		{ eligibility: { age: { from: null, to: null } } },
		{ eligibility: { age: { from: 18, to: null } } },
		{ eligibility: { age: { from: 18, to: null } } },
		{ eligibility: { age: { from: null, to: 25 } } },
		{ eligibility: { age: { from: 60, to: null } } },
		{ eligibility: { age: { from: null, to: null } } },
		{ eligibility: { age: { from: null, to: null } } }
	];

	const expectedAge16 = [
		{ eligibility: { age: { from: null, to: null } } },
		{ eligibility: { age: { from: null, to: null } } },
		{ eligibility: { age: { from: null, to: 25 } } },
		{ eligibility: { age: { from: null, to: null } } },
		{ eligibility: { age: { from: null, to: null } } }
	];

	const expectedAge28 = [
		{ eligibility: { age: { from: null, to: null } } },
		{ eligibility: { age: { from: 18, to: null } } },
		{ eligibility: { age: { from: 21, to: null } } },
		{ eligibility: { age: { from: null, to: null } } },
		{ eligibility: { age: { from: 18, to: null } } },
		{ eligibility: { age: { from: 18, to: null } } },
		{ eligibility: { age: { from: null, to: null } } },
		{ eligibility: { age: { from: null, to: null } } }
	];

	const expectedAge65 = [
		{ eligibility: { age: { from: null, to: null } } },
		{ eligibility: { age: { from: 18, to: null } } },
		{ eligibility: { age: { from: 21, to: null } } },
		{ eligibility: { age: { from: null, to: null } } },
		{ eligibility: { age: { from: 18, to: null } } },
		{ eligibility: { age: { from: 18, to: null } } },
		{ eligibility: { age: { from: 60, to: null } } },
		{ eligibility: { age: { from: null, to: null } } },
		{ eligibility: { age: { from: null, to: null } } }
	];

	t.deepEqual(filterAge(data, 16), expectedAge16);
	t.deepEqual(filterAge(data, 28), expectedAge28);
	t.deepEqual(filterAge(data, 65), expectedAge65);
});

test('Filter by genders', t => {
	const data = [
		{ eligibility: { gender: 'all' } },
		{ eligibility: { gender: 'women' } },
		{ eligibility: { gender: 'all' } },
		{ eligibility: { gender: 'women' } },
		{ eligibility: { gender: 'women' } },
		{ eligibility: { gender: 'all' } },
		{ eligibility: { gender: 'all' } },
		{ eligibility: { gender: 'men' } },
		{ eligibility: { gender: 'all' } },
		{ eligibility: { gender: 'nonbinary' } }
	];

	const expectedMen = [
		{ eligibility: { gender: 'all' } },
		{ eligibility: { gender: 'all' } },
		{ eligibility: { gender: 'all' } },
		{ eligibility: { gender: 'all' } },
		{ eligibility: { gender: 'men' } },
		{ eligibility: { gender: 'all' } },
	];

	const expectedWomen = [
		{ eligibility: { gender: 'all' } },
		{ eligibility: { gender: 'women' } },
		{ eligibility: { gender: 'all' } },
		{ eligibility: { gender: 'women' } },
		{ eligibility: { gender: 'women' } },
		{ eligibility: { gender: 'all' } },
		{ eligibility: { gender: 'all' } },
		{ eligibility: { gender: 'all' } }
	];

	const expectedNonbinary = [
		{ eligibility: { gender: 'all' } },
		{ eligibility: { gender: 'all' } },
		{ eligibility: { gender: 'all' } },
		{ eligibility: { gender: 'all' } },
		{ eligibility: { gender: 'all' } },
		{ eligibility: { gender: 'nonbinary' } }
	];

	t.deepEqual(filterGenders(data, ['men']), expectedMen);
	t.deepEqual(filterGenders(data, ['women']), expectedWomen);
	t.deepEqual(filterGenders(data, ['nonbinary']), expectedNonbinary);
});

test('Filter by organizations', t => {
	const data = [
		{ organization: { name: 'Artadia' } },
		{ organization: { name: `Women's Studio Workshop` } },
		{ organization: { name: 'Artadia' } },
		{ organization: { name: `Women's Studio Workshop` } },
		{ organization: { name: 'American Academy in Rome' } },
		{ organization: { name: 'Artadia' } },
		{ organization: { name: 'Artist Trust' } },
		{ organization: { name: `Women's Studio Workshop` } },
		{ organization: { name: `Women's Studio Workshop` } },
		{ organization: { name: 'Alexia Foundation' } }
	];

	const expectedArtadia = [
		{ organization: { name: 'Artadia' } },
		{ organization: { name: 'Artadia' } },
		{ organization: { name: 'Artadia' } }
	];

	const expectedWSW = [
		{ organization: { name: `Women's Studio Workshop` } },
		{ organization: { name: `Women's Studio Workshop` } },
		{ organization: { name: `Women's Studio Workshop` } },
		{ organization: { name: `Women's Studio Workshop` } }
	];

	const expectedWSWAlexia = [
		{ organization: { name: `Women's Studio Workshop` } },
		{ organization: { name: `Women's Studio Workshop` } },
		{ organization: { name: `Women's Studio Workshop` } },
		{ organization: { name: `Women's Studio Workshop` } },
		{ organization: { name: 'Alexia Foundation' } }
	];

	t.deepEqual(filterOrganizations(data, ['Artadia']), expectedArtadia);
	t.deepEqual(filterOrganizations(data, [`Women's Studio Workshop`]), expectedWSW);
	t.deepEqual(filterOrganizations(data, [`Women's Studio Workshop`, 'Alexia Foundation']), expectedWSWAlexia);
});

test('Filter by awards', t => {
	const data = [
		{ awards: [
			{ amount: 0, mentorship: false, show: true, residency: false },
			{ amount: 2000, mentorship: true, show: false, residency: true }
		]},
		{ awards: [
			{ amount: 2000, mentorship: false, show: true, residency: false },
			{ amount: 500, mentorship: false, show: true, residency: false }
		]},
		{ awards: [
			{ amount: 1000, mentorship: true, show: true, residency: true },
			{ amount: 0, mentorship: true, show: true, residency: true }
		]},
		{ awards: [
			{ amount: 1000, mentorship: false, show: false, residency: true }
		]},
		{ awards: [
			{ amount: 0, mentorship: false, show: false, residency: true }
		]}
	];

	const expectedAmounts = [
		{ awards: [
			{ amount: 0, mentorship: false, show: true, residency: false },
			{ amount: 2000, mentorship: true, show: false, residency: true }
		]},
		{ awards: [
			{ amount: 2000, mentorship: false, show: true, residency: false },
			{ amount: 500, mentorship: false, show: true, residency: false }
		]},
		{ awards: [
			{ amount: 1000, mentorship: true, show: true, residency: true },
			{ amount: 0, mentorship: true, show: true, residency: true }
		]},
		{ awards: [
			{ amount: 1000, mentorship: false, show: false, residency: true }
		]}
	];

	const expectedResidencies = [
		{ awards: [
			{ amount: 0, mentorship: false, show: true, residency: false },
			{ amount: 2000, mentorship: true, show: false, residency: true }
		]},
		{ awards: [
			{ amount: 1000, mentorship: true, show: true, residency: true },
			{ amount: 0, mentorship: true, show: true, residency: true }
		]},
		{ awards: [
			{ amount: 1000, mentorship: false, show: false, residency: true }
		]},
		{ awards: [
			{ amount: 0, mentorship: false, show: false, residency: true }
		]}
	];

	const expectedMentorships = [
		{ awards: [
			{ amount: 0, mentorship: false, show: true, residency: false },
			{ amount: 2000, mentorship: true, show: false, residency: true }
		]},
		{ awards: [
			{ amount: 1000, mentorship: true, show: true, residency: true },
			{ amount: 0, mentorship: true, show: true, residency: true }
		]}
	];

	const expectedShows = [
		{ awards: [
			{ amount: 0, mentorship: false, show: true, residency: false },
			{ amount: 2000, mentorship: true, show: false, residency: true }
		]},
		{ awards: [
			{ amount: 2000, mentorship: false, show: true, residency: false },
			{ amount: 500, mentorship: false, show: true, residency: false }
		]},
		{ awards: [
			{ amount: 1000, mentorship: true, show: true, residency: true },
			{ amount: 0, mentorship: true, show: true, residency: true }
		]}
	];

	t.deepEqual(filterAwards(data, ['amount']), expectedAmounts);
	t.deepEqual(filterAwards(data, ['residency']), expectedResidencies);
	t.deepEqual(filterAwards(data, ['mentorship']), expectedMentorships);
	t.deepEqual(filterAwards(data, ['show']), expectedShows);
});
