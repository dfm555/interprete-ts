var webpack = require('webpack');
var path = require('path');
module.exports = {


    entry: './app/app.ts',

    output: {
        path: './src/assets/js',
        publicPath: "/assets/",
        filename: 'bundle.js'
    },

    resolve: {
        root: [ path.resolve(__dirname, 'src/assets/js') ],
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