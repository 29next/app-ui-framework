'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const cssNano = require('gulp-cssnano');
const concat = require('gulp-concat');
sass.compiler = require('node-sass');

gulp.task('sass', function () {
	   return gulp.src('./_sass/main.scss')
        .pipe(concat('next-app-ui.scss'))
	    .pipe(sass().on('error', sass.logError))
        .pipe(cssNano())
	    .pipe(gulp.dest('./dist/'));
});
