/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
// vue.config.js
// const path = require('path');
// const webpack = require('webpack');
// const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

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
      // plugins: [
      //   new webpack.DllReferencePlugin({
      //     manifest: path.resolve(__dirname, 'dll/manifest.json'),
      //   }),
      //   new AddAssetHtmlWebpackPlugin([
      //     {
      //       filepath: path.resolve(__dirname, 'dll/vue.dll.js'),
      //       publicPath: '../publicLib/',
      //       outputPath: '../publicLib/',
      //     },
      //     {
      //       filepath: path.resolve(__dirname, 'dll/elementUI.dll.js'),
      //       publicPath: '../publicLib/',
      //       outputPath: '../publicLib/',
      //     },
      //   ]),
      // ],
    },
  };
} else {
  module.exports = {};
}
