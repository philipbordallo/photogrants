import Analytics from 'api/Analytics';


const analyticsMiddleware = () => next => (action) => {
	if (typeof action.meta !== 'object' || typeof action.meta.analytics !== 'object') {
		return next(action);
	}

	Analytics.sendEvent(action.meta.analytics);
	return next(action);
};

export default analyticsMiddleware;
