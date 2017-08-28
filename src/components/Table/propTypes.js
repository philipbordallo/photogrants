import T from 'prop-types';

const SHAPE_CONFIG_PROPTYPES = {
	name: T.string,
	title: T.string,
	width: T.number,
	sortable: T.arrayOf(T.string),
	renderer: T.func
};

const CONFIG_PROPTYPES = T.arrayOf(
	T.shape(SHAPE_CONFIG_PROPTYPES)
);

const SORT_DIRECTION_PROPTYPES = T.oneOf([
	'asc',
	'desc'
]);

export {
	SHAPE_CONFIG_PROPTYPES,
	CONFIG_PROPTYPES,
	SORT_DIRECTION_PROPTYPES
};
