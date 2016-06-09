const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  build: path.join(__dirname, 'build')
}

module.exports = {
  entry: ['webpack-dev-server/client?http://0.0.0.0:8080','webpack/hot/only-dev-server','./src/index.js'],
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
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
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'source-map'
};
