'use strict';
var gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
var concat = require('gulp-concat');
sass.compiler = require('node-sass');

gulp.task('sass', function () {
	   return gulp.src('./_sass/main.scss')
        .pipe(concat('next-app-ui.scss'))
	    .pipe(sass().on('error', sass.logError))
	    .pipe(gulp.dest('./dist/'));
});
