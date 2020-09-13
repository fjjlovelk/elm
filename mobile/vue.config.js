module.exports = {
  devServer: {
    open: true,
    port: 8091
  },
  chainWebpack: config => {
    // 生产模式
    config.when(process.env.NODE_ENV === 'production', config => {
      // 定义生产模式入口文件
      config
        .entry('app')
        .clear()
        .add('./src/main-prod.js')

      // 定义 externals
      config.set('externals', {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        vuex: 'Vuex',
        axios: 'axios',
        moment: 'moment'
      })

      config.plugin('html').tap(args => {
        // 生产环境为 true， 开发模式为 false
        args[0].isProd = true
        return args
      })
    })

    // 开发模式
    config.when(process.env.NODE_ENV === 'development', config => {
      config
        .entry('app')
        .clear()
        .add('./src/main-dev.js')

      config.plugin('html').tap(args => {
        args[0].isProd = false
        return args
      })
    })
  }
}