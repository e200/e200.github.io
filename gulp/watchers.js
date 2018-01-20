const
    gulp         = require('gulp')
    browserSync  = require('browser-sync')
    path_        = require('./path_')

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

    gulp.watch(path_src.sass + '**', ['sass'])
        .on('change', browserSync.reload)
})