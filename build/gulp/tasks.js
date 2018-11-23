const gulp        = require('gulp'),
      pug         = require('gulp-pug'),
      browserSync = require('browser-sync').create()

const { getHomeViewData } = require('../utils')

/**
 * Compiles the home page (index.html)
 */
const compileHomeView = () => {
  return gulp.src('./src/views/index.pug')
    .pipe(pug({
      pretty: true,
      data:   getHomeViewData()
    }))
    .pipe(gulp.dest('./'))
}

/**
 * Watch changes in compiled files.
 */
const watchCompiledFiles = () => {
  browserSync.init({
    server: './',
    open:   false,
    notify: false
  })

  gulp.watch([
      './dist/**/*',
      './*.html'
    ])
    .on('change', browserSync.reload)
}

module.exports = {
  compileHomeView,
  watchCompiledFiles
}
