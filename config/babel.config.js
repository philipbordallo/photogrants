const path = require('path');

const presetENV = require('babel-preset-env').default;
const presetStage2 = require.resolve('babel-preset-stage-2');
const presetReact = require.resolve('babel-preset-react');

const pluginModuleResolver = require('babel-plugin-module-resolver').default;
const reactHotLoader = require.resolve('react-hot-loader/babel');

const { ROOT_PATH, APP_PATH } = require('./helpers');


const ENV = process.env.NODE_ENV;

if (ENV !== 'development' && ENV !== 'production' && ENV !== 'test' && ENV !== 'data') {
	throw new Error('Please set the correct NODE_ENV');
}

const getPresetENVOptions = () => {
	if (ENV === 'development' || ENV === 'production') {
		return {
			'useBuiltIns': true,
			'modules': false
		};
	}

	return {};
};

const presets = [
	[presetENV, getPresetENVOptions()],
	presetStage2,
	presetReact
];
const plugins = [];

if (ENV === 'development') {
	plugins.push.apply(plugins, [
		reactHotLoader
	]);
}

if (ENV === 'test') {
	plugins.push.apply(plugins, [
		[pluginModuleResolver, {
			root: [
				APP_PATH
			],
			alias: {
				data: path.resolve(ROOT_PATH, 'data')
			}
		}]
	]);
}

module.exports = {
	presets,
	plugins
};
