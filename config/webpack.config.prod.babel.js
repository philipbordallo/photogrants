import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

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
		use: ExtractTextPlugin.extract({
			fallback: LOADER.style,
			use: [
				LOADER.css,
				LOADER.postcss
			]
		})
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
	stats: {
		colors: true,
		modules: false
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
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

export default production;
