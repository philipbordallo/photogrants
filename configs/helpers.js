const path = require('path');

const ROOT_PATH = path.resolve(__dirname, '..');
const CONFIG_PATH = path.resolve(ROOT_PATH, 'config');
const APP_PATH = path.resolve(ROOT_PATH, 'src');
const DIST_PATH = path.resolve(ROOT_PATH, 'dist');

const LOADER = {
  babel: {
    loader: 'babel-loader'
  },
  css: {
    loader: 'css-loader',
    options: {
      modules: true,
      importLoaders: 1,
      localIdentName: '[folder]__[local]__[hash:base64:5]'
    }
  },
  eslint: {
    loader: 'eslint-loader',
    options: {
      configFile: path.resolve(CONFIG_PATH, 'eslint.config.js')
    }
  },
  handlebars: {
    loader: 'handlebars-loader'
  },
  images: {
    loader: 'file-loader',
    options: {
      name: '[name].[ext]'
    }
  },
  postcss: {
    loader: 'postcss-loader',
    options: {
      config: {
        path: path.resolve(CONFIG_PATH, 'postcss.config.js')
      }
    }
  },
  style: {
    loader: 'style-loader',
  }
};

const RESOLVER = {
  extensions: ['.js', '.jsx', '.css'],
  modules: [APP_PATH, 'node_modules']
};

const DEFINE_ENV = {
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  'process.env.GA_ID': JSON.stringify(process.env.GA_ID)
};

module.exports = {
  DEFINE_ENV,
  ROOT_PATH,
  CONFIG_PATH,
  APP_PATH,
  DIST_PATH,
  LOADER,
  RESOLVER,
}
