import 'babel-polyfill'; // babel-env option { "debug": true } to see polyfills used

import 'whatwg-fetch'; // Polyfil for `window.fetch`
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();
