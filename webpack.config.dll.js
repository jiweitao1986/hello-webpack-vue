const path = require('path');
const webpack = require('webpack');

module.exports = {

  mode: "none",

  context: process.cwd(),

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.js', '.jsx', '.json', '.less', '.css'],
    modules: [__dirname, 'node_modules']
  },

  entry: {
    base: [
      'core-js',
      'vue',
      'vue-router'
    ]
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dlls'),
    library: '[name]'
  },

  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: './dlls/[name].json',
      format: true
    })
  ],
  
  optimization: {
    minimize: false,
  }
};