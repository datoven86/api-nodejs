const insertCommand = require('../mongo/insert');
const findCommand = require('../mongo/find');

const COLLECTION_NAME = 'Users';

const createUser = (data) => {
  insertCommand.insertOne(COLLECTION_NAME, data);
};

const getUser = async () => findCommand.find(COLLECTION_NAME);

const getUserById = async id => findCommand.findById(COLLECTION_NAME, id);

const updateUser = () => {};

const deleteUser = () => {};

module.exports = {
  createUser,
  getUser,
  getUserById,
  updateUser,
  deleteUser,
};
