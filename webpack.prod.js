const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const path = require('path');

const config = merge(common, {
    mode: 'production',
    entry: './client/src/index.js',
    output: {
        path: path.resolve(__dirname, 'client', 'dist'),
        filename: 'app.[contentHash].js',
    },
    plugins: [new CleanWebpackPlugin()],
});

module.exports = config;
