const common = require('./webpack.common');
const merge = require('webpack-merge');
const path = require('path');

const config = merge(common, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'client', 'dist'),
        filename: 'app.[hash].js',
    },

    devServer: {
        hot: true,
        compress: true,
        port: 3000,
    },
});

module.exports = config;
