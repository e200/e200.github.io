const
    gulp = require('gulp')
    
    // Requires gulp-pumbler
    pumbler = require('gulp-plumber')

    // Requires gulp-rename
    rename = require('gulp-rename')

    // Requires gulp-uglify
    uglify = require('gulp-uglify')

    // Requires gulp-sass
    sass = require('gulp-sass')

    // Requires gulp-concat
    concat = require('gulp-concat')

    // Requires gulp-autoprefixer
    autoprefixer = require('gulp-autoprefixer')
    
    // Requires browser-sync
    browserSync = require('browser-sync')

    // Requires gulp-sourcemaps
    sourceMaps = require('gulp-sourcemaps')
    
    // Requires gulp-pug
    pug = require('gulp-pug')
    
    // Requires gulp-insert
    insert = require('gulp-insert')

const
    root = './'
    views = root +'views/'
    assets = root + 'assets/'

let paths = {
    js: assets + 'js/',
    css: assets + 'css/',
    sass: assets + 'sass/'
}

gulp.task('default', ['all'])

/**
 * JS task, minifies and concats all JS
 * files into a single one.
 */
gulp.task('js', function() {
    const outputFile = 'e200.js'
    const uglifyOptions = {
        compress: {
            drop_debugger: true,
            toplevel: true
        },
        mangle: {
            toplevel: true
        }
    }

    return gulp.src(paths.js + 'e200.js')
        .pipe(pumbler())
        .pipe(concat(outputFile)) // Concats all JS files
        .pipe(uglify(uglifyOptions)) // Minifies the output
        .pipe(rename('master.js')) //Renames the output to master.js
        .pipe(gulp.dest(paths.js))
})

/**
 * Compiles my root SASS file
 */
gulp.task('sass', function (){
    var sassOptions = {
        outputStyle: 'compressed'
    }
    var autoprefixerOptions = {
        browsers: ['last 2 versions'],
        cascade: false
    }

    return gulp.src(paths.sass + 'master.sass')
        .pipe(sass(sassOptions)
            .on('error', sass.logError))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest(paths.css))
})

/**
 * Compiles my PUG files to HTML
 * 
 * Also prepends my header to the output
 */
gulp.task('pug', function(){
    const header = '<!--\n' +
    '       ___   ___   ___\n' +
    '   ___|___\\ / _ \\ / _ \\\n' + 
    ' / _ \\ __) | | | | | | |\n' +
    '|  __// __/| |_| | |_| |\n' +
    ' \\___|_____|\\___/ \\___/\n\n' + 
    '-->\n\n'

    return gulp.src(views + '**.pug')
        .pipe(pumbler())
        .pipe(pug({/*pretty: true*/}))
        .pipe(insert.prepend(header))
        .pipe(gulp.dest(root))
})

gulp.task('all', ['js', 'sass', 'pug'])

/**
 * SASS watcher, watches any
 * changes in SASS files and
 * refresh browser when they
 * happen.
 */
gulp.task('sass:watch', function(){
    browserSync.init({
        server: root
    })

    gulp.watch(paths.sass + '**', ['sass'])
        .on('change', browserSync.reload)
})