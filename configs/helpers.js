const path = require('path');


const ROOT_PATH = path.resolve(__dirname, '..');
const CONFIG_PATH = path.resolve(ROOT_PATH, 'configs');
const APP_PATH = path.resolve(ROOT_PATH, 'src');
const DIST_PATH = path.resolve(ROOT_PATH, 'dist');
const DATA_PATH = path.resolve(ROOT_PATH, 'data');

const LOADER = {
  babel: {
    loader: 'babel-loader',
  },
  css: {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: '[folder]__[local]__[hash:base64:5]',
      },
      importLoaders: 1,
    },
  },
  eslint: {
    loader: 'eslint-loader',
    options: {
      configFile: path.resolve(CONFIG_PATH, 'eslint.config.js'),
    },
  },
  handlebars: {
    loader: 'handlebars-loader',
  },
  postcss: {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        config: CONFIG_PATH,
      },
    },
  },
  style: {
    loader: 'style-loader',
  },
};

const RESOLVER = {
  extensions: ['.js', '.jsx', '.css'],
  modules: [APP_PATH, 'node_modules'],
};

const DEFINE_ENV = {
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  'process.env.GA_ID': JSON.stringify(process.env.GA_ID),
};

module.exports = {
  DEFINE_ENV,
  ROOT_PATH,
  CONFIG_PATH,
  APP_PATH,
  DIST_PATH,
  DATA_PATH,
  LOADER,
  RESOLVER,
};
