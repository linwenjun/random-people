var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');

gulp.task('browserify', function() {
  return browserify('src/scripts/main.js')
    .bundle()
    .pipe(source('dist.js'))
    .pipe(gulp.dest('./dist/scripts'));
})

gulp.task('css', function() {
  return gulp.src(['node_modules/bootstrap/dist/css/bootstrap.css', 'src/css/main.css'])
    .pipe(concat('dist.css'))
    .pipe(gulp.dest('./dist/css'));
})

gulp.task('move', function() {
  return gulp.src('node_modules/bootstrap/dist/fonts/*.*')
    .pipe(gulp.dest('./dist/fonts'));
})

gulp.task('clean', function() {

})
