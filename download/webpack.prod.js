const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ids = {
    pixel1: '1110330096568660',
    pixel2: '1206201043607066',
};

const getBuildFolder = (landing, pixel) => {
    let num = 1;

    if (landing === 'redirect') {
        num = pixel === 1 ? 1 : 3;
    } else {
        num = pixel === 1 ? 2 : 4;
    }

    return `download${num}`;
}

//redirect or button
const landing = process.env.landing || 'redirect';
const pixel = parseInt(process.env.pixel || 1);
const buildPath = path.resolve(__dirname, `../docs/${getBuildFolder(landing, pixel)}/`);

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
                pixel: pixel === 1 ? ids.pixel1 : ids.pixel2,
            },
            inject: 'head',
        }),
        new webpack.DefinePlugin({
            process: {
              env: {
                pixel,
              }
            }
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
