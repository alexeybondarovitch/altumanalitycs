const path = require('path');
const webpack = require('webpack');

module.exports = {
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
          fetch: 'exports-loader?self.fetch!whatwg-fetch/dist/fetch.umd',
     })
  ]
};
