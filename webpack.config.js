module.exports = {
	entry: './src/index.js',
	output: {
		path: './lib',
		filename: 'typographie.js',
		library: 'Typographie',
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}]
	}
}
