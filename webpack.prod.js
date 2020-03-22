const path = require('path');

const merge = require('webpack-merge');
const { clientBase, serverBase } = require('./webpack.common');

const client = merge(clientBase, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist', 'public'),
        filename: 'app.[contentHash].js',
    },
});

const server = merge(serverBase, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js',
    },
});

module.exports = [client, server];
