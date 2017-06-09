const { resolve } = require("path");
const webpack = require("webpack");
const BundleTracker = require("webpack-bundle-tracker");

module.exports = {
    context: resolve(__dirname, "static/js/src"),
    entry: {
        web: [
            "react-hot-loader/patch",
            "webpack-dev-server/client?http://localhost:8080",
            "webpack/hot/only-dev-server",
            "./Web.jsx"
        ]
    },
    output: {
        path: resolve(__dirname, "static/js/build"),
        filename: "[name].js",
        publicPath: "http://localhost:8080/static/js/build/" // Tell Django to use this URL
    },
    devtool: "eval-cheap-module-source-map",
    devServer: {
        hot: true,
        headers: { "Access-Control-Allow-Origin": "*" },
        contentBase: resolve(__dirname, "bundles"),
        publicPath: "http://localhost:8080/static/js/build/"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ["babel-loader"],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new BundleTracker({filename: "./webpack-stats.json"})
    ],
    resolve: {
        extensions: [".jsx", ".js"]
    }
};
