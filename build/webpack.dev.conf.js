const webpackMerge = require('webpack-merge')
const webpackBase = require('./webpack.base.conf')

const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

const fs = require('fs')
const { root } = require('./utils')

module.exports = webpackMerge(webpackBase, {
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
              pretty: true,
              data: JSON.parse(fs.readFileSync(root('src/views/data/home.json')))
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['./'] }
    })
  ]
})
