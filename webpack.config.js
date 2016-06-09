const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const PATHS = {
  build: path.join(__dirname, 'build')
}

module.exports = {
  entry: {
    vendor: ['react','react-dom','react-bootstrap','bootstrap'],
    app: './src/index.js'
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.[chunkhash].js'
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
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap')
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.[chunkhash].js'),
    new HtmlWebpackPlugin({
      title: 'Hello'
    }),
    new ExtractTextPlugin('bundle.[chunkhash].css')
  ],
  devtool: 'source-map'
};
