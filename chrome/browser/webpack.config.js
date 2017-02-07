const webpack = require('webpack')

module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "./bundle.js"
    },
    module: {
        loaders: [
        {
            test: /.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015'],
            },
        },{
            test: /.html$/,
            loader: 'html-loader',
            query: {
                minimize: true
            }
        }
        ]
    },
    node: {
        fs: "empty"
    }
}; 