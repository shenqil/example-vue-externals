/* eslint-disable @typescript-eslint/no-var-requires */
// vue.config.js
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');

module.exports = {
  assetsDir: 'static',
  configureWebpack: process.env.NODE_ENV === 'production' ? prodConfig : devConfig,
};
