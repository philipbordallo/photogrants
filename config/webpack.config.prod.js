const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const { LOADER, RESOLVER, ROOT_PATH, APP_PATH } = require('./utilities');
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
		path: ROOT_PATH,
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
		colors: true,
		modules: false
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
