const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//filename: "[name].[contentHash].bundle.js",

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: "[name].min.js",
        path: path.resolve(__dirname, "public")
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "/assets/css/[name].min.css" }),
    ],

    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader, // Extract css into files
                "css-loader",
                "sass-loader"
            ]
        }]
    }
})