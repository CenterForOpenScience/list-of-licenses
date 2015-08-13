var gulp = require('gulp');
var concat = require('gulp-concat');

var fs = require('fs');

gulp.task('encode', function() {
    fs.readdir('src/img/orig/', function(err, files) {
        if (!err) {
            for (var i = 0; i < files.length; i++) {
                var fname = files[i];
                var fparts = fname.split('.');
                var fbase = fparts.slice(0, -1).join('.');
                var fext = fparts.slice(-1);

                var data = fs.readFileSync('src/img/orig/' + fname);
                fs.writeFileSync(
                    'src/img/base64/' + fbase + '.base64',
                    'data:image/' + fext + ';base64, ' +new Buffer(data).toString('base64')
                );
            }
        }
    });
});

gulp.task('build', function() {
    return gulp.src(['src/index.js', 'src/images.js', 'src/export.js'])
        .pipe(concat({
            path: 'main.js'
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['encode', 'build']);
