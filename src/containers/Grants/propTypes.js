/* eslint import/prefer-default-export:0 */
import T from 'prop-types';

const CURRENCY_PROPTYPES = T.oneOf([
	'USD'
]);

export const DATA_PROPTYPES = T.shape({
	active: T.bool,
	type: T.oneOf([
		'grant',
		'award',
		'residency'
	]),
	slug: T.string,
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
		age: T.number,
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
		T.shape({
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
		})
	)
});

export const COLLECTION_PROPTYPES = T.arrayOf(
	DATA_PROPTYPES
);
