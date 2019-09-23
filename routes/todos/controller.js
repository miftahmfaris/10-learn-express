const collections = require("../../connection");

module.exports = {
    getAll: (req, res) => {
        collections.todos
            .find({})
            .toArray()
            .then(result => {
                res.send({ message: "Get all data", data: result });
            })
            .catch(error => {
                console.log(error);
            });
    },

    getById: (req, res) => {
        const name = req.params.name;

        collections.todos
            .findOne({ name: name })
            .then(result => {
                res.send({ message: "Get one data", data: result });
            })
            .catch(error => {
                console.log(error);
            });
    },

    updateById: (req, res) => {
        try {
            res.send({ message: "Update data by id" });
        } catch (error) {
            res.send({ message: "Update data is problem", error: error });
        }
    },

    create: (req, res) => {
        collections.todos
            .insertOne({ name: "coba", todo: "Plays Switch" })
            .then(result => {
                res.send({ message: "Data succesfully created", data: result });
            })
            .catch(error => {
                console.log(error);
            });
    }
};
