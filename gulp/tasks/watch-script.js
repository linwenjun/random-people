var gulp = require('gulp');

gulp.task('watch-script', function() {
  gulp.watch(['./src/scripts/*.js'], ['browserify'])
})
