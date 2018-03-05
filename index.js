const server = require('./lib/server/restify');
const db = require('./lib/mongo');
const conf = require('./config');

const init = async () => {
  await db.connection.connect(conf.mongo);
  await server.init(conf.server);
  console.log('Finish');
};

init();
