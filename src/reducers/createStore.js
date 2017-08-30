import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import grants from './grants';


const INITIAL_STATE = {};

const rootReducer = combineReducers({
	grants
});

const middleware = [
	thunk
];

const store = createStore(
	rootReducer,
	INITIAL_STATE,
	composeWithDevTools(
		applyMiddleware(...middleware)
	)
);

export default store;
