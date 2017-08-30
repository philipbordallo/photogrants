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
	}
};

export const RESOLVER = {
	extensions: ['.js', '.jsx', '.css'],
	modules: [APP_PATH, 'node_modules']
};