const
  gulp         = require('gulp')
  browserSync  = require('browser-sync')

/**
 * SASS watcher, watchs any
 * changes in SASS files and
 * refresh browser when they
 * happen.
 */
gulp.task('sass:watch', function(){
  browserSync.init({
    server: './'
  })

  gulp.watch('./src', gulp.parallel('sass', 'pug'))
    .on('change', browserSync.reload)
})