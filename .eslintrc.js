// module.exports = {
//   root         : true,
//   globals      : {
//     'AppUtils' : false,
//     'jsBridge' : false,
//     '$'        : false,
//     'module'   : false,
//     'document' : false,
//     'Vue'      : false,
//     'VueRouter': false,
//     'Vuex'     : false,
//     'vant'     : false,
//     'axios'    : false,
//     'dayjs'    : false,
//     '_util'    : false
//   },
//   env          : {
//     browser : true,
//     node    : true,
//     es6     : true,
//     amd     : true,
//     commonjs: true
//   },
//   extends      : [
//     'plugin:vue/essential',
//     'eslint:recommended'
//   ],
//   rules        : {
//     'no-console' : process.env.NODE_ENV === 'production' ? 'error' : 'off',
//     'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
//   },
//   parserOptions: {
//     parser     : 'babel-eslint',
//     ecmaVersion: 6,
//     sourceType : 'module'
//   }
// }
module.exports = {
  root: true,
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-parsing-error': [2, {
      'x-invalid-end-tag': false
    }],
    'vue/no-unused-components': 'off',
    'no-undef': 'off',
    camelcase: 'off',
    'no-tabs': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}

