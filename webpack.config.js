var webpack = require('webpack');
var path = require('path');
module.exports = {


    entry: './app/app.ts',

    output: {
        path: './src',
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    // Add minification
    plugins: [

    ],
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts' }
        ]
    }
}