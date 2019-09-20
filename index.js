require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/todos", require("./routes/todos"));
app.get("/", (req, res) => {
    res.send({ message: process.env });
});

app.listen(PORT, () => {
    console.log(`this port listen in ${PORT}`);
});
