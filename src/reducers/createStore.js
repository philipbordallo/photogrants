import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import thunkMiddleware from 'redux-thunk';
import analyticsMiddleware from 'api/analyticsMiddleware';

import grants from './grants';


const INITIAL_STATE = {};

const rootReducer = combineReducers({
	grants
});

const getMiddleware = (env) => {
	const middleware = [
		thunkMiddleware
	];

	if (env === 'production') {
		middleware.push(analyticsMiddleware);
	}

	return middleware;
};

const middleware = getMiddleware(process.env.NODE_ENV);

const store = createStore(
	rootReducer,
	INITIAL_STATE,
	composeWithDevTools(
		applyMiddleware(...middleware)
	)
);

export default store;
