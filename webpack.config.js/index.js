const entry = require('./entry');
const output = require('./output');
const devtool = require('./devtool');
const rules = require('./rules');
const plugins = require('./plugins');

module.exports = {
  entry,
  output,
  devtool,
  module: {
    rules,
  },
  plugins,
};
