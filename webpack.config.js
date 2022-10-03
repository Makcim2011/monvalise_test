const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: {
		app: './src/app.js'
	},
  mode: 'development',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist')
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					// 'style-loader',
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					// 'style-loader',
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'style.css'
		}),
	]
}