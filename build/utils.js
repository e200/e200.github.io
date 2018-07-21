const path = require('path')

module.exports = {
  root: (relativePath = '') => path.resolve(__dirname, '..', relativePath)
}