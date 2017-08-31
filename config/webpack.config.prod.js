const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const { LOADER, RESOLVER, ROOT_PATH, APP_PATH, DIST_PATH } = require('./utilities');
const ENV = process.env.NODE_ENV;


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
			RULES.css
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
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(ENV)
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
