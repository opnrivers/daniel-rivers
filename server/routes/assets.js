const { cnf } = require('../cnf');

const { assets } = cnf;

module.exports = {
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: assets,
      listing: true,
      index: false,
    },
  },
};
