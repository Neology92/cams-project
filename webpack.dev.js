const path = require('path');
const merge = require('webpack-merge');
const { clientBase, serverBase } = require('./webpack.common');

const client = merge(clientBase, {
    mode: 'development',

    devServer: {
        hot: true,
        compress: true,
        port: 3000,
    },
});

const server = merge(serverBase, {
    mode: 'development',

    devServer: {
        hot: true,
        compress: true,
        port: 3000,
    },
});

module.exports = [client, server];
