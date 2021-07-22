const Handlebars = require('handlebars');

const { cnf } = require('./cnf');

const routing = {
  name: 'routing',
  version: '1.0.0',
  register: async function register(server) {
    const { root, templates, assets } = cnf;

    server.views({
      engines: {
        html: Handlebars,
      },
      relativeTo: root,
      path: templates,
      layout: 'one-column',
      layoutPath: `${templates}/layouts`,
      partialsPath: `${templates}/partials`,
      helpersPath: [`${templates}/helpers`],
    });

    server.route([{
      method: 'GET',
      path: '/{param*}',
      handler: {
        directory: {
          path: assets,
          listing: true,
          index: false,
        },
      },
    }, {
      method: 'GET',
      path: '/',
      handler: async function handler(request, h) {
        return h.view('index', {}, {});
      },
    }]);
  },
};

module.exports = { routing };
