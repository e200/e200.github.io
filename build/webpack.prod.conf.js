const glob = require('glob-all')

const webpack = require('webpack')
const merge = require('webpack-merge')
const dev = require('./webpack.dev.conf')
const { root } = require('./utils')

const PurifyCssPlugin = require('purifycss-webpack')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(dev, {
  module: {
    rules: [
      {
        test: /\.s[ca]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'group-css-media-queries-loader',
            options: { sourceMap: false }
          },
          'sass-loader'
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'initial'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true)
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new UglifyJsPlugin({
      sourceMap: true,
      parallel: true,
      uglifyOptions: {
        output: {
          comments: false
        },
        compress: {
          warnings: false,
        }
      }
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: {
        safe: true,
        discardComments: {
          removeAll: true
        }
      }
    }),
    new PurifyCssPlugin({
      paths: glob.sync([
        root('src/views/**/*.pug'),
        root('src/js/**/*.js')
      ]),
      purifyOptions: {
        //whitelist: ['*whitelist*']
      }
    })
  ]
})