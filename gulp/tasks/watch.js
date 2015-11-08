gulp.task('watch', function() {
  gulp.watch(['./dist/scripts/dist.js', './dist/css/dist.css', './index.html'], ['html']);
});
