const { resolve } = require("path");
const webpack = require("webpack");
const BundleTracker = require("webpack-bundle-tracker");

module.exports = {
    context: resolve(__dirname, "static/js/src"),
    entry: {
        web: [
            "./Web.jsx"
        ]
    },
    output: {
        path: resolve(__dirname, "static/js/build"),
        filename: "[name].js",
        publicPath: "/static/js/build/"
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
