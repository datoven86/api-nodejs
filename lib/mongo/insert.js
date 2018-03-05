const connectCommand = require('./connect');

/**
 * Insert one document synchronously in the database and collection indicated
 * @param  {object} db - The connected database
 * @param  {string} collectionName - The collection name
 * @param  {object} data - The object/document to insert
 * @returns {object} - The id assigned to the document
 */
const insertOne = async (collection, document) => {
  try {
    const db = await connectCommand.get();
    const col = db.collection(collection);
    const result = await col.insertOne(document);
    console.log(result);
    if (result.insertedCount === 1) {
      return result.insertedId;
    }
    throw new Error(result);
  } catch (err) {
    throw new Error(err);
  }
};

/**
 * Insert a list of documents synchronously in the database and collection indicated
 * @param  {object} db - The connected database
 * @param  {string} collectionName - The collection name
 * @param  {object} data - The list of documents to insert
 * @returns {object} - The list of ids assigned to the documents
 */
const insertMany = async (collection, data) => {
  try {
    const db = await connectCommand.get();
    const col = db.collection(collection);
    const bulk = col.initializeUnorderedBulkOp();
    data.forEach((value) => {
      bulk.insert(value);
    });
    const result = await bulk.execute();
    console.log(result);
    if (result.insertedCount === data.length) {
      return result.getInsertedIds();
    }
    throw new Error(result);
  } catch (err) {
    throw new Error(err);
  }
};
module.exports = {
  insertOne,
  insertMany,
};
