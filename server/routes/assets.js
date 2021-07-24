const { cnf } = require('../cnf');

const { assets } = cnf;

module.exports = {
  method: 'GET',
  path: '/assets/{any*}',
  handler: {
    directory: {
      path: assets,
      listing: true,
      index: false,
    },
  },
};
