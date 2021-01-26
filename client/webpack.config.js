const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    open: true,
    compress: true,
    host: '127.0.0.1',
    port: 8080,
    watchContentBase: true,
    progress: true,
    proxy: {
      '/api': 'http://127.0.0.1:3000'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new CleanWebpackPlugin()
  ],
  module: {
  	rules: [
  	  {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
  		{
  			test: /\.(css|less)$/,
  			use: ["style-loader", "css-loader"]
  		},
  		{
  			test: /\.(jpg|jpeg|png|svg)/,
  			use: ["file-loader"]
  		}
  	]
  }
}