const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');

const { routing } = require('./routing');

const { cnf } = require('./cnf');

const { host, port } = cnf;

const server = Hapi.Server({
  host,
  port,
});

const init = async () => {
  await server.register([Inert, Vision, routing]);
  await server.start();
};

init()
  .then(() => console.info(`Hapi server running at ${server.info.uri}`))
  .catch((err) => console.error('Error starting Hapi', err));
