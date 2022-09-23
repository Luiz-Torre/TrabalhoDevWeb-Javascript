const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './src/index.js',  
    output: {
      filename: '[name].[contenthash].js',  
      path: path.resolve(__dirname, 'dist')
    }, 
    devServer: {
        static: './dist',
        open: true
      },
      plugins: [
        new HtmlWebpackPlugin({  
          filename: 'index.html',
          template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
         patterns:[
            {from: "src/images", to:"images"},
            {from: "src/jquery-3.4.1.js", to:"jquery-3.4.1.js"}

         ]
        })
      ],

      module : {
        rules: [
           {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                 loader: 'babel-loader',
                 options: {
                    presets: ['@babel/preset-env']
                 }
              }
           },
           {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
           },
           
        ]
     },
     devtool: 'source-map'
  }