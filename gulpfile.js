var gulp = require('gulp'),
  webpack = require('webpack-stream'),
  bower = require('gulp-bower');

gulp.task('default', ['webpack']);

gulp.task('webpack', function () {
  return gulp.src('src/game.js')
    .pipe(webpack({
      output: {
        filename: 'game.js'
      }
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('bower', function () {
  return bower()
    .pipe(gulp.dest('lib'));
});