var gulp = require('gulp');
var uglyfly = require('gulp-uglyfly');
var cleancss = require('gulp-clean-css');
var scsscompile = require('gulp-sass');
var rename = require('gulp-rename');


//compile sass
gulp.task('compile-css', function() {
    gulp.src('src/*.scss')
        .pipe(scsscompile().on('error', scsscompile.logError))
        .pipe(gulp.dest('dist/'))
});

//minify the css
gulp.task('minify-css', function() {
    gulp.src('dist/*.css')
        .pipe(cleancss())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/'))
});
//minify de js
gulp.task('minify-js', function() {
    gulp.src('src/*.js')
        .pipe(uglyfly())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/'))
});


gulp.task('default', ['compile-css', 'minify-css', 'minify-js']);