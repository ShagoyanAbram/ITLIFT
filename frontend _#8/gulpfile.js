var gulp = require('gulp');
var sass = require('gulp-sass');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();

var path = {
    css:  './src/*.scss',
    img:  'src/img/*.*',

    html: {
        pages: './src/pages/**/*.hbs',
        partials: './src/partials/',
        img:  'src/img/*.*'

    },

    dist: {
      css:  './dist/',
      html: './dist/',
      img: 'dist/img/'
    },
    watch: {
        css: './src/**/*.scss',
        html: './src/**/*.hbs',
        img:  'src/img/*.*'

    }
};

gulp.task('default', ['build', 'serve', 'watch']);

gulp.task('css', function () {
  return gulp.src(path.css)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(path.dist.css));
});

gulp.task('html', function () {
    return gulp.src(path.html.pages)
        .pipe(handlebars({}, {
            ignorePartials: true,
            batch: [path.html.partials]
        }))
        .pipe(rename({
            dirname: '.',
            extname: '.html'
        }))
        .pipe(gulp.dest(path.dist.html));
});

gulp.task('img', function () {
    return gulp.src(path.img)
        .pipe(gulp.dest(path.dist.img));
});

gulp.task('build', ['html', 'css', 'img']);

gulp.task('watch', function () {
  gulp.watch(path.watch.css, ['css']);
  gulp.watch(path.watch.html, ['html']);
});



gulp.task('serve', ['watch'], function() {
  browserSync.init({
    server: {
      baseDir: path.dist.html
    }
  });
  gulp.watch('dist/**').on('change', browserSync.reload);
});
