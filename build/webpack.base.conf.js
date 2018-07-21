const path = require('path')
const { root } = require('./utils')

const entry = path.resolve(__dirname, 'entry.js')
const output = '[name].js'

module.exports = {
  entry: entry,
  output: {
    filename: output,
    path: root('dist')
  },
  resolve: {
    alias: {
      '~': root('node_modules'),
      '@': root('src')
    }
  }
}