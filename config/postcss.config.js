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
		'postcss-custom-properties': {},
		'postcss-custom-media': {},
		'postcss-media-minmax': {},
		'postcss-pseudoelements': {},
		'postcss-pxtorem': {},
		'postcss-hexrgba': {},
		'postcss-font-family-system-ui': {},
		'postcss-font-smoothing': {},
		'postcss-font-weights': {},
		'csswring': {
			removeAllComments: true
		}
	}
};
