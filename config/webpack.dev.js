const merge = require('webpack-merge');
const configs = require('./webpack.common.js');

const commonDevConfig = {
  mode: 'development',
  devtool: 'inline-source-map',

}

const serverDevConfig = merge(configs[0], commonDevConfig, {
  output: {
    filename: '[name].node.js',
  }
});

const clientDevConfig = merge(configs[1], commonDevConfig, {
  output: {
    filename: '[name].js',
  }
});

module.exports = [serverDevConfig, clientDevConfig];
