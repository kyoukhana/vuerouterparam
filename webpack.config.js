
var path = require("path");


module.exports = {
    context: path.resolve('js'),
    entry: [
        './main.js'
    ],
    output: {
        path: path.resolve('public/js'),
        publicPath: '/public/js/',
        filename: "main.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            }
        ]
    },
    vue: {
        loaders: {
            js: 'babel-loader'
        }
    }
}

