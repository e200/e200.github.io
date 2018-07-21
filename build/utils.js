const path = require('path')
const root = (relativePath = '') => path.resolve(__dirname, '..', relativePath)

module.exports = {
  root: root
}