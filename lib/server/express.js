const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const userRoutes = require('../user/routes');

const app = express();


const init = async (conf) => {
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/', (req, res) => {
    res.status(200).send('Welcome to API REST');
  });

  userRoutes(app);

  await http.createServer(app).listen(conf.port, () => {
    console.log(`Server started at http://localhost:${conf.port}`);
  });
};

module.exports = {
  init,
};
