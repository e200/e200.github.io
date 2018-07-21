const
  gulp   = require('gulp')
  babel  = require('gulp-babel')
  rename = require('gulp-rename')
  sass   = require('gulp-sass')
  pug    = require('gulp-pug')
  data   = require('gulp-data')
  fs     = require('fs')
  path   = require('path')

gulp.task('pug', () => {
  return gulp.src('./src/views/*.pug')
    .pipe(data((file) => {
      let filename = path.basename(file.path).slice(0, -4)

      return JSON.parse(
        fs.readFileSync('./src/views/data/' + filename + '.json')
      );
    }))
    .pipe(pug({ pretty: true }))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./'))
})

gulp.task('sass', () => {
  return gulp.src('./src/sass/e200.sass')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'))
})

gulp.task('js:vendor', () => {
  return gulp.src('./src/js/vendor.js')
    .pipe(babel())
    .pipe(gulp.dest('./dist/js'))
})

//gulp.task('dev', ['pug', 'sass', 'js']);