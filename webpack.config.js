var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: ['whatwg-fetch', APP_DIR + '/main.js'],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel'
            },
            {
                test: /\.json$/,
                loader: "json"
            }
        ]
        // node : {
        //     fs: 'empty'
        // }
    }
};

module.exports = config;