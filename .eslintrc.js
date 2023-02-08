module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-restricted-syntax': 'off',
    'import/no-dynamic-require': 'off',
    'global-require': 'off',
    'no-console': 'off',
  },
}
