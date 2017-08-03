import webpack from 'webpack';
import path from 'path';

const ENV = process.env.NODE_ENV;

const ROOT_PATH = path.resolve(__dirname, '..');
const APP_PATH = path.resolve(ROOT_PATH, 'src');

const PORT = 3000;

const LOADER = {
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
			configFile: path.resolve(ROOT_PATH, 'config', 'eslint.json')
		}
	},
	postcss: {
		loader: 'postcss-loader',
		options: {
			config: {
				path: path.resolve(ROOT_PATH, 'config', 'postcss.config.js')
			}
		}
	},
	style: {
		loader: 'style-loader',
		options: {
			sourceMap: true
		}
	}
}

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
		timings: true,
		chunks: false,
		children: false
	}
};

const config = {
	entry: {
		app: path.resolve(APP_PATH, 'entry.js')
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
	resolve: {
		extensions: ['.js', '.jsx', '.css'],
		alias: {
			assets: path.resolve(APP_PATH, 'assets'),
			components: path.resolve(APP_PATH, 'components'),
			layout: path.resolve(APP_PATH, 'layout')
		}
	},
	plugins: [
		new webpack.SourceMapDevToolPlugin({
			filename: '[file].map'
		}),
		new webpack.HotModuleReplacementPlugin()
	]
};

export default config;
