const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const {
  LOADER, RESOLVER, APP_PATH, DIST_PATH, DEFINE_ENV,
} = require('./helpers');


const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

const RULES = {
  jsx: {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [
      LOADER.babel,
      isDevelopment && LOADER.eslint,
    ].filter(Boolean),
  },
  css: {
    test: /\.css$/,
    use: [
      isProduction
        ? MiniCssExtractPlugin.loader
        : LOADER.style,
      LOADER.css,
      LOADER.postcss,
    ].filter(Boolean),
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
  mode: process.env.NODE_ENV,
  target: 'web',
  entry: {
    app: path.resolve(APP_PATH, 'entry.js'),
  },
  output: {
    path: DIST_PATH,
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: isDevelopment ? DEV_SERVER : {},
  module: {
    rules: [
      RULES.jsx,
      RULES.css,
      RULES.html,
      RULES.images,
    ],
  },
  resolve: RESOLVER,
  stats: {
    children: false,
    colors: true,
    modules: true,
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new webpack.DefinePlugin(DEFINE_ENV),
    new CopyWebpackPlugin({
      patterns: [
        'src/assets/favicons/favicon.ico',
      ],
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(APP_PATH, 'entry.html.js'),
      inject: false,
      minify: false,
    }),
    new webpack.SourceMapDevToolPlugin({
      test: /\.(js|jsx)$/,
      filename: '[file].map',
    }),
    isProduction && new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
};
