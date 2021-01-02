module.exports = {
  extends: '@philipbordallo/react',
  parser: 'babel-eslint',
  plugins: [
    'eslint-plugin-import',
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-react',
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'configs/webpack.config.dev.js',
      },
    },
    'import/extensions': ['.js', '.jsx', '.css'],
  },
  rules: {
    'react/forbid-elements': 0,
  },
};
