const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = [{
  test: /\.js$/,
  exclude: /(node_modules)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        '@babel/preset-env'
      ]
    }
  }
}, {
  test: /\.(scss|css)$/,
  use: [
    MiniCssExtractPlugin.loader, {
      loader: 'css-loader',
      options: {
        importLoaders: 2,
        sourceMap: true,
        url: false,
      }
    }, {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: ['autoprefixer',]
        }
      }
    },
    'sass-loader'
  ],
}, {
  test: /\.(jpe?g|png|gif|svg)$/i,
  type: 'asset',
}];
