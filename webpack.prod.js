const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const CleanwebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
	mode: "production",
	output: {
		filename: "main.[contenthash].js",
		path: path.resolve(__dirname, "dist"),
	},
	plugins: [
		new CleanwebpackPlugin(),
		new MiniCssExtractPlugin({ filename: "[name].[contentHaash].css" }),
	],
	module: {
		rules: {
			test: /\.css$/,
			use: [MiniCssExtractPlugin.loader, "css-loader"],
		},
	},
});
