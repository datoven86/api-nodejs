/**
 * @param  {} db - The connected database
 * @param  {} collectionName - The collection name
 * @param  {} data - Query
 * @param  {} callback
 */
/* const findOnee = function(db, collectionName, data, callback) {
  const collection = db.collection(collectionName);
  collection.findOne(data, function(err, result) {
    console.log("Retrieved docuemnt: " + result.name);
    callback(result);
  });
}; */
// find.findOne(db, 'UserTest', data, function () {
//     client.close();
// });
const findById = () => {
  console.log('Find one...');
};
const find = () => {
  console.log('Find one...');
};
module.exports = {
  findById,
  find,
};
