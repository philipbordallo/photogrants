module.exports = {
	map: true,
	plugins: {
		'postcss-import': {
		  path: ['src/assets/']
		},
		'autoprefixer': {
			cascade: false
		},
		'postcss-nesting': {},
		'postcss-discard-comments': {},
		'postcss-custom-properties': {},
		'postcss-custom-media': {},
		'postcss-media-minmax': {},
		'postcss-pseudoelements': {},
		'postcss-pxtorem': {},
		'postcss-font-family-system-ui': {},
		'postcss-font-smoothing': {},
		'postcss-font-weights': {}
	}
};
