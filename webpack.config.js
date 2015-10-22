var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: "./index.js",
    output: {
        path: __dirname + "/dist",
        filename: "list-of-licenses.js"
    }
};
