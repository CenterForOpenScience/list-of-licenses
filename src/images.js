var images = {
    GPL3: '{{staticPath}}/gpl-3.0.png',
    BSD2: '{{staticPath}}/bsd-2.0.png',
    CC0: '{{staticPath}}/cc0-1.0.png',
    CCBY: '{{staticPath}}/ccby-4.0.png',
    OSI: '{{staticPath}}/osi.gif'
};

var keys = Object.keys(index);
for(var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (images[key]) {
        index[key].image = images[key];
    }
}
exports[images] = images;
