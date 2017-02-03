var gulp = require('gulp'),
  connect = require('gulp-connect'),
  sass = require('gulp-sass');

gulp.task('connect', function() {
  connect.server({
    port: 80,
    livereload: true
  });
});

gulp.task('reload', function() {
  gulp.src('./app/**/*.*')
    .pipe(connect.reload());
});

gulp.task('watch', ['connect'], function() {
  gulp.watch(['./app/**/*.*'], ['reload']);
});
