const connectCommand = require('./connect');
const deleteCommand = require('./delete');
const findCommand = require('./find');
const insertCommand = require('./insert');
const updateCommand = require('./update');

const connection = {
  connect: config => connectCommand.connect(config),
  disconnect: () => connectCommand.disconnect(),
  reconnect: () => connectCommand.reconnect(),
  health: () => connectCommand.health(),
};
const insert = {
  insertOne: (db, collection, data) => insertCommand.insertOne(db, collection, data),
  insertMany: (db, collection, data) => insertCommand.insertMany(db, collection, data),
};
const find = {
  find: () => findCommand.find(),
  findById: () => findCommand.findById(),
};
const deleteFunction = {
  delete: () => deleteCommand.deleteFunction(),
};
const update = {
  updateOne: () => updateCommand.updateOne(),
  bulk: () => updateCommand.bulk(),
};
module.exports = {
  connection,
  delete: deleteFunction,
  find,
  insert,
  update,
};
