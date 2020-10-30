/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  assetsDir: 'static',
  configureWebpack: {
    externals: {
      vue: 'Vue',
      'element-ui': 'ELEMENT',
      vuex: 'Vuex',
      'vue-router': 'VueRouter',
    },
    plugins: [
      new HtmlWebpackPlugin(
        {
          template: './prod.html',
          minify: {
            collapseWhitespace: true,
            removeComments: true,
          },
        },
      ),
    ],
  },

};
