const
    gulp         = require('gulp')
    plumber      = require('gulp-plumber')
    rename       = require('gulp-rename')
    sass         = require('gulp-sass')
    pug          = require('gulp-pug')
    path         = require('./_path')

gulp.task('pug', function(){
    return gulp.src(path.src.views + 'index.pug')
        .pipe(plumber())
        .pipe(pug({}))
        .pipe(gulp.dest('./'))
})

gulp.task('sass', function (){
    return gulp.src(path.src.sass + 'master.sass')
        .pipe(sass())
        .pipe(gulp.dest(path.dist.css))
})