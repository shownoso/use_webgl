const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    index: './index.js',
  },
  output: {
    filename: '[name].[contenthash:6].js',
    path: path.resolve(__dirname, './dist')
  },
  devServer: {
    port: 3300,
    open: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Three',
      template: './index.html'
    }),
  ]
}