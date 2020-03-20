const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client/src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'client/src/template.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[contentHash].[ext]',
                        outputPath: 'img',
                    },
                },
            },
        ],
    },
};
