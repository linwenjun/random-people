var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var minifyCss = require('gulp-minify-css');
var connect = require('gulp-connect');

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
  gulp.watch(['./dist/scripts/dist.js'], ['html']);
});

gulp.task('default', ['connect', 'watch']);

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

gulp.task('move', function() {
  return gulp.src('node_modules/bootstrap/dist/fonts/*.*')
    .pipe(gulp.dest('./dist/fonts'));
})

gulp.task('clean', function() {

})
