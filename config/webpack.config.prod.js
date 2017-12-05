const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const { LOADER, RESOLVER, ROOT_PATH, APP_PATH, DIST_PATH, DEFINE_ENV } = require('./helpers');


const RULES = {
	jsx: {
		test: /\.(js|jsx)$/,
		exclude: /node_modules/,
		use: [
			LOADER.babel
		]
	},
	css: {
		test: /\.css$/,
		use: ExtractTextPlugin.extract({
			fallback: LOADER.style,
			use: [
				LOADER.css,
				LOADER.postcss
			]
		})
	},
	html: {
		test: /\.html$/,
		use: [
			LOADER.handlebars
		]
	}
};

module.exports = {
	entry: {
		app: path.resolve(APP_PATH, 'entry.js')
	},
	output: {
		path: DIST_PATH,
		filename: 'bundle.js'
	},
	module: {
		rules: [
			RULES.jsx,
			RULES.css,
			RULES.html
		]
	},
	resolve: RESOLVER,
	stats: {
		children: false,
		colors: true,
		maxModules: 0,
		modules: true
	},
	plugins: [
		new webpack.DefinePlugin(DEFINE_ENV),
		new HTMLWebpackPlugin({
			template: path.resolve(APP_PATH, 'entry.html.js'),
			inject: false,
			minify: false
		}),
		new ExtractTextPlugin({
			filename: 'styles.css'
		}),
		new webpack.SourceMapDevToolPlugin({
			test: /\.(js|jsx)$/,
			filename: '[file].map'
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: false
		})
	]
};
