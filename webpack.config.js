
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  output: {
    filename: 'client-bundle.js',
    chunkFilename: '[id].js'
  },
  module: {
    loaders: [
      // Extract css files
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ 
      minimize: true,
      comments: false,
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
        drop_debugger: true,
        conditionals: true,
        evaluate: true,
        drop_console: true,
        sequences: true,
        booleans: true,
      },
    }),
    new ExtractTextPlugin('client-bundle.css')
  ],
};
