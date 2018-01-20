const
    gulp         = require('gulp')
    browserSync  = require('browser-sync')

let dist = {
    css: './assets/dist/css/',
    js:  './assets/dist/js/',
},
    src = {
    sass:  './assets/src/sass/',
    js:    './assets/src/js/',
    views: './assets/src/views/'
}

/**
 * SASS watcher, watchs any
 * changes in SASS files and
 * refresh browser when they
 * happen.
 */
gulp.task('sass:watch', function(){
    browserSync.init({
        server: './'
    })

    gulp.watch(src.sass + '**', ['sass'])
        .on('change', browserSync.reload)
})