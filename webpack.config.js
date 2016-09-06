const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const PATHS = {
  build: path.join(__dirname, 'build')
}

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: ['react','react-dom','react-bootstrap','react-router','react-router-bootstrap']
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
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css?sourceMap!sass?sourceMap')
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(PATHS.build, { verbose: true, dry: false }),
    new HtmlWebpackPlugin({ title: 'React Example' }),
    new ExtractTextPlugin('bundle.[chunkhash].css'),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.[chunkhash].js'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  devtool: 'cheap-module-source-map'
};
