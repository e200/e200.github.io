const
    gulp    = require('gulp')
    plumber = require('gulp-plumber')
    rename  = require('gulp-rename')
    sass    = require('gulp-sass')
    pug     = require('gulp-pug')
    data    = require('gulp-data')
    concat  = require('gulp-concat')
    gjc     = require('gulp-jquery-closure')
    fs      = require('fs')
    path    = require('path')
    path_   = require('./path_')

gulp.task('pug', function(){
    return gulp.src(path_.src.views + 'index.pug')
        .pipe(plumber())
        .pipe(data(function(file){
            let filename = path.basename(file.path).slice(0, -4)

            return JSON.parse(
                fs.readFileSync(path_.src.views + 'data/' + filename + '.json')
            );
        }))
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('./'))
})

gulp.task('sass', function (){
    return gulp.src(path_.src.sass + 'e200.sass')
        .pipe(sass())
        .pipe(gulp.dest(path_.dist.css))
})

gulp.task('js', function (){
    return gulp.src(path_.src.js + '**/*.js')
        .pipe(concat('e200.js'))
        .pipe(gjc({$: true, window: true}))
        .pipe(gulp.dest(path_.dist.js))
})

gulp.task('dev', ['pug', 'sass', 'js']);