'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
    return gulp.src([
        './*.scss',
        './css/*.scss'
    ])
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./'));
});

gulp.task('sass:watch',function() {
    gulp.watch([
        './*.scss',
        './plugins/*/*.scss',
        './css/*.scss',
    ],['sass']);
});