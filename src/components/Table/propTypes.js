/* eslint import/prefer-default-export:0 */
import T from 'prop-types';

export const CONFIG_PROPTYPES = T.arrayOf(
	T.shape({
		name: T.string,
		width: T.number,
		algin: T.oneOf([
			'left',
			'right',
			'center'
		]),
		renderer: T.func
	})
);

export const SORT_DIRECTION_PROPTYPES = T.oneOf([
	'asc',
	'desc'
]);
