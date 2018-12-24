let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

let conf = {
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: "main.js",
		publicPath: 'dist'

	},
	devServer: {
		overlay: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: '/node_modules',
				use: {
					loader: "babel-loader"
				}

			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: ["css-loader"]
				})
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: ["css-loader","sass-loader"]
				})
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'file-loader',
				options: {
					name: '[name][hash].[ext]',
					outputPath: 'images',
					publicPath: 'images',
				},
			},
			{
				test: /src\/icons\/.*\.svg$/,
				loader: 'svg-sprite-loader', options: {
					extract: true,
					spriteFilename: 'icons/icons.svg',
					runtimeCompat: true
				}
			}
			// {
			// 	test: /\.(woff|woff2|eot|ttf|otf)$/,
			// 	loader: 'file-loader',
			// 	options: {
			// 		name: '[name]-[hash].[ext]',
			// 		outputPath: 'fonts',
			// 		publicPath: 'fonts',
			//
			// 	},
			// }
		]
	},
	plugins: [
		new ExtractTextPlugin("styles.css"),
		new SpriteLoaderPlugin(),
	]
};

module.exports = (env, options) => {
	let production = options.mode === 'production';

	conf.devtool = production ? false : 'eval-sourcemap';

	return conf;
}