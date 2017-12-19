'use strict';
var path = require('path');
var webpack = require('webpack');

var config = {
   entry: path.resolve(__dirname, './main.js'),
   output: {
      path:'/',
      filename:'./main.js'
   },
   devServer: {
      inline: true,
      port: 8080
   },
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2017', 'react']
            }
         },
         {
           test: /\.scss$/,
           loaders: ['style-loader', 'css-loader', 'sass-loader']
         }
      ]
   }
};
module.exports = config;
