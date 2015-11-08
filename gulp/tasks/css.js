
gulp.task('css', function() {
  return gulp.src(['node_modules/bootstrap/dist/css/bootstrap.css', 'src/css/main.css'])
    .pipe(concat('dist.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('./dist/css'));
})
