const TRACKING_ID = process.env.GA_ID;

class Analytics {
  constructor() {
    this.errors = (window.__e && window.__e.q) || []; // eslint-disable-line no-underscore-dangle
  }

  static sendEvent(data) {
    const eventData = {
      ...data,
      hitType: 'event',
    };

    if (window.ga) window.ga('send', eventData);
  }

  static pageView() {
    if (window.ga) window.ga('send', 'pageview');
  }

  static trackError(error = {}) {
    Analytics.sendEvent({
      eventCategory: 'Error',
      eventAction: error.name || '(no error name)',
      eventLabel: `${error.message} – ${error.stack || '(no stack trace)'}`,
      nonInteraction: true,
    });
  }

  static createTracker() {
    window.ga('create', TRACKING_ID, 'auto');
    window.ga('set', 'transport', 'beacon');
  }

  static handleErrors(event) {
    const message = `${event.message} (${event.lineno}:${event.colno})`;
    const error = event.error || { message };

    Analytics.trackError(error);
  }

  collectErrors() {
    this.errors.forEach((event) => {
      Analytics.handleErrors(event);
    });

    window.addEventListener('error', Analytics.handleErrors);
  }

  init() {
    // eslint-disable-next-line no-return-assign, no-undef
    window.ga = window.ga || ((...args) => (ga.q = ga.q || []).push(args));

    Analytics.createTracker();
    this.collectErrors();

    Analytics.pageView();
  }
}

export default Analytics;
