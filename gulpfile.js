const
    gulp = require('gulp'),
    
    // Requires gulp-pumbler
    pumbler = require('gulp-plumber'),

    // Requires gulp-sass
    sass = require('gulp-sass'),

    // Requires gulp-clean-css
    cleanCSS = require('gulp-clean-css'),

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
    
    // Requires gulp-html-beautify
    htmlBeautify = require('gulp-html-beautify'),
    
    // Requires gulp-insert
    insert = require('gulp-insert');

gulp.task('default', ['pug', 'css', 'js', 'serve']);

/**
 * Serve task, starts watchers and browser.
 */
gulp.task('serve', function(){
    browserSync.init({
        server: './'
    });

    gulp.watch('./assets/sass/*.sass', ['css'])
        .on('change', browserSync.reload);
    gulp.watch('./views/**', ['pug']);
    gulp.watch('./index.html', ['beautifyHTML+header'])
        .on('change', browserSync.reload);
    gulp.watch('./assets/js/**', ['js'])
        .on('change', browserSync.reload);
})

/**
 * CSS task,compile SASS to CSS.
 */
gulp.task('css', function() {
    return gulp.src('./assets/sass/e200.sass')
        .pipe(sass().on('error', sass.logError)) // Converts SASS to CSS eith gulp-sass
        .pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
        })) // Adds vendor prefixes to CSS output
        .pipe(sourceMaps.init()) // Maps the minified CSS
        .pipe(cleanCSS({compatibility: 'ie8'})) // Minify the CSS
        .pipe(sourceMaps.write()) // Write the minified CSS source map
        .pipe(gulp.dest('./assets/css'));
});

/**
 * JS task,concats all JS file to a single file.
 */
gulp.task('js', function() {
    return gulp.src([
            './assets/js/libe200/element_functions.js',
            './assets/js/libe200/set_functions_recursively.js',
            './assets/js/libe200/bootstrapper.js',
            './assets/js/libe200/e200.js',
            './assets/js/e200.github.io.js'
        ])
        .pipe(sourceMaps.init()) // Maps the concatenated JS
        .pipe(concat('e200.js')) // Concats all JS files
        .pipe(sourceMaps.write()) // Write the concatenated JS source map
        .pipe(gulp.dest('./assets/js'));
});

/**
 * Pug task, compile PUG to HTML.
 */
gulp.task('pug', function(){
    var header = '<!--\n' +
    '   ___|___\\ / _ \\ / _ \\\n' + 
    ' / _ \\ __) | | | | | | |\n' +
    '|  __// __/| |_| | |_| |\n' +
    ' \\___|_____|\\___/ \\___/\n' + 
    '-->';
    
    return gulp.src('./views/index.pug')
    .pipe(pumbler()) // Errors handler
    .pipe(pug()) // Compiles pug to HTML
    .pipe(insert.prepend(header)) // Prepends my header to the HTML output
    .pipe(gulp.dest('./'));
});

/**
 * Beautify HTML task, beautifies the index.html.
 */
gulp.task('beautifyHTML+header', function(){
    return gulp.src('./index.html')
    .pipe(pumbler()) // Errors handler
    .pipe(htmlBeautify()) // Beautifies the html output
    .pipe(gulp.dest('./'));
});