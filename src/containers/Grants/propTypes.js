import T from 'prop-types';

const CURRENCY_PROPTYPES = T.oneOf([
	'USD'
]);

const AWARD_PROPTYPES = T.shape({
	given: T.number,
	amount: T.number,
	amountType: T.oneOf([
		'exact',
		'upto'
	]),
	currency: CURRENCY_PROPTYPES,
	mentorship: T.bool,
	show: T.bool,
	residency: T.bool
});

const DATA_PROPTYPES = T.shape({
	active: T.bool,
	type: T.oneOf([
		'grant',
		'award',
		'residency'
	]),
	slug: T.string,
	organization: T.shape({
		name: T.string,
		nickname: T.string,
		url: T.string
	}),
	name: T.string,
	url: T.string,
	applicationUrl: T.string,
	yearsAtive: T.arrayOf(
		T.number
	),
	date: T.shape({
		call: T.string,
		deadline: T.string
	}),
	description: T.string,
	eligibility: T.shape({
		age: T.shape({
			from: T.number,
			to: T.number
		}),
		gender: T.oneOf([
			'men',
			'women',
			'nonbinary',
			'all'
		]),
		students: T.bool,
		description: T.sting
	}),
	fee: T.shape({
		amount: T.number,
		currency: CURRENCY_PROPTYPES
	}),
	awards: T.arrayOf(
		AWARD_PROPTYPES
	),
	scrollable: T.bool,
	show: T.oneOf([
		'details',
		'overview'
	])
});

const COLLECTION_PROPTYPES = T.arrayOf(
	DATA_PROPTYPES
);

export {
	AWARD_PROPTYPES,
	DATA_PROPTYPES,
	COLLECTION_PROPTYPES
};
