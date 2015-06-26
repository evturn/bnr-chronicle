var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    g = require('gulp-load-plugins')();

var plunger = require('./config/gulp-error-handler');
var paths = require('./config/paths');

gulp.task('default', ['less']);

gulp.task('build', ['less', 'css']);

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