/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

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
      new webpack.DllReferencePlugin({
        manifest: path.resolve(__dirname, 'dll/manifest.json'),
      }),
      new AddAssetHtmlWebpackPlugin([
        {
          filepath: path.resolve(__dirname, 'dll/vendors.dll.js'),
          publicPath: 'libs://libs/dll/',
          outputPath: '/publicLib/',
        },
      ]),
    ],
  },

};
