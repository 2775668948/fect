module.exports = {
  root: true,
  env: {
    node: true,
  },
  // , "@vue/prettier"
  extends: ['plugin:vue/vue3-essential', 'kagura'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};