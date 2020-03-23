const path = require('path');

const merge = require('webpack-merge');
const { clientBase, serverBase } = require('./webpack.common');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const client = merge(clientBase, {
    mode: 'production',
    plugins: [new CleanWebpackPlugin()],
    output: {
        path: path.resolve(__dirname, 'dist', 'public'),
        filename: 'js/app.[contentHash].js',
    },
});

const server = merge(serverBase, {
    mode: 'production',
    plugins: [new CleanWebpackPlugin()],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js',
    },
});

module.exports = [client, server];
