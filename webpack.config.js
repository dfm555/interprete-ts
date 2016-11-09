var webpack = require('webpack'),
  path = require('path'),
  HtmlWebpackPlugin  = require('html-webpack-plugin');

module.exports = {
    
    
    entry: [
        path.resolve(__dirname, 'app/app.ts'),
    ],

    output: {
        path: './src/assets/js/',
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    // Add minification
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
}