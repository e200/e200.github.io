const gulp        = require('gulp'),
      browserSync = require('browser-sync').create()

gulp.task('serve', () => {
  browserSync.init({
    server: './',
    open: false,
    notify: false
  })

  gulp.watch(['./dist/*.*', './*.html'])
    .on('change', browserSync.reload)
})