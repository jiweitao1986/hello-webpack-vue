const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {

  mode: "none",

  entry: path.join(__dirname, 'src/main.js'),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js'
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }, {
        test: /.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [

    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./dlls/base.json')
    }),

    // new HotModuleReplacementPlugin(),

    new VueLoaderPlugin(),

    new HTMLWebpackPlugin({
      showErrors: true,
      cache: true,
      template: path.join(__dirname, 'index.html')
    })

  ]
};