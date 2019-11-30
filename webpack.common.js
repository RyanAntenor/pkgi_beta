const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js',
        vendor: './src/vendor.js'
    },
    externals: {
        jquery: 'jQuery'
    },

    plugins: [
        // new HtmlWebpackPlugin({
        //     template: path.resolve(__dirname, 'src/index.html')
        // }),

        new CopyWebpackPlugin([
            { from: 'src/assets/img', to: 'assets/img' },
            { from: 'src/assets/js', to: 'assets/js' },
            { from: 'src/assets/js', to: path.resolve(__dirname, 'public/assets/js') },
            { from: 'src/assets/img', to: path.resolve(__dirname, 'public/assets/img') },
            { from: 'src/.htaccess', to: '.' },
            { from: 'src/php.ini', to: '.' },
            { from: 'src/index.php', to: '.' },
            { from: 'src/files', to: 'files' },
        ]),

        // new CleanWebpackPlugin()

    ],
    module: {
        rules: [{
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "img"
                    }
                }
            }
        ]
    }
}