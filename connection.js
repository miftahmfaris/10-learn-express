const MongoClient = require("mongodb").MongoClient;
const MONGO_URL = process.env.URL;
const MONGO_DB = process.env.DATABASE;

let mongo;

const connect = callback => {
    MongoClient.connect(
        MONGO_URL,
        { useNewUrlParser: true, useUnifiedTopology: true },
        function(e, client) {
            if (e) {
                console.log(e);
                throw { error: "Database connection failed" };
            }

            console.log("Connected to database");

            mongo = client;
            callback();
        }
    );
};

const get = () => {
    return mongo.db(MONGO_DB);
};

const close = () => {
    mongo.close();
};

module.exports = {
    connect,
    get,
    close
};
