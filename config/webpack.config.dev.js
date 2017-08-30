const webpack = require('webpack');
const path = require('path');

const { LOADER, RESOLVER, ROOT_PATH, APP_PATH } = require('./utilities');
const ENV = process.env.NODE_ENV;


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

module.exports = {
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
			'process.env.NODE_ENV': JSON.stringify(ENV)
		}),
		new webpack.SourceMapDevToolPlugin({
			test: /\.(js|jsx)$/,
			filename: '[file].map'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	]
};
