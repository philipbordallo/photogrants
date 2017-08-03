module.exports = {
	map: true,
	plugins: {
		'autoprefixer': {
			cascade: false
		},
		'postcss-import': {
		  path: ['src/assets/']
		},
		'postcss-discard-comments': {},
		'postcss-custom-properties': {},
		'postcss-custom-media': {},
		'postcss-media-minmax': {},
		'postcss-pseudoelements': {},
		'postcss-nesting': {},
		'postcss-pxtorem': {},
		'postcss-font-smoothing': {},
		'postcss-font-weights': {},
		'postcss-normalize-whitespace': {}
	}
};
