const CopyPlugin = require('copy-webpack-plugin');

module.exports = new CopyPlugin({
  patterns: [{
    from: 'src/images',
    to: 'images',
  }, {
    from: 'src/html',
    to: './',
  }],
});
