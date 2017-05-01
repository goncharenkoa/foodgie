var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var gls = require('gulp-live-server');
var sourcemaps = require('gulp-sourcemaps');
var uglify      = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('serve', function() {
  var server = gls.static('dist', 8000);
  server.start();
  gulp.watch(['dist/css/*.css', 'dist/*.html'], function (file) {
    server.notify.apply(server, [file]);
  });
});
gulp.task('sass', function () {
  return gulp.src('./src/assets/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist/css'));
});
gulp.task('watcher', function () {
  gulp.watch('./src/assets/sass/**/*.scss', ['sass']);
});
