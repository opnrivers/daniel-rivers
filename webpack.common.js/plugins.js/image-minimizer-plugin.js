const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const { extendDefaultPlugins } = require('svgo');

module.exports = new ImageMinimizerPlugin({
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
});
