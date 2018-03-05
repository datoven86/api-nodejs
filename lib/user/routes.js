const { context } = require('../../config').server;
const controller = require('./controller');

const version = '1.0.0';
const currentVerionPathConfigFactory = (path = '') => ({
  path: path === '' ? `/${context}/users` : `/${context}/users/${path}`,
  version,
});
module.exports = (api) => {
  console.log(currentVerionPathConfigFactory());
  api.post(currentVerionPathConfigFactory(), (req, res, next) =>
    controller.createUser(req, res, next));
  api.get(currentVerionPathConfigFactory(), (req, res, next) =>
    controller.getUser(req, res, next));
  api.get(currentVerionPathConfigFactory(':id'), (req, res, next) =>
    controller.getUserById(req, res, next));
  api.patch(currentVerionPathConfigFactory(), (req, res, next) =>
    controller.updateUser(req, res, next));
  api.del(currentVerionPathConfigFactory(), (req, res, next) =>
    controller.deleteUser(req, res, next));
};
