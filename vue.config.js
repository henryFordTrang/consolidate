// const theme = require('./src/theme/theme.less')
// import proxyInfo from './src/util/settingInfo.js'
const globalLessVal = require('./src/style/globalLessVal')
const devPath = {
  name: '/',
  path: ''
  // name: '/audio',
  // path: '/test'
}
const explugin = [
  'http://g.alicdn.com/fdilab/lib3rd/viewport-units-buggyfill/0.6.2/??viewport-units-buggyfill.hacks.min.js,viewport-units-buggyfill.min.js',
  './static/js/jquery-1.10.0.min.js',
  './static/js/cxBridge.js',
  './static/js/cxPrototype.js',
  './static/js/test.js',
  'https://gw.alipayobjects.com/as/g/h5-lib/alipayjsapi/3.1.1/alipayjsapi.inc.min.js"',
  'https://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/vconsole/3.0.0/vconsole.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/echarts/4.3.0/echarts.min.js'
]
// 'http://g.alicdn.com/fdilab/lib3rd/viewport-units-buggyfill/0.6.2/??viewport-units-buggyfill.hacks.min.js,viewport-units-buggyfill.min.js',
//   './static/lib/jquery/jquery-1.10.0.min.js',
//   './static/lib/chaoxing/CXJSBridge.js',
//   './static/lib/chaoxing/app.utils.js',
//   './static/lib/echarts/echarts-custom-4.5.0.min.js'
// './public/static/js/jquery-1.10.0.min.js',
//   './public/static/js/cxBridge.js',
//   './public/static/js/cxPrototype.js',
//   './public/static/js/test.js',
//   'https://gw.alipayobjects.com/as/g/h5-lib/alipayjsapi/3.1.1/alipayjsapi.inc.min.js"',
//   'https://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/vconsole/3.0.0/vconsole.min.js'
const path = require('path')
const externals = {

}
function resolve (dir) {
  return path.join(__dirname, dir)
}
// const isProduction = process.env.NODE_ENV === 'production'
module.exports = {
  // 基本Url
  publicPath: process.env.NODE_ENV === 'production' ? '././' : `${devPath.name}${devPath.path}`,
  // 打包Map
  productionSourceMap: false,

  // 打包路径
  outputDir: 'advance',
  devServer: {
    disableHostCheck: true,
    port: 9090,
    // port:proxyInfo.port,
    // 跨域代理

    proxy: {
      [`^${devPath.name}`]: {
        target: 'http://192.168.10.54:8080',
        ws: true,
        changeOrigin: true
      }
    }
  },
  // css: {
  //   loaderOptions: {
  //     less: {
  //       globalVars: globalLessVal
  //     }
  //   }
  // },
  css: {
    loaderOptions: {
      less: {
        // vant 主题更改
        globalVars: globalLessVal
      }
    }
  },
  // 合并 webpack
  // configureWebpack   : config => {
  // if (isProduction) {
  // externals中的key是后面需要require的名字，value是第三方库暴露出来的方法名
  // config.externals = {
  //   'vue'       : 'Vue',
  //   'vue-router': 'VueRouter',
  //   'vuex'      : 'Vuex',
  //   'vant'      : 'vant',
  //   'axios'     : 'axios',
  //   'dayjs'     : 'dayjs'
  // }
  // }
  // },
  // 修改 webpack
  // configureWebpack: (config) => {},
  chainWebpack: config => {
    // 删除link 预取和预加载
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
    config.plugin('html').tap(args => {
      args[0].cdnJs = explugin
      return args
    })
    config.resolve.symlinks(true)
    config.externals(externals)
    config.resolve.alias
      .set('@public', resolve('public'))
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@views', resolve('src/views'))
      .set('@styles', resolve('src/styles'))
      .set('@components', resolve('src/components'))
      .set('@router', resolve('src/router'))
      .set('@store', resolve('src/store'))
      .set('@utils', resolve('src/utils'))
    // 图片压缩
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        mozjpeg: {
          progressive: true,
          quality: 65
        },
        optipng: {
          enabled: false
        },
        pngquant: {
          quality: '65-90',
          speed: 4
        },
        gifsicle: {
          interlaced: false
        }
        /* webp: {
          quality: 75
        } */
      })
      .end()

    // 使用cnpm可能会导致热更新失效，设置可恢复热更新
    config.resolve.symlinks(true)
    return config
  }
}
