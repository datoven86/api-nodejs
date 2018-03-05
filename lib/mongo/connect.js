/* eslint func-names: ["error", "never"] */
const { MongoClient } = require("mongodb");

const DbConnection = function() {
  let db = null;
  let config = null;
  let instance = 0;

  /**
   * Connect to mongodb
   * @param  {object} config - The mongo configuration to connect
   * @return  {object} - The database object connection
   */
  const connect = async _config => {
    try {
      console.log("Connecting to mongodb with this configuration %j", _config);
      config = _config;
      db = await MongoClient.connect(_config.url);
      return db;
      //return db.db(_config.database);
    } catch (err) {
      throw new Error(err);
    }
  };

  async function get() {
    try {
      instance += 1; // this is just to count how many times our singleton is called.
      console.log(`DbConnection called ${instance} times`);

      if (db != null) {
        console.log("db connection is already alive");
        return db.db(config.database);
      }
      console.log("getting new db connection");
      db = await connect(config);
      return db.db(config.database);
    } catch (e) {
      return e;
    }
  }

  const disconnect = () => {
    console.log("Disconnecting mongodb...");
    db.close();
  };
  const reconnect = () => {
    console.log("Reconnecting mongodb...");
  };
  const health = () => {
    console.log("Health status mongodb...");
  };

  return {
    connect,
    get,
    disconnect,
    reconnect,
    health
  };
};

module.exports = DbConnection();
