const merge = require('webpack-merge');
const config = require('./webpack.common.js');

const clientProdConfig = merge(config, {
  mode: 'production',
  output: {
    filename: '[name].min.js',
  }
});

module.exports = clientProdConfig;
