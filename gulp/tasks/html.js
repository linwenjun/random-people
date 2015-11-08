gulp.task('html', function () {
  gulp.src('./index.html')
    .pipe(connect.reload());
});
