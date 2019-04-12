const path = require('path');
const merge = require('webpack-merge');

const libraryName = "AltumAnalytics";

const babelLoaderConfig = (env) => {
  return {
    test: /\.m?js$/,
    exclude: /(node_modules|bower_components|lib)/,
    use: {
      loader: 'babel-loader',
      options: {
        envName: env
      }
    }
  }
}

const commonConfig = {
  entry: {
    altumanalytics: './src/index.js'
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, '../src'),
      '@utils': path.resolve(__dirname, '../src/utils'),
      '@errors': path.resolve(__dirname, '../src/errors'),
      '@services': path.resolve(__dirname, '../src/services')
    }
  },
};

const serverConfig = merge(commonConfig, {
  target: 'node',
  output: {
    filename: '[name].node.js',
    path: path.resolve(__dirname, '../lib'),
    library: libraryName,
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
      babelLoaderConfig('node')
    ]
  }
});

const clientConfig = merge(commonConfig, {
  target: 'web',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../lib'),
    library: libraryName,
    libraryTarget: 'umd',
    globalObject: 'window'
  },
  module: {
    rules: [
      babelLoaderConfig('client')
    ]
  }
});

module.exports = [serverConfig, clientConfig];
