const entry = require('./entry');
const output = require('./output');
const rules = require('./rules');
const plugins = require('./plugins.js');

module.exports = {
  entry,
  output,
  module: {
    rules,
  },
  plugins,
};
