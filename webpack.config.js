var path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "app.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    inline : true,
    port: 9000
  },
  devtool: 'eval',
  watch: true,
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query : {
          presets : ['es2015']
        }
      }
    ]
  }
}