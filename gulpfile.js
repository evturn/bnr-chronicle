var gulp = require('gulp'),
    gutil = require('gulp-util'),
    less = require('gulp-less'),
    watch = require('gulp-watch'),
    notify = require('gulp-notify');

gulp.task('default', ['less']);

gulp.task('less', function() {
  return gulp.src('assets/css/less/**/*.less')
    .pipe(watch())
    .pipe(less())
    .pipe(gulp.dest('assets/css'));
});