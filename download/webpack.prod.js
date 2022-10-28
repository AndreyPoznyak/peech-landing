const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//redirect or button
const landing = process.env.landing || 'redirect';
const buildFolder = landing === 'redirect' ? 'download1' : 'download2';
const buildPath = path.resolve(__dirname, `../docs/${buildFolder}/`);

module.exports = {
    entry: `./${landing}/index.js`,
  output: {
    filename: "[name].[contenthash].js",
    path: buildPath,
    clean: true,
  },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `./${landing}/index.html`,
            templateParameters: {
                environment: 'production',
            },
            inject: 'head',
        }),
        // new MiniCssExtractPlugin({
        //     filename: 'styles.[contenthash].css'
        // }),
        // new OptimizeCssAssetsPlugin({
        //     cssProcessor: require('cssnano'),
        //     cssProcessorOptions: {
        //         map: {
        //             inline: false,
        //         },
        //         discardComments: {
        //             removeAll: true
        //         }
        //     },
        //     canPrint: true
        // })
    ]
};
