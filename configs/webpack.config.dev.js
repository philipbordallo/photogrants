const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const {
  LOADER, RESOLVER, APP_PATH, DIST_PATH, DEFINE_ENV,
} = require('./helpers');


const RULES = {
  jsx: {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [
      LOADER.babel,
      LOADER.eslint,
    ],
  },
  css: {
    test: /\.css$/,
    use: [
      LOADER.style,
      LOADER.css,
      LOADER.postcss,
    ],
  },
  html: {
    test: /\.html$/,
    use: [
      LOADER.handlebars,
    ],
  },
  images: {
    test: /\.(png|jpeg|svg)$/,
    type: 'asset/resource',
  },
};

const DEV_SERVER = {
  compress: true,
  contentBase: DIST_PATH,
  historyApiFallback: true,
  host: 'localhost',
  hot: true,
  inline: true,
  port: 3000,
  stats: {
    assets: true,
    children: false,
    chunks: false,
    modules: false,
    timings: true,
  },
};

module.exports = {
  entry: {
    app: path.resolve(APP_PATH, 'entry.dev.js'),
  },
  output: {
    path: APP_PATH,
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: DEV_SERVER,
  module: {
    rules: [
      RULES.jsx,
      RULES.css,
      RULES.html,
      RULES.images,
    ],
  },
  resolve: RESOLVER,
  plugins: [
    new webpack.DefinePlugin(DEFINE_ENV),
    new webpack.SourceMapDevToolPlugin({
      test: /\.(js|jsx)$/,
      filename: '[file].map',
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(APP_PATH, 'entry.html.js'),
      inject: false,
      minify: false,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
