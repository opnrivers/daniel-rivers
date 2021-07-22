const entry = require('./entry');
const output = require('./output');
const devtool = require('./devtool');
const devServer = require('./dev-server');
const rules = require('./rules');
const plugins = require('./plugins.js');

module.exports = {
  entry,
  output,
  devtool,
  devServer,
  module: {
    rules,
  },
  plugins,
};
