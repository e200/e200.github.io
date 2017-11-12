const
    gulp = require('gulp'),
    
    // Requires gulp-pumbler
    pumbler = require('gulp-plumber'),

    // Requires gulp-uglify
    uglify = require('gulp-uglify'),

    // Requires gulp-sass
    sass = require('gulp-sass'),

    // Requires gulp-concat
    concat = require('gulp-concat'),

    // Requires gulp-concat
    concat = require('gulp-concat'),

    // Requires gulp-autoprefixer
    autoprefixer = require('gulp-autoprefixer'),
    
    // Requires browser-sync
    browserSync = require('browser-sync'),

    // Requires gulp-sourcemaps
    sourceMaps = require('gulp-sourcemaps'),
    
    // Requires gulp-pug
    pug = require('gulp-pug'),
    
    // Requires gulp-insert
    insert = require('gulp-insert')

const
    projectFolder = './',
    viewsFolder = projectFolder +'views/',
    assetsFolder = projectFolder + 'assets/',
    
    jsFolder = assetsFolder + 'js/',
    cssFolder = assetsFolder + 'css/',
    sassFolder = assetsFolder + 'sass/'

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

    return gulp.src([
            jsFolder + 'libe200/element_functions.js',
            jsFolder + 'libe200/set_functions_recursively.js',
            jsFolder + 'libe200/bootstrapper.js',
            jsFolder + 'libe200/e200.js',
            jsFolder + 'e200.github.io.js'
        ])
        .pipe(pumbler())
        .pipe(concat(outputFile)) // Concats all JS files
        .pipe(uglify(uglifyOptions)) // Minifies the output
        .pipe(gulp.dest(jsFolder))
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

    return gulp.src(sassFolder + 'e200.sass')
        .pipe(sass(sassOptions)
            .on('error', sass.logError))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest(cssFolder))
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

    return gulp.src(viewsFolder + '**.pug')
        .pipe(pumbler())
        .pipe(pug({pretty: true}))
        .pipe(insert.prepend(header))
        .pipe(gulp.dest(projectFolder))
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
        server: projectFolder
    })

    gulp.watch(sassFolder + '**', ['sass'])
        .on('change', browserSync.reload)
})