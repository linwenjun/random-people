gulp.task('clean', function() {
  return gulp.src('./dist/*', { read: false }) // much faster
    .pipe(rimraf());
});
