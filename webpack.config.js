const webpack = require('webpack');
const minify = process.env.NODE_ENV === 'production';

module.exports = {
	entry: {
		'typographie': './src/index.js', // Just build with Babel
		'typographie.min': './src/index.js' // Minified version
	},
	devtool: 'source-map',
	output: {
		path: './lib',
		filename: '[name].js',
		library: 'Typographie',
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: 'babel-loader'
		}]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			include: /\.min\.js$/
		})
	]
}
