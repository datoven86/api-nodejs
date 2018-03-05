const restify = require('restify');
const userRoutes = require('../user/routes');

const init = async (conf) => {
  const server = restify.createServer({
    name: 'myapp',
    version: '1.0.0',
  });

  server.on('uncaughtException', (req, res, route, err) => {
    console.error(`ERROR ${err}`);
    res.send(500, 'INTERNAL ERROR');
  });

  server.use(restify.plugins.jsonBodyParser({ mapParams: true }));
  server.use(restify.plugins.acceptParser(server.acceptable));
  server.use(restify.plugins.queryParser({ mapParams: true }));
  server.use(restify.plugins.fullResponse());

  server.get({ path: '/', version: '1.0.0' }, (req, res) => {
    res.status(200).send('Welcome to API REST');
  });

  userRoutes(server);

  await server.listen(conf.port, () => {
    console.log('%s listening at %s', server.name, server.url);
  });
};

module.exports = {
  init,
};
