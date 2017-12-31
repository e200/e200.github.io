const
    gulp = require('gulp')
    
    // Requires gulp-plumber
    plumber = require('gulp-plumber')

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

    // Requires gulp-imagemin
    imagemin = require('gulp-imagemin')

    // Requires gulp-purifycss
    purify = require('gulp-purifycss')

const
    root = './'
    views = root +'views/'
    assets = root + 'assets/'

let paths = {
    js: assets + 'js/',
    css: assets + 'css/',
    sass: assets + 'sass/',
    img: assets + 'img/',
    imgSrc: assets + 'img/src/'
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
        .pipe(plumber())
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

    return gulp.src(paths.sass + 'master.sass')
        .pipe(sass(sassOptions)
            .on('error', sass.logError))
        /*.pipe(purify([
            paths.js + '*.js',
            root + 'index.html'
        ], {
            minify: true,
            rejected: true
        }))*/
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest(paths.css))
})

/**
 * Minifies images on `img` directory.
 */
 gulp.task('img', function(){
     return gulp.src(paths.imgSrc + '/*')
        .pipe(imagemin())
        .pipe(gulp.dest(paths.img))
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

    return gulp.src(views + 'index.pug')
        .pipe(plumber())
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