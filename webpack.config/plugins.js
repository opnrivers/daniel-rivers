const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const { extendDefaultPlugins } = require('svgo');

module.exports = [
  new Dotenv({ path: './.env' }),
  new MiniCssExtractPlugin({
    filename: 'css/[name].css',
    chunkFilename: '[id].css',
  }),
  new CopyPlugin({
    patterns: [{
      from: 'src/images',
      to: 'images',
    }, {
      from: 'src/index.html',
      to: './',
    }],
  }),
  new ImageMinimizerPlugin({
    minimizerOptions: {
      plugins: [
        ['gifsicle', { interlaced: true }],
        ['jpegtran', { progressive: true }],
        ['optipng', { optimizationLevel: 5 }],
        [
          'svgo',
          {
            plugins: extendDefaultPlugins([
              {
                name: 'removeViewBox',
                active: false,
              },
              {
                name: 'addAttributesToSVGElement',
                params: {
                  attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
                },
              },
            ]),
          },
        ],
      ],
    },
  }),
];
