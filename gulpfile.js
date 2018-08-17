const fs          = require('fs'),
      gulp        = require('gulp'),
      pug         = require('gulp-pug'),
      data        = require('gulp-data'),
      browserSync = require('browser-sync').create()

gulp.task('pug', () => {
  return gulp.src('./src/views/*.pug')
    .pipe(data(() => {
      const manifestJson = JSON.parse(fs.readFileSync('./src/data/manifest.json'))
      let data           = JSON.parse(fs.readFileSync('./src/data/home.json'))

      Object.assign(data, manifestJson)

      data.ENV = 'prod'

      return data
    }))
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./'))
})

gulp.task('build', ['pug'])

gulp.task('serve', () => {
  browserSync.init({
    server: './',
    open: false,
    notify: false
  })

  gulp.watch(['./dist/**/*', './*.html'])
    .on('change', browserSync.reload)
})