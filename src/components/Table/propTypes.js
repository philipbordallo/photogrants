/* eslint import/prefer-default-export:0 */
import T from 'prop-types';

export const SHAPE_CONFIG_PROPTYPES = {
	name: T.string,
	title: T.string,
	width: T.number,
	sortable: T.arrayOf(T.string),
	renderer: T.func
};

export const CONFIG_PROPTYPES = T.arrayOf(
	T.shape(SHAPE_CONFIG_PROPTYPES)
);

export const SORT_DIRECTION_PROPTYPES = T.oneOf([
	'asc',
	'desc'
]);
