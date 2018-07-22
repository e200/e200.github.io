const merge       = require('webpack-merge')
const webpackBase = require('./webpack.base.conf')

const { root } = require('./utils')

module.exports = (env) => {
  const getViewData = (viewName) => {
    const viewDataSource  = root(`src/views/data/${viewName}.json`)
    const rawJsonViewData = require('fs').readFileSync(viewDataSource)
    const viewData        = JSON.parse(rawJsonViewData)

    viewData.env = env.NODE_ENV

    return viewData
  }

  return merge(webpackBase, {
    output: {
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.s[ca]ss$/,
          loaders: [
            'style-loader',
            'css-loader',
            'resolve-url-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.js$/i,
          exclude: /(node_modules|bower_components)/,
          use: ['babel-loader']
        },
        {
          test: /\.pug$/,
          loaders: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].html',
                outputPath: '../'
              }
            },
            {
              loader: 'pug-html-loader',
              options: {
                pretty: env.NODE_ENV !== 'production',
                data: getViewData('home')
              }
            }
          ]
        }
      ]
    }
  })
}