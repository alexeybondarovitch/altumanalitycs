const path = require("path");

const libraryName = "AltumAnalytics";

const config = {
  entry: {
    altumanalytics: "./src/index.js"
  },
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "../src"),
      "@utils": path.resolve(__dirname, "../src/utils"),
      "@errors": path.resolve(__dirname, "../src/errors"),
      "@services": path.resolve(__dirname, "../src/services")
    }
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../lib"),
    library: libraryName,
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components|lib)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};

module.exports = config;
