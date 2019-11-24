const path = require("path");
const merge = require("webpack-merge");
const config = require("./webpack.config");
const NodemonPlugin = require('nodemon-webpack-plugin'); // Ding
const HtmlWebpackPlugin = require('html-webpack-plugin') // at the top

module.exports = merge(config, {
  mode: "development",
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
  },
  plugins: [
   
    new HtmlWebpackPlugin({
        template: 'src/index.html'
      })
],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
       
            loader: "babel-loader",
           
        
       
        
        
      },
      {
        test: /\.css|\.s(c|a)ss$/,
        use: [
          {
            loader: "lit-scss-loader"
          },
          "extract-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  
  node: { fs: 'empty' },
  watch: true,
  target: 'node'
});
