/*
 * Author: 朱世新
 * Date: 2021-03-11 16:45:18
 * LastEditors: 朱世新
 * LastEditTime: 2021-03-11 16:45:28
 * Description: 
*/
module.exports = {
  root: true,
  env: {
      node: true
  },
  'extends': [
      'plugin:vue/essential',
      'eslint:recommended'
  ],
  rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-undef': 'off',
      'vue/no-unused-vars': 'off',
      'vue/require-v-for-key': 'off',
      'no-unused-vars': 'off',
      'vue/no-unused-components': 'off'
  },
  parserOptions: {
      parser: 'babel-eslint'
  }
}