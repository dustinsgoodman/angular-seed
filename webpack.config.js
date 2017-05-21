const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'app', 'app.js'),
  output: {
    path: path.resolve(__dirname, 'output'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
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
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    contentBase: './app',
    publicPath: '/output'
  }
};