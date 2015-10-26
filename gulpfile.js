var gulp = require('gulp'),
  webpack = require('webpack-stream'),
  bower = require('gulp-bower'),
  mainBowerFiles = require('main-bower-files'),
  zip = require('gulp-zip');

gulp.task('default', ['webpack']);
gulp.task('watch', function () {
  return gulp.watch('src/**', ['webpack']);
});
gulp.task('clean', function () {

});
gulp.task('dist', ['copy-js', 'copy-bower', 'copy-html', 'copy-assets']);

gulp.task('webpack', function () {
  return gulp.src('src/game.jsx')
    .pipe(webpack(
      require('./webpack.config.js')
    ))
    .pipe(gulp.dest('js'));
});

gulp.task('bower', function () {
  return bower()
    .pipe(gulp.dest('lib'));
});

gulp.task('copy-assets', function () {
  return gulp.src('assets/**', { base: "assets" })
    .pipe(gulp.dest('dist/assets'));
});

gulp.task('copy-html', function () {
  return gulp.src('index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('copy-bower', function () {
  return gulp.src(mainBowerFiles(), { base: "lib" })
    .pipe(gulp.dest('dist/lib'));
});

gulp.task('copy-js', ['webpack'], function () {
  return gulp.src('js/**', { base: 'js' })
    .pipe(gulp.dest('dist'));
});

gulp.task('zip', function () {
  return gulp.src('dist/**', { base: 'dist' })
    .pipe(zip('dist.zip'))
    .pipe(gulp.dest('.'));
});