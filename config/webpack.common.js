const path = require('path');
const webpack = require('webpack');

module.exports = {
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, '../src'),
      '@utils': path.resolve(__dirname, '../src/utils'),
      '@errors': path.resolve(__dirname, '../src/errors'),
      '@services': path.resolve(__dirname, '../src/services')
    }
  },
  entry: {
    altumanalitics: './src/altum.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      Promise: 'es6-promise',
      fetch: 'exports-loader?self.fetch!whatwg-fetch/dist/fetch.umd',
    })
  ]
};
