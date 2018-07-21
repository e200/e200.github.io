const path = require('path')
const { root } = require('./utils')

const CleanWebpackPlugin = require('clean-webpack-plugin')

const entry = path.resolve(__dirname, 'entry.js')

module.exports = {
  entry: entry,
  output: {
    filename: '[name].[contenthash:5].js',
    chunkFilename: '[name].[contenthash:5].js',
    path: root('dist')
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
      verbose: true,
      dry:     true
    })
  ]
}