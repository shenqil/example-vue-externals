/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/main.ts', './src/stylesheet.dev.ts'],
  plugins: [
    new HtmlWebpackPlugin(
      { template: './dev.html' },
    ),
  ],
};
