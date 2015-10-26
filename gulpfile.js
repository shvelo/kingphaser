var gulp = require('gulp'),
  webpack = require('webpack-stream'),
  bower = require('gulp-bower');

gulp.task('default', ['webpack']);

gulp.task('webpack', function () {
  return gulp.src('src/game.jsx')
    .pipe(webpack({
      output: {
        filename: 'game.js'
      },
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel'
          }
        ]
      }
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('bower', function () {
  return bower()
    .pipe(gulp.dest('lib'));
});