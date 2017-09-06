const webpack = require('webpack');
const path = require('path');
const os = require('os');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const { LOADER, RESOLVER, ROOT_PATH, APP_PATH, DIST_PATH } = require('./helpers');
const ENV = process.env.NODE_ENV;


const ip = os.networkInterfaces().en0.filter(interface => interface.family === 'IPv4')[0];
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
	},
	html: {
		test: /\.html$/,
		use: [
			LOADER.handlebars
		]
	}
};

const DEV_SERVER = {
	allowedHosts: [
		ip.address
	],
	compress: true,
	contentBase: DIST_PATH,
	historyApiFallback: true,
	host: '0.0.0.0',
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
		publicPath: `/`
	},
	devServer: DEV_SERVER,
	module: {
		rules: [
			RULES.jsx,
			RULES.css,
			RULES.html
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
		new HTMLWebpackPlugin({
			template: path.resolve(APP_PATH, 'entry.html.js'),
			inject: false,
			minify: false
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	]
};
