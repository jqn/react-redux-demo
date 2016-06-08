var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, 'build'),
    filename: "bundle.[hash].js"
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
        loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap")
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hello'
    }),
    new ExtractTextPlugin("styles.[hash].css")
  ],
  devtool: 'source-map'
};
