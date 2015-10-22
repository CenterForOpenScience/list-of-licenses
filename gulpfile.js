var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");

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

// create a single instance of the compiler to allow caching
gulp.task("webpack", function(callback) {
    // run webpack
    webpack(webpackConfig, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});
