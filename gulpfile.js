const gulp        = require('gulp'),
      browserSync = require('browser-sync').create()

gulp.task('serve', () => {
  browserSync.init({
    server: './'
  })

  gulp.watch(['./dist/*.*', './*.html'])
    .on('change', browserSync.reload)
})