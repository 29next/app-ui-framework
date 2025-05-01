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
        './src/js/choices.js', // Choices.js
        './src/js/chart.umd.js', // Chart.js
        './src/js/chart-theme.js', // Custom Chart Theme
        './src/js/theme.js', // Custom Theme JS
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

function watchSass() {
    gulp.watch('./src/scss/*.scss', styles);
}

function watchJS() {
    gulp.watch(paths.js, scripts);
}

gulp.task('default', gulp.parallel(styles, scripts, fonts));
gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', gulp.parallel(watchJS, watchSass));
