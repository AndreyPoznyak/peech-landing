const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
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
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      inject: true,
    }),
  ],
};
