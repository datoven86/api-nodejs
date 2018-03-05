const service = require('./service');

const createUser = (req, res, next) => {
  console.log('Create user');
  service.createUser(req.body);
  res.send(200, 'User created');
  return next();
};

const getUser = async (req, res, next) => {
  console.log('Get user');
  const users = await service.getUser();
  res.send(200, users);
  return next();
};

const getUserById = async (req, res, next) => {
  console.log('Get userById');
  const user = await service.getUserById(req.params.id);
  res.send(200, user);
  return next();
};

const updateUser = (req, res, next) => {
  console.log('Update user');
  res.send(200, 'Welcome to API REST');
  return next();
};

const deleteUser = (req, res, next) => {
  console.log('Delete user');
  res.send(200, 'Welcome to API REST');
  return next();
};

module.exports = {
  createUser,
  getUser,
  getUserById,
  updateUser,
  deleteUser,
};
