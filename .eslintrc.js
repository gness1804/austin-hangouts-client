module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-restricted-globals': 'warn',
    'no-plusplus': 'off',
    'space-infix-ops': 'warn',
    'no-underscore-dangle': 'off',
    'max-len': 'off',
    'no-alert': 'off',
  }
}
