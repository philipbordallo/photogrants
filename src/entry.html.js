import template from './template.html';

import svg from './assets/favicons/favicon.svg';
import sixteen from './assets/favicons/favicon_16.png';
import thirtyTwo from './assets/favicons/favicon_32.png';
import ninetySix from './assets/favicons/favicon_96.png';

const html = template({
  title: 'photogrants',
  description: 'A sortable list of current photography grants, awards, and residencies. Find grants relevant to you and your photography projects.',
  favicon: {
    sixteen,
    thirtyTwo,
    ninetySix,
  },
  maskIcon: {
    color: 'white',
    svg,
  },
  analytics: process.env.NODE_ENV === 'production',
  stylesheet: process.env.NODE_ENV === 'production',
});

export default html;
