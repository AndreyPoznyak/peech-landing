const path = require('path');

const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const buildPath = path.resolve(__dirname, 'docs');

module.exports = {
    entry: "./src/index.js",
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
            template: './index.html',
            templateParameters: {
                environment: 'production',
            },
            inject: 'head',
        }),
        new FaviconsWebpackPlugin({
            // Your source logo
            logo: './assets/icon.png',
            // The prefix for all image files (might be a folder or a name)
            prefix: 'favicons/',
            // Generate a cache file with control hashes and
            // don't rebuild the favicons until those hashes change
            persistentCache: true,
            // Inject the html into the html-webpack-plugin
            inject: true,

            cache: true,

            favicons: {
                background: '#fff',
                title: 'Peech App',

                icons: {
                    android: false,
                    appleIcon: true,
                    appleStartup: false,
                    coast: false,
                    favicons: true,
                    firefox: false,
                    opengraph: false,
                    twitter: false,
                    yandex: false,
                    windows: false
                }
            }
        }),
        // new CopyPlugin({
        //     patterns: [
        //       { from: "./pages", to: buildPath },
        //       "CNAME"
        //     ],
        //   }),
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
