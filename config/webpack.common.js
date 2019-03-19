const path = require('path');

module.exports = {
  entry: {
    altumanalitics: './lib/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  }
};
