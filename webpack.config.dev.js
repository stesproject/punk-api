const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	devtool: "source-map",
	entry: ["react-hot-loader/patch", "./src/index.js", "./src/scss/index.scss"],
	output: {
		path: path.resolve(__dirname, "./dist"),
		publicPath: "/",
		filename: "bundle.js",
		chunkFilename: "[name].chunk.js"
	},
	resolve: {
		modules: [path.resolve("./src"), path.resolve("./node_modules")],
		extensions: [".js", ".jsx", ".json"]
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: [/node_modules/],
				use: {
					loader: "babel-loader",
					options: {presets: ["react"]}
				}
			},
			{
				test: /\.scss$/,
				use: [
					{loader: "style-loader", options: {sourceMap: true}},
					{loader: "css-loader", options: {sourceMap: true}},
					{loader: "sass-loader", options: {sourceMap: true}}
				]
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				use: "url-loader"
			},
			{
				test: /\.(jpg|png)$/,
				use: "file-loader"
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({template: __dirname + "/static/index.html", filename: "index.html"}),
		new MiniCssExtractPlugin({filename: "index.css"})
	],
	devServer: {
		overlay: {
			warnings: true,
			errors: true
		}
	}
};
