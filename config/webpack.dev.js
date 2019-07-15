const merge = require('webpack-merge');
const config = require('./webpack.common.js');

const clientDevConfig = merge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js',
  }
});

module.exports = clientDevConfig;
