var gulp = require('gulp');
var gulpIf = require('gulp-if');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
  return gulp.src('app/css/**/*.scss')
    .pipe(sass()) // compiles to CSS
    .pipe(cssnano()) // minifies CSS
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// minify images
gulp.task('images', function(){
  return gulp.src('app/orig/img/**/*.+(png|jpg|gif|svg)')
  .pipe(imagemin())
  .pipe(gulp.dest('app/img'))
});

// in development, live-reload browser upon code change
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

// run browserSync and compile sass before we start watching a folder
gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('app/css/**/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
})
