// var gulp  = require('gulp'),
//     gutil = require('gulp-util');
//
// create a default task and just log a message
// gulp.task('default', function() {
//   return gutil.log('Gulp is running!')
// });

var gulp   = require('gulp'),
    jshint = require('gulp-jshint'),
    sass   = require('gulp-sass'),
  connect = require('gulp-connect');
  server = require('gulp-server-livereload');

  gulp.task('default', ['connect', 'watch']);

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    port: '8883',
    livereload: true
  });
});

gulp.task('jshint', function() {
  return gulp.src('src/javascript/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('css', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/assets/stylesheets'));
});

gulp.task('html', function() {
  return gulp.src('app/index.html')
    .pipe(gulp.dest('app'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  gulp.watch('./app/*.html', ['html']);
});
