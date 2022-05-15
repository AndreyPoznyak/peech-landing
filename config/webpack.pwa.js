/* eslint-disable import/no-extraneous-dependencies */
const { merge: Merge } = require('webpack-merge');
const ProdConfig = require('./webpack.prod.js');

module.exports = Merge(ProdConfig, {});
