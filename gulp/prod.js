const
    gulp         = require('gulp')
    plumber      = require('gulp-plumber')
    rename       = require('gulp-rename')
    uglify       = require('gulp-uglify')
    sass         = require('gulp-sass')
    autoprefixer = require('gulp-autoprefixer')
    pug          = require('gulp-pug')
    insert       = require('gulp-insert')
    purify       = require('gulp-purifycss')
    minCssNames  = require('gulp-minify-css-names')
    path_        = require('./path_')

gulp.task('js:prod', function() {
    return gulp.src(path_.src.js + 'e200.js')
        .pipe(plumber())
        .pipe(uglify({
            compress: {
                drop_debugger: true,
                toplevel: true
            },
            mangle: {
                toplevel: true
            }
        })) // Minifies the output
        .pipe(rename('master.js')) //Renames the output to master.js
        .pipe(gulp.dest(path_.dist.js))
})

gulp.task('pug:prod', function(){
    const header = '<!--\n' +
    '       ___   ___   ___\n' +
    '   ___|___\\ / _ \\ / _ \\\n' + 
    ' / _ \\ __) | | | | | | |\n' +
    '|  __// __/| |_| | |_| |\n' +
    ' \\___|_____|\\___/ \\___/\n\n' + 
    '-->\n\n'

    return gulp.src(path_.src.views + 'index.pug')
        .pipe(plumber())
        .pipe(pug())
        .pipe(insert.prepend(header))
        .pipe(gulp.dest('./'))
})

gulp.task('sass:prod', function (){
    var sassOptions = {
        outputStyle: 'compressed'
    }
    var autoprefixerOptions = {
        browsers: [
            "Android 2.3",
            "Android >= 4",
            "Chrome >= 20",
            "Firefox >= 24",
            "Explorer >= 7",
            "iOS >= 6",
            "Opera >= 12",
            "Safari >= 6"
          ],
        cascade: false
    }

    return gulp.src(path_.src.sass + 'e200.sass')
        .pipe(sass(sassOptions)
            .on('error', sass.logError))
        .pipe(purify([
            path_.src + '*.js',
            './' + 'index.html'
        ], {
            rejected: true
        }))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest(path_.dist.css))
})

// Install gulp-selectors instead
gulp.task('mincssname', function(){
    return gulp.src([
            './index.html',
            path_.src.js + '**.js',
            path_.src.sass + '**.sass'
        ])
        .pipe(minCssNames())
        .pipe(gulp.dest(path_.dist.css))
})