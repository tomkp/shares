var path = require('path');
var webpack = require('webpack');

var config = {
    entry: [
        'babel-polyfill',
        './app/src/Application.js'
    ],
    output: {
        path: __dirname,
        filename: 'app/dist/webpacked.js'
    },
    debug: true,
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.less$/,
                loader: "style!css!autoprefixer!less"
            },
            { test: /\.json$/, loader: 'json-loader' }
        ]
    },
    node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};

config.target = webpackTargetElectronRenderer(config);

module.exports = config;