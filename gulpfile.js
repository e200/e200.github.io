const
    gulp = require('gulp'),

    // Requires the gulp-sass plugin
    sass = require('gulp-sass'),

    // Requires gulp-autoprefixer
    autoprefixer = require('gulp-autoprefixer'),

    browserSync = require('browser-sync');

gulp.task('default', ['serve'], function(){
    
});

gulp.task('serve', function(){
    browserSync.init({
        server: './'
    });

    gulp.watch('./assets/sass/*.sass', ['sass'])
        .on('change', browserSync.reload);
})

gulp.task('sass', function() {
    return gulp.src('./assets/sass/master.sass')
        .pipe(sass().on('error', sass.logError)) // Converts SASS to CSS eith gulp-sass
        .pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		})) // Adds vendor prefixes to CSS output.
        .pipe(gulp.dest('./assets/css'));
});