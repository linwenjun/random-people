var gulp = require('./gulp')([
  "connect",
  "html",
  "watch",
  "watch-script",
  "watch-css",
  "browserify",
  "css",
  "move-fonts",
  "clean"
]);

gulp.task('default', ['connect', 'watch', 'watch-script', 'watch-css']);
gulp.task('build', ['clean'], function() {
  gulp.run(['browserify', 'css', 'move-fonts']);
});
