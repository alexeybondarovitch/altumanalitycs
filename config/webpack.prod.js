const merge = require('webpack-merge');
const configs = require('./webpack.common.js');

const commonProdConfig = {
  mode: 'production',
}

const serverProdConfig  = merge(configs[0], commonProdConfig, {
  output: {
    filename: '[name].node.min.js',
  }
});

const clientProdConfig = merge(configs[1], commonProdConfig, {
  output: {
    filename: '[name].min.js',
  }
});

module.exports = [serverProdConfig, clientProdConfig];
