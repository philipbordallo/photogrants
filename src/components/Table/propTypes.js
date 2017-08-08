import T from 'prop-types';

export const HEADER_PROPTYPES = T.arrayOf(
	T.shape({
		name: T.string,
		width: T.number,
		algin: T.oneOf([
			'left',
			'right',
			'center'
		])
	})
);

export const SORT_DIRECTION_PROPTYPES = T.oneOf([
	'asc',
	'desc'
]);

export default {};