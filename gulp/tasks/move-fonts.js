var gulp = require('gulp');

gulp.task('move-fonts', function() {
  return gulp.src('node_modules/bootstrap/dist/fonts/*.*')
    .pipe(gulp.dest('./dist/fonts'));
})
