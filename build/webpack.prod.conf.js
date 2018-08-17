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
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  require('autoprefixer')({ browsers: ['last 2 versions'] }),
                  require('postcss-discard-comments')({ removeAll: true }),
                  require('postcss-fixes')(),
                  require('postcss-merge-rules')(),
                  require('css-mqpacker')({ sort: true })
                ]
              }
            },
            'resolve-url-loader',
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
      new OptimizeCssAssetsPlugin(),
      new PurgecssPlugin({
        paths: glob.sync([
          root('src/views/**/*.pug'),
          root('src/js/**/*.js')
        ])
      }),
      function () {
        this.plugin('done', function(stats) {
          const outputPath = root('src/data/manifest.json')
          const assets = []

          for (let asset in stats.compilation.assets) {
            if (
              asset.startsWith('main.') &&
              asset.endsWith('.css')
            ) {
              assets['main.css'] = asset
            } else if (asset.startsWith('manifest')) {
              assets['manifest.js'] = asset
            } else if (asset.startsWith('vendor')) {
              assets['vendor.js'] = asset
            } else {
              assets['main.js'] = asset
            }
          }

          const assetsPugTemplate = `{
  "assets": {
    "main.css":    "${assets["main.css"]}",
    "manifest.js": "${assets["manifest.js"]}",
    "vendor.js":   "${assets["vendor.js"]}",
    "main.js":     "${assets["main.js"]}"
  }
}`
          require('fs').writeFileSync(outputPath, assetsPugTemplate)
        })
      }
    ]
  })
}