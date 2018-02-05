const
    gulp    = require('gulp')
    plumber = require('gulp-plumber')
    rename  = require('gulp-rename')
    sass    = require('gulp-sass')
    pug     = require('gulp-pug')
    data    = require('gulp-data')
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