import path from 'path';

const ROOT_PATH = path.resolve(__dirname, '..');
const CONFIG_PATH = path.resolve(ROOT_PATH, 'config');
const APP_PATH = path.resolve(ROOT_PATH, 'src');

export const LOADER = {
	babel: {
		loader: 'babel-loader'
	},
	css: {
		loader: 'css-loader',
		options: {
			modules: true,
			importLoaders: 1,
			localIdentName: '[folder]__[local]__[hash:base64:5]'
		}
	},
	eslint: {
		loader: 'eslint-loader',
		options: {
			configFile: path.resolve(CONFIG_PATH, 'eslint.json')
		}
	},
	postcss: {
		loader: 'postcss-loader',
		options: {
			config: {
				path: path.resolve(CONFIG_PATH, 'postcss.config.js')
			}
		}
	},
	style: {
		loader: 'style-loader',
		options: {
			sourceMap: true
		}
	}
};

export const RESOLVER = {
	extensions: ['.js', '.jsx', '.css'],
	alias: {
		actions: path.resolve(APP_PATH, 'actions'),
		api: path.resolve(APP_PATH, 'api'),
		assets: path.resolve(APP_PATH, 'assets'),
		components: path.resolve(APP_PATH, 'components'),
		containers: path.resolve(APP_PATH, 'containers'),
		layout: path.resolve(APP_PATH, 'layout'),
		polyfills: path.resolve(APP_PATH, 'polyfills'),
		reducers: path.resolve(APP_PATH, 'reducers'),
		utilities: path.resolve(APP_PATH, 'utilities')
	}
};
