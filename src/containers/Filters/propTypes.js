import T from 'prop-types';

const VALUES_PROPTYPES = T.arrayOf(
  T.oneOfType([
    T.string,
    T.bool,
  ]),
);

const FILTERS_PROPTYPES = T.arrayOf(
  T.shape({
    name: T.string,
    values: VALUES_PROPTYPES,
  }),
);

export {
  FILTERS_PROPTYPES,
  VALUES_PROPTYPES,
};
