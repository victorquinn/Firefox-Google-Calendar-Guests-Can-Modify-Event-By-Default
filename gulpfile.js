'use strict';

var gulp = require('gulp');
var zip = require('gulp-zip');

var files = ['manifest.json', 'js/calendar.js'];
var xpiName = 'google-calendar-guests-modify-event-default.xpi';

gulp.task('default', function () {
    gulp.src(files)
        .pipe(zip(xpiName))
        .pipe(gulp.dest('.'));
});
