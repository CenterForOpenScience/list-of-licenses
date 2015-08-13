var images = {
    GPL3: require('raw!./img/base64/gpl-3.0.base64'),
    BSD2: require('raw!./img/base64/bsd-2.0.base64'),
    CC0: require('raw!./img/base64/cc0-1.0.base64'),
    CCBY: require('raw!./img/base64/ccby-4.0.base64'),
    OSI: require('raw!./img/base64/osi.base64')
};

var keys = Object.keys(index);
for(var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (images[key]) {
        index[key].imageUrl = images[key];
    }
}
exports[images] = images;
