const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const CopyPlugin = require("copy-webpack-plugin");

//redirect or button
const landing = process.env.landing || 'redirect';
const pixel = process.env.pixel || 1;

module.exports = {
  entry: `./${landing}/index.js`,
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: {
          pixel,
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: `./${landing}/index.html`,
      templateParameters: {
        environment: 'development',
      },
      inject: true,
    }),
  ],
};
