let path = require('path');
let WebpackNotifierPlugin = require("webpack-notifier");

module.exports = env => ({
  mode: 'development',
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, 'src/app'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'output')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  devServer: {
    watchContentBase: true,
    contentBase: path.resolve(__dirname, "output"),
    port: 3000,
  },
  plugins: [
    new WebpackNotifierPlugin({alwaysNotify: true}),
  ]
});