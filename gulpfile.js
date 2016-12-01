var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', function() {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css/'));
});

gulp.task('less', function() {
    return gulp.src('less/style.less')  // only compile the entry file
        .pipe(less({
          paths: ['less/responsive/','less/pages/', 'less/components/']
        }))
      
        .pipe(gulp.dest('css/'))
});

gulp.task('watch', function() {
    gulp.watch('less/*.less', ['less']);  // Watch all the .less files, then run the less task
});

gulp.task('default', ['watch']); // Default will run the 'entry' watch task

