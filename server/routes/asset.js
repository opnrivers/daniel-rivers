const { cnf } = require('../cnf');

const { asset } = cnf;

module.exports = {
  method: 'GET',
  path: '/asset/{any*}',
  handler: {
    directory: {
      path: asset,
      listing: true,
      index: false,
    },
  },
};
