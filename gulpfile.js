var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task("default", function(callback) {
    shell('node index.js');
});
