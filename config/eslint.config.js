module.exports = {
  extends: '@philipbordallo/react',
  settings: {
    'import/resolver':{
      webpack: {
        config: 'config/webpack.config.dev.js'
      }
    },
    'import/extensions': [
      '.js',
      '.jsx',
      '.css'
    ]
  },
}
