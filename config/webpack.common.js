const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    altumanalitics: './src/index.js'
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
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'entry',
                  corejs: 3,
                  targets: {
                    "ie": "11"
                  }
                }
              ]
            ],
            plugins: ['@babel/plugin-proposal-class-properties',
                      '@babel/plugin-transform-runtime'], 
          }
        }
      }
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
          fetch: 'exports-loader?self.fetch!whatwg-fetch/dist/fetch.umd',
     })
  ]
};
