var gulp = require('gulp');

var fs = require('fs');

gulp.task('encodeImages', function() {
    fs.readdir('./img/orig/', function(err, files) {
        if (!err) {
            for (var i = 0; i < files.length; i++) {
                var fname = files[i];
                var fparts = fname.split('.');
                var fbase = fparts.slice(0, -1).join('.');
                var fext = fparts.slice(-1);

                var data = fs.readFileSync('./img/orig/' + fname);
                fs.writeFileSync(
                    './img/base64/' + fbase + '.base64',
                    'data:image/' + fext + ';base64, ' +new Buffer(data).toString('base64')
                );
            }
        }
    });
});
