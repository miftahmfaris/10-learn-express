const MongoClient = require("mongodb").MongoClient;
const MONGO_URL = process.env.URL;
const MONGO_DB = process.env.DATABASE;

let collections = {};

MongoClient.connect(
    MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function(e, client) {
        if (e) {
            console.log(e);
            throw { error: "Database connection failed" };
        }

        let db = client.db(`${MONGO_DB}`);
        collections.todos = db.collection("todos");
    }
);

module.exports = collections;
