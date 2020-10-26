/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');
const { resolve } = require('path');

module.exports = {
  entry: {
    vue: ['vue', 'vue-class-component', 'vue-property-decorator', 'vue-router', 'vuex'],
    elementUI: ['element-ui'],
  },
  devtool: '#source-map',
  output: {
    filename: '[name].dll.js',
    path: resolve(__dirname, 'dll'),
    library: '[name]_[hash]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[hash]', // 映射库的暴露的内容名称
      path: resolve(__dirname, 'dll/manifest.json'), // 输出文件路径
    }),
  ],
  mode: 'production',
};
