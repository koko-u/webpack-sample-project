const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/js/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "./js/app.js",
        clean: true,
        assetModuleFilename: "img/[hash][ext][query]",
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "./css/styles.css"
        }),
        new HtmlWebpackPlugin({
            template: "./src/templates/index.html",
            inject: "body",
            scriptLoading: "defer",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                    },
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 2 * 1024,
                    },
                },
            },
        ],
    },
}
