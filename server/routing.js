const Handlebars = require('handlebars');
const routes = require('./routes');
const { cnf } = require('./cnf');

const routing = {
  name: 'routing',
  version: '1.0.0',
  register: async function register(server) {
    const { root, templates } = cnf;

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

    server.route(routes);
  },
};

module.exports = { routing };
