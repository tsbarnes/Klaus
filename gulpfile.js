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
  return gulp.src('sass/gtk-light/gtk-light.scss')
    .pipe(sass({
      style: 'expanded'
    }))
    .pipe(gulp.dest('gtk-3.20/dist'))
});

gulp.task('gtk-dark', function() {
  return gulp.src('sass/gtk-dark/gtk-dark.scss')
    .pipe(sass({
      style: 'expanded'
    }))
    .pipe(gulp.dest('gtk-3.20/dist'))
});

gulp.task('watch', function () {
  gulp.watch('sass/gtk-light/**/*.scss', gulp.series(['gtk-light']));
  gulp.watch('sass/gtk-dark/**/*.scss', gulp.series(['gtk-dark']));
  gulp.watch('sass/gnome-shell/**/*.scss', gulp.series(['gnome-shell']));
});

gulp.task('default', gulp.series(['gtk-light', 'gtk-dark', 'gnome-shell', 'watch']));

