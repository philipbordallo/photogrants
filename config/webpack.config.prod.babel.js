import webpack from 'webpack';
import path from 'path';

import { LOADER, RESOLVER } from './utilities';

const ROOT_PATH = path.resolve(__dirname, '..');
const APP_PATH = path.resolve(ROOT_PATH, 'src');

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
		use: [
			LOADER.style,
			LOADER.css,
			LOADER.postcss
		]
	}
};

const production = {
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
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new webpack.SourceMapDevToolPlugin({
			filename: '[file].map'
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: false
		})
	]
};

export default production;
