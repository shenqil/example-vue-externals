// vue.config.js
if (process.env.NODE_ENV === 'production') {
  module.exports = {
    assetsDir: 'static',
    configureWebpack: {
      externals: {
        vue: 'Vue',
        'element-ui': 'ELEMENT',
        vuex: 'Vuex',
        'vue-router': 'VueRouter',
      },
    },
  };
} else {
  module.exports = {};
}
