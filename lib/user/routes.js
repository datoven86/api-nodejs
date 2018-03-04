const { context } = require('../../config').server;
const controller = require('./controller');

const currentVersions = ['1.0.0'];
const currentVerionPathConfigFactory = (path = '') => ({ path: `/${context}/users/${path}`, currentVersions });
module.exports = (api) => {
  api.post(currentVerionPathConfigFactory(), (req, res, next) => controller.createUser(req, res, next));
  api.get('/api/users', (req, res, next) => controller.getUser(req, res, next));
  api.patch(currentVerionPathConfigFactory(), (req, res, next) => controller.updateUser(req, res, next));
  api.delete(currentVerionPathConfigFactory(), (req, res, next) => controller.deleteUser(req, res, next));
};
