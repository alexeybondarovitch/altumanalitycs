const path = require('path');
const webpack = require('webpack');

const libraryName = "AltumAnalytics";

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
    altumanalytics: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../lib'),
    library: libraryName,
    libraryTarget: 'umd',
    globalObject: 'this'
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
      fetch: 'imports-loader?this=>global!exports-loader?global.fetch!cross-fetch'
    })
  ]
};
