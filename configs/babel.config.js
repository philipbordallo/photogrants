const path = require('path');
const { ROOT_PATH, APP_PATH } = require('./helpers');


const ENV = process.env.NODE_ENV;

if (
  ENV !== 'development'
  && ENV !== 'production'
  && ENV !== 'test'
  && ENV !== 'data'
) {
  throw new Error('Please set the correct NODE_ENV');
}

module.exports = () => ({
  presets: [
    ['@babel/preset-env', {
      shippedProposals: true,
    }],
    '@babel/react',
  ],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        root: APP_PATH,
        alias: {
          data: path.resolve(ROOT_PATH, 'data'),
        },
      },
    ],
    ENV === 'development' && 'react-hot-loader/babel',
  ].filter(Boolean),
});
