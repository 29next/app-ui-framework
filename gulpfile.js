'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssNano = require('gulp-cssnano');
const concat = require('gulp-concat');
// sass.compiler = require('dart-sass');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');


const paths = {
    css: [
        './src/scss/main.scss',
    ],
    js: [
        './src/js/bootstrap.bundle.min.js', // Bootstrap JS
        './src/js/flatpickr.js', // flatpickr
        './src/js/utils.js', // Utilties
        './src/js/chart.umd.js', // Chart.js
        './src/js/chart-theme.js', // Custom Chart Theme
    ],
    fonts: [
        './src/fonts/**/*.*'
    ],
    output: 'dist',
    docsJs: 'docs/assets/js/',
}

function styles() {
    return gulp
        .src(paths.css)
        .pipe(concat('next-app-ui.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.output + '/css/'));
}

function scripts() {
    return gulp
        .src(paths.js)
        .pipe(sourcemaps.init())
        .pipe(concat('next-app-ui.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.output + '/js/'))
        .pipe(gulp.dest(paths.docsJs));
}

function fonts() {
    return gulp
        .src(paths.fonts)
        .pipe(gulp.dest(paths.output + '/fonts/'));
}


gulp.task('default', gulp.parallel(styles, scripts, fonts));
gulp.task('scripts', scripts);
