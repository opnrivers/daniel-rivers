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
        return h.view('index', {
          home: true,
          title: 'Home',
        }, {});
      },
    }, {
      method: 'GET',
      path: '/cv',
      handler: async function handler(request, h) {
        return h.view('cv', {
          cv: true,
          title: 'CV',
        }, {});
      },
    }, {
      method: 'GET',
      path: '/contact',
      handler: async function handler(request, h) {
        return h.view('contact', {
          contact: true,
          title: 'Contact',
        }, {});
      },
    }]);
  },
};

module.exports = { routing };
