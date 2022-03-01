module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/youTube-spa/'
  : '/',

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/styles/quasar.variables.scss";'
      }
    }
  },
  transpileDependencies: [
    'quasar'
  ]
}
