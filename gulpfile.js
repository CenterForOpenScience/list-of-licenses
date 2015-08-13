var gulp = require('gulp');
var util = require('gulp-util');
var replace = require('gulp-replace');
var concat = require('gulp-concat');

gulp.task('build', function() {
    console.log('building');
    var staticPath = util.env.staticPath;
    var files = ['src/index.js'];
    if (staticPath) {
        files.push('src/images.js');
    }
    files.push('src/export.js');
    
    return gulp.src(files)
        .pipe(concat({path: 'main.js'}))
        .pipe(replace('{{staticPath}}', staticPath))
        .pipe(gulp.dest('./dist'));
});
