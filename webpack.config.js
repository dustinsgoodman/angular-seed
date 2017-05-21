const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'main.ts'),
  output: {
    path: path.resolve(__dirname, 'output'),
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
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  devServer: {
    contentBase: './src',
    publicPath: '/output'
  }
};