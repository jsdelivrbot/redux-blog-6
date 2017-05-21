var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    bundle: './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
			  use: 'babel-loader',
			  test: /\.js$/,
			  exclude: /node_modules/
		  }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
