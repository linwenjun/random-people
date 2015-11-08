var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var connect = require('gulp-connect');
var rimraf = require('gulp-rimraf');
var gulps = require("gulp-series");
var ejs = require('gulp-ejs');

gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./index.html')
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(['./dist/scripts/dist.js', './dist/css/dist.css', './index.html'], ['html']);
});

gulp.task('watch-script', function() {
  gulp.watch(['./src/scripts/*.js'], ['browserify'])
})

gulp.task('watch-css', function() {
  gulp.watch(['./src/css/*.css'], ['css'])
})

gulp.task('browserify', function() {
  var b = browserify({
    entries: './src/scripts/main.js',
    debug: true
  });

  return b.bundle()
    .pipe(source('dist.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts/'));
});

gulp.task('css', function() {
  return gulp.src(['node_modules/bootstrap/dist/css/bootstrap.css', 'src/css/main.css'])
    .pipe(concat('dist.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('./dist/css'));
})

gulp.task('move-fonts', function() {
  return gulp.src('node_modules/bootstrap/dist/fonts/*.*')
    .pipe(gulp.dest('./dist/fonts'));
})

gulp.task('clean', function() {
  return gulp.src('./dist/*', { read: false }) // much faster
    .pipe(rimraf());
});

gulp.task('default', ['connect', 'watch', 'watch-script', 'watch-css']);
gulp.task('build', ['clean'], function() {
  gulp.run(['browserify', 'css', 'move-fonts']);
});
