var gulp = require('gulp'),
  webpack = require('webpack-stream'),
  bower = require('gulp-bower');

gulp.task('default', ['webpack']);
gulp.task('watch', function () {
  return gulp.watch('src/**', ['webpack']);
});

gulp.task('webpack', function () {
  return gulp.src('src/game.jsx')
    .pipe(webpack(
      require('./webpack.config.js')
    ))
    .pipe(gulp.dest('dist'));
});

gulp.task('bower', function () {
  return bower()
    .pipe(gulp.dest('lib'));
});