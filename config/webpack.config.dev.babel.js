import webpack from 'webpack';
import path from 'path';

import { LOADER, RESOLVER } from './utilities';

const ROOT_PATH = path.resolve(__dirname, '..');
const APP_PATH = path.resolve(ROOT_PATH, 'src');

const PORT = 3000;

const RULES = {
	jsx: {
		test: /\.(js|jsx)$/,
		exclude: /node_modules/,
		use: [
			LOADER.babel,
			LOADER.eslint
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

const DEV_SERVER = {
	compress: true,
	headers: {
		'Access-Control-Allow-Origin': '*'
	},
	historyApiFallback: true,
	host: 'localhost',
	hot: true,
	inline: true,
	port: PORT,
	stats: {
		assets: true,
		children: false,
		chunks: false,
		modules: false,
		timings: true
	}
};

const development = {
	entry: {
		app: path.resolve(APP_PATH, 'entry.dev.js')
	},
	output: {
		path: APP_PATH,
		filename: 'bundle.js',
		publicPath: `http://localhost:${PORT}/`
	},
	devServer: DEV_SERVER,
	module: {
		rules: [
			RULES.jsx,
			RULES.css
		]
	},
	resolve: RESOLVER,
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		}),
		new webpack.SourceMapDevToolPlugin({
			test: /\.(js|jsx)$/,
			filename: '[file].map'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	]
};

export default development;
