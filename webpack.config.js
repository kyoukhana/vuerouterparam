var webpack = require('webpack');
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


    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ],
    module: {
        rules: [
          {
            test: /\.js$/,
            use: ["babel-loader"],
            exclude: /node_modules/
          },
            {
                test: /\.(png|jpg|gif|svg|ttf)$/,
                loader: 'url-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            },

            {
                test: /\.vue$/,
                loader: 'vue-loader',
            }

        ]
    },
}



