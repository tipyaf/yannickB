var gulp = require('gulp');
useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');



gulp.task('compress', function () {
    return gulp.src('*.html')

        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('dest'));
});
gulp.task('optimg', function () {
    return gulp.src('img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dest/img'));
});
gulp.task('font', function () {
     gulp.src('font/*/*')
        .pipe(gulp.dest('dest/font'));
});

gulp.task('default', ['compress','optimg', 'font'],function () {

});
