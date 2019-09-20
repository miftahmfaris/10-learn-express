module.exports = {
    getAll: (req, res) => {
        res.send({ message: "Get all data" });
    },

    getById: (req, res) => {
        try {
            res.send({ message: "Get data by id" });
        } catch (error) {
            res.send({ message: "Get data by id is problem", error: error });
        }
    },

    updateById: (req, res) => {
        try {
            res.send({ message: "Update data by id" });
        } catch (error) {
            res.send({ message: "Update data is problem", error: error });
        }
    }
};
