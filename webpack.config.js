const Dotenv = require('dotenv-webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    main: './src/js/main.js',
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, './dist')
  },
  devtool: 'source-map',
  module: {
    rules: [{
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
    }],
  },
  plugins: [
    new Dotenv({ path: './.env' }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: '[id].css'
    }),
  ],
};
