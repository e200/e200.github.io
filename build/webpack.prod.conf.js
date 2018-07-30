const path = require('path')
const glob = require('glob-all')

const merge = require('webpack-merge')

const dev      = require('./webpack.dev.conf')
const { root } = require('./utils')

const MiniCssExtractPlugin    = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin          = require('uglifyjs-webpack-plugin')
const PurgecssPlugin          = require('purgecss-webpack-plugin')

module.exports = (env) => {
  return merge(dev(env), {
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
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            enforce: true
          },
          default: {
            minChunks: 2,
            reuseExistingChunk: true
          }
        }
      },
      runtimeChunk: {
        name: 'manifest'
      }
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash:5].css'
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
          discardComments: {
            removeAll: true
          }
        }
      }),
      new PurgecssPlugin({
        paths: glob.sync([
          root('src/views/**/*.pug'),
          root('src/js/**/*.js')
        ])
      }),
      function () {
        this.plugin("done", function(stats) {
          require("fs").writeFileSync(
            root('build/stats.json'),
            JSON.stringify(stats.toJson()));
        });
      }
    ]
  })
}