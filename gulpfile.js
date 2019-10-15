const gulp = require('gulp');
const alias = require('path-alias-resolver/gulp');

gulp.task('default', () => {
  return gulp.src([
    'dist/**/*d.ts',
    'dist/**/*.js'
  ])
    .pipe(alias('.', {
      '@': './'
    }))
    .pipe(gulp.dest('dist'));
});
