const path     = require('path')
const { root } = require('../utils')

const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'entry.js'),
  output: {
    filename: '[name].[contenthash:5].js',
    chunkFilename: '[name].[contenthash:5].js',
  },
  resolve: {
    alias: {
      '~': root('node_modules'),
      '@': root('src')
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root:    root(),
      verbose: true
    })
  ]
}