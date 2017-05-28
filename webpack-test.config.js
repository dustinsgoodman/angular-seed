const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: '#inline-source-map',
  entry: path.resolve(__dirname, 'src', 'main.spec.ts'),
  output: {
    path: path.resolve(__dirname, 'test'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader']
      },
      {
        test: /\.js/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.scss/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(jpg|jpeg|gif|png|ico)/,
        exclude: /node_modules/,
        loader: 'file-loader?name=[path][name].[ext]'
      },
      {
        test: /\.(html)/,
        exclude: /node_modules/,
        loader: 'file-loader?name=templates/[name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devServer: {
    contentBase: './src',
    publicPath: '/test'
  },
  plugins: [
    new ExtractTextPlugin('app.css'),
  ]
};