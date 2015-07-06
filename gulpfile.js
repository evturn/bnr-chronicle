var gulp = require('gulp'),
    gutil = require('gulp-util'),
    g = require('gulp-load-plugins')();

var options = require('./config/gulp-options');
var paths = require('./config/paths');

gulp.task('default', ['less', 'lint', 'watch']);

gulp.task('build', ['less', 'css', 'jslib', 'js']);

gulp.task('watch', function() {
  gulp.watch(paths.less.watch, ['less']);
  gulp.watch(paths.jshint.watch, ['lint']);
  gulp.watch(paths.js.watch, ['js']);
});

gulp.task('less', function() {
  return gulp.src(paths.less.src)
    .pipe(g.plumber(options.plumber))
    .pipe(g.less())
    .pipe(g.rename(paths.less.filename))
    .on('error', options.plumber.errorHandler)
    .pipe(g.autoprefixer(options.autoprefixer))
    .pipe(g.cssmin())
    .pipe(gulp.dest(paths.less.dest)).on('error', gutil.log);
});

gulp.task('css', function() {
  return gulp.src(paths.css.src)
    .pipe(g.plumber(options.plumber))
    .pipe(g.concat(paths.css.filename))
    .pipe(g.cssmin())
    .pipe(g.rename(paths.css.filename))
    .pipe(gulp.dest(paths.css.dest));
});

gulp.task('js', function() {
  return gulp.src(paths.js.src)
    .pipe(g.plumber(options.plumber))
    .pipe(g.concat(paths.js.filename))
    .pipe(gulp.dest(paths.js.dest))
    .on('error', gutil.log);
});

gulp.task('jslib', function() {
  return gulp.src(paths.js.vendor.src)
    .pipe(g.plumber(options.plumber))
    .pipe(g.concat(paths.js.vendor.filename))
    .pipe(g.filesize())
    .pipe(g.uglify())
    .pipe(gulp.dest(paths.js.vendor.dest))
    .pipe(g.filesize())
    .pipe(g.notify('vendor.js created'))
    .on('error', gutil.log);
});

gulp.task('lint', function() {
  gulp.src(paths.jshint.src)
    .pipe(g.plumber(options.plumber))
    .pipe(g.jshint())
    .pipe(g.notify(options.notify.jshint));
});