var gulp   = require('gulp'),
    concat = require('gulp-concat'),
    jshint   = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    stripDebug = require('gulp-strip-debug'),
    karma = require('gulp-karma'),
    rename = require('gulp-rename');

/*
  JSHint helps us find JS errors in code on build and
  outputs errors to the console

gulp.task('hint', function() {
  return gulp.src('js/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});
*/

/* Karma ..*/

gulp.task('karma', function() {
  return gulp.src('spec/test.spec.js')
  .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
  }))
  .on('error', function(err) {
    throw err;
  });
})

/*
  This task concatenates all JavaScript files in our js/ directory
  into one file, strips out debug code (console.log, comments etc),
  minifies it, renames it and saves it to the dist/ directory as 'all.min.js'.
*/

//gulp.task('scripts', function() {
	//return gulp.src('js/**/*.js')
	//.pipe(concat('all.js'))
	//.pipe(gulp.dest('dist'))
  //.pipe(stripDebug())
	//.pipe(rename('all.min.js'))
	//.pipe(uglify())
	//.pipe(gulp.dest('dist'));
//});

gulp.task('default', ['karma']);
