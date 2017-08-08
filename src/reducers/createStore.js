import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import grants from './grants';

const rootReducer = combineReducers({
	grants
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;
