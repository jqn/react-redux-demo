var path = require('path')

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, 'build'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: "style!css"
      }
    ]
  },
  devtool: 'source-map'
};
