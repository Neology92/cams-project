const path = require('path');

const merge = require('webpack-merge');
const { clientBase, serverBase } = require('./webpack.common');

const client = merge(clientBase, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dev', 'public'),
        filename: 'app.[contentHash].js',
    },

    // devtool: 'inline-source-map',

    watchOptions: {
        aggregateTimeout: 1000,
        poll: 500,
    },
});

const server = merge(serverBase, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dev'),
        filename: 'server.js',
    },

    // devtool: 'inline-source-map',

    watchOptions: {
        aggregateTimeout: 1000,
        poll: 500,
    },
});

module.exports = [client, server];
