const dotenv = require('./dotenv');
const miniCssExtractPlugin = require('./mini-css-extract-plugin');
const copyPlugin = require('./copy-plugin');
const imageMinimizerPlugin = require('./image-minimizer-plugin');

module.exports = [
  dotenv,
  miniCssExtractPlugin,
  copyPlugin,
  imageMinimizerPlugin,
];
