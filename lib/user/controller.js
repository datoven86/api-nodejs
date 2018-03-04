const connectCommand = require('../mongo/connect');

const createUser = (req, res, next) => {
  console.log('Create user');
  return next();
};

const getUser = (req, res, next) => {
  connectCommand.get();
  console.log('Get user');
  return next();
};

const updateUser = (req, res, next) => {
  console.log('Update user');
  return next();
};

const deleteUser = (req, res, next) => {
  console.log('Delete user');
  return next();
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
