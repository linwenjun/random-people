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

gulp.task('move-fonts', function() {
  return gulp.src('node_modules/bootstrap/dist/fonts/*.*')
    .pipe(gulp.dest('./dist/fonts'));
})
