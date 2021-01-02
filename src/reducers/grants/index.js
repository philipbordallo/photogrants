import Constants from 'api/constants';
import createReducer from 'reducers/createReducer';

import setCollection from './setCollection';
import sortCollection from './sortCollection';
import toggleCollection from './toggleCollection';

import { filterCollection } from './filters';
import toggleFilters from './toggleFilters';


const DEFAULT_STATE = {
  currentSort: 'deadline',
  sortDirection: 'desc',
  collection: [],
  initialCollection: [],
  filters: [],
};

const grants = createReducer(DEFAULT_STATE, {
  [Constants.grants.FILTER_TABLE](state, action) {
    const filters = toggleFilters(state, action);
    const filteredCollection = filterCollection(state.initialCollection, filters);
    const sortedCollection = sortCollection(filteredCollection, state);

    return {
      ...state,
      filters,
      collection: sortedCollection,
    };
  },

  [Constants.grants.SORT_TABLE]: (state, action) => ({
    ...state,
    collection: sortCollection(state.collection, action),
    currentSort: action.currentSort,
    sortDirection: action.sortDirection,
  }),

  [Constants.grants.TOGGLE_ROW]: (state, action) => ({
    ...state,
    collection: toggleCollection(state, action),
  }),

  [Constants.grants.LOAD_DATA_SUCCESS](state, action) {
    const collection = setCollection(action.data);

    return {
      ...state,
      initialCollection: collection,
      collection,
    };
  },
});

export default grants;
