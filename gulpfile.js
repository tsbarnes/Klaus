var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

// Compile Our Sass
gulp.task('gnome-shell', function() {
  return gulp.src('sass/gnome-shell/gnome-shell.scss')
    .pipe(sass({
      style: 'expanded'
    }))
    .pipe(gulp.dest('gnome-shell'))
});

gulp.task('gtk-light', function() {
  return gulp.src('sass/gtk-3.0/gtk-light.scss')
    .pipe(sass({
      style: 'expanded'
    }))
    .pipe(gulp.dest('gtk-3.0/dist'))
});

gulp.task('gtk-dark', function() {
  return gulp.src('sass/gtk-3.0/gtk-dark.scss')
    .pipe(sass({
      style: 'expanded'
    }))
    .pipe(gulp.dest('gtk-3.0/dist'))
});

gulp.task('watch', function () {
  gulp.watch('sass/gtk-3.0/**/*.scss', gulp.series(['gtk-light', 'gtk-dark']));
  gulp.watch('sass/gnome-shell/**/*.scss', gulp.series(['gnome-shell']));
});

gulp.task('default', gulp.series(['gtk-light', 'gtk-dark', 'gnome-shell', 'watch']));
