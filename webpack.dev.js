const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: "assets/[name].bundle.js",
        path: path.resolve(__dirname, "public"),
        // publicPath: "/assets/"
    },

    plugins: [
        new MiniCssExtractPlugin({ filename: "/assets/css/[name].css" }),
    ],

    // entry: [
    //     'webpack-dev-server/client?http://localhost:8080'
    // ],

    devServer: {
        contentBase: path.join(__dirname, 'src')
    },

    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ]
        }]
    }
});