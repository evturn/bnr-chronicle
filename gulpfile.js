var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    g = require('gulp-load-plugins')();

var plunger = require('./config/gulp-error-handler');
var paths = require('./config/paths');

gulp.task('default', ['less', 'watch']);

gulp.task('build', ['less', 'css']);

gulp.task('watch', function() {
  gulp.watch(paths.less.watch, ['less']);
});

gulp.task('less', function() {
  return gulp.src(paths.less.src)
    .pipe(g.plumber(plunger))
    .pipe(g.less())
    .pipe(g.rename(paths.less.filename))
    .on('error', function (err) {
        gutil.log(err);
        g.notify(err);
        this.emit('end');
    })
    .pipe(g.autoprefixer({
      browsers: [
	      '> 1%',
	      'last 2 versions',
	      'firefox >= 4',
	      'safari 7',
	      'safari 8',
	      'IE 8',
	      'IE 9',
	      'IE 10',
	      'IE 11'
      ],
      cascade: false
    }))
    .pipe(g.cssmin())
    .pipe(gulp.dest(paths.less.dest)).on('error', gutil.log);
});

gulp.task('css', function() {
  return gulp.src(paths.css.src)
    .pipe(g.plumber(plunger))
    .pipe(concat('min.css'))
    .pipe(g.cssmin())
    .pipe(g.rename(paths.css.filename))
    .pipe(gulp.dest(paths.css.dest));
});

gulp.task('js', function() {
  return gulp.src(paths.js.vendor.src)
    .pipe(g.concat('vendor.js'))
    .pipe(g.filesize())
    .pipe(g.uglify())
    .pipe(gulp.dest(paths.js.vendor.dest))
    .pipe(g.filesize())
    .pipe(g.notify('vendor.js created'))
    .on('error', gutil.log);
});