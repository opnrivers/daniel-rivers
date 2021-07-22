const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');

const { routing } = require('./routing');

const { cnf } = require('./cnf');

const { host, port } = cnf;

const index = Hapi.Server({
  host,
  port,
});

const init = async () => {
  await index.register([Inert, Vision, routing]);
  await index.start();
};

init()
  .then(() => console.info(`Hapi server running at ${index.info.uri}`))
  .catch((err) => console.error('Error starting Hapi', err));
