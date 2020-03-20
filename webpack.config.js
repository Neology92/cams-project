const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const config = {
	entry: './client/src/index.js',
	output: {
		path: path.resolve(__dirname, 'client', 'dist'),
		filename: 'app.[hash].js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'client/src/template.html',
		}),
		new CleanWebpackPlugin(),
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
						name: '[name].[hash].[ext]',
						outputPath: 'img',
					},
				},
			},
		],
	},
	devServer: {
		contentBase: path.join(__dirname, 'client', 'dist'),
		compress: true,
		port: 3000,
	},
};
module.exports = config;
