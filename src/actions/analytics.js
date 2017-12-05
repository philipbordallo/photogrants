/* eslint-disable import/prefer-default-export */
import Constants from 'api/constants';

const trackEvent = analytics => ({
	type: Constants.analytics.TRACK_EVENT,
	meta: {
		analytics
	}
});

const fireAnalyticsEvent = payload =>
	(dispatch) => {
		dispatch(trackEvent(payload));
	};

export {
	fireAnalyticsEvent
};
