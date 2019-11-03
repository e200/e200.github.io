const fs   = require('fs'),
      path = require('path')

/**
 * Gets the root project path
 * with the given relative path.
 *
 * @param {string} relativePath
 */
const root = (relativePath = '') => path.resolve(__dirname, '..', relativePath)

/**
 * Gets json data from a text file.
 *
 * @param {string} filename
 */
const getJsonData = (filename) => {
  const fileContent = fs.readFileSync(filename)
  const jsonData    = JSON.parse(fileContent)

  return jsonData
}

/**
 * Gets the home page view data.
 */
const getHomeViewData = () => {
  const manifestJson = getJsonData('./src/data/manifest.json')
  let data           = getJsonData('./src/data/home.json')

  Object.assign(data, manifestJson)

  return data
}

module.exports = {
  root,
  getJsonData,
  getHomeViewData
}
