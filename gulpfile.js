const gulp  = require('gulp')
const tasks = require('./build/gulp/tasks')

gulp.task('build', gulp.series(gulp.parallel(tasks.compileHomeView)))
gulp.task('watch', gulp.series(gulp.parallel(tasks.watchCompiledFiles)))