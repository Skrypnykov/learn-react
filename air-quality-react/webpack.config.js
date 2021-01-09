const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
        { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
      ]
  }
};