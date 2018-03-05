const connectCommand = require('./connect');
const { ObjectId } = require('mongodb');

const findById = async (collection, id) => {
  const db = await connectCommand.get();
  const col = db.collection(collection);
  return col.findOne({ _id: new ObjectId(id) });
};

const find = async (collection) => {
  const db = await connectCommand.get();
  const col = db.collection(collection);
  return col.findOne().toArray();
};

module.exports = {
  findById,
  find,
};
