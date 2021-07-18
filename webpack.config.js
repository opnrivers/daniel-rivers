const entry = require('./webpack.config/entry');
const output = require('./webpack.config/output');
const devtool = require('./webpack.config/devtool');
const rules = require('./webpack.config/rules');
const plugins = require('./webpack.config/plugins');

module.exports = {
  entry,
  output,
  devtool,
  module: {
    rules,
  },
  plugins,
};
